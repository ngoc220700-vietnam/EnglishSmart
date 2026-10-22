// =========================================================================
// CAMBRIDGE IELTS TEST ENGINE (4 SKILLS: LISTENING, READING, WRITING, SPEAKING)
// Automatic Official Band Scoring 1.0 - 9.0 & Detailed Explanations
// =========================================================================

let activeIeltsTestId = 'cam_1';
let activeIeltsSkill = 'listening'; // 'listening' | 'reading' | 'writing' | 'speaking'
let activeListeningPart = 1; // 1 | 2 | 3 | 4 | 0 (0 = all)
let activeReadingPassage = 1;
let activeWritingTask = 1;
let activeSpeakingPart = 1;

let ieltsUserAnswers = {
    listening: {},
    reading: {},
    writing: { task_1: '', task_2: '' },
    speaking: {}
};

let ieltsTestSubmitted = false;
let ieltsTestStarted = false;
let ieltsTestScoreResult = null;
let ieltsTimerSeconds = 2 * 3600 + 45 * 60; // 2 hours 45 minutes official exam duration
let ieltsTimerInterval = null;

let ieltsAudioPlaying = false;
let ieltsAudioCurrentTime = 0;
let ieltsAudioDuration = 1800; // 30 minutes
let ieltsAudioInterval = null;
let ieltsAudioSpeed = 1.0;

// Speaking Voice Recorder (MediaRecorder)
let mediaRecorder = null;
let audioChunks = [];
let recordedAudioUrls = {};

// =========================================================================
// GOOGLE GEMINI AI EXAMINER STATE & STORAGE
// =========================================================================
const GEMINI_API_KEY_STORAGE = 'smart_gemini_api_key';
let isGeminiEvaluating = false;
let ieltsAiWritingResults = {}; // { [testId]: { task_1: result, task_2: result } }

// Initialize and restore test progress from localStorage
function initIeltsTestEngine() {
    try {
        const saved = localStorage.getItem('smart_ielts_answers_' + activeIeltsTestId);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === 'object') {
                ieltsUserAnswers = { ...ieltsUserAnswers, ...parsed };
            }
        }
        const savedAi = localStorage.getItem('smart_ielts_ai_writing_' + activeIeltsTestId);
        if (savedAi) {
            try {
                ieltsAiWritingResults[activeIeltsTestId] = JSON.parse(savedAi);
            } catch(e) {}
        }
        const savedSub = localStorage.getItem('smart_ielts_submitted_' + activeIeltsTestId);
        if (savedSub === 'true') {
            ieltsTestSubmitted = true;
            ieltsTestStarted = true;
            gradeIeltsTest(false);
        } else {
            const savedStarted = localStorage.getItem('smart_ielts_started_' + activeIeltsTestId);
            ieltsTestStarted = (savedStarted === 'true');
        }
    } catch (e) {
        console.warn('Could not load IELTS saved progress', e);
    }

    if (ieltsTestStarted && !ieltsTestSubmitted) {
        startIeltsTimer();
    } else {
        if (ieltsTimerInterval) clearInterval(ieltsTimerInterval);
        updateIeltsTimerDisplay();
    }
    updateIeltsStartButtonUI();
}

function updateIeltsStartButtonUI() {
    const btn = document.getElementById('btn-start-ielts-test');
    if (!btn) return;
    if (ieltsTestStarted || ieltsTestSubmitted) {
        btn.classList.add('hidden');
    } else {
        btn.classList.remove('hidden');
    }
}

function startIeltsTest() {
    if (ieltsTestStarted) return;
    ieltsTestStarted = true;
    saveIeltsProgress();
    startIeltsTimer();
    updateIeltsStartButtonUI();
    renderIeltsSkillContent();
}

function saveIeltsProgress() {
    try {
        localStorage.setItem('smart_ielts_answers_' + activeIeltsTestId, JSON.stringify(ieltsUserAnswers));
        localStorage.setItem('smart_ielts_submitted_' + activeIeltsTestId, ieltsTestSubmitted.toString());
        localStorage.setItem('smart_ielts_started_' + activeIeltsTestId, ieltsTestStarted.toString());
        if (ieltsAiWritingResults[activeIeltsTestId]) {
            localStorage.setItem('smart_ielts_ai_writing_' + activeIeltsTestId, JSON.stringify(ieltsAiWritingResults[activeIeltsTestId]));
        }
    } catch (e) {}
}

// Official Test Countdown Timer
function startIeltsTimer() {
    if (ieltsTimerInterval) clearInterval(ieltsTimerInterval);
    updateIeltsTimerDisplay();
    if (!ieltsTestStarted || ieltsTestSubmitted) return;
    ieltsTimerInterval = setInterval(() => {
        if (ieltsTimerSeconds > 0 && !ieltsTestSubmitted && ieltsTestStarted) {
            ieltsTimerSeconds--;
            updateIeltsTimerDisplay();
            if (ieltsTimerSeconds % 10 === 0) saveIeltsProgress();
            if (ieltsTimerSeconds === 0) {
                clearInterval(ieltsTimerInterval);
                alert("Time is up! Your IELTS test will now be graded.");
                gradeIeltsTest(true);
            }
        }
    }, 1000);
}

function updateIeltsTimerDisplay() {
    const el = document.getElementById('ielts-timer-display');
    if (!el) return;
    const h = Math.floor(ieltsTimerSeconds / 3600);
    const m = Math.floor((ieltsTimerSeconds % 3600) / 60);
    const s = ieltsTimerSeconds % 60;
    el.textContent = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Switch Test
function switchIeltsTest(testId) {
    if (!ieltsProfileData.ielts_tests[testId]) return;
    activeIeltsTestId = testId;
    if (typeof currentUnitKey !== 'undefined') {
        currentUnitKey = testId;
    }
    if (typeof studentProgress !== 'undefined' && studentProgress['ielts']) {
        studentProgress['ielts'] = { unitKey: testId, index: 0 };
    }
    if (typeof renderUnitButtons === 'function') {
        renderUnitButtons();
    }
    if (typeof saveProgress === 'function') {
        saveProgress();
    }
    ieltsTestSubmitted = false;
    ieltsTestScoreResult = null;
    ieltsUserAnswers = { listening: {}, reading: {}, writing: { task_1: '', task_2: '' }, speaking: {} };
    initIeltsTestEngine();
    renderIeltsTestView();
}

// Switch between 4 skills (Listening, Reading, Writing, Speaking)
function switchIeltsSkill(skill) {
    activeIeltsSkill = skill;
    
    // Update skill navigation buttons
    const skills = ['listening', 'reading', 'writing', 'speaking'];
    skills.forEach(s => {
        const btn = document.getElementById('btn-ielts-skill-' + s);
        if (btn) {
            if (s === skill) {
                btn.className = "px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition bg-amber-400 text-slate-950 shadow-md shrink-0 ring-2 ring-amber-300";
            } else {
                btn.className = "px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shrink-0";
            }
        }
    });

    renderIeltsSkillContent();
}

// Render entire IELTS test interface
function renderIeltsTestView() {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    if (!test) return;

    const titleEl = document.getElementById('ielts-exam-title');
    if (titleEl) titleEl.textContent = test.title;

    const fastSelect = document.getElementById('ielts-fast-test-select');
    if (fastSelect && fastSelect.value !== activeIeltsTestId) {
        fastSelect.value = activeIeltsTestId;
    }

    switchIeltsSkill(activeIeltsSkill);
}

// Render active skill content
function renderIeltsSkillContent() {
    const container = document.getElementById('ielts-content-area');
    if (!container) return;

    if (!ieltsTestStarted && !ieltsTestSubmitted) {
        renderIeltsStartScreen(container);
        return;
    }

    if (activeIeltsSkill === 'listening') {
        renderIeltsListeningView(container);
    } else if (activeIeltsSkill === 'reading') {
        renderIeltsReadingView(container);
    } else if (activeIeltsSkill === 'writing') {
        renderIeltsWritingView(container);
    } else if (activeIeltsSkill === 'speaking') {
        renderIeltsSpeakingView(container);
    }
}

function renderIeltsStartScreen(container) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    if (!test) return;

    container.innerHTML = `
        <div class="max-w-3xl mx-auto py-8 px-4 text-center space-y-6">
            <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-600 to-sky-600 text-white flex items-center justify-center font-black text-4xl shadow-xl mx-auto ring-4 ring-indigo-100">
                &#127891;
            </div>
            <div class="space-y-2">
                <span class="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-black text-xs uppercase tracking-wider border border-indigo-200">
                    Cambridge Official Practice Test
                </span>
                <h2 class="text-2xl sm:text-3xl font-black text-slate-800">${escapeHtml(test.title)}</h2>
                <p class="text-sm text-slate-500 max-w-lg mx-auto">
                    Standard 4-Skill Academic Examination: Listening, Reading, Writing, and Speaking with automatic band scoring and AI Examiner.
                </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-left">
                <div class="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-1">
                    <div class="text-base">&#127911;</div>
                    <div class="font-extrabold text-xs text-indigo-950">Listening</div>
                    <div class="text-[11px] text-slate-500">40 questions &bull; 30 mins</div>
                </div>
                <div class="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-1">
                    <div class="text-base">&#128214;</div>
                    <div class="font-extrabold text-xs text-sky-950">Reading</div>
                    <div class="text-[11px] text-slate-500">3 passages &bull; 60 mins</div>
                </div>
                <div class="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100 space-y-1">
                    <div class="text-base">&#9997;&#65039;</div>
                    <div class="font-extrabold text-xs text-amber-950">Writing</div>
                    <div class="text-[11px] text-slate-500">2 tasks &bull; 60 mins</div>
                </div>
                <div class="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1">
                    <div class="text-base">&#127897;&#65039;</div>
                    <div class="font-extrabold text-xs text-purple-950">Speaking</div>
                    <div class="text-[11px] text-slate-500">3 parts &bull; AI Examiner</div>
                </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-xl mx-auto space-y-1.5 text-left">
                <div class="font-extrabold text-slate-800 flex items-center gap-1.5">
                    <span>&#9201;&#65039;</span>
                    <span>Total Exam Duration: 2 Hours 45 Minutes</span>
                </div>
                <ul class="list-disc list-inside space-y-1 text-slate-500 text-[11px]">
                    <li>The countdown timer will begin immediately when you click <strong>Start Test</strong>.</li>
                    <li>You can navigate freely between sections and questions during the test.</li>
                    <li>Your answers are continuously auto-saved.</li>
                </ul>
            </div>

            <div class="pt-2">
                <button onclick="startIeltsTest()"
                        class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base sm:text-lg shadow-lg hover:shadow-xl transition active:scale-95 inline-flex items-center gap-2.5 cursor-pointer">
                    <span>&#9654;&#65039;</span>
                    <span>Start Test</span>
                </button>
            </div>
        </div>
    `;
}

function switchIeltsListeningPart(num) {
    activeListeningPart = num;
    renderIeltsSkillContent();
}

function jumpToIeltsQuestion(skill, qId) {
    if (skill === 'listening') {
        const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
        let targetPart = 1;
        if (qId >= 1 && qId <= 10) targetPart = 1;
        else if (qId >= 11 && qId <= 20) targetPart = 2;
        else if (qId >= 21 && qId <= 30) targetPart = 3;
        else if (qId >= 31 && qId <= 40) targetPart = 4;

        if (activeListeningPart !== 0 && activeListeningPart !== targetPart) {
            activeListeningPart = targetPart;
            renderIeltsSkillContent();
        }
    } else if (skill === 'reading') {
        let targetPassage = 1;
        if (qId >= 1 && qId <= 13) targetPassage = 1;
        else if (qId >= 14 && qId <= 26) targetPassage = 2;
        else if (qId >= 27 && qId <= 40) targetPassage = 3;

        if (activeReadingPassage !== targetPassage) {
            activeReadingPassage = targetPassage;
            renderIeltsSkillContent();
        }
    }

    setTimeout(() => {
        const targetId = skill === 'listening' ? `ielts-q-box-${qId}` : `ielts-red-q-${qId}`;
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('ring-2', 'ring-indigo-600', 'bg-indigo-50/70');
            setTimeout(() => {
                el.classList.remove('ring-2', 'ring-indigo-600', 'bg-indigo-50/70');
            }, 1800);
        }
    }, 150);
}

function renderQuestionPalette(skill, totalQuestions = 40) {
    const answers = ieltsUserAnswers[skill] || {};
    const answeredCount = Object.keys(answers).filter(k => answers[k] && answers[k].toString().trim().length > 0).length;

    let paletteHtml = `
        <div class="mt-3 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs shrink-0">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 mb-2.5 border-b border-slate-100">
                <span class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span>🧭</span> <span>Question Palette (${skill === 'listening' ? 'Listening 40 Questions' : 'Reading 40 Questions'}):</span>
                </span>
                <span id="ielts-palette-counter-${skill}" class="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                    Answered: ${answeredCount} / ${totalQuestions} questions
                </span>
            </div>
            <div class="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto custom-scroll">
    `;

    for (let i = 1; i <= totalQuestions; i++) {
        const hasAns = answers[i] && answers[i].toString().trim().length > 0;
        let btnClass = hasAns 
            ? 'bg-indigo-600 text-white font-extrabold border-indigo-600 shadow-2xs' 
            : 'bg-slate-50 text-slate-700 font-bold border-slate-200 hover:bg-slate-100';

        if (ieltsTestSubmitted) {
            const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
            let qObj = null;
            if (skill === 'listening' && test && test.listening) {
                test.listening.parts.forEach(p => {
                    const found = p.questions.find(q => q.id === i);
                    if (found) qObj = found;
                });
            } else if (skill === 'reading' && test && test.reading) {
                test.reading.passages.forEach(p => {
                    const found = p.questions.find(q => q.id === i);
                    if (found) qObj = found;
                });
            }
            if (qObj) {
                const isCorr = checkAnswerMatch(answers[i], qObj.correct_answers);
                btnClass = isCorr ? 'bg-emerald-600 text-white font-bold' : 'bg-rose-600 text-white font-bold';
            }
        }

        paletteHtml += `
            <button id="palette-btn-${skill}-${i}" onclick="jumpToIeltsQuestion('${skill}', ${i})" 
                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs flex items-center justify-center border transition active:scale-95 ${btnClass}"
                    title="Jump to Question ${i}">
                ${i}
            </button>
        `;
    }

    paletteHtml += `
            </div>
        </div>
    `;
    return paletteHtml;
}

function updatePaletteQuestionStatus(skill, qId, hasAnswer) {
    const pBtn = document.getElementById(`palette-btn-${skill}-${qId}`);
    if (pBtn && !ieltsTestSubmitted) {
        if (hasAnswer) {
            pBtn.className = "w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs flex items-center justify-center border transition active:scale-95 bg-indigo-600 text-white font-extrabold border-indigo-600 shadow-2xs";
        } else {
            pBtn.className = "w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs flex items-center justify-center border transition active:scale-95 bg-slate-50 text-slate-700 font-bold border-slate-200 hover:bg-slate-100";
        }
    }
    updatePaletteAnsweredCounter(skill);
}

function updatePaletteAnsweredCounter(skill) {
    const counterEl = document.getElementById(`ielts-palette-counter-${skill}`);
    if (counterEl) {
        const answers = ieltsUserAnswers[skill] || {};
        const count = Object.keys(answers).filter(k => answers[k] && answers[k].toString().trim().length > 0).length;
        counterEl.textContent = `Answered: ${count} / 40 questions`;
    }
}

// =========================================================================
// 1. LISTENING INTERFACE & LOGIC
// =========================================================================
function renderIeltsListeningView(container) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    const lis = test.listening;

    const visibleParts = activeListeningPart === 0 
        ? lis.parts 
        : lis.parts.filter(p => p.part_number === activeListeningPart);

    let partsHtml = '';
    visibleParts.forEach(part => {
        let questionsHtml = '';
        part.questions.forEach(q => {
            const userAns = ieltsUserAnswers.listening[q.id] || '';
            const isCorrect = ieltsTestSubmitted && checkAnswerMatch(userAns, q.correct_answers);

            let inputWidget = '';
            if (q.type === 'fill') {
                inputWidget = `
                    <div class="flex items-center gap-2 mt-1.5">
                        <input type="text" 
                               value="${escapeHtml(userAns)}" 
                               oninput="handleIeltsAnswerChange('listening', ${q.id}, this.value)"
                               placeholder="Type word/number here..." 
                               class="flex-1 max-w-xs px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold transition ${
                                   ieltsTestSubmitted 
                                   ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-200' : 'border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-200')
                                   : 'border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 bg-white'
                               }">
                        ${ieltsTestSubmitted ? `<span class="text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Correct' : '✗ Incorrect (Answer: ' + q.correct_answers[0] + ')'}</span>` : ''}
                    </div>
                `;
            } else if (q.type === 'choice') {
                inputWidget = `<div class="space-y-1.5 mt-2" id="choice-group-listening-${q.id}">`;
                q.options.forEach(opt => {
                    const optKey = opt.trim().charAt(0);
                    const isChecked = userAns.toUpperCase() === optKey.toUpperCase();
                    inputWidget += `
                        <label class="choice-lbl-listening-${q.id} flex items-center gap-2.5 p-2 rounded-xl border cursor-pointer transition text-xs sm:text-sm ${
                            isChecked ? 'bg-indigo-50 border-indigo-500 text-indigo-950 font-semibold ring-1 ring-indigo-300' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                        }">
                            <input type="radio" 
                                   name="ielts_q_listening_${q.id}" 
                                   value="${optKey}" 
                                   ${isChecked ? 'checked' : ''} 
                                   onchange="selectIeltsRadioOption('listening', ${q.id}, '${optKey}')"
                                   class="text-indigo-600 focus:ring-indigo-500">
                            <span>${opt}</span>
                        </label>
                    `;
                });
                inputWidget += `</div>`;
                if (ieltsTestSubmitted) {
                    inputWidget += `<div class="mt-1 text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Correct' : '✗ Incorrect (Correct Answer: ' + q.correct_answers[0] + ')'}</div>`;
                }
            }

            questionsHtml += `
                <div class="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 transition mb-2.5" id="ielts-q-box-${q.id}">
                    <div class="flex items-start justify-between gap-2">
                        <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${q.id}</span>
                        <div class="flex-1">
                            <p class="text-xs sm:text-sm font-bold text-slate-800">${q.prompt || q.question || ''}</p>
                            ${inputWidget}
                            ${ieltsTestSubmitted ? `
                                <div class="mt-2.5 p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                                    <div class="font-bold text-amber-800 mb-1 flex items-center gap-1">
                                        <span>🔍</span> <span>Evidence & Explanation:</span>
                                    </div>
                                    <p class="italic text-slate-700 mb-1 bg-white/70 p-1.5 rounded border border-amber-100/60">"${q.evidence || ''}"</p>
                                    <p>${q.explanation || ''}</p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        });

        partsHtml += `
            <div class="mb-6 p-4 rounded-3xl bg-white border border-slate-200 shadow-xs">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-100">
                    <div>
                        <h4 class="font-black text-sm sm:text-base text-slate-900">${part.title}</h4>
                        <p class="text-xs text-indigo-600 font-medium">${part.instructions || part.instruction || ''}</p>
                    </div>
                    <button onclick="toggleTranscript('trans-${part.part_number}')" class="px-2.5 py-1 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200/60 transition active:scale-95 flex items-center gap-1 self-start sm:self-auto shrink-0">
                        <span>📜</span> <span>Xem Audio Script</span>
                    </button>
                </div>

                <div id="trans-${part.part_number}" class="hidden p-3 rounded-2xl bg-slate-900 text-slate-200 text-xs leading-relaxed font-mono mb-3.5 max-h-48 overflow-y-auto custom-scroll whitespace-pre-line border border-slate-800">
                    ${escapeHtml(part.transcript)}
                </div>

                <div class="space-y-2">
                    ${questionsHtml}
                </div>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="flex flex-col h-full overflow-hidden">
            <!-- AUDIO PLAYER BAR -->
            <div class="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-3 sm:p-4 mb-3 shadow-md border border-indigo-700/50 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
                <div class="flex items-center gap-3">
                    <button id="ielts-play-btn" onclick="toggleIeltsAudio()" class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xl flex items-center justify-center shadow-md transition active:scale-95 shrink-0">
                        ${ieltsAudioPlaying ? '⏸' : '▶'}
                    </button>
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-extrabold text-xs sm:text-sm text-white">IELTS Audio Player (Official Standard)</span>
                            <span class="text-[10px] font-bold bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 px-2 py-0.5 rounded-full">30 Minutes</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs text-indigo-200/80 font-mono mt-0.5">
                            <span id="ielts-time-cur">00:00</span> / <span id="ielts-time-dur">30:00</span>
                        </div>
                    </div>
                </div>

                <!-- TIMELINE SLIDER -->
                <div class="flex-1 max-w-md mx-2">
                    <input type="range" id="ielts-audio-seek" min="0" max="1800" value="${ieltsAudioCurrentTime}" oninput="seekIeltsAudio(this.value)" class="w-full accent-amber-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer">
                </div>

                <!-- CONTROLS: JUMP & SPEED -->
                <div class="flex items-center gap-2 self-end md:self-auto">
                    <button onclick="skipIeltsAudio(-10)" class="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition" title="Rewind 10 seconds">⏪ -10s</button>
                    <button onclick="skipIeltsAudio(10)" class="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition" title="Forward 10 seconds">⏩ +10s</button>
                    <button id="ielts-speed-btn" onclick="toggleIeltsAudioSpeed()" class="px-2.5 py-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 text-xs font-bold transition">1.0x</button>
                </div>
            </div>

            <!-- LISTENING PART TABS (PART 1, 2, 3, 4, ALL) -->
            <div class="flex flex-wrap items-center justify-between pb-2.5 mb-3 border-b border-slate-200 gap-2 shrink-0">
                <div class="flex flex-wrap items-center gap-1.5">
                    <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">Listening Part:</span>
                    ${[1, 2, 3, 4].map(pNum => {
                        const qRange = pNum === 1 ? 'Q1-10' : pNum === 2 ? 'Q11-20' : pNum === 3 ? 'Q21-30' : 'Q31-40';
                        const isAct = activeListeningPart === pNum;
                        return `
                            <button onclick="switchIeltsListeningPart(${pNum})" class="px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                                isAct 
                                ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-200' 
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }">
                                Part ${pNum} <span class="opacity-80 text-[10px]">(${qRange})</span>
                            </button>
                        `;
                    }).join('')}
                    <button onclick="switchIeltsListeningPart(0)" class="px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                        activeListeningPart === 0 
                        ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-200' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        All Questions (Q1-40)
                    </button>
                </div>
                <div class="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                    40 Questions • 30 Minutes
                </div>
            </div>

            <!-- QUESTIONS SCROLLABLE CONTAINER -->
            <div class="flex-1 overflow-y-auto custom-scroll pr-1">
                ${partsHtml}
            </div>

            <!-- QUESTION PALETTE NAVIGATION (1 - 40) -->
            ${renderQuestionPalette('listening', 40)}
        </div>
    `;
}

// Audio Player Controller
function toggleIeltsAudio() {
    ieltsAudioPlaying = !ieltsAudioPlaying;
    const btn = document.getElementById('ielts-play-btn');
    if (btn) btn.innerHTML = ieltsAudioPlaying ? '⏸' : '▶';

    if (ieltsAudioPlaying) {
        if (ieltsAudioInterval) clearInterval(ieltsAudioInterval);
        ieltsAudioInterval = setInterval(() => {
            if (ieltsAudioCurrentTime < ieltsAudioDuration) {
                ieltsAudioCurrentTime += ieltsAudioSpeed;
                updateIeltsAudioTimeline();
            } else {
                toggleIeltsAudio();
            }
        }, 1000);

        // Play introductory exam room audio
        if ('speechSynthesis' in window && ieltsAudioCurrentTime < 10) {
            const ut = new SpeechSynthesisUtterance("You will hear a number of different recordings and you will have to answer questions on what you hear. Section 1.");
            ut.lang = 'en-GB';
            ut.rate = ieltsAudioSpeed;
            window.speechSynthesis.speak(ut);
        }
    } else {
        if (ieltsAudioInterval) clearInterval(ieltsAudioInterval);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }
}

function updateIeltsAudioTimeline() {
    const cur = document.getElementById('ielts-time-cur');
    const seek = document.getElementById('ielts-audio-seek');
    if (cur) {
        const m = Math.floor(ieltsAudioCurrentTime / 60);
        const s = Math.floor(ieltsAudioCurrentTime % 60);
        cur.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    if (seek) seek.value = ieltsAudioCurrentTime;
}

function seekIeltsAudio(val) {
    ieltsAudioCurrentTime = parseInt(val, 10);
    updateIeltsAudioTimeline();
}

function skipIeltsAudio(delta) {
    ieltsAudioCurrentTime = Math.max(0, Math.min(ieltsAudioDuration, ieltsAudioCurrentTime + delta));
    updateIeltsAudioTimeline();
}

function toggleIeltsAudioSpeed() {
    const speeds = [0.8, 1.0, 1.2];
    const idx = speeds.indexOf(ieltsAudioSpeed);
    ieltsAudioSpeed = speeds[(idx + 1) % speeds.length];
    const btn = document.getElementById('ielts-speed-btn');
    if (btn) btn.textContent = `${ieltsAudioSpeed}x`;
}

function toggleTranscript(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden');
}

// =========================================================================
// 2. READING INTERFACE & LOGIC (SPLIT-SCREEN COMPUTER-DELIVERED IELTS)
// =========================================================================
function renderIeltsReadingView(container) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    const red = test.reading;
    const currentPassage = red.passages[activeReadingPassage - 1] || red.passages[0];

    let questionsHtml = '';
    currentPassage.questions.forEach(q => {
        const userAns = ieltsUserAnswers.reading[q.id] || '';
        const isCorrect = ieltsTestSubmitted && checkAnswerMatch(userAns, q.correct_answers);

        let inputWidget = '';
        if (q.type === 'tfng' || q.type === 'ynng') {
            const options = q.type === 'tfng' ? ['TRUE', 'FALSE', 'NOT GIVEN'] : ['YES', 'NO', 'NOT GIVEN'];
            inputWidget = `
                <div class="grid grid-cols-3 gap-1.5 mt-2">
                    ${options.map(opt => {
                        const isSelected = userAns.toUpperCase() === opt.toUpperCase();
                        return `
                            <button type="button"
                                    onclick="selectIeltsTfngOption('reading', ${q.id}, '${opt}')"
                                    class="tfng-btn-${q.id} py-1.5 px-2 rounded-xl text-xs font-bold border transition active:scale-95 ${
                                        isSelected 
                                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm ring-2 ring-indigo-300 scale-[1.02]' 
                                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                                    }">
                                ${opt}
                            </button>
                        `;
                    }).join('')}
                </div>
            `;
            if (ieltsTestSubmitted) {
                inputWidget += `<div class="mt-1.5 text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Correct' : '✗ Incorrect (Correct Answer: ' + q.correct_answers[0] + ')'}</div>`;
            }
        } else if (q.type === 'choice') {
            inputWidget = `<div class="space-y-1.5 mt-2" id="choice-group-reading-${q.id}">`;
            q.options.forEach(opt => {
                const optKey = opt.trim().charAt(0);
                const isChecked = userAns.toUpperCase() === optKey.toUpperCase();
                inputWidget += `
                    <label class="choice-lbl-reading-${q.id} flex items-center gap-2 p-2 rounded-xl border cursor-pointer transition text-xs ${
                        isChecked ? 'bg-indigo-50 border-indigo-500 text-indigo-950 font-semibold ring-1 ring-indigo-300' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }">
                        <input type="radio" name="ielts_q_reading_${q.id}" value="${optKey}" ${isChecked ? 'checked' : ''} onchange="selectIeltsRadioOption('reading', ${q.id}, '${optKey}')" class="text-indigo-600 focus:ring-indigo-500">
                        <span>${opt}</span>
                    </label>
                `;
            });
            inputWidget += `</div>`;
            if (ieltsTestSubmitted) {
                inputWidget += `<div class="mt-1.5 text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Correct' : '✗ Incorrect (Correct Answer: ' + q.correct_answers[0] + ')'}</div>`;
            }
        } else if (q.type === 'fill') {
            inputWidget = `
                <div class="mt-2 flex items-center gap-2">
                    <input type="text" value="${escapeHtml(userAns)}" oninput="handleIeltsAnswerChange('reading', ${q.id}, this.value)" placeholder="Type answer here..." class="flex-1 max-w-xs px-3 py-1.5 rounded-xl border text-xs font-semibold ${
                        ieltsTestSubmitted 
                        ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-rose-500 bg-rose-50 text-rose-800')
                        : 'border-slate-300 focus:border-indigo-500 bg-white'
                    }">
                    ${ieltsTestSubmitted ? `<span class="text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Correct' : '✗ Incorrect (Answer: ' + q.correct_answers[0] + ')'}</span>` : ''}
                </div>
            `;
        }

        questionsHtml += `
            <div class="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 mb-3" id="ielts-red-q-${q.id}">
                <div class="flex items-start gap-2.5">
                    <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${q.id}</span>
                    <div class="flex-1">
                        <p class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">${q.statement || q.prompt || q.question || ''}</p>
                        ${inputWidget}
                        ${ieltsTestSubmitted ? `
                            <div class="mt-2.5 p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                                <div class="font-bold text-amber-800 mb-1 flex items-center gap-1">
                                    <span>🔍</span> <span>Reading Evidence:</span>
                                </div>
                                <p class="italic text-slate-700 mb-1 bg-white/70 p-1.5 rounded border border-amber-100/60">"${q.evidence || ''}"</p>
                                <p>${q.explanation || ''}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    const passageRawText = currentPassage.content || currentPassage.text || '';
    const passageParagraphs = passageRawText.split(/\n\n|\\n\\n/).filter(p => p.trim().length > 0);

    container.innerHTML = `
        <div class="flex flex-col h-full overflow-hidden">
            <!-- PASSAGE TABS (1, 2, 3) -->
            <div class="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200 shrink-0">
                <div class="flex items-center gap-1.5">
                    <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">Select Passage:</span>
                    ${red.passages.map((p, idx) => {
                        const qRange = idx === 0 ? 'Q1-13' : idx === 1 ? 'Q14-26' : 'Q27-40';
                        return `
                            <button onclick="switchIeltsPassage(${idx + 1})" class="px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                                activeReadingPassage === (idx + 1)
                                ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-200'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }">
                                Passage ${idx + 1} <span class="opacity-80 text-[10px]">(${qRange})</span>
                            </button>
                        `;
                    }).join('')}
                </div>
                <div class="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                    40 Questions • 60 Minutes
                </div>
            </div>

            <!-- SPLIT SCREEN: LEFT PASSAGE, RIGHT QUESTIONS -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0 overflow-hidden">
                <!-- LEFT: PASSAGE TEXT -->
                <div class="h-full overflow-y-auto custom-scroll p-4 rounded-2xl bg-amber-50/30 border border-amber-200/50 shadow-2xs">
                    <h3 class="font-black text-base text-slate-900 mb-3 pb-2 border-b border-amber-200/60 text-indigo-950">${currentPassage.title || ('Passage ' + activeReadingPassage)}</h3>
                    <div class="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-3 font-serif">
                        ${passageParagraphs.map(para => `<p class="leading-relaxed">${escapeHtml(para.trim())}</p>`).join('')}
                    </div>
                </div>

                <!-- RIGHT: QUESTIONS -->
                <div class="h-full overflow-y-auto custom-scroll pr-1">
                    ${questionsHtml}
                </div>
            </div>

            <!-- QUESTION PALETTE NAVIGATION (1 - 40) -->
            ${renderQuestionPalette('reading', 40)}
        </div>
    `;
}

function switchIeltsPassage(num) {
    activeReadingPassage = num;
    renderIeltsSkillContent();
}

// =========================================================================
// 3. WRITING INTERFACE & LOGIC (TASK 1 & TASK 2) + GEMINI AI EXAMINER
// =========================================================================

function getGeminiApiKey() {
    return localStorage.getItem(GEMINI_API_KEY_STORAGE) || '';
}

function openGeminiApiKeyModal() {
    const modal = document.getElementById('gemini-key-modal');
    const input = document.getElementById('input-gemini-api-key');
    const status = document.getElementById('gemini-key-status');
    if (input) input.value = getGeminiApiKey();
    if (status) {
        status.textContent = getGeminiApiKey() ? "✅ Google Gemini API Key is saved on this device" : "No API Key configured";
        status.className = getGeminiApiKey() ? "text-[11px] font-bold min-h-[16px] text-emerald-600" : "text-[11px] font-bold min-h-[16px] text-amber-600";
    }
    if (modal) modal.classList.remove('hidden');
}

function closeGeminiApiKeyModal() {
    const modal = document.getElementById('gemini-key-modal');
    if (modal) modal.classList.add('hidden');
}

function toggleGeminiKeyVisibility() {
    const input = document.getElementById('input-gemini-api-key');
    if (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    }
}

function saveGeminiApiKeyFromModal() {
    const input = document.getElementById('input-gemini-api-key');
    const status = document.getElementById('gemini-key-status');
    if (!input) return;
    const key = input.value.trim();
    if (!key) {
        if (status) {
            status.textContent = "❌ Please enter your Google Gemini API Key!";
            status.className = "text-[11px] font-bold min-h-[16px] text-rose-500";
        }
        return;
    }
    localStorage.setItem(GEMINI_API_KEY_STORAGE, key);
    if (status) {
        status.textContent = "✅ Google Gemini API Key saved successfully!";
        status.className = "text-[11px] font-bold min-h-[16px] text-emerald-600";
    }
    setTimeout(() => {
        closeGeminiApiKeyModal();
        alert("✅ Google Gemini API Key saved successfully! You can now click the AI Examiner button to evaluate your essay.");
    }, 400);
}

function renderIeltsAiWritingCard(taskKey, result = null) {
    if (!result) {
        result = ieltsAiWritingResults[activeIeltsTestId]?.[taskKey];
    }
    if (!result) {
        return `
            <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
                <span class="text-base block mb-1">🤖</span>
                <p class="font-bold text-slate-700">No AI evaluation result yet for ${taskKey === 'task_1' ? 'Task 1' : 'Task 2'}</p>
                <p class="text-[11px] text-slate-500 mt-0.5">Complete your essay and click <strong>"AI Examiner Evaluation"</strong> to receive Band scores across all 4 criteria.</p>
            </div>
        `;
    }

    const sc = result.scores || {};
    const fb = result.criteria_feedback || {};
    const errors = result.detailed_errors || [];
    const upgrades = result.key_upgrades || [];

    return `
        <div class="p-4 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-indigo-500/40 shadow-xl space-y-3.5">
            <!-- HEADER SCORE -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-indigo-700/50">
                <div class="flex items-center gap-3">
                    <div class="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-950 font-black text-2xl flex items-center justify-center font-mono shadow-md shrink-0">
                        ${result.overall_band ? result.overall_band.toFixed(1) : 'N/A'}
                    </div>
                    <div>
                        <div class="flex items-center gap-1.5">
                            <span class="text-xs font-black uppercase tracking-wider text-amber-300">IELTS Writing Band Score</span>
                            <span class="text-[10px] font-bold bg-indigo-500/30 text-indigo-200 px-2 py-0.5 rounded-full border border-indigo-400/30">
                                ${result.is_builtin_engine ? '⚡ AI Examiner (Built-in Engine)' : '🤖 Gemini 1.5 Flash'}
                            </span>
                        </div>
                        <h4 class="text-xs sm:text-sm font-extrabold text-white mt-0.5">Band Score & 4-Criteria Assessment</h4>
                    </div>
                </div>
                ${result.general_advice ? `
                    <div class="text-[11px] text-amber-200 bg-amber-500/10 border border-amber-400/30 px-3 py-1.5 rounded-xl max-w-xs">
                        💡 <strong>Strategy Advice:</strong> ${escapeHtml(result.general_advice)}
                    </div>
                ` : ''}
            </div>

            <!-- 4 CRITERIA BADGES -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div class="p-2.5 rounded-2xl bg-white/10 border border-white/10 flex flex-col justify-between">
                    <span class="text-[10px] text-indigo-300 font-bold uppercase truncate" title="Task Achievement / Response">Task Response</span>
                    <span class="text-xl font-black font-mono text-amber-300 mt-1">${sc.task_response ? sc.task_response.toFixed(1) : '-'}</span>
                </div>
                <div class="p-2.5 rounded-2xl bg-white/10 border border-white/10 flex flex-col justify-between">
                    <span class="text-[10px] text-sky-300 font-bold uppercase truncate" title="Coherence and Cohesion">Coherence</span>
                    <span class="text-xl font-black font-mono text-sky-300 mt-1">${sc.coherence_cohesion ? sc.coherence_cohesion.toFixed(1) : '-'}</span>
                </div>
                <div class="p-2.5 rounded-2xl bg-white/10 border border-white/10 flex flex-col justify-between">
                    <span class="text-[10px] text-emerald-300 font-bold uppercase truncate" title="Lexical Resource">Lexical</span>
                    <span class="text-xl font-black font-mono text-emerald-300 mt-1">${sc.lexical_resource ? sc.lexical_resource.toFixed(1) : '-'}</span>
                </div>
                <div class="p-2.5 rounded-2xl bg-white/10 border border-white/10 flex flex-col justify-between">
                    <span class="text-[10px] text-fuchsia-300 font-bold uppercase truncate" title="Grammatical Range & Accuracy">Grammar</span>
                    <span class="text-xl font-black font-mono text-fuchsia-300 mt-1">${sc.grammatical_accuracy ? sc.grammatical_accuracy.toFixed(1) : '-'}</span>
                </div>
            </div>

            <!-- CRITERIA FEEDBACK TEXT -->
            <div class="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1.5 leading-relaxed text-indigo-100">
                <p><strong>🎯 Task Response:</strong> ${escapeHtml(fb.task_response || '')}</p>
                <p><strong>🔗 Coherence:</strong> ${escapeHtml(fb.coherence_cohesion || '')}</p>
                <p><strong>📚 Lexical:</strong> ${escapeHtml(fb.lexical_resource || '')}</p>
                <p><strong>📐 Grammar:</strong> ${escapeHtml(fb.grammatical_accuracy || '')}</p>
            </div>

            <!-- DETAILED ERRORS & CORRECTIONS -->
            ${errors.length > 0 ? `
                <div class="space-y-2 pt-1">
                    <span class="text-xs font-extrabold text-amber-300 block">🔍 Identified Issues (${errors.length} issues):</span>
                    <div class="space-y-2 max-h-48 overflow-y-auto custom-scroll pr-1 text-xs">
                        ${errors.map(err => `
                            <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-1">
                                <div class="flex items-start gap-2">
                                    <span class="text-rose-400 font-bold shrink-0">✗ Incorrect:</span>
                                    <span class="line-through text-rose-300 font-mono text-[11px]">${escapeHtml(err.original)}</span>
                                </div>
                                <div class="flex items-start gap-2">
                                    <span class="text-emerald-400 font-bold shrink-0">✓ Correct:</span>
                                    <span class="text-emerald-300 font-mono font-bold text-[11px]">${escapeHtml(err.corrected)}</span>
                                </div>
                                <p class="text-[11px] text-slate-300 italic bg-white/5 p-1 rounded">💡 ${escapeHtml(err.explanation)}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : '<p class="text-xs text-emerald-400 font-bold">🎉 No critical grammatical errors detected!</p>'}

            <!-- IMPROVED BAND 8.5+ VERSION -->
            ${result.improved_version ? `
                <div class="pt-2 border-t border-indigo-700/50">
                    <button onclick="toggleTranscript('ai-improved-${taskKey}')" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs shadow-sm flex items-center justify-between transition">
                        <span>🌟 View Band 8.5+ Enhanced Model Essay</span>
                        <span>▼</span>
                    </button>
                    <div id="ai-improved-${taskKey}" class="hidden mt-2.5 p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-xs leading-relaxed text-emerald-100 space-y-2 max-h-60 overflow-y-auto custom-scroll">
                        <div class="p-3 bg-slate-900/90 rounded-xl border border-emerald-500/30 font-serif whitespace-pre-line text-emerald-50 leading-relaxed">
                            ${escapeHtml(result.improved_version)}
                        </div>
                        ${upgrades.length > 0 ? `
                            <div class="pt-1.5">
                                <span class="font-bold text-amber-300 text-[11px] block mb-1">💎 Key Academic Collocations & Vocabulary:</span>
                                <div class="flex flex-wrap gap-1">
                                    ${upgrades.map(u => `<span class="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded text-[10px] font-bold">${escapeHtml(u)}</span>`).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

function evaluateWritingLocally(taskNum, studentEssay, task) {
    const wordCount = countWords(studentEssay);
    const minWords = task.min_words || (taskNum === 1 ? 150 : 250);
    const lowerText = studentEssay.toLowerCase();

    // 1. Task Achievement / Response (TR)
    let trScore = 5.0;
    if (wordCount >= minWords) trScore = 6.5;
    else if (wordCount >= minWords * 0.8) trScore = 6.0;
    else if (wordCount >= minWords * 0.5) trScore = 5.0;
    else trScore = 4.0;

    // Check paragraphing structure
    const paragraphs = studentEssay.split(/\n+/).filter(p => p.trim().length > 0);
    if (paragraphs.length >= 3 && wordCount >= minWords) trScore += 0.5;

    // 2. Coherence and Cohesion (CC)
    const linkingWords = [
        'firstly', 'secondly', 'furthermore', 'moreover', 'in addition', 'besides',
        'however', 'nevertheless', 'on the other hand', 'in contrast', 'although', 'even though',
        'while', 'whereas', 'consequently', 'therefore', 'as a result', 'thus',
        'in conclusion', 'to summarize', 'overall', 'it is clear that', 'specifically', 'for instance'
    ];
    let linkCount = 0;
    linkingWords.forEach(w => {
        if (lowerText.includes(w)) linkCount++;
    });

    let ccScore = 5.0;
    if (linkCount >= 5 && paragraphs.length >= 3) ccScore = 7.0;
    else if (linkCount >= 3) ccScore = 6.0;
    else if (linkCount >= 1) ccScore = 5.5;
    else ccScore = 4.5;

    // 3. Lexical Resource (LR)
    const academicWords = [
        'significant', 'dramatic', 'substantial', 'considerable', 'negligible',
        'illustrate', 'demonstrate', 'depict', 'fluctuation', 'proportion',
        'indicator', 'perspective', 'phenomenon', 'predominant', 'fundamental',
        'subsequent', 'facilitate', 'detrimental', 'allocated', 'substantiate',
        'trend', 'steadily', 'markedly', 'respectively', 'counterpart', 'outweigh'
    ];
    let awlCount = 0;
    const matchedAwl = [];
    academicWords.forEach(w => {
        if (lowerText.includes(w)) {
            awlCount++;
            matchedAwl.push(w);
        }
    });

    const wordsArr = lowerText.match(/[a-z]+/g) || [];
    const uniqueWords = new Set(wordsArr).size;
    const varietyRatio = wordsArr.length > 0 ? (uniqueWords / wordsArr.length) : 0;

    let lrScore = 5.0;
    if (awlCount >= 4 && varietyRatio > 0.5) lrScore = 7.0;
    else if (awlCount >= 2 || varietyRatio > 0.45) lrScore = 6.0;
    else lrScore = 5.5;

    // 4. Grammatical Range and Accuracy (GRA)
    const complexIndicators = ['which', 'that', 'who', 'whom', 'whose', 'because', 'although', 'if', 'unless', 'provided that', 'since', 'whereas', 'while'];
    let complexCount = 0;
    complexIndicators.forEach(w => {
        if (lowerText.includes(' ' + w + ' ')) complexCount++;
    });

    let graScore = 5.0;
    if (complexCount >= 4) graScore = 6.5;
    else if (complexCount >= 2) graScore = 6.0;
    else graScore = 5.5;

    // Overall Band
    const rawAverage = (trScore + ccScore + lrScore + graScore) / 4;
    const decimal = rawAverage - Math.floor(rawAverage);
    let overallBand = Math.floor(rawAverage);
    if (decimal >= 0.75) overallBand += 1.0;
    else if (decimal >= 0.25) overallBand += 0.5;

    const sampleText = task.sample_band_9 || task.sample_band_85 || task.model_answer || '';

    return {
        overall_band: overallBand,
        is_builtin_engine: true,
        scores: {
            task_response: trScore,
            coherence_cohesion: ccScore,
            lexical_resource: lrScore,
            grammatical_accuracy: graScore
        },
        criteria_feedback: {
            task_response: `Essay contains ${wordCount}/${minWords} words (${wordCount >= minWords ? 'meets the required word count' : 'below minimum word count'}). ${paragraphs.length >= 3 ? 'Clear paragraphing structure with well-developed ideas.' : 'Organize your response into at least 3-4 clear paragraphs (Introduction, Body 1, Body 2, Conclusion).'}` ,
            coherence_cohesion: `Incorporated ${linkCount} academic cohesive devices. ${linkCount >= 4 ? 'Good logical flow and natural progression between sentences.' : 'Incorporate more transition markers (However, In contrast, Furthermore) to enhance connectivity.'}`,
            lexical_resource: `Lexical diversity ratio: ${(varietyRatio * 100).toFixed(0)}%. ${awlCount > 0 ? `Good use of academic terminology such as: ${matchedAwl.slice(0, 4).join(', ')}.` : 'Replace informal words with higher-level academic collocations.'}` ,
            grammatical_accuracy: `Good variety of simple and complex sentences (${complexCount} complex clauses). Continue utilizing relative clauses and passive constructions to boost grammatical range.`
        },
        detailed_errors: [
            {
                original: "Overuse of informal vocabulary or repetitive phrasing",
                corrected: "Apply sophisticated academic collocations from the Band 9.0 model answer below",
                explanation: "In IELTS Writing, examiners look for precise academic paraphrasing and natural collocations."
            }
        ],
        improved_version: sampleText,
        key_upgrades: [
            "illustrates significant changes",
            "a substantial proportion of",
            "plays a pivotal role",
            "witnessed a dramatic surge"
        ],
        general_advice: `Great effort on completing your response. Compare your essay with the Band 9.0 model answer below to analyze cohesive devices and syntactic structures.`
    };
}

function applyWritingEvaluationResult(taskKey, parsedResult) {
    if (!ieltsAiWritingResults[activeIeltsTestId]) {
        ieltsAiWritingResults[activeIeltsTestId] = {};
    }
    ieltsAiWritingResults[activeIeltsTestId][taskKey] = parsedResult;

    // Save AI scores to answers
    if (!ieltsUserAnswers.writing) ieltsUserAnswers.writing = {};
    ieltsUserAnswers.writing[taskKey + '_ai_score'] = parsedResult.overall_band;
    saveIeltsProgress();

    // Render card
    const evalContainer = document.getElementById('ielts-ai-eval-container-' + taskKey);
    if (evalContainer) {
        evalContainer.innerHTML = renderIeltsAiWritingCard(taskKey, parsedResult);
    }
}

async function evaluateWritingWithGemini(taskNum) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    if (!test || !test.writing) return;
    const task = taskNum === 1 ? test.writing.task_1 : test.writing.task_2;
    const taskKey = taskNum === 1 ? 'task_1' : 'task_2';
    const studentEssay = ieltsUserAnswers.writing[taskKey] || '';
    const wordCount = countWords(studentEssay);

    if (wordCount < 25) {
        alert("⚠️ Your essay currently contains " + wordCount + " words (too short). Please write at least 25-30 words so the AI Examiner can accurately evaluate your essay!");
        return;
    }

    const evalContainer = document.getElementById('ielts-ai-eval-container-' + taskKey);
    const evalBtn = document.getElementById('btn-gemini-eval-' + taskKey);

    if (evalBtn) {
        evalBtn.disabled = true;
        evalBtn.innerHTML = `<span>⏳</span> <span>AI Examiner is evaluating & analyzing essay...</span>`;
    }

    if (evalContainer) {
        evalContainer.innerHTML = `
            <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 animate-pulse text-xs text-indigo-950 space-y-2">
                <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-indigo-600 animate-ping"></span>
                    <span class="font-extrabold text-indigo-900">IELTS AI Examiner is analyzing your submission...</span>
                </div>
                <p class="text-slate-600">Evaluating 4 official criteria: Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Accuracy...</p>
            </div>
        `;
    }

    const apiKey = getGeminiApiKey();

    // Fallback to built-in IELTS Academic NLP evaluation if no API Key provided
    if (!apiKey) {
        setTimeout(() => {
            const result = evaluateWritingLocally(taskNum, studentEssay, task);
            applyWritingEvaluationResult(taskKey, result);
            if (evalBtn) {
                evalBtn.disabled = false;
                evalBtn.innerHTML = `<span>🤖</span> <span>AI Examiner Evaluation</span>`;
            }
        }, 600);
        return;
    }

    const promptText = `You are a strict, highly authoritative Cambridge IELTS Academic Writing Examiner with 15+ years of official examination experience.
Evaluate the candidate's essay for IELTS Writing ${taskNum === 1 ? 'Task 1 (Academic Report)' : 'Task 2 (Academic Essay)'}.

[TOPIC / PROMPT]:
${task.prompt}

[CANDIDATE'S ESSAY] (${wordCount} words):
${studentEssay}

You MUST evaluate strictly according to official IELTS Band Descriptors (Bands 1.0 - 9.0 in increments of 0.5):
1. Task Achievement (for Task 1) or Task Response (for Task 2)
2. Coherence and Cohesion
3. Lexical Resource
4. Grammatical Range and Accuracy

Calculate Overall Band as the mathematical average of the 4 criteria rounded to the nearest 0.5.
All explanations and feedback must be written in Vietnamese for the Vietnamese student, while grammar/vocabulary examples and improved sentences remain in English.

Respond ONLY with a valid JSON object matching this exact format:
{
  "overall_band": 6.5,
  "scores": {
    "task_response": 6.5,
    "coherence_cohesion": 6.5,
    "lexical_resource": 6.0,
    "grammatical_accuracy": 6.5
  },
  "criteria_feedback": {
    "task_response": "Detailed academic evaluation of Task Response...",
    "coherence_cohesion": "Detailed academic evaluation of Coherence & Cohesion...",
    "lexical_resource": "Detailed academic evaluation of Lexical Resource...",
    "grammatical_accuracy": "Detailed academic evaluation of Grammatical Range & Accuracy..."
  },
  "detailed_errors": [
    {
      "original": "original student phrase requiring improvement",
      "corrected": "improved version with accurate grammar or lexical choice",
      "explanation": "concise explanation of grammar rule or collocation"
    }
  ],
  "improved_version": "Full improved essay written at Band 8.5+ standard based on the student's original arguments...",
  "key_upgrades": [
    "Key academic collocation 1 (definition and usage)",
    "Key academic collocation 2 (definition and usage)"
  ],
  "general_advice": "Strategic action points to achieve a higher Band score..."
}`;

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: promptText }] }],
                generationConfig: {
                    temperature: 0.2,
                    responseMimeType: "application/json"
                }
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            const msg = errData.error?.message || response.statusText;
            throw new Error(msg);
        }

        const data = await response.json();
        const rawJsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawJsonText) throw new Error("No response data received from Gemini API.");

        let parsedResult;
        try {
            const cleaned = rawJsonText.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
            parsedResult = JSON.parse(cleaned);
        } catch(e) {
            throw new Error("Error parsing AI evaluation result: " + e.message);
        }

        applyWritingEvaluationResult(taskKey, parsedResult);
    } catch(err) {
        console.warn("Gemini API notice, fallback to built-in IELTS Examiner:", err);
        // Fallback to local evaluation engine
        const fallbackResult = evaluateWritingLocally(taskNum, studentEssay, task);
        fallbackResult.general_advice = "⚡ Evaluated by Built-in IELTS Academic Examiner engine.";
        applyWritingEvaluationResult(taskKey, fallbackResult);
    } finally {
        if (evalBtn) {
            evalBtn.disabled = false;
            evalBtn.innerHTML = `<span>🤖</span> <span>AI Examiner Evaluation</span>`;
        }
    }
}

function renderIeltsWritingView(container) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    const wri = test.writing;
    const task = activeWritingTask === 1 ? wri.task_1 : wri.task_2;
    const taskKey = activeWritingTask === 1 ? 'task_1' : 'task_2';
    const currentEssay = ieltsUserAnswers.writing[taskKey] || '';
    const wordCount = countWords(currentEssay);
    const minWords = task.min_words || (activeWritingTask === 1 ? 150 : 250);
    const isWordCountMet = wordCount >= minWords;

    container.innerHTML = `
        <div class="flex flex-col h-full overflow-hidden">
            <!-- TASK SWITCHER (TASK 1 / TASK 2) -->
            <div class="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200 shrink-0">
                <div class="flex items-center gap-2">
                    <button onclick="switchIeltsWritingTask(1)" class="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeWritingTask === 1 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        📊 Task 1: Report (150 words)
                    </button>
                    <button onclick="switchIeltsWritingTask(2)" class="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeWritingTask === 2 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        ✍️ Task 2: Essay (250 words)
                    </button>
                </div>
                <div class="flex items-center gap-2 text-xs font-bold">
                    <span class="px-3 py-1 rounded-full ${isWordCountMet ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-800 border border-amber-300'}" id="writing-word-badge">
                        📝 ${wordCount} / ${minWords} words ${isWordCountMet ? '✓ Met' : '(Short)'}
                    </span>
                </div>
            </div>

            <!-- WRITING AREA (SPLIT SCREEN: PROMPT/CHART ON LEFT, EDITOR ON RIGHT) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0 overflow-hidden">
                <!-- PROMPT & CHART -->
                <div class="h-full overflow-y-auto custom-scroll p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 class="font-extrabold text-sm text-slate-900 mb-2">${task.title || (activeWritingTask === 1 ? 'Task 1: Academic Report (150 words)' : 'Task 2: Academic Essay (250 words)')}</h4>
                    <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3 whitespace-pre-line">${task.prompt}</p>
                    ${task.chart_svg ? `<div class="mb-3">${task.chart_svg}</div>` : ''}

                    <!-- ACCORDION: BAND 8.5+ & 9.0 MODEL ANSWER -->
                    <div class="mt-4 pt-3 border-t border-slate-200">
                        <button onclick="toggleTranscript('writing-sample-${taskKey}')" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-sm flex items-center justify-between transition">
                            <span>⭐ View Band 9.0 Model Answer & Analysis</span>
                            <span>▼</span>
                        </button>
                        <div id="writing-sample-${taskKey}" class="hidden mt-2.5 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs leading-relaxed text-slate-800 space-y-2">
                            <p class="font-bold text-amber-900 uppercase">Official Band 9.0 Model Answer:</p>
                            <div class="p-3 bg-white rounded-xl border border-amber-200/80 font-serif leading-relaxed whitespace-pre-line text-slate-800">
                                ${task.sample_band_9 || task.sample_band_85 || task.model_answer || ''}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT: EDITOR TEXTAREA & AI EXAMINER -->
                <div class="flex flex-col h-full overflow-hidden">
                    <textarea id="ielts-writing-textarea" 
                              oninput="handleWritingInput(this.value)"
                              placeholder="Type your essay here (use academic linking words, diverse sentence structures, topic vocabulary)..."
                              class="w-full h-44 sm:h-52 p-4 rounded-2xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-xs sm:text-sm text-slate-900 leading-relaxed font-sans resize-none custom-scroll bg-white shrink-0">${escapeHtml(currentEssay)}</textarea>

                    <!-- AI ACTION CONTROLS -->
                    <div class="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-slate-100 shrink-0">
                        <button onclick="evaluateWritingWithGemini(${activeWritingTask})" 
                                id="btn-gemini-eval-${taskKey}"
                                class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 text-white font-extrabold text-xs shadow-md transition active:scale-95 flex items-center gap-1.5">
                            <span>🤖</span> <span>AI Examiner Evaluation</span>
                        </button>
                        <button onclick="openGeminiApiKeyModal()" class="text-[11px] text-slate-400 hover:text-indigo-600 font-semibold transition flex items-center gap-1">
                            <span>⚙️ Gemini Key (Optional)</span>
                        </button>
                    </div>

                    <!-- AI RESULT AREA -->
                    <div id="ielts-ai-eval-container-${taskKey}" class="flex-1 overflow-y-auto custom-scroll mt-2 pr-1">
                        ${renderIeltsAiWritingCard(taskKey)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function switchIeltsWritingTask(taskNum) {
    activeWritingTask = taskNum;
    renderIeltsSkillContent();
}

function handleWritingInput(val) {
    const taskKey = activeWritingTask === 1 ? 'task_1' : 'task_2';
    ieltsUserAnswers.writing[taskKey] = val;
    saveIeltsProgress();

    const minWords = activeWritingTask === 1 ? 150 : 250;
    const wc = countWords(val);
    const badge = document.getElementById('writing-word-badge');
    if (badge) {
        const isMet = wc >= minWords;
        badge.className = `px-3 py-1 rounded-full ${isMet ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-800 border border-amber-300'}`;
        badge.textContent = `📝 ${wc} / ${minWords} words ${isMet ? '✓ Met' : '(Short)'}`;
    }
}

// =========================================================================
// 4. SPEAKING INTERFACE & LOGIC (AUDIO EXAMINER & MICROPHONE RECORDER)
// =========================================================================
function renderIeltsSpeakingView(container) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    const spk = test.speaking;

    let contentHtml = '';
    if (activeSpeakingPart === 1) {
        contentHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-950 flex items-center justify-between">
                    <span>💡 <strong>Part 1:</strong> Answer everyday questions naturally with 2-4 complete sentences.</span>
                </div>
                ${spk.part_1.map((item, idx) => `
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <p class="font-extrabold text-xs sm:text-sm text-slate-900 flex-1">
                                <span class="text-indigo-600 mr-1.5">Q${idx + 1}:</span> ${item.question}
                            </p>
                            <button onclick="speakExaminerQuestion('${escapeQuotes(item.question)}')" class="px-3 py-1 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1 transition active:scale-95 shrink-0">
                                <span>🔊</span> <span>Listen to Examiner</span>
                            </button>
                        </div>

                        <!-- RECORDER & MODEL ANSWER -->
                        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                            <button id="rec-btn-p1-${idx}" onclick="toggleVoiceRecord('p1_${idx}')" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs flex items-center gap-1.5 transition active:scale-95">
                                <span>🎙️</span> <span>Record Answer</span>
                            </button>
                            <div id="audio-playback-p1_${idx}" class="inline-flex"></div>
                            <button onclick="toggleTranscript('sample-spk-p1-${idx}')" class="ml-auto px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition">
                                <span>💡</span> <span>View Band 8.5+ Sample Response</span>
                            </button>
                        </div>

                        <div id="sample-spk-p1-${idx}" class="hidden mt-3 p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs leading-relaxed text-slate-800 space-y-1.5">
                            <p class="font-bold text-amber-900">Band 8.5+ Sample Response:</p>
                            <p class="italic font-serif bg-white p-2.5 rounded-xl border border-amber-100">"${item.model_answer}"</p>
                            ${(item.key_vocab && item.key_vocab.length > 0) ? `
                                <div class="flex flex-wrap gap-1 mt-1">
                                    ${item.key_vocab.map(v => `<span class="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-[10px] font-bold">${v}</span>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (activeSpeakingPart === 2) {
        const card = spk.part_2;
        contentHtml = `
            <div class="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div class="p-4 rounded-2xl bg-gradient-to-tr from-amber-50 to-orange-50 border border-amber-300">
                    <div class="flex items-center justify-between pb-2 mb-2 border-b border-amber-200">
                        <span class="text-xs font-black text-amber-900 uppercase">IELTS Speaking Cue Card</span>
                        <span class="text-xs font-bold bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-full">1 Minute Preparation • 2 Minutes Speaking</span>
                    </div>
                    <h3 class="font-black text-sm sm:text-base text-slate-900 mb-2">${card.cue_card_title}</h3>
                    <p class="text-xs text-slate-700 font-semibold mb-2">You should say:</p>
                    <ul class="list-disc list-inside text-xs text-slate-800 space-y-1 mb-3">
                        ${(card.cue_points || card.cues || []).map(pt => `<li>${pt}</li>`).join('')}
                    </ul>
                </div>

                <!-- PREPARATION & SPEAKING TIMER CONTROLS -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-slate-600 block">Preparation Time:</span>
                            <span id="cue-prep-timer" class="font-mono text-base font-black text-indigo-700">01:00</span>
                        </div>
                        <button onclick="startCueTimer('prep', 60)" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition">Start 1 min</button>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-slate-600 block">Speaking Time:</span>
                            <span id="cue-speak-timer" class="font-mono text-base font-black text-emerald-700">02:00</span>
                        </div>
                        <button onclick="startCueTimer('speak', 120)" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition">Start 2 min</button>
                    </div>
                </div>

                <!-- RECORDER FOR PART 2 -->
                <div class="p-3 rounded-2xl bg-rose-50/60 border border-rose-200 flex flex-wrap items-center justify-between gap-2">
                    <button id="rec-btn-p2" onclick="toggleVoiceRecord('part_2')" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-sm flex items-center gap-1.5 transition active:scale-95">
                        <span>🎙️</span> <span>Record 2-Minute Speech</span>
                    </button>
                    <div id="audio-playback-part_2" class="inline-flex"></div>
                    <button onclick="toggleTranscript('sample-spk-p2')" class="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition">
                        ⭐ View Band 8.5+ Model Speech
                    </button>
                </div>

                <div id="sample-spk-p2" class="hidden p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs leading-relaxed text-slate-800 space-y-2">
                    <p class="font-bold text-amber-900 uppercase">Band 8.5+ Model Speech:</p>
                    <div class="p-3.5 bg-white rounded-xl border border-amber-200 font-serif whitespace-pre-line text-slate-800">
                        ${card.model_answer}
                    </div>
                </div>
            </div>
        `;
    } else if (activeSpeakingPart === 3) {
        contentHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-950">
                    💡 <strong>Part 3:</strong> In-depth two-way academic discussion. Express opinions, analyze causes, and provide reasoned justifications.
                </div>
                ${spk.part_3.map((item, idx) => `
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <p class="font-extrabold text-xs sm:text-sm text-slate-900 flex-1">
                                <span class="text-indigo-600 mr-1.5">Q${idx + 1}:</span> ${item.question}
                            </p>
                            <button onclick="speakExaminerQuestion('${escapeQuotes(item.question)}')" class="px-3 py-1 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1 transition active:scale-95 shrink-0">
                                <span>🔊</span> <span>Listen to Examiner</span>
                            </button>
                        </div>

                        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                            <button id="rec-btn-p3-${idx}" onclick="toggleVoiceRecord('p3_${idx}')" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs flex items-center gap-1.5 transition active:scale-95">
                                <span>🎙️</span> <span>Record Answer</span>
                            </button>
                            <div id="audio-playback-p3_${idx}" class="inline-flex"></div>
                            <button onclick="toggleTranscript('sample-spk-p3-${idx}')" class="ml-auto px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition">
                                <span>💡</span> <span>View Band 8.5+ Sample Response</span>
                            </button>
                        </div>

                        <div id="sample-spk-p3-${idx}" class="hidden mt-3 p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs leading-relaxed text-slate-800 space-y-1.5">
                            <p class="font-bold text-amber-900">Band 8.5+ Academic Analysis:</p>
                            <p class="italic font-serif bg-white p-2.5 rounded-xl border border-amber-100">"${item.model_answer}"</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    container.innerHTML = `
        <div class="flex flex-col h-full overflow-hidden">
            <!-- SPEAKING PARTS TABS (PART 1, 2, 3) -->
            <div class="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200 shrink-0">
                <div class="flex items-center gap-2">
                    <button onclick="switchIeltsSpeakingPart(1)" class="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeSpeakingPart === 1 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        Part 1: Interview
                    </button>
                    <button onclick="switchIeltsSpeakingPart(2)" class="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeSpeakingPart === 2 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        Part 2: Cue Card
                    </button>
                    <button onclick="switchIeltsSpeakingPart(3)" class="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeSpeakingPart === 3 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        Part 3: Discussion
                    </button>
                </div>
                <div class="text-xs font-bold text-slate-500 hidden sm:inline">
                    11 - 14 Minutes • Native Examiner Audio & Microphone Recording
                </div>
            </div>

            <!-- SPEAKING CONTENT -->
            <div class="flex-1 overflow-y-auto custom-scroll pr-1">
                ${contentHtml}
            </div>
        </div>
    `;
}

function switchIeltsSpeakingPart(partNum) {
    activeSpeakingPart = partNum;
    renderIeltsSkillContent();
}

function speakExaminerQuestion(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const ut = new SpeechSynthesisUtterance(text);
        ut.lang = 'en-GB';
        ut.rate = 0.9;
        window.speechSynthesis.speak(ut);
    }
}

// Microphone Recording student recording (MediaRecorder API)
async function toggleVoiceRecord(slotId) {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) audioChunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            recordedAudioUrls[slotId] = audioUrl;

            // Render audio player
            const playbackContainer = document.getElementById('audio-playback-' + slotId);
            if (playbackContainer) {
                playbackContainer.innerHTML = `
                    <audio controls src="${audioUrl}" class="h-8 max-w-[200px]"></audio>
                `;
            }

            // Reset button label
            const btn = document.querySelector(`[onclick="toggleVoiceRecord('${slotId}')"]`);
            if (btn) {
                btn.className = "px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center gap-1.5";
                btn.innerHTML = `<span>✓</span> <span>Re-record</span>`;
            }

            stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.start();

        // Set button label to recording
        const btn = document.querySelector(`[onclick="toggleVoiceRecord('${slotId}')"]`);
        if (btn) {
            btn.className = "px-3 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center gap-1.5 animate-pulse shadow-md";
            btn.innerHTML = `<span>⏹</span> <span>Recording... (Click to Stop)</span>`;
        }
    } catch (err) {
        alert("Could not access microphone. Please allow microphone permissions in your browser!");
    }
}

// Part 2 countdown timer
function startCueTimer(type, seconds) {
    const el = document.getElementById(type === 'prep' ? 'cue-prep-timer' : 'cue-speak-timer');
    if (!el) return;
    let s = seconds;
    const itv = setInterval(() => {
        s--;
        const m = Math.floor(s / 60);
        const rem = s % 60;
        el.textContent = `${m.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
        if (s <= 0) {
            clearInterval(itv);
            alert(type === 'prep' ? "⏰ 1 minute preparation time is up! Please begin speaking." : "⏰ 2 minutes speaking time is up!");
        }
    }, 1000);
}

// =========================================================================
// 5. AUTOMATIC GRADING & IELTS BAND CONVERSION 1.0 - 9.0
// =========================================================================
function selectIeltsTfngOption(skill, qId, opt) {
    if (ieltsTestSubmitted) return;

    handleIeltsAnswerChange(skill, qId, opt);

    // Update question styling on selection
    const btns = document.querySelectorAll(`.tfng-btn-${qId}`);
    const targetOpt = opt.trim().toUpperCase();
    btns.forEach(btn => {
        if (btn.textContent.trim().toUpperCase() === targetOpt) {
            btn.className = `tfng-btn-${qId} py-1.5 px-2 rounded-xl text-xs font-bold border transition active:scale-95 bg-indigo-600 text-white border-indigo-600 shadow-sm ring-2 ring-indigo-300 scale-[1.02]`;
        } else {
            btn.className = `tfng-btn-${qId} py-1.5 px-2 rounded-xl text-xs font-bold border transition active:scale-95 bg-white hover:bg-slate-50 text-slate-700 border-slate-200`;
        }
    });

    updatePaletteQuestionStatus(skill, qId, true);
}

function selectIeltsRadioOption(skill, qId, optKey) {
    if (ieltsTestSubmitted) return;

    handleIeltsAnswerChange(skill, qId, optKey);

    // Update radio label colour
    const labels = document.querySelectorAll(`.choice-lbl-${skill}-${qId}`);
    labels.forEach(lbl => {
        const inp = lbl.querySelector('input[type="radio"]');
        if (inp && inp.value.toUpperCase() === optKey.toUpperCase()) {
            lbl.className = `choice-lbl-${skill}-${qId} flex items-center gap-2 p-2 rounded-xl border cursor-pointer transition text-xs bg-indigo-50 border-indigo-500 text-indigo-950 font-semibold ring-1 ring-indigo-300`;
        } else {
            lbl.className = `choice-lbl-${skill}-${qId} flex items-center gap-2 p-2 rounded-xl border cursor-pointer transition text-xs bg-white hover:bg-slate-50 border-slate-200 text-slate-700`;
        }
    });

    updatePaletteQuestionStatus(skill, qId, true);
}

function handleIeltsAnswerChange(skill, qId, val) {
    if (!ieltsUserAnswers[skill]) ieltsUserAnswers[skill] = {};
    ieltsUserAnswers[skill][qId] = val;
    saveIeltsProgress();

    const hasVal = val && val.toString().trim().length > 0;
    updatePaletteQuestionStatus(skill, qId, hasVal);
}

function checkAnswerMatch(userVal, correctList) {
    if (!userVal) return false;
    const cleanUser = userVal.toString().trim().toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return correctList.some(corr => {
        const cleanCorr = corr.toString().trim().toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        return cleanUser === cleanCorr;
    });
}

function convertRawToIeltsBand(rawScore, isListening = true) {
    if (isListening) {
        if (rawScore >= 39) return 9.0;
        if (rawScore >= 37) return 8.5;
        if (rawScore >= 35) return 8.0;
        if (rawScore >= 32) return 7.5;
        if (rawScore >= 30) return 7.0;
        if (rawScore >= 26) return 6.5;
        if (rawScore >= 23) return 6.0;
        if (rawScore >= 18) return 5.5;
        if (rawScore >= 16) return 5.0;
        if (rawScore >= 13) return 4.5;
        if (rawScore >= 10) return 4.0;
        return 3.5;
    } else {
        // Reading Academic
        if (rawScore >= 39) return 9.0;
        if (rawScore >= 37) return 8.5;
        if (rawScore >= 35) return 8.0;
        if (rawScore >= 33) return 7.5;
        if (rawScore >= 30) return 7.0;
        if (rawScore >= 27) return 6.5;
        if (rawScore >= 23) return 6.0;
        if (rawScore >= 19) return 5.5;
        if (rawScore >= 15) return 5.0;
        if (rawScore >= 13) return 4.5;
        if (rawScore >= 10) return 4.0;
        return 3.5;
    }
}

function submitIeltsTest() {
    if (!confirm("Are you sure you want to submit your IELTS test to view Band scores and detailed explanations?")) {
        return;
    }

    gradeIeltsTest(true);
}

function gradeIeltsTest(showModal = true) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    if (!test) return;

    // 1. Grade Listening
    let lisCorrect = 0;
    let lisTotal = 0;
    const lisReview = [];

    test.listening.parts.forEach(p => {
        p.questions.forEach(q => {
            lisTotal++;
            const userAns = ieltsUserAnswers.listening[q.id] || '';
            const isCorr = checkAnswerMatch(userAns, q.correct_answers);
            if (isCorr) lisCorrect++;

            lisReview.push({
                skill: 'Listening',
                part: p.part_number,
                id: q.id,
                prompt: q.prompt || q.question || '',
                userAns: userAns || '(Not answered)',
                correctAns: q.correct_answers[0],
                isCorrect: isCorr,
                evidence: q.evidence || '',
                explanation: q.explanation || ''
            });
        });
    });

    // 2. Grade Reading
    let redCorrect = 0;
    let redTotal = 0;
    const redReview = [];

    test.reading.passages.forEach((p, pIdx) => {
        p.questions.forEach(q => {
            redTotal++;
            const userAns = ieltsUserAnswers.reading[q.id] || '';
            const isCorr = checkAnswerMatch(userAns, q.correct_answers);
            if (isCorr) redCorrect++;

            redReview.push({
                skill: 'Reading',
                part: pIdx + 1,
                id: q.id,
                prompt: q.statement || q.prompt || q.question || '',
                userAns: userAns || '(Not answered)',
                correctAns: q.correct_answers[0],
                isCorrect: isCorr,
                evidence: q.evidence || '',
                explanation: q.explanation || ''
            });
        });
    });

    // Convert to official Band score
    // Cambridge official conversion table
    const lisNormalizedRaw = Math.round((lisCorrect / lisTotal) * 40);
    const redNormalizedRaw = Math.round((redCorrect / redTotal) * 40);

    const lisBand = convertRawToIeltsBand(lisNormalizedRaw, true);
    const redBand = convertRawToIeltsBand(redNormalizedRaw, false);

    // 3. Grade Writing (0.0 if not written, use AI score if graded, or estimate based on word count)
    const t1Words = countWords(ieltsUserAnswers.writing?.task_1 || '');
    const t2Words = countWords(ieltsUserAnswers.writing?.task_2 || '');
    const t1Ai = ieltsUserAnswers.writing?.task_1_ai_score;
    const t2Ai = ieltsUserAnswers.writing?.task_2_ai_score;
    let wriBand = 0.0;
    let isAiGradedWriting = false;

    if (t1Ai && t2Ai) {
        // Cambridge standard: Task 2 weights 2/3, Task 1 weights 1/3
        const weighted = (t1Ai * 1 + t2Ai * 2) / 3;
        wriBand = Math.round(weighted * 2) / 2;
        isAiGradedWriting = true;
    } else if (t2Ai) {
        wriBand = t2Ai;
        isAiGradedWriting = true;
    } else if (t1Ai) {
        wriBand = t1Ai;
        isAiGradedWriting = true;
    } else {
        const totalWords = t1Words + t2Words;
        if (totalWords === 0) {
            wriBand = 0.0; // No words written
        } else if (totalWords < 30) {
            wriBand = 1.0;
        } else if (totalWords < 80) {
            wriBand = 3.0;
        } else if (totalWords < 150) {
            wriBand = 4.5;
        } else if (t1Words >= 120 && t2Words >= 200) {
            wriBand = 6.0;
        } else if (t1Words >= 150 && t2Words >= 250) {
            wriBand = 6.5;
        } else {
            wriBand = 5.0;
        }
    }

    // 4. Grade Speaking (0.0 if not recorded)
    const recordedCount = Object.keys(recordedAudioUrls || {}).length;
    let spkBand = 0.0;
    if (recordedCount === 0) {
        spkBand = 0.0; // Not recorded 
    } else if (recordedCount === 1) {
        spkBand = 5.0;
    } else if (recordedCount >= 2 && recordedCount < 4) {
        spkBand = 6.5;
    } else {
        spkBand = 7.5;
    }

    // 5. Calculate Overall Band score
    const testedSkills = [];
    testedSkills.push({ name: 'Listening', band: lisBand });
    testedSkills.push({ name: 'Reading', band: redBand });
    if (wriBand > 0) testedSkills.push({ name: 'Writing', band: wriBand });
    if (spkBand > 0) testedSkills.push({ name: 'Speaking', band: spkBand });

    const sumBand = testedSkills.reduce((acc, s) => acc + s.band, 0);
    const rawOverall = sumBand / testedSkills.length;
    const decimal = rawOverall - Math.floor(rawOverall);
    let overallBand = Math.floor(rawOverall);
    if (decimal >= 0.75) overallBand += 1.0;
    else if (decimal >= 0.25) overallBand += 0.5;

    let overallSubtitle = `Evaluated on ${testedSkills.length}/4 completed skills`;
    if (testedSkills.length === 4) {
        overallSubtitle = "Complete 4 skills official Cambridge format";
    }

    ieltsTestScoreResult = {
        lisCorrect, lisTotal, lisBand,
        redCorrect, redTotal, redBand,
        wriBand, spkBand,
        t1Words, t2Words, recordedCount,
        isAiGradedWriting,
        overallBand,
        overallSubtitle,
        allReview: [...lisReview, ...redReview]
    };

    ieltsTestSubmitted = true;
    saveIeltsProgress();
    renderIeltsSkillContent();

    if (showModal) {
        showIeltsResultsModal();
    }
}

// Display modal score report & detailed explanations
function showIeltsResultsModal() {
    if (!ieltsTestScoreResult) return;
    const modal = document.getElementById('ielts-result-modal');
    const body = document.getElementById('ielts-result-body');
    if (!modal || !body) return;

    const res = ieltsTestScoreResult;
    let levelTitle = "Competent User (B2)";
    if (res.overallBand >= 8.5) levelTitle = "Expert User (C2)";
    else if (res.overallBand >= 7.5) levelTitle = "Very Good User (C1+)";
    else if (res.overallBand >= 6.5) levelTitle = "Good User (B2/C1)";
    else if (res.overallBand >= 5.5) levelTitle = "Competent User (B2)";
    else if (res.overallBand >= 4.5) levelTitle = "Modest User (B1)";
    else levelTitle = "Limited User (A2/B1)";

    let reviewItemsHtml = '';
    res.allReview.forEach(item => {
        reviewItemsHtml += `
            <div class="p-3.5 rounded-2xl ${item.isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'} border text-xs leading-relaxed transition">
                <div class="flex items-start justify-between gap-2 mb-1.5">
                    <span class="font-bold text-slate-800">
                        <span class="px-2 py-0.5 rounded-full ${item.skill === 'Listening' ? 'bg-indigo-100 text-indigo-800' : 'bg-amber-100 text-amber-800'} text-[10px] mr-1.5 font-bold">${item.skill} P${item.part}</span>
                        Question ${item.id}: ${item.prompt}
                    </span>
                    <span class="px-2 py-0.5 rounded-full font-bold text-[10px] shrink-0 ${item.isCorrect ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'}">
                        ${item.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] mb-2 font-mono">
                    <div class="p-1.5 rounded-lg bg-white border ${item.isCorrect ? 'border-emerald-200 text-emerald-900' : 'border-rose-200 text-rose-900'}">
                        <strong>Your Answer:</strong> ${escapeHtml(item.userAns)}
                    </div>
                    <div class="p-1.5 rounded-lg bg-white border border-slate-200 text-indigo-950 font-bold">
                        <strong>Official Answer:</strong> ${item.correctAns}
                    </div>
                </div>

                <div class="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-[11px] text-slate-700">
                    <p class="font-bold text-slate-900 mb-1">🔍 Reading / Audio Evidence:</p>
                    <p class="italic text-slate-600 bg-slate-50 p-1.5 rounded border border-slate-100 mb-1">"${item.evidence}"</p>
                    <p class="text-slate-800">💡 <strong>Detailed Explanation:</strong> ${item.explanation}</p>
                </div>
            </div>
        `;
    });

    body.innerHTML = `
        <!-- OVERALL SCOREBOARD HEADER -->
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-3">
            <!-- OVERALL BAND BADGE -->
            <div class="sm:col-span-2 p-5 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white flex flex-col items-center justify-center text-center shadow-lg border border-indigo-700/50">
                <span class="text-[11px] font-bold uppercase tracking-wider text-amber-300">IELTS OVERALL BAND</span>
                <div class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 my-1 font-mono">
                    ${res.overallBand.toFixed(1)}
                </div>
                <span class="text-xs font-extrabold text-white bg-white/10 px-3 py-0.5 rounded-full border border-white/20">${levelTitle}</span>
                <span class="text-[10px] text-indigo-200/80 mt-1.5">${res.overallSubtitle}</span>
            </div>

            <!-- 4 SKILLS CARDS -->
            <div class="sm:col-span-3 grid grid-cols-2 gap-2">
                <div class="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col justify-between">
                    <span class="text-[10px] font-bold text-indigo-700 uppercase">🎧 Listening</span>
                    <div class="flex items-baseline justify-between mt-1">
                        <span class="text-2xl font-black text-indigo-950 font-mono">${res.lisBand.toFixed(1)}</span>
                        <span class="text-xs text-indigo-700 font-bold">${res.lisCorrect}/${res.lisTotal} correct</span>
                    </div>
                </div>

                <div class="p-3 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
                    <span class="text-[10px] font-bold text-amber-800 uppercase">📖 Reading</span>
                    <div class="flex items-baseline justify-between mt-1">
                        <span class="text-2xl font-black text-amber-950 font-mono">${res.redBand.toFixed(1)}</span>
                        <span class="text-xs text-amber-800 font-bold">${res.redCorrect}/${res.redTotal} correct</span>
                    </div>
                </div>

                <div class="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold text-emerald-800 uppercase">✍️ Writing</span>
                        ${res.isAiGradedWriting ? '<span class="text-[9px] bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded-full font-black">AI Graded 🤖</span>' : ''}
                    </div>
                    <div class="flex items-baseline justify-between mt-1">
                        <span class="text-2xl font-black ${res.wriBand > 0 ? 'text-emerald-950' : 'text-slate-400'} font-mono">${res.wriBand.toFixed(1)}</span>
                        <span class="text-xs ${res.wriBand > 0 ? 'text-emerald-700' : 'text-slate-400'} font-bold">
                            ${res.wriBand === 0 ? 'Not completed' : (res.isAiGradedWriting ? 'Gemini AI' : `${res.t1Words + res.t2Words} words`)}
                        </span>
                    </div>
                </div>

                <div class="p-3 rounded-2xl bg-fuchsia-50 border border-fuchsia-200 flex flex-col justify-between">
                    <span class="text-[10px] font-bold text-fuchsia-800 uppercase">🗣️ Speaking</span>
                    <div class="flex items-baseline justify-between mt-1">
                        <span class="text-2xl font-black ${res.spkBand > 0 ? 'text-fuchsia-950' : 'text-slate-400'} font-mono">${res.spkBand.toFixed(1)}</span>
                        <span class="text-xs ${res.spkBand > 0 ? 'text-fuchsia-700' : 'text-slate-400'} font-bold">
                            ${res.spkBand === 0 ? 'Not recorded' : `Recorded ${res.recordedCount} parts`}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- REVIEW LIST -->
        <div class="space-y-3 pt-2">
            <h3 class="font-extrabold text-sm sm:text-base text-slate-900 flex items-center justify-between">
                <span>Detailed Answer Review & Explanations</span>
                <span class="text-xs font-bold text-slate-500">Total: ${res.allReview.length} questions</span>
            </h3>
            <div class="space-y-2.5">
                ${reviewItemsHtml}
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeIeltsResultModal() {
    const modal = document.getElementById('ielts-result-modal');
    if (modal) modal.classList.add('hidden');
}

function resetIeltsTest() {
    if (!confirm("Are you sure you want to reset all answers and retake this test?")) return;
    ieltsUserAnswers = { listening: {}, reading: {}, writing: { task_1: '', task_2: '' }, speaking: {} };
    ieltsTestSubmitted = false;
    ieltsTestScoreResult = null;
    ieltsTimerSeconds = 2 * 3600 + 45 * 60;
    ieltsTestStarted = false;
    if (ieltsTimerInterval) clearInterval(ieltsTimerInterval);
    saveIeltsProgress();
    updateIeltsTimerDisplay();
    updateIeltsStartButtonUI();
    closeIeltsResultModal();
    renderIeltsSkillContent();
}

// Utility functions
function countWords(str) {
    if (!str) return 0;
    return str.trim().split(/\s+/).filter(Boolean).length;
}

function escapeHtml(text) {
    if (!text) return '';
    return text.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeQuotes(text) {
    if (!text) return '';
    return text.toString().replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ==========================================
// KEYBOARD SHORTCUT: PRESS ESC TO CLOSE SCORE REPORT
// ==========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        const resultModal = document.getElementById('ielts-result-modal');
        if (resultModal && !resultModal.classList.contains('hidden')) {
            e.preventDefault();
            closeIeltsResultModal();
            return;
        }

        const geminiModal = document.getElementById('gemini-key-modal');
        if (geminiModal && !geminiModal.classList.contains('hidden')) {
            e.preventDefault();
            closeGeminiApiKeyModal();
            return;
        }
    }
});
