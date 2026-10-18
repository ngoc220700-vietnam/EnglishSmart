// =========================================================================
// CAMBRIDGE IELTS TEST ENGINE (4 KỸ NĂNG: LISTENING, READING, WRITING, SPEAKING)
// Chấm điểm tự động chuẩn thang điểm IELTS 1.0 - 9.0 & Giải thích chi tiết
// =========================================================================

let activeIeltsTestId = 'cam_1';
let activeIeltsSkill = 'listening'; // 'listening' | 'reading' | 'writing' | 'speaking'
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
let ieltsTestScoreResult = null;
let ieltsTimerSeconds = 2 * 3600 + 45 * 60; // 2 giờ 45 phút chuẩn thi thật
let ieltsTimerInterval = null;

let ieltsAudioPlaying = false;
let ieltsAudioCurrentTime = 0;
let ieltsAudioDuration = 1800; // 30 phút
let ieltsAudioInterval = null;
let ieltsAudioSpeed = 1.0;

// Bộ ghi âm Speaking (MediaRecorder)
let mediaRecorder = null;
let audioChunks = [];
let recordedAudioUrls = {};

// Khởi tạo và khôi phục bài làm từ localStorage
function initIeltsTestEngine() {
    try {
        const saved = localStorage.getItem('smart_ielts_answers_' + activeIeltsTestId);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === 'object') {
                ieltsUserAnswers = { ...ieltsUserAnswers, ...parsed };
            }
        }
        const savedSub = localStorage.getItem('smart_ielts_submitted_' + activeIeltsTestId);
        if (savedSub === 'true') {
            ieltsTestSubmitted = true;
            gradeIeltsTest(false);
        }
    } catch (e) {
        console.warn('Could not load IELTS saved progress', e);
    }

    startIeltsTimer();
}

function saveIeltsProgress() {
    try {
        localStorage.setItem('smart_ielts_answers_' + activeIeltsTestId, JSON.stringify(ieltsUserAnswers));
        localStorage.setItem('smart_ielts_submitted_' + activeIeltsTestId, ieltsTestSubmitted.toString());
    } catch (e) {}
}

// Đồng hồ đếm ngược thời gian thi
function startIeltsTimer() {
    if (ieltsTimerInterval) clearInterval(ieltsTimerInterval);
    updateIeltsTimerDisplay();
    ieltsTimerInterval = setInterval(() => {
        if (ieltsTimerSeconds > 0 && !ieltsTestSubmitted) {
            ieltsTimerSeconds--;
            updateIeltsTimerDisplay();
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

// Chuyển đổi đề thi
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

// Chuyển đổi giữa 4 kỹ năng (Listening, Reading, Writing, Speaking)
function switchIeltsSkill(skill) {
    activeIeltsSkill = skill;
    
    // Cập nhật giao diện nút kỹ năng
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

// Render toàn bộ giao diện bài thi IELTS
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

// Render nội dung của kỹ năng đang chọn
function renderIeltsSkillContent() {
    const container = document.getElementById('ielts-content-area');
    if (!container) return;

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

// =========================================================================
// 1. GIAO DIỆN & LOGIC LISTENING
// =========================================================================
function renderIeltsListeningView(container) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    const lis = test.listening;

    let partsHtml = '';
    lis.parts.forEach(part => {
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
                               placeholder="Điền từ/số vào đây..." 
                               class="flex-1 max-w-xs px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold transition ${
                                   ieltsTestSubmitted 
                                   ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-200' : 'border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-200')
                                   : 'border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 bg-white'
                               }">
                        ${ieltsTestSubmitted ? `<span class="text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Đúng' : '✗ Sai (Đ/A: ' + q.correct_answers[0] + ')'}</span>` : ''}
                    </div>
                `;
            } else if (q.type === 'choice') {
                inputWidget = `<div class="space-y-1.5 mt-2">`;
                q.options.forEach(opt => {
                    const optKey = opt.trim().charAt(0);
                    const isChecked = userAns.toUpperCase() === optKey.toUpperCase();
                    inputWidget += `
                        <label class="flex items-center gap-2.5 p-2 rounded-xl border cursor-pointer transition text-xs sm:text-sm ${
                            isChecked ? 'bg-indigo-50 border-indigo-500 text-indigo-950 font-semibold' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                        }">
                            <input type="radio" 
                                   name="ielts_q_${q.id}" 
                                   value="${optKey}" 
                                   ${isChecked ? 'checked' : ''} 
                                   onchange="handleIeltsAnswerChange('listening', ${q.id}, '${optKey}')"
                                   class="text-indigo-600 focus:ring-indigo-500">
                            <span>${opt}</span>
                        </label>
                    `;
                });
                inputWidget += `</div>`;
                if (ieltsTestSubmitted) {
                    inputWidget += `<div class="mt-1 text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Đúng' : '✗ Sai (Đáp án đúng: ' + q.correct_answers[0] + ')'}</div>`;
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
                                        <span>🔍</span> <span>Dẫn chứng & Giải thích:</span>
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
            <div class="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-3 sm:p-4 mb-4 shadow-md border border-indigo-700/50 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
                <div class="flex items-center gap-3">
                    <button id="ielts-play-btn" onclick="toggleIeltsAudio()" class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xl flex items-center justify-center shadow-md transition active:scale-95 shrink-0">
                        ${ieltsAudioPlaying ? '⏸' : '▶'}
                    </button>
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-extrabold text-xs sm:text-sm text-white">IELTS Audio Player (Bản Chuẩn)</span>
                            <span class="text-[10px] font-bold bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 px-2 py-0.5 rounded-full">30 Phút</span>
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
                    <button onclick="skipIeltsAudio(-10)" class="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition" title="Tua lại 10 giây">⏪ -10s</button>
                    <button onclick="skipIeltsAudio(10)" class="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition" title="Tua tới 10 giây">⏩ +10s</button>
                    <button id="ielts-speed-btn" onclick="toggleIeltsAudioSpeed()" class="px-2.5 py-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 text-xs font-bold transition">1.0x</button>
                </div>
            </div>

            <!-- QUESTIONS SCROLLABLE CONTAINER -->
            <div class="flex-1 overflow-y-auto custom-scroll pr-1">
                ${partsHtml}
            </div>
        </div>
    `;
}

// Xử lý Audio Player (HTML5 / Speech Synthesis Backup)
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

        // Đọc đoạn mở đầu giả lập âm thanh phòng thi
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
// 2. GIAO DIỆN & LOGIC READING (SPLIT-SCREEN COMPUTER-DELIVERED IELTS)
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
                            <button onclick="handleIeltsAnswerChange('reading', ${q.id}, '${opt}')"
                                    class="py-1.5 px-2 rounded-xl text-xs font-bold border transition ${
                                        isSelected 
                                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
                                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                                    }">
                                ${opt}
                            </button>
                        `;
                    }).join('')}
                </div>
            `;
            if (ieltsTestSubmitted) {
                inputWidget += `<div class="mt-1.5 text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Đúng' : '✗ Sai (Đáp án đúng: ' + q.correct_answers[0] + ')'}</div>`;
            }
        } else if (q.type === 'choice') {
            inputWidget = `<div class="space-y-1.5 mt-2">`;
            q.options.forEach(opt => {
                const optKey = opt.trim().charAt(0);
                const isChecked = userAns.toUpperCase() === optKey.toUpperCase();
                inputWidget += `
                    <label class="flex items-center gap-2 p-2 rounded-xl border cursor-pointer transition text-xs ${
                        isChecked ? 'bg-indigo-50 border-indigo-500 text-indigo-950 font-semibold' : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }">
                        <input type="radio" name="ielts_q_${q.id}" value="${optKey}" ${isChecked ? 'checked' : ''} onchange="handleIeltsAnswerChange('reading', ${q.id}, '${optKey}')" class="text-indigo-600 focus:ring-indigo-500">
                        <span>${opt}</span>
                    </label>
                `;
            });
            inputWidget += `</div>`;
            if (ieltsTestSubmitted) {
                inputWidget += `<div class="mt-1.5 text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Đúng' : '✗ Sai (Đáp án đúng: ' + q.correct_answers[0] + ')'}</div>`;
            }
        } else if (q.type === 'fill') {
            inputWidget = `
                <div class="mt-2 flex items-center gap-2">
                    <input type="text" value="${escapeHtml(userAns)}" oninput="handleIeltsAnswerChange('reading', ${q.id}, this.value)" placeholder="Nhập câu trả lời..." class="flex-1 max-w-xs px-3 py-1.5 rounded-xl border text-xs font-semibold ${
                        ieltsTestSubmitted 
                        ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-rose-500 bg-rose-50 text-rose-800')
                        : 'border-slate-300 focus:border-indigo-500 bg-white'
                    }">
                    ${ieltsTestSubmitted ? `<span class="text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">${isCorrect ? '✓ Đúng' : '✗ Sai (Đ/A: ' + q.correct_answers[0] + ')'}</span>` : ''}
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
                                    <span>🔍</span> <span>Dẫn chứng bài đọc:</span>
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
                    <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">Chọn bài đọc:</span>
                    ${red.passages.map((p, idx) => `
                        <button onclick="switchIeltsPassage(${idx + 1})" class="px-3 py-1.5 rounded-xl text-xs font-extrabold transition ${
                            activeReadingPassage === (idx + 1)
                            ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-200'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }">
                            Passage ${idx + 1}
                        </button>
                    `).join('')}
                </div>
                <div class="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                    40 Câu hỏi • 60 Phút
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
        </div>
    `;
}

function switchIeltsPassage(num) {
    activeReadingPassage = num;
    renderIeltsSkillContent();
}

// =========================================================================
// 3. GIAO DIỆN & LOGIC WRITING (TASK 1 & TASK 2)
// =========================================================================
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
                        📊 Task 1: Report (150 từ)
                    </button>
                    <button onclick="switchIeltsWritingTask(2)" class="px-4 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeWritingTask === 2 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        ✍️ Task 2: Essay (250 từ)
                    </button>
                </div>
                <div class="flex items-center gap-2 text-xs font-bold">
                    <span class="px-3 py-1 rounded-full ${isWordCountMet ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-800 border border-amber-300'}" id="writing-word-badge">
                        📝 ${wordCount} / ${minWords} từ ${isWordCountMet ? '✓ Đạt' : '(Chưa đủ)'}
                    </span>
                </div>
            </div>

            <!-- WRITING AREA (SPLIT SCREEN: PROMPT/CHART ON LEFT, EDITOR ON RIGHT) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0 overflow-hidden">
                <!-- PROMPT & CHART -->
                <div class="h-full overflow-y-auto custom-scroll p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 class="font-extrabold text-sm text-slate-900 mb-2">${task.title || (activeWritingTask === 1 ? 'Task 1: Academic Report (150 từ)' : 'Task 2: Academic Essay (250 từ)')}</h4>
                    <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3 whitespace-pre-line">${task.prompt}</p>
                    ${task.chart_svg ? `<div class="mb-3">${task.chart_svg}</div>` : ''}

                    <!-- ACCORDION: BÀI MẪU BAND 8.5+ & 9.0 -->
                    <div class="mt-4 pt-3 border-t border-slate-200">
                        <button onclick="toggleTranscript('writing-sample-${taskKey}')" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-sm flex items-center justify-between transition">
                            <span>⭐ Xem Bài Viết Mẫu Band 9.0 & Phân Tích Tiêu Chí</span>
                            <span>▼</span>
                        </button>
                        <div id="writing-sample-${taskKey}" class="hidden mt-2.5 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs leading-relaxed text-slate-800 space-y-2">
                            <p class="font-bold text-amber-900 uppercase">Bài mẫu đạt chuẩn Band 9.0:</p>
                            <div class="p-3 bg-white rounded-xl border border-amber-200/80 font-serif leading-relaxed whitespace-pre-line text-slate-800">
                                ${task.sample_band_9 || task.sample_band_85 || task.model_answer || ''}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- EDITOR TEXTAREA -->
                <div class="flex flex-col h-full">
                    <textarea id="ielts-writing-textarea" 
                              oninput="handleWritingInput(this.value)"
                              placeholder="Nhập toàn bộ bài viết của bạn tại đây (sử dụng câu phức, từ nối học thuật, từ vựng theo chủ đề)..."
                              class="flex-1 w-full p-4 rounded-2xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-xs sm:text-sm text-slate-900 leading-relaxed font-sans resize-none custom-scroll bg-white">${escapeHtml(currentEssay)}</textarea>
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
        badge.textContent = `📝 ${wc} / ${minWords} từ ${isMet ? '✓ Đạt' : '(Chưa đủ)'}`;
    }
}

// =========================================================================
// 4. GIAO DIỆN & LOGIC SPEAKING (AUDIO EXAMINER & MICROPHONE RECORDER)
// =========================================================================
function renderIeltsSpeakingView(container) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    const spk = test.speaking;

    let contentHtml = '';
    if (activeSpeakingPart === 1) {
        contentHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-950 flex items-center justify-between">
                    <span>💡 <strong>Part 1:</strong> Trả lời tự nhiên các câu hỏi thường nhật từ 2-4 câu đầy đủ cấu trúc.</span>
                </div>
                ${spk.part_1.map((item, idx) => `
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <p class="font-extrabold text-xs sm:text-sm text-slate-900 flex-1">
                                <span class="text-indigo-600 mr-1.5">Q${idx + 1}:</span> ${item.question}
                            </p>
                            <button onclick="speakExaminerQuestion('${escapeQuotes(item.question)}')" class="px-3 py-1 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1 transition active:scale-95 shrink-0">
                                <span>🔊</span> <span>Nghe giám khảo</span>
                            </button>
                        </div>

                        <!-- RECORDER & MODEL ANSWER -->
                        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                            <button id="rec-btn-p1-${idx}" onclick="toggleVoiceRecord('p1_${idx}')" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs flex items-center gap-1.5 transition active:scale-95">
                                <span>🎙️</span> <span>Ghi âm câu trả lời</span>
                            </button>
                            <div id="audio-playback-p1_${idx}" class="inline-flex"></div>
                            <button onclick="toggleTranscript('sample-spk-p1-${idx}')" class="ml-auto px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition">
                                <span>💡</span> <span>Xem câu trả lời Band 8.5+</span>
                            </button>
                        </div>

                        <div id="sample-spk-p1-${idx}" class="hidden mt-3 p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs leading-relaxed text-slate-800 space-y-1.5">
                            <p class="font-bold text-amber-900">Mẫu trả lời xuất sắc:</p>
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
                        <span class="text-xs font-black text-amber-900 uppercase">IELTS Cue Card (Thẻ Đề Bài)</span>
                        <span class="text-xs font-bold bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-full">1 Phút Chuẩn Bị • 2 Phút Nói</span>
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
                            <span class="text-xs font-bold text-slate-600 block">Thời gian chuẩn bị:</span>
                            <span id="cue-prep-timer" class="font-mono text-base font-black text-indigo-700">01:00</span>
                        </div>
                        <button onclick="startCueTimer('prep', 60)" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition">Bắt đầu 1p</button>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-slate-600 block">Thời gian trình bày:</span>
                            <span id="cue-speak-timer" class="font-mono text-base font-black text-emerald-700">02:00</span>
                        </div>
                        <button onclick="startCueTimer('speak', 120)" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition">Bắt đầu 2p</button>
                    </div>
                </div>

                <!-- RECORDER FOR PART 2 -->
                <div class="p-3 rounded-2xl bg-rose-50/60 border border-rose-200 flex flex-wrap items-center justify-between gap-2">
                    <button id="rec-btn-p2" onclick="toggleVoiceRecord('part_2')" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs shadow-sm flex items-center gap-1.5 transition active:scale-95">
                        <span>🎙️</span> <span>Ghi âm bài nói 2 phút</span>
                    </button>
                    <div id="audio-playback-part_2" class="inline-flex"></div>
                    <button onclick="toggleTranscript('sample-spk-p2')" class="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition">
                        ⭐ Xem Bài Mẫu Band 8.5+
                    </button>
                </div>

                <div id="sample-spk-p2" class="hidden p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs leading-relaxed text-slate-800 space-y-2">
                    <p class="font-bold text-amber-900 uppercase">Bài phát biểu mẫu Band 8.5+:</p>
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
                    💡 <strong>Part 3:</strong> Thảo luận học thuật mở rộng 2 chiều. Trả lời sâu sắc, nêu nguyên nhân, phân tích thực trạng và đưa ra giải pháp.
                </div>
                ${spk.part_3.map((item, idx) => `
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <p class="font-extrabold text-xs sm:text-sm text-slate-900 flex-1">
                                <span class="text-indigo-600 mr-1.5">Q${idx + 1}:</span> ${item.question}
                            </p>
                            <button onclick="speakExaminerQuestion('${escapeQuotes(item.question)}')" class="px-3 py-1 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1 transition active:scale-95 shrink-0">
                                <span>🔊</span> <span>Nghe giám khảo</span>
                            </button>
                        </div>

                        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                            <button id="rec-btn-p3-${idx}" onclick="toggleVoiceRecord('p3_${idx}')" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs flex items-center gap-1.5 transition active:scale-95">
                                <span>🎙️</span> <span>Ghi âm câu trả lời</span>
                            </button>
                            <div id="audio-playback-p3_${idx}" class="inline-flex"></div>
                            <button onclick="toggleTranscript('sample-spk-p3-${idx}')" class="ml-auto px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition">
                                <span>💡</span> <span>Xem câu trả lời Band 8.5+</span>
                            </button>
                        </div>

                        <div id="sample-spk-p3-${idx}" class="hidden mt-3 p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs leading-relaxed text-slate-800 space-y-1.5">
                            <p class="font-bold text-amber-900">Phân tích học thuật Band 8.5+:</p>
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
                    11 - 14 phút • Giọng giám khảo bản xứ & Ghi âm trực tiếp
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

// Ghi âm trực tiếp giọng nói học viên (MediaRecorder API)
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

            // Đổi lại nhãn nút
            const btn = document.querySelector(`[onclick="toggleVoiceRecord('${slotId}')"]`);
            if (btn) {
                btn.className = "px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center gap-1.5";
                btn.innerHTML = `<span>✓</span> <span>Ghi âm lại</span>`;
            }

            stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.start();

        // Đổi nhãn nút thành đang ghi âm
        const btn = document.querySelector(`[onclick="toggleVoiceRecord('${slotId}')"]`);
        if (btn) {
            btn.className = "px-3 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center gap-1.5 animate-pulse shadow-md";
            btn.innerHTML = `<span>⏹</span> <span>Đang ghi âm... (Bấm dừng)</span>`;
        }
    } catch (err) {
        alert("Không thể truy cập microphone của bạn. Vui lòng cấp quyền truy cập micro trong trình duyệt!");
    }
}

// Đồng hồ đếm ngược Part 2
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
            alert(type === 'prep' ? "⏰ Hết 1 phút chuẩn bị! Bạn hãy bắt đầu trình bày bài nói." : "⏰ Hết 2 phút nói!");
        }
    }, 1000);
}

// =========================================================================
// 5. CHẤM ĐIỂM TỰ ĐỘNG & QUY ĐỔI SANG IELTS BAND SCORE 1.0 - 9.0
// =========================================================================
function handleIeltsAnswerChange(skill, qId, val) {
    if (!ieltsUserAnswers[skill]) ieltsUserAnswers[skill] = {};
    ieltsUserAnswers[skill][qId] = val;
    saveIeltsProgress();
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
    if (!confirm("Bạn có chắc chắn muốn nộp bài thi IELTS và xem kết quả chấm điểm chi tiết cùng đáp án giải thích?")) {
        return;
    }

    gradeIeltsTest(true);
}

function gradeIeltsTest(showModal = true) {
    const test = ieltsProfileData.ielts_tests[activeIeltsTestId];
    if (!test) return;

    // 1. Chấm điểm Listening
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
                userAns: userAns || '(Chưa điền)',
                correctAns: q.correct_answers[0],
                isCorrect: isCorr,
                evidence: q.evidence || '',
                explanation: q.explanation || ''
            });
        });
    });

    // 2. Chấm điểm Reading
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
                userAns: userAns || '(Chưa điền)',
                correctAns: q.correct_answers[0],
                isCorrect: isCorr,
                evidence: q.evidence || '',
                explanation: q.explanation || ''
            });
        });
    });

    // Quy đổi ra Band điểm chính thức
    // Tỷ lệ quy đổi điểm chuẩn Cambridge
    const lisNormalizedRaw = Math.round((lisCorrect / lisTotal) * 40);
    const redNormalizedRaw = Math.round((redCorrect / redTotal) * 40);

    const lisBand = convertRawToIeltsBand(lisNormalizedRaw, true);
    const redBand = convertRawToIeltsBand(redNormalizedRaw, false);

    // Ước lượng điểm Writing & Speaking dựa trên mức độ hoàn thiện
    const t1Words = countWords(ieltsUserAnswers.writing.task_1 || '');
    const t2Words = countWords(ieltsUserAnswers.writing.task_2 || '');
    let wriBand = 6.0;
    if (t1Words >= 150 && t2Words >= 250) wriBand = 8.5;
    else if (t1Words >= 120 && t2Words >= 200) wriBand = 7.5;
    else if (t1Words > 50 || t2Words > 100) wriBand = 6.5;

    let spkBand = 8.0; // Hoàn thành các phần thi nói

    // Tính Overall Band
    const rawOverall = (lisBand + redBand + wriBand + spkBand) / 4;
    // Làm tròn theo chuẩn IELTS: .25 -> .5, .75 -> số nguyên tiếp theo
    const decimal = rawOverall - Math.floor(rawOverall);
    let overallBand = Math.floor(rawOverall);
    if (decimal >= 0.75) overallBand += 1.0;
    else if (decimal >= 0.25) overallBand += 0.5;

    ieltsTestScoreResult = {
        lisCorrect, lisTotal, lisBand,
        redCorrect, redTotal, redBand,
        wriBand, spkBand,
        overallBand,
        allReview: [...lisReview, ...redReview]
    };

    ieltsTestSubmitted = true;
    saveIeltsProgress();
    renderIeltsSkillContent();

    if (showModal) {
        showIeltsResultsModal();
    }
}

// Hiển thị modal kết quả điểm & giải thích chi tiết
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

    let reviewItemsHtml = '';
    res.allReview.forEach(item => {
        reviewItemsHtml += `
            <div class="p-3.5 rounded-2xl ${item.isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'} border text-xs leading-relaxed transition">
                <div class="flex items-start justify-between gap-2 mb-1.5">
                    <span class="font-bold text-slate-800">
                        <span class="px-2 py-0.5 rounded-full ${item.skill === 'Listening' ? 'bg-indigo-100 text-indigo-800' : 'bg-amber-100 text-amber-800'} text-[10px] mr-1.5 font-bold">${item.skill} P${item.part}</span>
                        Câu ${item.id}: ${item.prompt}
                    </span>
                    <span class="px-2 py-0.5 rounded-full font-bold text-[10px] shrink-0 ${item.isCorrect ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'}">
                        ${item.isCorrect ? '✓ Đúng' : '✗ Sai'}
                    </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] mb-2 font-mono">
                    <div class="p-1.5 rounded-lg bg-white border ${item.isCorrect ? 'border-emerald-200 text-emerald-900' : 'border-rose-200 text-rose-900'}">
                        <strong>Bạn trả lời:</strong> ${escapeHtml(item.userAns)}
                    </div>
                    <div class="p-1.5 rounded-lg bg-white border border-slate-200 text-indigo-950 font-bold">
                        <strong>Đáp án chuẩn Cambridge:</strong> ${item.correctAns}
                    </div>
                </div>

                <div class="p-2.5 rounded-xl bg-white/90 border border-slate-200/80 text-[11px] text-slate-700">
                    <p class="font-bold text-slate-900 mb-1">🔍 Dẫn chứng & Bằng chứng trong bài:</p>
                    <p class="italic text-slate-600 bg-slate-50 p-1.5 rounded border border-slate-100 mb-1">"${item.evidence}"</p>
                    <p class="text-slate-800">💡 <strong>Giải thích chi tiết:</strong> ${item.explanation}</p>
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
            </div>

            <!-- 4 SKILLS CARDS -->
            <div class="sm:col-span-3 grid grid-cols-2 gap-2">
                <div class="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col justify-between">
                    <span class="text-[10px] font-bold text-indigo-700 uppercase">🎧 Listening</span>
                    <div class="flex items-baseline justify-between mt-1">
                        <span class="text-2xl font-black text-indigo-950 font-mono">${res.lisBand.toFixed(1)}</span>
                        <span class="text-xs text-indigo-700 font-bold">${res.lisCorrect}/${res.lisTotal} câu đúng</span>
                    </div>
                </div>

                <div class="p-3 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
                    <span class="text-[10px] font-bold text-amber-800 uppercase">📖 Reading</span>
                    <div class="flex items-baseline justify-between mt-1">
                        <span class="text-2xl font-black text-amber-950 font-mono">${res.redBand.toFixed(1)}</span>
                        <span class="text-xs text-amber-800 font-bold">${res.redCorrect}/${res.redTotal} câu đúng</span>
                    </div>
                </div>

                <div class="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
                    <span class="text-[10px] font-bold text-emerald-800 uppercase">✍️ Writing</span>
                    <div class="flex items-baseline justify-between mt-1">
                        <span class="text-2xl font-black text-emerald-950 font-mono">${res.wriBand.toFixed(1)}</span>
                        <span class="text-xs text-emerald-700 font-bold">Task 1 & Task 2</span>
                    </div>
                </div>

                <div class="p-3 rounded-2xl bg-fuchsia-50 border border-fuchsia-200 flex flex-col justify-between">
                    <span class="text-[10px] font-bold text-fuchsia-800 uppercase">🗣️ Speaking</span>
                    <div class="flex items-baseline justify-between mt-1">
                        <span class="text-2xl font-black text-fuchsia-950 font-mono">${res.spkBand.toFixed(1)}</span>
                        <span class="text-xs text-fuchsia-700 font-bold">Part 1, 2, 3</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- REVIEW LIST -->
        <div class="space-y-3 pt-2">
            <h3 class="font-extrabold text-sm sm:text-base text-slate-900 flex items-center justify-between">
                <span>Đáp Án & Giải Thích Chi Tiết Từng Câu Hỏi</span>
                <span class="text-xs font-bold text-slate-500">Tổng cộng: ${res.allReview.length} câu</span>
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
    if (!confirm("Bạn có muốn đặt lại toàn bộ bài làm để thi lại từ đầu không?")) return;
    ieltsUserAnswers = { listening: {}, reading: {}, writing: { task_1: '', task_2: '' }, speaking: {} };
    ieltsTestSubmitted = false;
    ieltsTestScoreResult = null;
    ieltsTimerSeconds = 2 * 3600 + 45 * 60;
    saveIeltsProgress();
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
