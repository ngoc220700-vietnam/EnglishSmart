// =========================================================================
// CAMBRIDGE STARTERS TEST ENGINE (PRE-A1 STARTERS 1 - 4)
// OFFICIAL CAMBRIDGE SHIELDS SCORING (MAXIMUM 15 SHIELDS)
// ALL 3 SKILLS: LISTENING - READING & WRITING - SPEAKING
// 100% ENGLISH INTERFACE & INTERACTIVE DRAG-AND-DROP LINE MATCHING TOOL
// =========================================================================

let activeStartersTestId = 'starters_1_test_1';
let activeStartersSkill = 'listening'; // 'listening' | 'reading_writing' | 'speaking'
let activeStartersLisPart = 1; // 1, 2, 3, 4
let activeStartersRwPart = 1;  // 1, 2, 3, 4, 5
let activeStartersSpkPart = 1; // 1, 2, 3, 4

let startersUserAnswers = {
    listening: {},
    reading_writing: {},
    speaking: {}
};

let startersRecordedAudioUrls = {};
let startersMediaRecorder = null;
let startersAudioChunks = [];

let startersTimerInterval = null;
let startersTimerSeconds = 45 * 60; // 45 minutes for Starters test
let startersTestSubmitted = false;
let startersTestScoreResult = null;

const STARTERS_STORAGE_KEY_PREFIX = 'smart_starters_progress_';

function escapeQuotes(text) {
    if (!text) return '';
    return text.toString().replace(/'/g, "\\'").replace(/"/g, '&quot;');
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

// 1. INITIALIZE TEST ENGINE
function initStartersTestEngine() {
    loadStartersProgress();
    startStartersTimer();
}

function loadStartersProgress() {
    try {
        const saved = localStorage.getItem(STARTERS_STORAGE_KEY_PREFIX + activeStartersTestId);
        if (saved) {
            const data = JSON.parse(saved);
            startersUserAnswers = data.answers || { listening: {}, reading_writing: {}, speaking: {} };
            startersTestSubmitted = !!data.submitted;
            startersTimerSeconds = (typeof data.timer === 'number') ? data.timer : 45 * 60;
            startersTestScoreResult = data.result || null;
        } else {
            startersUserAnswers = { listening: {}, reading_writing: {}, speaking: {} };
            startersTestSubmitted = false;
            startersTimerSeconds = 45 * 60;
            startersTestScoreResult = null;
        }
    } catch(e) {
        console.error("Error loading Starters progress:", e);
    }
}

function saveStartersProgress() {
    try {
        const data = {
            answers: startersUserAnswers,
            submitted: startersTestSubmitted,
            timer: startersTimerSeconds,
            result: startersTestScoreResult
        };
        localStorage.setItem(STARTERS_STORAGE_KEY_PREFIX + activeStartersTestId, JSON.stringify(data));
    } catch(e) {
        console.error("Error saving Starters progress:", e);
    }
}

function startStartersTimer() {
    if (startersTimerInterval) clearInterval(startersTimerInterval);
    updateStartersTimerDisplay();

    startersTimerInterval = setInterval(() => {
        if (!startersTestSubmitted && startersTimerSeconds > 0) {
            startersTimerSeconds--;
            updateStartersTimerDisplay();
            if (startersTimerSeconds % 10 === 0) saveStartersProgress();

            if (startersTimerSeconds === 0) {
                clearInterval(startersTimerInterval);
                alert("⏰ Time is up! Your Cambridge Starters test will now be graded.");
                gradeStartersTest(true);
            }
        }
    }, 1000);
}

function updateStartersTimerDisplay() {
    const badge = document.getElementById('starters-timer-badge');
    if (!badge) return;
    const m = Math.floor(startersTimerSeconds / 60);
    const s = startersTimerSeconds % 60;
    badge.textContent = `⏱️ ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// 2. SWITCH TEST & SKILL
function switchStartersTest(testId) {
    if (activeStartersTestId === testId) return;
    saveStartersProgress();
    activeStartersTestId = testId;
    activeStartersSkill = 'listening';
    activeStartersLisPart = 1;
    activeStartersRwPart = 1;
    activeStartersSpkPart = 1;
    loadStartersProgress();
    startStartersTimer();
    renderStartersTestView();
}

function switchStartersSkill(skill) {
    if (activeStartersSkill === skill) return;
    activeStartersSkill = skill;
    updateStartersSkillNavButtons();
    renderStartersSkillContent();
}

function updateStartersSkillNavButtons() {
    const skills = ['listening', 'reading_writing', 'speaking'];
    skills.forEach(s => {
        const btn = document.getElementById(`starters-nav-${s}`);
        if (!btn) return;
        if (s === activeStartersSkill) {
            btn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition shadow-xs flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white";
        } else {
            btn.className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5";
        }
    });
}

// 3. RENDER MAIN INTERFACE
function renderStartersTestView() {
    const container = document.getElementById('starters-test-view');
    if (!container) return;

    const test = startersProfileData.starters_tests[activeStartersTestId];
    if (!test) return;

    const select = document.getElementById('starters-test-selector');
    if (select) select.value = activeStartersTestId;

    updateStartersSkillNavButtons();
    renderStartersSkillContent();
}

function renderStartersSkillContent() {
    const contentArea = document.getElementById('starters-content-area');
    if (!contentArea) return;

    if (activeStartersSkill === 'listening') {
        renderStartersListeningView(contentArea);
    } else if (activeStartersSkill === 'reading_writing') {
        renderStartersReadingWritingView(contentArea);
    } else if (activeStartersSkill === 'speaking') {
        renderStartersSpeakingView(contentArea);
    }
}

// -------------------------------------------------------------
// IMAGE GALLERY & MODAL ZOOM
// -------------------------------------------------------------
function renderBookImageGallery(images, title = "Cambridge Starters Book Page", galleryId = "gallery-default") {
    if (!images || images.length === 0) return '';

    if (images.length === 1) {
        return `
            <div class="space-y-1.5">
                <div class="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
                    <span class="flex items-center gap-1.5 truncate">
                        <span class="text-amber-500">📖</span> <span>${title}</span>
                    </span>
                    <button onclick="openStartersImageModal('${images[0]}', '${escapeQuotes(title)}')" 
                            class="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 text-indigo-600 border border-slate-200 text-[11px] font-bold flex items-center gap-1 shadow-2xs transition active:scale-95">
                        <span>🔍</span> <span>Zoom Picture</span>
                    </button>
                </div>
                <div class="relative group cursor-zoom-in overflow-hidden rounded-xl bg-white border border-slate-200 flex justify-center items-center max-h-[460px]"
                     onclick="openStartersImageModal('${images[0]}', '${escapeQuotes(title)}')">
                    <img src="${images[0]}" 
                         onerror="if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${images[0]}';}" 
                         alt="${title}" 
                         class="max-h-[440px] w-auto max-w-full object-contain rounded-lg transition duration-200 group-hover:scale-[1.01] select-none">
                    <div class="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-slate-900/70 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition backdrop-blur-xs pointer-events-none">
                        🔍 Click to Zoom
                    </div>
                </div>
            </div>
        `;
    }

    const tabsHtml = images.map((img, i) => `
        <button onclick="switchGalleryTab('${galleryId}', ${i})"
                id="${galleryId}-tab-${i}"
                class="gallery-tab-btn px-3 py-1 rounded-lg text-xs font-extrabold transition ${i === 0 ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}">
            Page ${i + 1}
        </button>
    `).join('');

    const slidesHtml = images.map((img, i) => `
        <div id="${galleryId}-slide-${i}" 
             class="${i === 0 ? 'block' : 'hidden'} relative group cursor-zoom-in overflow-hidden rounded-xl bg-white border border-slate-200 flex justify-center items-center max-h-[460px]"
             data-src="${img}"
             onclick="openStartersImageModal('${img}', '${escapeQuotes(title)} - Page ${i + 1}')">
            <img src="${img}" 
                 onerror="if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${img}';}" 
                 alt="${title} - Page ${i + 1}" 
                 class="max-h-[440px] w-auto max-w-full object-contain rounded-lg transition duration-200 group-hover:scale-[1.01] select-none">
            <div class="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-slate-900/70 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition backdrop-blur-xs pointer-events-none">
                🔍 Click to Zoom
            </div>
        </div>
    `).join('');

    return `
        <div class="space-y-2" id="${galleryId}">
            <div class="flex items-center justify-between flex-wrap gap-2 px-1">
                <span class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span class="text-amber-500">📖</span> <span>${title}</span>
                </span>
                <div class="flex items-center gap-1.5">
                    <div class="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                        ${tabsHtml}
                    </div>
                    <button onclick="openCurrentGalleryModal('${galleryId}')" 
                            class="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 text-indigo-600 border border-slate-200 text-[11px] font-bold flex items-center gap-1 shadow-2xs transition active:scale-95 ml-1">
                        <span>🔍</span> <span>Zoom</span>
                    </button>
                </div>
            </div>
            ${slidesHtml}
        </div>
    `;
}

function switchGalleryTab(galleryId, tabIndex) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    const tabs = gallery.querySelectorAll('.gallery-tab-btn');
    tabs.forEach((tab, i) => {
        if (i === tabIndex) {
            tab.className = "gallery-tab-btn px-3 py-1 rounded-lg text-xs font-extrabold transition bg-indigo-600 text-white shadow-xs";
        } else {
            tab.className = "gallery-tab-btn px-3 py-1 rounded-lg text-xs font-extrabold transition bg-slate-100 hover:bg-slate-200 text-slate-700";
        }
    });

    const slides = gallery.querySelectorAll('[id^="' + galleryId + '-slide-"]');
    slides.forEach((slide, i) => {
        if (i === tabIndex) {
            slide.classList.remove('hidden');
            slide.classList.add('block');
        } else {
            slide.classList.add('hidden');
            slide.classList.remove('block');
        }
    });
}

function openCurrentGalleryModal(galleryId) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;
    const activeSlide = gallery.querySelector('[id^="' + galleryId + '-slide-"]:not(.hidden)');
    if (activeSlide && activeSlide.dataset.src) {
        openStartersImageModal(activeSlide.dataset.src, "Cambridge Starters Full Page View");
    }
}

function openStartersImageModal(src, title = 'Cambridge Starters Book Page') {
    let modal = document.getElementById('starters-image-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'starters-image-modal';
        modal.className = "fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 transition-opacity";
        modal.innerHTML = `
            <div class="w-full max-w-5xl flex items-center justify-between text-white mb-2 px-2">
                <div id="starters-modal-title" class="text-sm sm:text-base font-extrabold flex items-center gap-2 truncate">
                    <span>📖</span> <span>${escapeHtml(title)}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="closeStartersImageModal()" class="w-8 h-8 rounded-full bg-white/20 hover:bg-rose-600 text-white font-bold flex items-center justify-center transition active:scale-95">✕</button>
                </div>
            </div>
            <div class="relative w-full max-w-5xl flex-1 overflow-auto rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center p-2 shadow-2xl custom-scroll">
                <img id="starters-modal-img" src="${src}" alt="Full page view" class="max-h-[85vh] max-w-full object-contain rounded-lg shadow-lg select-none">
            </div>
            <p class="text-xs text-slate-400 mt-2">💡 Tip: Press <kbd class="px-1.5 py-0.5 rounded bg-white/20 text-white font-mono text-[10px]">ESC</kbd> or click outside to close</p>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) closeStartersImageModal();
        };
        document.body.appendChild(modal);
    } else {
        document.getElementById('starters-modal-title').innerHTML = `<span>📖</span> <span>${escapeHtml(title)}</span>`;
        const mImg = document.getElementById('starters-modal-img');
        mImg.dataset.triedCdn = '';
        mImg.src = src;
        modal.classList.remove('hidden');
    }
}

function closeStartersImageModal() {
    const modal = document.getElementById('starters-image-modal');
    if (modal) modal.classList.add('hidden');
}

function getStartersBookImages(test, skill, partNum) {
    if (test && test.book_images && test.book_images[skill]) {
        const key = `part_${partNum}`;
        if (test.book_images[skill][key] && test.book_images[skill][key].length > 0) {
            return test.book_images[skill][key];
        }
    }

    const testId = (test && test.id) ? test.id : (activeStartersTestId || 'starters_1_test_1');
    const parts = testId.split('_');
    const bookNum = parseInt(parts[1]) || 1;
    const testNum = parseInt(parts[3]) || 1;

    // Exact authentic book page mapping for Cambridge Starters 1-4
    // Books 1 & 2: T1 (p5-17), T2 (p18-30), T3 (p31-43)
    // Books 3 & 4: T1 (p5-18), T2 (p19-32), T3 (p33-44)
    let lisP1 = 5, lisP2 = 6, rwP2 = 13;
    if (bookNum <= 2) {
        if (testNum === 1) { lisP1 = 5; lisP2 = 6; rwP2 = 13; }
        else if (testNum === 2) { lisP1 = 18; lisP2 = 19; rwP2 = 26; }
        else if (testNum === 3) { lisP1 = 31; lisP2 = 32; rwP2 = 39; }
    } else {
        if (testNum === 1) { lisP1 = 5; lisP2 = 6; rwP2 = 13; }
        else if (testNum === 2) { lisP1 = 19; lisP2 = 20; rwP2 = 27; }
        else if (testNum === 3) { lisP1 = 33; lisP2 = 34; rwP2 = 41; }
    }

    if (skill === 'listening') {
        if (partNum === 1) return [`images/starters/book${bookNum}/page_${lisP1}_cropped.jpg`];
        if (partNum === 2) return [`images/starters/book${bookNum}/page_${lisP2}_cropped.jpg`];
        if (partNum === 3) return [`images/starters/book${bookNum}/page_${lisP2 + 2}.jpg`, `images/starters/book${bookNum}/page_${lisP2 + 3}.jpg`];
        if (partNum === 4) return [`images/starters/book${bookNum}/page_${lisP2 + 4}_cropped.jpg`];
    } else if (skill === 'reading_writing') {
        if (partNum === 1) return [`images/starters/book${bookNum}/page_${rwP2 - 2}.jpg`, `images/starters/book${bookNum}/page_${rwP2 - 1}.jpg`];
        if (partNum === 2) return [`images/starters/book${bookNum}/page_${rwP2}_cropped.jpg`];
        if (partNum === 3) return [`images/starters/book${bookNum}/page_${rwP2 + 1}.jpg`];
        if (partNum === 4) return [`images/starters/book${bookNum}/page_${rwP2 + 2}.jpg`];
        if (partNum === 5) return [
            `images/starters/book${bookNum}/page_${rwP2 + 3}.jpg`,
            `images/starters/book${bookNum}/page_${rwP2 + 4}.jpg`
        ];
    }
    return [`images/starters/book${bookNum}/page_${lisP1}_cropped.jpg`];
}

// =========================================================================
// PART 1: INTERACTIVE DRAG-AND-DROP & HOTSPOT MATCHING TOOL
// =========================================================================
let startersP1SelectedQId = 1; // ID of selected question (1 - 5)
let startersP1DraggingQId = null; // Currently dragged name badge

const P1_PALETTE = [
    { bg: "bg-rose-500", text: "text-white", border: "border-rose-500", hex: "#f43f5e" },
    { bg: "bg-indigo-500", text: "text-white", border: "border-indigo-500", hex: "#6366f1" },
    { bg: "bg-emerald-500", text: "text-white", border: "border-emerald-500", hex: "#10b981" },
    { bg: "bg-amber-500", text: "text-white", border: "border-amber-500", hex: "#f59e0b" },
    { bg: "bg-purple-500", text: "text-white", border: "border-purple-500", hex: "#a855f7" }
];

function selectStartersP1Name(qId) {
    startersP1SelectedQId = qId;
    renderStartersSkillContent();
}

function handleStartersNameDragStart(e, qId) {
    startersP1DraggingQId = qId;
    startersP1SelectedQId = qId;
    if (e.dataTransfer) {
        e.dataTransfer.setData('text/plain', String(qId));
        e.dataTransfer.effectAllowed = 'move';
    }
}

function handleStartersSpotDrop(e, spotId) {
    e.preventDefault();
    const qId = startersP1DraggingQId || startersP1SelectedQId;
    if (!qId) return;

    connectStartersP1Target(spotId, qId);
    startersP1DraggingQId = null;
}

function handleStartersSpotClick(spotId) {
    const qId = startersP1SelectedQId;
    if (!qId) return;
    connectStartersP1Target(spotId, qId);
}

function connectStartersP1Target(spotId, targetQId = null) {
    const qId = targetQId || startersP1SelectedQId;
    if (!qId) return;

    // Check if another name is already connected to this spot, disconnect it first
    for (let i = 1; i <= 5; i++) {
        if (i !== qId && startersUserAnswers.listening[i] === spotId) {
            delete startersUserAnswers.listening[i];
        }
    }

    handleStartersAnswerChange('listening', qId, spotId);

    // Auto select next unattached name
    const test = (startersProfileData && startersProfileData.starters_tests && startersProfileData.starters_tests[activeStartersTestId]) || null;
    if (test && test.listening && test.listening.parts && test.listening.parts[0]) {
        const p1 = test.listening.parts[0];
        const nextQ = p1.questions.find(q => !startersUserAnswers.listening[q.id]);
        if (nextQ) startersP1SelectedQId = nextQ.id;
    }

    renderStartersSkillContent();
}

function clearStartersP1Connection(qId) {
    if (startersUserAnswers.listening && startersUserAnswers.listening[qId]) {
        delete startersUserAnswers.listening[qId];
        saveStartersProgress();
        renderStartersSkillContent();
    }
}

// Freehand line canvas for Part 1
function initStartersP1Canvas() {
    const canvas = document.getElementById('starters-p1-canvas');
    const img = document.getElementById('starters-p1-img');
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function resizeCanvas() {
        const rect = img.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            canvas.width = Math.round(rect.width);
            canvas.height = Math.round(rect.height);
        }
    }

    if (img.complete && img.naturalWidth > 0) {
        resizeCanvas();
    } else {
        img.onload = resizeCanvas;
    }
    window.addEventListener('resize', resizeCanvas);

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    function startDraw(e) {
        e.preventDefault();
        isDrawing = true;
        const pos = getPos(e);
        lastX = pos.x;
        lastY = pos.y;
    }

    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault();
        const pos = getPos(e);
        ctx.strokeStyle = '#ef4444'; // Red crayon line
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        lastX = pos.x;
        lastY = pos.y;
    }

    function stopDraw() {
        isDrawing = false;
    }

    canvas.onmousedown = startDraw;
    canvas.onmousemove = draw;
    window.addEventListener('mouseup', stopDraw);

    canvas.ontouchstart = startDraw;
    canvas.ontouchmove = draw;
    canvas.ontouchend = stopDraw;
}

function clearStartersP1Canvas() {
    const canvas = document.getElementById('starters-p1-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// =========================================================================
// PART 4: INTERACTIVE COLORING TOOL & CRAYON CANVAS
// =========================================================================
let startersP4ActiveColor = 'Red';
let startersP4ActiveHex = '#ef4444';
let startersP4BrushSize = 14;
let startersP4IsEraser = false;
let startersP4UndoStack = [];

const P4_PALETTE = [
    { name: "Red", hex: "#ef4444" },
    { name: "Blue", hex: "#3b82f6" },
    { name: "Green", hex: "#10b981" },
    { name: "Yellow", hex: "#eab308" },
    { name: "Orange", hex: "#f97316" },
    { name: "Purple", hex: "#a855f7" },
    { name: "Pink", hex: "#ec4899" },
    { name: "Brown", hex: "#78350f" }
];

function setStartersP4Color(colorName, hex) {
    startersP4ActiveColor = colorName;
    startersP4ActiveHex = hex;
    startersP4IsEraser = false;
    renderStartersSkillContent();
}

function setStartersP4BrushSize(size) {
    startersP4BrushSize = size;
    renderStartersSkillContent();
}

function setStartersP4Eraser(isEraser = true) {
    startersP4IsEraser = !!isEraser;
    renderStartersSkillContent();
}

function handleStartersP4SpotClick(qId) {
    if (startersP4IsEraser) {
        if (startersUserAnswers.listening && startersUserAnswers.listening[qId]) {
            delete startersUserAnswers.listening[qId];
        }
    } else {
        handleStartersAnswerChange('listening', qId, startersP4ActiveColor);
    }
    saveStartersProgress();
    renderStartersSkillContent();
}

function undoStartersP4() {
    const canvas = document.getElementById('starters-p4-canvas');
    if (!canvas || startersP4UndoStack.length === 0) return;
    const ctx = canvas.getContext('2d');
    const prevState = startersP4UndoStack.pop();
    ctx.putImageData(prevState, 0, 0);
}

function clearStartersP4Canvas() {
    const canvas = document.getElementById('starters-p4-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startersP4UndoStack = [];
}

function initStartersP4ColoringCanvas() {
    const canvas = document.getElementById('starters-p4-canvas');
    const img = document.getElementById('starters-p4-img');
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');

    function syncDimensions() {
        const w = img.naturalWidth || img.clientWidth || 800;
        const h = img.naturalHeight || img.clientHeight || 600;
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    if (img.complete && img.naturalWidth > 0) {
        syncDimensions();
    } else {
        img.onload = syncDimensions;
    }

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function saveState() {
        if (startersP4UndoStack.length > 20) startersP4UndoStack.shift();
        startersP4UndoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    }

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    function startDraw(e) {
        // Only draw if target is canvas itself
        if (e.target !== canvas) return;
        e.preventDefault();
        saveState();
        isDrawing = true;
        const pos = getPos(e);
        lastX = pos.x;
        lastY = pos.y;
    }

    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault();
        const pos = getPos(e);

        if (startersP4IsEraser) {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.strokeStyle = 'rgba(0,0,0,1)';
            ctx.lineWidth = startersP4BrushSize * 1.6;
        } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = startersP4ActiveHex;
            ctx.globalAlpha = 0.65;
            ctx.lineWidth = startersP4BrushSize;
        }

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();

        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1.0;

        lastX = pos.x;
        lastY = pos.y;
    }

    function stopDraw() {
        isDrawing = false;
    }

    canvas.onmousedown = startDraw;
    canvas.onmousemove = draw;
    window.addEventListener('mouseup', stopDraw);

    canvas.ontouchstart = startDraw;
    canvas.ontouchmove = draw;
    canvas.ontouchend = stopDraw;
}

// -------------------------------------------------------------
// A. LISTENING VIEW (4 PARTS)
// -------------------------------------------------------------
function renderStartersListeningView(container) {
    const test = (startersProfileData && startersProfileData.starters_tests && startersProfileData.starters_tests[activeStartersTestId]) || null;
    const lis = test.listening;
    const currentPart = lis.parts.find(p => p.part_number === activeStartersLisPart) || lis.parts[0];

    let partHtml = '';

    if (activeStartersLisPart === 1) {
        // Part 1: INTERACTIVE DRAG-AND-DROP LINE MATCHING TOOL
        const bgImages = getStartersBookImages(test, 'listening', 1);
        const p1ImgSrc = bgImages[0] || '';
        const spots = currentPart.spots || [
            { id: "spot_1", x: 49, y: 42, description: "Boy flying a kite" },
            { id: "spot_2", x: 20, y: 44, description: "Girl sitting at table" },
            { id: "spot_3", x: 74, y: 47, description: "Boy fishing by water" },
            { id: "spot_4", x: 58, y: 88, description: "Boy with blue helmet" },
            { id: "spot_5", x: 82, y: 40, description: "Girl on the path" },
            { id: "spot_6", x: 22, y: 58, description: "Boy in green shirt" }
        ];

        const selectedQ = currentPart.questions.find(q => q.id === startersP1SelectedQId) || currentPart.questions[0];

        partHtml = `
            <div class="space-y-4">
                <!-- INSTRUCTIONS HEADER -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-black text-[11px] uppercase tracking-wide">🎧 Part 1</span>
                            <span class="font-extrabold text-sm text-amber-900">Listen and draw lines (5 questions)</span>
                        </div>
                        <p class="text-slate-700 text-xs">
                            👉 <strong>How to match:</strong> Click a name above, then tap the matching person on the picture. Or drag the name badge directly onto the person.
                        </p>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="clearStartersP1Canvas()" class="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition active:scale-95 flex items-center gap-1 shadow-2xs">
                            <span>🧹</span> <span>Clear Pencil Lines</span>
                        </button>
                    </div>
                </div>

                <!-- 1. DRAGGABLE NAME BADGES (5 CHARACTERS) -->
                <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-black uppercase text-indigo-900 tracking-wide flex items-center gap-1.5">
                            <span>👥</span> <span>Names to Match:</span>
                        </span>
                        <span class="text-[11px] font-bold text-slate-500">
                            Matched: ${currentPart.questions.filter(q => !!startersUserAnswers.listening[q.id]).length}/5
                        </span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-1">
                        ${currentPart.questions.map((q, idx) => {
                            const isSelected = (q.id === startersP1SelectedQId);
                            const connectedSpot = startersUserAnswers.listening[q.id] || '';
                            const connectedSpotObj = spots.find(s => s.id === connectedSpot);
                            const spotLabel = connectedSpotObj && connectedSpotObj.description ? connectedSpotObj.description : (connectedSpot ? `Person ${connectedSpot.replace('spot_', '')}` : '');
                            const col = P1_PALETTE[idx % P1_PALETTE.length];

                            return `
                                <div draggable="true"
                                     ondragstart="handleStartersNameDragStart(event, ${q.id})"
                                     onclick="selectStartersP1Name(${q.id})" 
                                     class="p-3 rounded-2xl border cursor-grab active:cursor-grabbing transition-all active:scale-95 flex flex-col justify-between ${
                                         isSelected 
                                             ? 'bg-amber-50 border-amber-500 ring-3 ring-amber-300 shadow-md scale-[1.02]' 
                                             : (connectedSpot ? 'bg-emerald-50/70 border-emerald-300' : 'bg-slate-50 hover:bg-slate-100 border-slate-200')
                                     }">
                                    <div class="flex items-center justify-between gap-1 mb-2">
                                        <div class="flex items-center gap-1.5">
                                            <span class="w-6 h-6 rounded-full ${col.bg} ${col.text} font-black text-xs flex items-center justify-center shrink-0">
                                                ${q.id}
                                            </span>
                                            <span class="font-extrabold text-sm text-slate-900">${q.name}</span>
                                        </div>
                                        <button onclick="event.stopPropagation(); speakStartersQuestion('${escapeQuotes(q.audio_prompt)}')" 
                                                title="Listen" 
                                                class="w-7 h-7 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 flex items-center justify-center text-xs font-bold transition active:scale-90">
                                            🔊
                                        </button>
                                    </div>

                                    <div class="pt-1 border-t border-slate-200/60">
                                        ${connectedSpot ? `
                                            <div class="flex items-center justify-between text-[11px] text-emerald-800 font-bold truncate">
                                                <span title="${spotLabel}">✓ ${spotLabel}</span>
                                                <button onclick="event.stopPropagation(); clearStartersP1Connection(${q.id})" title="Remove" class="text-rose-600 hover:text-rose-800 ml-1 font-black shrink-0">✕</button>
                                            </div>
                                        ` : (isSelected ? `
                                            <span class="text-[11px] text-amber-700 font-black animate-pulse">👉 Tap a person</span>
                                        ` : `
                                            <span class="text-[11px] text-slate-400 font-medium">Drag or Click</span>
                                        `)}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- 2. CAMBRIDGE PICTURE STAGE WITH INTERACTIVE HOTSPOTS -->
                <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <span class="text-xs font-black uppercase text-indigo-900 tracking-wide flex items-center gap-1.5">
                            <span>🎯</span> <span>Target Picture (Tap or drop to match [${selectedQ ? selectedQ.name : ''}]):</span>
                        </span>
                        <div class="flex items-center gap-2">
                            <button onclick="openStartersImageModal('${p1ImgSrc}', 'Part 1 Scene Picture')" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition">
                                🔍 Zoom Picture
                            </button>
                        </div>
                    </div>

                    <!-- SCENE PICTURE WITH INTERACTIVE DROP HOTSPOTS & FREEHAND CANVAS -->
                    <div id="starters-p1-stage" class="flex justify-center items-center p-3 rounded-2xl border border-slate-200 bg-slate-100/70 select-none overflow-x-auto">
                        <div id="starters-p1-wrapper" class="relative inline-block max-w-full rounded-2xl overflow-hidden shadow-md border border-slate-300 bg-white">
                            <img id="starters-p1-img" 
                                 src="${p1ImgSrc}" 
                                 onerror="if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${p1ImgSrc}';}" 
                                 alt="Part 1 Scene" 
                                 class="block max-h-[580px] w-auto max-w-full object-contain select-none pointer-events-none">

                            <!-- FREEHAND DRAWING CANVAS OVERLAY -->
                            <canvas id="starters-p1-canvas" 
                                    class="absolute inset-0 w-full h-full cursor-crosshair touch-none z-2"></canvas>

                            <!-- SVG CONNECTING LINES OVERLAY -->
                            <svg id="starters-p1-svg" class="absolute inset-0 w-full h-full pointer-events-none z-5">
                                ${currentPart.questions.map((q, idx) => {
                                    const sId = startersUserAnswers.listening[q.id];
                                    if (!sId) return '';
                                    const sp = spots.find(s => s.id === sId);
                                    if (!sp) return '';
                                    const col = P1_PALETTE[idx % P1_PALETTE.length];
                                    const topX = 10 + idx * 20;
                                    return `
                                        <line x1="${topX}%" y1="0%" x2="${sp.x}%" y2="${sp.y}%" 
                                              stroke="${col.hex}" stroke-width="3" stroke-dasharray="6,4" 
                                              stroke-linecap="round" />
                                        <circle cx="${sp.x}%" cy="${sp.y}%" r="5" fill="${col.hex}" />
                                    `;
                                }).join('')}
                            </svg>

                            <!-- INTERACTIVE CHARACTER TARGET SPOTS DIRECTLY ON CHARACTERS -->
                            ${spots.map((spot, sIdx) => {
                                const connectedQ = currentPart.questions.find(q => startersUserAnswers.listening[q.id] === spot.id);
                                const col = connectedQ ? P1_PALETTE[(connectedQ.id - 1) % P1_PALETTE.length] : null;
                                return `
                                    <div id="target-spot-${spot.id}"
                                         data-spot-id="${spot.id}"
                                         onclick="handleStartersSpotClick('${spot.id}')"
                                         ondragover="event.preventDefault(); this.classList.add('scale-125', 'ring-4', 'ring-amber-400');"
                                         ondragleave="this.classList.remove('scale-125', 'ring-4', 'ring-amber-400');"
                                         ondrop="handleStartersSpotDrop(event, '${spot.id}')"
                                         style="left: ${spot.x}%; top: ${spot.y}%;"
                                         class="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-10 group ${
                                             connectedQ ? 'scale-105' : 'hover:scale-125'
                                         }">
                                        ${connectedQ ? `
                                            <div class="px-3 py-1.5 rounded-full ${col ? col.bg : 'bg-amber-500'} text-white font-black text-xs shadow-xl flex items-center gap-1.5 border-2 border-white animate-bounce-once">
                                                <span>🏷️ ${connectedQ.name}</span>
                                                <button onclick="event.stopPropagation(); clearStartersP1Connection(${connectedQ.id})" 
                                                        title="Remove match" 
                                                        class="w-4 h-4 rounded-full bg-white/30 hover:bg-rose-600 text-white flex items-center justify-center text-[10px] font-black transition">
                                                    ✕
                                                </button>
                                            </div>
                                        ` : `
                                            <div class="relative flex flex-col items-center group">
                                                <span class="absolute w-8 h-8 rounded-full bg-amber-400/40 animate-ping"></span>
                                                <div class="w-8 h-8 rounded-full bg-white/95 border-2 border-amber-500 text-amber-700 font-black text-xs shadow-lg flex items-center justify-center backdrop-blur-xs group-hover:bg-amber-500 group-hover:text-white transition">
                                                    👤
                                                </div>
                                                <span class="mt-1 px-2 py-0.5 rounded-md bg-slate-900/85 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow pointer-events-none">
                                                    ${spot.description || `Person ${sIdx + 1}`}
                                                </span>
                                            </div>
                                        `}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        setTimeout(initStartersP1Canvas, 100);
    } 
    else if (activeStartersLisPart === 2) {
        // Part 2: Listen and write a name or a number
        const p2Images = getStartersBookImages(test, 'listening', 2);
        const p2ImgSrc = p2Images[0] || '';
        partHtml = `
            <div class="space-y-4">
                <!-- INSTRUCTIONS BANNER -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-black text-[11px] uppercase tracking-wide">🎧 Part 2</span>
                            <span class="font-extrabold text-sm text-amber-900">Listen and write a name or a number (5 questions)</span>
                        </div>
                        <p class="text-slate-700 text-xs">
                            👉 <strong>Instructions:</strong> Look at the picture, listen to the conversation, and write a name or a number for each question.
                        </p>
                    </div>
                </div>

                <!-- 1. ILLUSTRATION ONLY (CROPPED PICTURE WITHOUT TEXT) -->
                <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                        <span class="flex items-center gap-1.5 font-extrabold text-indigo-900">
                            <span>🖼️</span> <span>Part 2 Scene Picture:</span>
                        </span>
                        <button onclick="openStartersImageModal('${p2ImgSrc}', 'Part 2 Scene Picture')" 
                                class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1">
                            <span>🔍</span> <span>Zoom Picture</span>
                        </button>
                    </div>
                    <div class="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-200 flex justify-center items-center max-h-[460px] p-2">
                        <img src="${p2ImgSrc}" 
                             onerror="if(!this.dataset.triedOriginal){this.dataset.triedOriginal='1';this.src='${p2ImgSrc.replace('_cropped', '')}';}else if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${p2ImgSrc}';}" 
                             alt="Part 2 Illustration" 
                             class="max-h-[430px] w-auto max-w-full object-contain rounded-lg shadow-sm select-none">
                    </div>
                </div>

                <!-- 2. EXAMPLES DISPLAYED ON SCREEN OUTSIDE THE PICTURE -->
                <div class="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-black text-[10px] uppercase tracking-wide">Examples</span>
                        <span class="font-extrabold text-xs text-amber-900">Listen to the conversation examples:</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        ${(currentPart.examples || [
                            { question: "What is the boy's name?", answer: "Tom" },
                            { question: "How old is he?", answer: "11" }
                        ]).map(ex => `
                            <div class="p-2.5 bg-white rounded-xl border border-amber-200/80 flex items-center justify-between">
                                <span class="text-slate-700">${ex.question}</span>
                                <span class="font-black text-amber-950 font-mono bg-amber-100 px-2 py-0.5 rounded">${ex.answer}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 3. QUESTIONS (6 - 10) -->
                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <span class="text-xs font-black uppercase text-indigo-900 tracking-wide block">
                        Questions 6 - 10: Write a Name or a Number
                    </span>
                    <div class="space-y-3">
                        ${currentPart.questions.map(q => {
                            const userVal = startersUserAnswers.listening[q.id] || '';
                            return `
                                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div class="flex-1 space-y-1">
                                        <p class="font-extrabold text-xs sm:text-sm text-slate-900">${q.question}</p>
                                        <button onclick="speakStartersQuestion('${escapeQuotes(q.audio_script)}')" class="inline-flex items-center gap-1 text-[11px] font-bold text-violet-700 hover:text-violet-900 mt-1">
                                            <span>🔊 Listen Audio</span>
                                        </button>
                                    </div>
                                    <div class="w-full sm:w-56 shrink-0">
                                        <input type="text" 
                                               value="${escapeHtml(userVal)}" 
                                               oninput="handleStartersAnswerChange('listening', ${q.id}, this.value)"
                                               placeholder="Type name or number..."
                                               class="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 font-bold text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    else if (activeStartersLisPart === 3) {
        // Part 3: Listen and tick the box A, B, C (Individual Cropped Question Images)
        const testId = (test && test.id) ? test.id : (activeStartersTestId || 'starters_1_test_1');
        const parts = testId.split('_');
        const bookNum = parseInt(parts[1]) || 1;
        const testNum = parseInt(parts[3]) || 1;
        const exampleImgSrc = `images/starters/book${bookNum}/test${testNum}_p3_example.jpg`;

        partHtml = `
            <div class="space-y-4">
                <!-- INSTRUCTIONS HEADER -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-black text-[11px] uppercase tracking-wide">🎧 Part 3</span>
                            <span class="font-extrabold text-sm text-amber-900">Listen and tick the box (Questions 11 - 15)</span>
                        </div>
                        <p class="text-slate-700 text-xs">
                            👉 <strong>Instructions:</strong> Listen to the audio and click option A, B, or C for each question.
                        </p>
                    </div>
                </div>

                <!-- EXAMPLE CARD -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-50/70 to-orange-50/70 border border-amber-200/90 text-xs text-amber-950 space-y-3 shadow-xs">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-black text-[11px] uppercase tracking-wide">📘 Example</span>
                            <span class="font-extrabold text-sm text-amber-900">Listen and tick the box (There is one example)</span>
                        </div>
                        <span class="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-black text-xs">✓ Example Answer: A</span>
                    </div>
                    <div class="flex justify-center p-2 rounded-xl bg-white/95 border border-amber-200/80 shadow-2xs">
                        <img src="${exampleImgSrc}" 
                             onerror="if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${exampleImgSrc}';}" 
                             alt="Part 3 Example" 
                             class="max-h-[220px] w-auto max-w-full object-contain rounded-lg shadow-2xs">
                    </div>
                </div>

                <!-- 5 INDIVIDUAL QUESTION CARDS -->
                <div class="space-y-4">
                    ${currentPart.questions.map((q, qIdx) => {
                        const userVal = startersUserAnswers.listening[q.id] || '';
                        const qImgSrc = `images/starters/book${bookNum}/test${testNum}_p3_q${qIdx + 1}.jpg`;

                        return `
                            <div class="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3.5 transition hover:shadow-md">
                                <!-- Top Bar: Question Header & Audio Speaker -->
                                <div class="flex items-start sm:items-center justify-between gap-3 flex-wrap">
                                    <div class="flex items-center gap-2">
                                        <span class="w-7 h-7 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                                            ${q.id}
                                        </span>
                                        <span class="font-extrabold text-sm sm:text-base text-slate-900">${q.question}</span>
                                    </div>
                                    <button onclick="speakStartersQuestion('${escapeQuotes(q.audio_script)}')" 
                                            class="px-3.5 py-1.5 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-2xs shrink-0">
                                        <span>🔊</span> <span>Listen</span>
                                    </button>
                                </div>

                                <!-- The Question's Dedicated Cropped Image (Pictures A, B, C) -->
                                <div class="flex justify-center p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                                    <img src="${qImgSrc}" 
                                         onerror="if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${qImgSrc}';}" 
                                         alt="Question ${q.id} Illustration" 
                                         class="max-h-[260px] w-auto max-w-full object-contain rounded-lg shadow-xs">
                                </div>

                                <!-- Option Selector Buttons (A, B, C) -->
                                <div class="space-y-1.5">
                                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                                        Choose your answer:
                                    </span>
                                    <div class="grid grid-cols-3 gap-2.5 sm:gap-4">
                                        ${['A', 'B', 'C'].map(opt => {
                                            const isSelected = (userVal === opt);
                                            return `
                                                <button onclick="handleStartersAnswerChange('listening', ${q.id}, '${opt}')"
                                                        class="py-3 px-3 rounded-xl border-2 font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 active:scale-95 shadow-2xs ${
                                                            isSelected 
                                                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-md ring-2 ring-amber-300' 
                                                                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-amber-300'
                                                        }">
                                                    <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                                                        isSelected ? 'bg-white text-orange-600' : 'bg-slate-100 text-slate-700'
                                                    }">
                                                        ${isSelected ? '✓' : opt}
                                                    </span>
                                                    <span>Option ${opt}</span>
                                                </button>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    else if (activeStartersLisPart === 4) {
        // Part 4: INTERACTIVE COLORING CANVAS & CRAYON PALETTE
        const p4Images = getStartersBookImages(test, 'listening', 4);
        const p4ImgSrc = p4Images[0] || '';
        const colouredCount = currentPart.questions.filter(q => !!startersUserAnswers.listening[q.id]).length;

        partHtml = `
            <div class="space-y-4">
                <!-- COLORING INSTRUCTIONS -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-fuchsia-50 to-pink-50 border border-fuchsia-200 text-xs text-fuchsia-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full bg-fuchsia-500 text-white font-black text-[11px] uppercase tracking-wide">🎨 Part 4</span>
                            <span class="font-extrabold text-sm text-fuchsia-900">Listen and colour (Questions 16 - 20)</span>
                        </div>
                        <p class="text-slate-700 text-xs">
                            👉 <strong>Instructions:</strong> Choose a crayon colour from the palette ➔ Tap the object directly on the picture to colour it!
                        </p>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="undoStartersP4()" class="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition active:scale-95 flex items-center gap-1 shadow-2xs">
                            <span>↩️</span> <span>Undo</span>
                        </button>
                        <button onclick="clearStartersP4Canvas()" class="px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold transition active:scale-95 flex items-center gap-1 shadow-2xs">
                            <span>🗑️</span> <span>Clear</span>
                        </button>
                    </div>
                </div>

                <!-- 1. AUDIO PLAYER BAR (NO SPOILER TEXT!) -->
                <div class="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-black text-[10px] uppercase tracking-wider">
                                🎧 Audio Track
                            </span>
                            <span class="text-xs font-extrabold text-slate-800">
                                Click to listen to each question:
                            </span>
                        </div>
                        <span class="px-3 py-1 rounded-xl bg-fuchsia-50 border border-fuchsia-200 text-fuchsia-900 font-extrabold text-xs">
                            Coloured: <strong>${colouredCount} / 5</strong>
                        </span>
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        ${currentPart.example ? `
                            <button onclick="speakStartersQuestion('${escapeQuotes(currentPart.example.audio_script)}')" 
                                    class="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-2xs">
                                <span>🔊</span> <span>Example</span>
                            </button>
                        ` : ''}

                        ${currentPart.questions.map(q => {
                            const userCol = startersUserAnswers.listening[q.id];
                            return `
                                <button onclick="speakStartersQuestion('${escapeQuotes(q.audio_script)}')" 
                                        class="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-2xs ${
                                            userCol 
                                                ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 font-black' 
                                                : 'bg-violet-100 hover:bg-violet-200 text-violet-900'
                                        }">
                                    <span>🔊</span> <span>Question ${q.id}</span>
                                    ${userCol ? '<span class="text-[11px] font-black">✓</span>' : ''}
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- 2. CRAYON PALETTE & BRUSH TOOLS -->
                <div class="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <div class="flex items-center gap-2">
                            <span class="text-xs font-black uppercase text-slate-800">Crayon Palette:</span>
                            <span id="starters-p4-active-color-badge" class="text-xs font-extrabold px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center gap-1.5">
                                <span class="w-3.5 h-3.5 rounded-full border border-white shadow-xs" style="background-color: ${startersP4ActiveHex}"></span>
                                <span>Selected: <strong>${startersP4ActiveColor}</strong></span>
                            </span>
                        </div>
                        <!-- BRUSH SIZES & ERASER -->
                        <div class="flex items-center gap-1.5">
                            <button onclick="setStartersP4BrushSize(6); setStartersP4Eraser(false);" class="px-2.5 py-1 rounded-lg text-xs font-bold border transition ${startersP4BrushSize === 6 && !startersP4IsEraser ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'}">
                                ✏️ Fine
                            </button>
                            <button onclick="setStartersP4BrushSize(14); setStartersP4Eraser(false);" class="px-2.5 py-1 rounded-lg text-xs font-bold border transition ${startersP4BrushSize === 14 && !startersP4IsEraser ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'}">
                                🖌️ Medium
                            </button>
                            <button onclick="setStartersP4BrushSize(26); setStartersP4Eraser(false);" class="px-2.5 py-1 rounded-lg text-xs font-bold border transition ${startersP4BrushSize === 26 && !startersP4IsEraser ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'}">
                                🖍️ Thick
                            </button>
                            <button onclick="setStartersP4Eraser(true);" class="px-2.5 py-1 rounded-lg text-xs font-bold border transition ${startersP4IsEraser ? 'bg-rose-600 text-white border-rose-600 shadow-sm' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'}">
                                🧽 Eraser
                            </button>
                        </div>
                    </div>

                    <!-- 8 ROUND CRAYON COLOUR BUTTONS -->
                    <div class="flex flex-wrap gap-2.5 pt-1">
                        ${P4_PALETTE.map(c => {
                            const isSelected = (startersP4ActiveColor === c.name && !startersP4IsEraser);
                            return `
                                <button onclick="setStartersP4Color('${c.name}', '${c.hex}')" 
                                        class="px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition active:scale-95 ${
                                            isSelected 
                                                ? 'ring-3 ring-indigo-500 scale-105 shadow-md border-indigo-500 bg-indigo-50/40 text-slate-900 font-extrabold' 
                                                : 'hover:bg-slate-50 border-slate-200 text-slate-700'
                                        }">
                                    <span class="w-4 h-4 rounded-full border border-white shadow-2xs" style="background-color: ${c.hex};"></span>
                                    <span>${c.name}</span>
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- 3. COLORING CANVAS & INTERACTIVE OBJECT HOTSPOTS (TIGHT WRAPPER) -->
                <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div class="flex items-center justify-between text-xs font-black uppercase text-indigo-900 tracking-wide">
                        <span>🎨 Colouring Picture (Tap objects on the picture to colour):</span>
                        <button onclick="openStartersImageModal('${p4ImgSrc}', 'Part 4 Scene Picture')" class="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition">
                            🔍 Zoom Picture
                        </button>
                    </div>

                    <div class="flex justify-center p-2 rounded-2xl bg-slate-100/70 border border-slate-200 overflow-auto">
                        <div id="starters-p4-wrapper" class="relative inline-block max-w-full rounded-xl overflow-hidden border border-slate-300 shadow-md bg-white select-none">
                            <img id="starters-p4-img" 
                                 src="${p4ImgSrc}" 
                                 onerror="if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${p4ImgSrc}';}" 
                                 alt="Part 4 Illustration" 
                                 class="block max-h-[580px] w-auto max-w-full object-contain mx-auto select-none pointer-events-none" />

                            <canvas id="starters-p4-canvas" 
                                    class="absolute inset-0 w-full h-full z-10 cursor-crosshair touch-none"></canvas>

                            <!-- Example Spot (Brown) -->
                            ${currentPart.example && currentPart.example.spot ? `
                                <div style="left: ${currentPart.example.spot.x}%; top: ${currentPart.example.spot.y}%;" 
                                     class="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                    <div class="px-2.5 py-1 rounded-full text-white font-black text-[11px] border-2 border-white shadow-lg flex items-center gap-1 ring-2 ring-black/15" 
                                         style="background-color: #78350f;">
                                        <span>✓</span>
                                        <span>Example [${currentPart.example.color || 'Brown'}]</span>
                                    </div>
                                </div>
                            ` : ''}

                            <!-- Interactive Question Spots (16 - 20) -->
                            ${currentPart.questions.map((q, idx) => {
                                const spot = q.spot || { x: 28 + (idx % 2) * 44, y: 35 + Math.floor(idx / 2) * 25 };
                                const userCol = startersUserAnswers.listening[q.id] || '';
                                const colorObj = P4_PALETTE.find(p => p.name === userCol);
                                const colHex = colorObj ? colorObj.hex : '#94a3b8';

                                return `
                                    <div style="left: ${spot.x}%; top: ${spot.y}%;" 
                                         class="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                        <button onclick="handleStartersP4SpotClick(${q.id})" 
                                                title="${userCol ? 'Coloured: ' + userCol + ' (Click to change)' : 'Click to colour with ' + startersP4ActiveColor}"
                                                class="group relative flex items-center justify-center transition-all transform hover:scale-110 active:scale-95">
                                            ${userCol ? `
                                                <span class="px-2.5 py-1 rounded-full text-white font-black text-xs border-2 border-white shadow-lg flex items-center gap-1.5 transition-all ring-3 ring-black/15" 
                                                      style="background-color: ${colHex};">
                                                    <span>✓</span>
                                                    <span>${userCol}</span>
                                                </span>
                                            ` : `
                                                <span class="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-indigo-950 font-black text-xs border-2 border-dashed border-indigo-500 shadow-md flex items-center justify-center transition-all group-hover:border-indigo-600 group-hover:ring-4 group-hover:ring-indigo-200">
                                                    ${q.id}
                                                </span>
                                            `}
                                            <span class="absolute -bottom-6 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-900/85 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition pointer-events-none z-30 shadow-xs">
                                                ${userCol ? 'Click to recolour' : 'Colour with ' + startersP4ActiveColor}
                                            </span>
                                        </button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        setTimeout(() => initStartersP4ColoringCanvas(), 100);
    }

    container.innerHTML = `
        <div class="space-y-4">
            <!-- PART SUB-NAVIGATION (1, 2, 3, 4) -->
            <div class="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-xs overflow-x-auto custom-scroll">
                ${lis.parts.map(p => `
                    <button onclick="switchStartersLisPart(${p.part_number})"
                            class="px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 shrink-0 ${
                                p.part_number === activeStartersLisPart 
                                    ? 'bg-amber-500 text-white shadow-xs' 
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }">
                        <span>Part ${p.part_number}</span>
                    </button>
                `).join('')}
            </div>

            ${partHtml}
        </div>
    `;
}

function switchStartersLisPart(partNum) {
    if (activeStartersLisPart === partNum) return;
    activeStartersLisPart = partNum;
    renderStartersSkillContent();
}

// -------------------------------------------------------------
// B. READING & WRITING VIEW (5 PARTS)
// -------------------------------------------------------------
function renderStartersReadingWritingView(container) {
    const test = (startersProfileData && startersProfileData.starters_tests && startersProfileData.starters_tests[activeStartersTestId]) || null;
    const rw = test.reading_writing;
    const currentPart = rw.parts.find(p => p.part_number === activeStartersRwPart) || rw.parts[0];

    const rwImages = getStartersBookImages(test, 'reading_writing', activeStartersRwPart);

    let partHtml = '';

    if (activeStartersRwPart === 1) {
        // Part 1: Look and read. Put a tick or a cross (Individual Cropped Question Images)
        const testId = (test && test.id) ? test.id : (activeStartersTestId || 'starters_1_test_1');
        const parts = testId.split('_');
        const bookNum = parseInt(parts[1]) || 1;
        const testNum = parseInt(parts[3]) || 1;
        const ex1ImgSrc = `images/starters/book${bookNum}/test${testNum}_rw1_example1.jpg`;
        const ex2ImgSrc = `images/starters/book${bookNum}/test${testNum}_rw1_example2.jpg`;

        partHtml = `
            <div class="space-y-4">
                <!-- INSTRUCTIONS HEADER -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 text-xs text-teal-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full bg-teal-600 text-white font-black text-[11px] uppercase tracking-wide">📖 Part 1</span>
                            <span class="font-extrabold text-sm text-teal-900">Look and read. Put a tick (✓) or a cross (✗) in the box</span>
                        </div>
                        <p class="text-slate-700 text-xs">
                            👉 <strong>Instructions:</strong> Look at each picture and read the sentence. Click <strong>Tick (✓)</strong> if correct, or <strong>Cross (✗)</strong> if wrong!
                        </p>
                    </div>
                </div>

                <!-- AUTHENTIC EXAMPLES CARD -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/80 border border-slate-200 shadow-xs space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-0.5 rounded-full bg-slate-700 text-white font-black text-[10px] uppercase tracking-wider">
                            Examples
                        </span>
                        <span class="text-xs font-bold text-slate-600">Sample questions:</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <!-- Example 1 -->
                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
                            <div class="flex items-center gap-3">
                                <div class="w-20 h-20 shrink-0 rounded-lg bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-1">
                                    <img src="${ex1ImgSrc}" 
                                         onerror="if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${ex1ImgSrc}';}" 
                                         alt="Example 1" class="max-h-full max-w-full object-contain rounded">
                                </div>
                                <span class="font-extrabold text-xs sm:text-sm text-slate-800">This is a foot.</span>
                            </div>
                            <span class="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 font-black text-xs border border-emerald-300 flex items-center gap-1 shrink-0">
                                <span>✓</span> <span>Tick</span>
                            </span>
                        </div>

                        <!-- Example 2 -->
                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
                            <div class="flex items-center gap-3">
                                <div class="w-20 h-20 shrink-0 rounded-lg bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-1">
                                    <img src="${ex2ImgSrc}" 
                                         onerror="if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${ex2ImgSrc}';}" 
                                         alt="Example 2" class="max-h-full max-w-full object-contain rounded">
                                </div>
                                <span class="font-extrabold text-xs sm:text-sm text-slate-800">These are pianos.</span>
                            </div>
                            <span class="px-3 py-1.5 rounded-xl bg-rose-100 text-rose-800 font-black text-xs border border-rose-300 flex items-center gap-1 shrink-0">
                                <span>✗</span> <span>Cross</span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 5 QUESTIONS CARDS -->
                <div class="space-y-3.5">
                    ${currentPart.questions.map(q => {
                        const userVal = startersUserAnswers.reading_writing[q.id];
                        const qImgSrc = `images/starters/book${bookNum}/test${testNum}_rw1_q${q.id}.jpg`;

                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition hover:shadow-md space-y-3">
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <!-- Left: Question Number + Cropped Illustration + Statement -->
                                    <div class="flex items-center gap-3.5 sm:gap-4 flex-1">
                                        <span class="w-8 h-8 rounded-full bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                                            ${q.id}
                                        </span>
                                        <div class="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-1 shadow-2xs">
                                            <img src="${qImgSrc}" 
                                                 onerror="if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${qImgSrc}';}" 
                                                 alt="Question ${q.id} Illustration" 
                                                 class="max-h-full max-w-full object-contain rounded-lg">
                                        </div>
                                        <p class="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                                            ${q.statement}
                                        </p>
                                    </div>

                                    <!-- Right: Tick / Cross Interactive Action Buttons -->
                                    <div class="flex items-center gap-2.5 sm:gap-3 shrink-0 self-end sm:self-center">
                                        <button onclick="handleStartersAnswerChange('reading_writing', ${q.id}, true)"
                                                class="px-5 py-2.5 rounded-xl border-2 font-black text-xs sm:text-sm transition-all flex items-center gap-2 active:scale-95 shadow-2xs ${
                                                    userVal === true 
                                                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-300' 
                                                        : 'bg-white hover:bg-emerald-50 text-slate-700 border-slate-200 hover:border-emerald-300'
                                                }">
                                            <span class="text-sm">✓</span> <span>Tick</span>
                                        </button>
                                        <button onclick="handleStartersAnswerChange('reading_writing', ${q.id}, false)"
                                                class="px-5 py-2.5 rounded-xl border-2 font-black text-xs sm:text-sm transition-all flex items-center gap-2 active:scale-95 shadow-2xs ${
                                                    userVal === false 
                                                        ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-600 shadow-md ring-2 ring-rose-300' 
                                                        : 'bg-white hover:bg-rose-50 text-slate-700 border-slate-200 hover:border-rose-300'
                                                }">
                                            <span class="text-sm">✗</span> <span>Cross</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    else if (activeStartersRwPart === 2) {
        // Part 2: Look and read. Write 'yes' or 'no'
        const rw2Images = getStartersBookImages(test, 'reading_writing', 2);
        const rw2ImgSrc = rw2Images[0] || '';
        partHtml = `
            <div class="space-y-4">
                <!-- INSTRUCTIONS BANNER -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-black text-[11px] uppercase tracking-wide">📖 Part 2</span>
                            <span class="font-extrabold text-sm text-amber-900">Look and read. Write 'yes' or 'no' (5 questions)</span>
                        </div>
                        <p class="text-slate-700 text-xs">
                            👉 <strong>Instructions:</strong> Look at the picture and read each sentence carefully. Choose <strong>yes</strong> or <strong>no</strong>.
                        </p>
                    </div>
                </div>

                <!-- 1. ILLUSTRATION ONLY (CROPPED PICTURE WITHOUT TEXT) -->
                <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                        <span class="flex items-center gap-1.5 font-extrabold text-indigo-900">
                            <span>🖼️</span> <span>Part 2 Scene Picture:</span>
                        </span>
                        <button onclick="openStartersImageModal('${rw2ImgSrc}', 'Part 2 Scene Picture')" 
                                class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1">
                            <span>🔍</span> <span>Zoom Picture</span>
                        </button>
                    </div>
                    <div class="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-200 flex justify-center items-center max-h-[460px] p-2">
                        <img src="${rw2ImgSrc}" 
                             onerror="if(!this.dataset.triedOriginal){this.dataset.triedOriginal='1';this.src='${rw2ImgSrc.replace('_cropped', '')}';}else if(!this.dataset.triedCdn){this.dataset.triedCdn='1';this.src='https://cdn.jsdelivr.net/gh/ngoc220700-vietnam/EnglishSmart@main/' + '${rw2ImgSrc}';}" 
                             alt="Part 2 Illustration" 
                             class="max-h-[430px] w-auto max-w-full object-contain rounded-lg shadow-sm select-none">
                    </div>
                </div>

                <!-- 2. EXAMPLES DISPLAYED ON SCREEN OUTSIDE THE PICTURE -->
                <div class="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-black text-[10px] uppercase tracking-wide">Examples</span>
                        <span class="font-extrabold text-xs text-amber-900">Look at the picture and read the examples:</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        ${(currentPart.examples || [
                            { statement: "A young child is waving.", answer: "yes" },
                            { statement: "The woman's bag is in her hand.", answer: "no" }
                        ]).map(ex => `
                            <div class="p-2.5 bg-white rounded-xl border border-amber-200/80 flex items-center justify-between">
                                <span class="text-slate-700">${ex.statement}</span>
                                <span class="font-black ${ex.answer === 'yes' ? 'text-emerald-800 bg-emerald-100' : 'text-rose-800 bg-rose-100'} px-2.5 py-0.5 rounded-full">${ex.answer}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 3. QUESTIONS (6 - 10) -->
                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <span class="text-xs font-black uppercase text-indigo-900 tracking-wide block">
                        Questions 6 - 10: Choose 'yes' or 'no'
                    </span>
                    <div class="space-y-3">
                        ${currentPart.questions.map(q => {
                            const userVal = startersUserAnswers.reading_writing[q.id];
                            return `
                                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <p class="font-extrabold text-xs sm:text-sm text-slate-900 flex-1">${q.statement}</p>
                                    <div class="flex items-center gap-2 shrink-0">
                                        <button onclick="handleStartersAnswerChange('reading_writing', ${q.id}, 'yes')"
                                                class="px-4 py-2 rounded-xl border text-xs font-black transition ${
                                                    userVal === 'yes' 
                                                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs' 
                                                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                                                }">
                                            yes
                                        </button>
                                        <button onclick="handleStartersAnswerChange('reading_writing', ${q.id}, 'no')"
                                                class="px-4 py-2 rounded-xl border text-xs font-black transition ${
                                                    userVal === 'no' 
                                                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs' 
                                                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                                                }">
                                            no
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    else if (activeStartersRwPart === 3) {
        // Part 3: Look at the pictures. Look at the letters. Write the words (Individual Cropped Question Images)
        const testId = (test && test.id) ? test.id : (activeStartersTestId || 'starters_1_test_1');
        const parts = testId.split('_');
        const bookNum = parseInt(parts[1]) || 1;
        const testNum = parseInt(parts[3]) || 1;
        const exImgSrc = `images/starters/book${bookNum}/test${testNum}_rw3_example.jpg`;
        const exData = currentPart.example || { word: "LIME", scrambled_letters: ["M", "I", "E", "L"] };

        partHtml = `
            <div class="space-y-4">
                <!-- INSTRUCTIONS HEADER -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full bg-amber-600 text-white font-black text-[11px] uppercase tracking-wide">ðŸ“– Part 3</span>
                            <span class="font-extrabold text-sm text-amber-900">Look at the pictures. Look at the letters. Write the words</span>
                        </div>
                        <p class="text-slate-700 text-xs">
                            ðŸ‘‰ <strong>Instructions:</strong> Look at each picture and its scrambled letters. Spell the word by typing in the box or clicking the letter tiles.
                        </p>
                    </div>
                    <span class="px-3 py-1 rounded-xl bg-white border border-amber-300 text-amber-900 font-black text-xs shrink-0 font-mono shadow-2xs">
                        Questions 11 - 15 (5 marks)
                    </span>
                </div>

                <!-- AUTHENTIC BOOK EXAMPLE -->
                <div class="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="px-3 py-1 rounded-xl bg-amber-500 text-white font-black text-xs uppercase tracking-wider">Example</span>
                        <div class="flex items-center gap-2">
                            <span class="text-xs font-bold text-slate-500">Correct spelling:</span>
                            <span class="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-300 font-mono font-black text-emerald-800 text-sm tracking-widest uppercase">${exData.word}</span>
                        </div>
                    </div>
                    <div class="p-3 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 overflow-hidden">
                        <img src="${exImgSrc}" alt="Part 3 Example" class="max-w-full h-auto rounded-lg shadow-xs" style="max-height: 150px;">
                    </div>
                </div>

                <!-- QUESTIONS 11 - 15 (CROPPED STRIPS & INTERACTIVE INPUT) -->
                <div class="space-y-4">
                    ${currentPart.questions.map((q, qIdx) => {
                        const userVal = startersUserAnswers.reading_writing[q.id] || '';
                        const qImgSrc = `images/starters/book${bookNum}/test${testNum}_rw3_q${qIdx + 1}.jpg`;
                        const wordLen = q.correct_word ? q.correct_word.length : (q.scrambled_letters ? q.scrambled_letters.length : 4);
                        const letters = q.scrambled_letters || [];
                        
                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="px-3 py-1 rounded-xl bg-indigo-600 text-white font-black text-xs uppercase tracking-wider">Question ${q.id}</span>
                                    <span class="text-xs font-black text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full font-mono">${wordLen} letters</span>
                                </div>
                                
                                <!-- Cropped Question Strip -->
                                <div class="p-3 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 overflow-hidden">
                                    <img src="${qImgSrc}" alt="Question ${q.id}" class="max-w-full h-auto rounded-lg shadow-xs" style="max-height: 150px;">
                                </div>

                                <!-- Input Box and Clickable Letter Tiles -->
                                <div class="space-y-2 pt-1 max-w-lg mx-auto">
                                    <div class="flex items-center gap-2">
                                        <input type="text"
                                               id="starters-rw3-input-${q.id}"
                                               value="${escapeHtml(userVal)}"
                                               maxlength="${wordLen + 2}"
                                               oninput="handleStartersAnswerChange('reading_writing', ${q.id}, this.value.toUpperCase())"
                                               placeholder="Type your word..."
                                               class="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border-2 border-slate-300 font-mono font-black text-base uppercase text-indigo-950 tracking-widest focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all text-center">
                                        <button type="button"
                                                onclick="handleStartersClearWord(${q.id})"
                                                title="Clear word"
                                                class="px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs uppercase tracking-wider transition active:scale-95">
                                            Clear
                                        </button>
                                    </div>
                                    ${letters.length > 0 ? `
                                        <div class="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wide mr-1">Tap:</span>
                                            ${letters.map(letter => `
                                                <button type="button"
                                                        onclick="handleStartersAppendLetter(${q.id}, '${letter}')"
                                                        class="w-8 h-8 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 font-mono font-black text-amber-900 text-sm flex items-center justify-center shadow-2xs hover:scale-105 active:scale-95 transition">
                                                    ${letter}
                                                </button>
                                            `).join('')}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    else if (activeStartersRwPart === 4) {
        // Part 4: Read this. Choose a word from the box (Questions 16 - 20)
        const questions = currentPart.questions || [];
        const wordBank = currentPart.word_bank || [];
        const example = currentPart.example;

        partHtml = `
            <div class="space-y-4">
                ${renderBookImageGallery(rwImages, "Part 4 Book Page", "rw4-gallery")}

                <!-- WORD BANK CHIPS -->
                ${wordBank.length > 0 ? `
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-black uppercase text-indigo-900 tracking-wide">
                                ðŸ“¦ Word Bank:
                            </span>
                            ${example ? `<span class="text-[11px] font-bold text-slate-500">Example: <strong class="text-indigo-600 uppercase underline">${escapeHtml(example.word)}</strong></span>` : ''}
                        </div>
                        <div class="flex flex-wrap gap-2 pt-1">
                            ${wordBank.map(w => `
                                <div class="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-xs font-bold text-slate-800 hover:text-indigo-900 transition flex items-center gap-1.5 shadow-2xs">
                                    <span>${escapeHtml(w)}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- QUESTIONS (16 - 20) -->
                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <span class="text-xs font-black uppercase text-indigo-900 tracking-wide block">
                        Part 4: Read this. Choose a word from the box. Write the correct word next to numbers 16 - 20.
                    </span>
                    <div class="space-y-3">
                        ${questions.map(q => {
                            const userVal = startersUserAnswers.reading_writing[q.id] || '';
                            return `
                                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div class="space-y-1 flex-1">
                                        <p class="font-extrabold text-xs sm:text-sm text-slate-900">${escapeHtml(q.question)}</p>
                                    </div>
                                    <div class="w-full sm:w-44 shrink-0">
                                        <input type="text" 
                                               value="${escapeHtml(userVal)}" 
                                               oninput="handleStartersAnswerChange('reading_writing', ${q.id}, this.value)"
                                               placeholder="Word..."
                                               class="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 font-bold text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    else if (activeStartersRwPart === 5) {
        // Part 5: Picture story questions
        partHtml = `
            <div class="space-y-4">
                ${renderBookImageGallery(rwImages, "Part 5 Book Pages", "rw5-gallery")}
                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <span class="text-xs font-black uppercase text-indigo-900 tracking-wide block">
                        Part 5: Look at the pictures and read the questions. Write one-word answers.
                    </span>
                    <div class="space-y-3">
                        ${currentPart.questions.map(q => {
                            const userVal = startersUserAnswers.reading_writing[q.id] || '';
                            return `
                                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div class="space-y-1 flex-1">
                                        <p class="font-extrabold text-xs sm:text-sm text-slate-900">${q.question}</p>
                                        <p class="text-xs text-slate-500 italic">${q.clue}</p>
                                    </div>
                                    <div class="w-full sm:w-44 shrink-0">
                                        <input type="text" 
                                               value="${escapeHtml(userVal)}" 
                                               oninput="handleStartersAnswerChange('reading_writing', ${q.id}, this.value)"
                                               placeholder="One word..."
                                               class="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 font-bold text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="space-y-4">
            <!-- PART SUB-NAVIGATION (1, 2, 3, 4, 5) -->
            <div class="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-xs overflow-x-auto custom-scroll">
                ${rw.parts.map(p => `
                    <button onclick="switchStartersRwPart(${p.part_number})"
                            class="px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 shrink-0 ${
                                p.part_number === activeStartersRwPart 
                                    ? 'bg-amber-500 text-white shadow-xs' 
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }">
                        <span>Part ${p.part_number}</span>
                    </button>
                `).join('')}
            </div>

            ${partHtml}
        </div>
    `;
}

function switchStartersRwPart(partNum) {
    if (activeStartersRwPart === partNum) return;
    activeStartersRwPart = partNum;
    renderStartersSkillContent();
}

// -------------------------------------------------------------
// C. SPEAKING VIEW (4 PARTS)
// -------------------------------------------------------------
function renderStartersSpeakingView(container) {
    const test = (startersProfileData && startersProfileData.starters_tests && startersProfileData.starters_tests[activeStartersTestId]) || null;
    const spk = test.speaking;
    const partKey = `part_${activeStartersSpkPart}`;
    const currentPart = spk[partKey];

    const spkImages = getStartersBookImages(test, 'speaking', activeStartersSpkPart);

    container.innerHTML = `
        <div class="space-y-4">
            <!-- PART SUB-NAVIGATION (1, 2, 3, 4) -->
            <div class="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-xs overflow-x-auto custom-scroll">
                <button onclick="switchStartersSpkPart(1)" class="px-3.5 py-1.5 rounded-xl text-xs font-black transition shrink-0 ${activeStartersSpkPart === 1 ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
                    Part 1: Scene & Greetings
                </button>
                <button onclick="switchStartersSpkPart(2)" class="px-3.5 py-1.5 rounded-xl text-xs font-black transition shrink-0 ${activeStartersSpkPart === 2 ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
                    Part 2: Object Cards
                </button>
                <button onclick="switchStartersSpkPart(3)" class="px-3.5 py-1.5 rounded-xl text-xs font-black transition shrink-0 ${activeStartersSpkPart === 3 ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
                    Part 3: Scene Questions
                </button>
                <button onclick="switchStartersSpkPart(4)" class="px-3.5 py-1.5 rounded-xl text-xs font-black transition shrink-0 ${activeStartersSpkPart === 4 ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
                    Part 4: Personal Questions
                </button>
            </div>

            <!-- BOOK PAGE GALLERY FOR SPEAKING -->
            ${renderBookImageGallery(spkImages, currentPart.title, "spk-gallery")}

            <!-- EXAMINER INSTRUCTION HEADER -->
            <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-950 space-y-1.5 shadow-xs">
                <div class="flex items-center justify-between">
                    <span class="text-xs font-black uppercase text-amber-900">${currentPart.title}</span>
                    <span class="text-xs font-bold text-amber-700">Native Examiner Audio</span>
                </div>
                <p class="text-xs sm:text-sm font-semibold italic text-amber-950">
                    "${currentPart.examiner_instruction}"
                </p>
            </div>

            <!-- PROMPTS LIST -->
            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span class="text-xs font-black uppercase text-indigo-900 tracking-wide block">
                    Speaking Questions & Practice Prompts:
                </span>
                <div class="space-y-3">
                    ${currentPart.prompts.map((p, idx) => {
                        const slotId = `spk_${activeStartersSpkPart}_${idx}`;
                        const isRecorded = !!startersRecordedAudioUrls[slotId];

                        return `
                            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                                <div class="flex items-start justify-between gap-2">
                                    <p class="font-extrabold text-xs sm:text-sm text-slate-900">
                                        <span class="text-indigo-600 mr-1.5">Q${idx + 1}:</span> ${p.q}
                                    </p>
                                    <button onclick="speakStartersQuestion('${escapeQuotes(p.q)}')" class="px-3 py-1 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1 transition active:scale-95 shrink-0">
                                        <span>🔊</span> <span>Examiner</span>
                                    </button>
                                </div>
                                <div class="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-1 text-xs">
                                    <p><strong>Sample Answer:</strong> "${p.model_answer}"</p>
                                    <p class="text-[11px] text-emerald-800 italic">💡 <strong>Hint:</strong> ${p.hint}</p>
                                </div>
                                <div class="flex items-center justify-between pt-1">
                                    <button id="record-btn-${slotId}" onclick="toggleStartersVoiceRecord('${slotId}')" 
                                            class="px-3 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold transition flex items-center gap-1 shadow-2xs active:scale-95">
                                        <span>🎙️</span> <span>Record Answer</span>
                                    </button>
                                    ${isRecorded ? `
                                        <audio controls src="${startersRecordedAudioUrls[slotId]}" class="h-8 w-44"></audio>
                                    ` : `
                                        <span class="text-[11px] text-slate-400">Microphone ready</span>
                                    `}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

function switchStartersSpkPart(partNum) {
    if (activeStartersSpkPart === partNum) return;
    activeStartersSpkPart = partNum;
    renderStartersSkillContent();
}

// -------------------------------------------------------------
// EVENT HANDLERS & AUDIO RECORDING
// -------------------------------------------------------------
function handleStartersAnswerChange(skill, qId, val) {
    if (startersTestSubmitted) return;
    if (!startersUserAnswers[skill]) startersUserAnswers[skill] = {};
    startersUserAnswers[skill][qId] = val;
    saveStartersProgress();
}

function handleStartersAppendLetter(qId, letter) {
    if (startersTestSubmitted) return;
    if (!startersUserAnswers.reading_writing) startersUserAnswers.reading_writing = {};
    const current = startersUserAnswers.reading_writing[qId] || '';
    const updated = (current + letter).toUpperCase();
    startersUserAnswers.reading_writing[qId] = updated;
    saveStartersProgress();
    const input = document.getElementById(`starters-rw3-input-${qId}`);
    if (input) {
        input.value = updated;
        input.focus();
    }
}

function handleStartersClearWord(qId) {
    if (startersTestSubmitted) return;
    if (!startersUserAnswers.reading_writing) startersUserAnswers.reading_writing = {};
    startersUserAnswers.reading_writing[qId] = '';
    saveStartersProgress();
    const input = document.getElementById(`starters-rw3-input-${qId}`);
    if (input) {
        input.value = '';
        input.focus();
    }
}

function speakStartersQuestion(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB'; // British English for Cambridge
    utterance.rate = 0.85; // Natural slower pace for young learners
    window.speechSynthesis.speak(utterance);
}

async function toggleStartersVoiceRecord(slotId) {
    const btn = document.getElementById(`record-btn-${slotId}`);
    if (!btn) return;

    if (startersMediaRecorder && startersMediaRecorder.state === 'recording') {
        startersMediaRecorder.stop();
        btn.innerHTML = `<span>🎙️</span> <span>Record Answer</span>`;
        btn.classList.remove('bg-slate-800', 'animate-pulse');
        btn.classList.add('bg-rose-500');
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        startersAudioChunks = [];
        startersMediaRecorder = new MediaRecorder(stream);

        startersMediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) startersAudioChunks.push(e.data);
        };

        startersMediaRecorder.onstop = () => {
            const blob = new Blob(startersAudioChunks, { type: 'audio/webm' });
            const url = URL.createObjectURL(blob);
            startersRecordedAudioUrls[slotId] = url;
            renderStartersSkillContent();
        };

        startersMediaRecorder.start();
        btn.innerHTML = `<span>⏹️</span> <span>Stop Recording...</span>`;
        btn.classList.remove('bg-rose-500');
        btn.classList.add('bg-slate-800', 'animate-pulse');
    } catch(err) {
        alert("Microphone access could not be enabled: " + err.message);
    }
}

// -------------------------------------------------------------
// GRADING & CAMBRIDGE SHIELDS RESULT
// -------------------------------------------------------------
function submitStartersTest() {
    if (!confirm("Do you want to submit your Cambridge Starters test to view Shields 🛡️ and answers?")) {
        return;
    }
    gradeStartersTest(true);
}

function gradeStartersTest(showModal = true) {
    const test = startersProfileData.starters_tests[activeStartersTestId];
    if (!test) return;

    let lisCorrect = 0;
    const lisReview = [];

    // 1. Listening Part 1 (1 - 5)
    test.listening.parts[0].questions.forEach(q => {
        const userVal = startersUserAnswers.listening[q.id];
        const isCorrect = (userVal && userVal.toLowerCase() === q.correct_answer.toLowerCase());
        if (isCorrect) lisCorrect++;
        const p1Spots = test.listening.parts[0].spots || [];
        const userSpotObj = p1Spots.find(s => s.id === userVal);
        const correctSpotObj = p1Spots.find(s => s.id === q.correct_answer);
        const userDesc = userSpotObj ? userSpotObj.description : (userVal ? `Person ${userVal.replace('spot_', '')}` : 'Not matched');
        const correctDesc = correctSpotObj ? correctSpotObj.description : `Person ${q.correct_answer.replace('spot_', '')}`;
        lisReview.push({
            id: q.id,
            skill: 'listening',
            part: 1,
            prompt: `Part 1: Match [${q.name}] to person in picture`,
            userAns: userDesc,
            correctAns: correctDesc,
            isCorrect,
            explanation: q.explanation
        });
    });

    // 2. Listening Part 2 (6 - 10)
    test.listening.parts[1].questions.forEach(q => {
        const userVal = (startersUserAnswers.listening[q.id] || '').trim().toLowerCase();
        const isCorrect = q.correct_answers.some(ans => ans.toLowerCase() === userVal);
        if (isCorrect) lisCorrect++;
        lisReview.push({
            id: q.id,
            skill: 'listening',
            part: 2,
            prompt: q.question,
            userAns: startersUserAnswers.listening[q.id] || 'Not answered',
            correctAns: q.correct_answers.join(' / '),
            isCorrect,
            explanation: q.explanation
        });
    });

    // 3. Listening Part 3 (11 - 15)
    test.listening.parts[2].questions.forEach(q => {
        const userVal = startersUserAnswers.listening[q.id];
        const isCorrect = q.correct_answers.includes(userVal);
        if (isCorrect) lisCorrect++;
        lisReview.push({
            id: q.id,
            skill: 'listening',
            part: 3,
            prompt: q.question,
            userAns: userVal || 'Not answered',
            correctAns: q.correct_answers.join(' / '),
            isCorrect,
            explanation: q.explanation
        });
    });

    // 4. Listening Part 4 (16 - 20)
    test.listening.parts[3].questions.forEach(q => {
        const userVal = (startersUserAnswers.listening[q.id] || '').trim().toLowerCase();
        const targetColor = q.correct_color.split(' ')[0].toLowerCase();
        const isCorrect = userVal.includes(targetColor);
        if (isCorrect) lisCorrect++;
        lisReview.push({
            id: q.id,
            skill: 'listening',
            part: 4,
            prompt: `Part 4: Question ${q.id} (Colouring)`,
            userAns: startersUserAnswers.listening[q.id] || 'Not coloured',
            correctAns: q.correct_color,
            isCorrect,
            explanation: q.explanation
        });
    });

    // 5. Reading & Writing
    let rwCorrect = 0;
    const rwReview = [];

    // RW Part 1 (1 - 5)
    test.reading_writing.parts[0].questions.forEach(q => {
        const userVal = startersUserAnswers.reading_writing[q.id];
        const isCorrect = (userVal === q.is_correct);
        if (isCorrect) rwCorrect++;
        rwReview.push({
            id: q.id,
            skill: 'reading_writing',
            part: 1,
            prompt: q.statement,
            userAns: userVal === true ? '✓ Tick' : (userVal === false ? '✗ Cross' : 'Not answered'),
            correctAns: q.is_correct ? '✓ Tick' : '✗ Cross',
            isCorrect,
            explanation: q.explanation
        });
    });

    // RW Part 2 (6 - 10)
    test.reading_writing.parts[1].questions.forEach(q => {
        const userVal = (startersUserAnswers.reading_writing[q.id] || '').toLowerCase();
        const isCorrect = q.correct_answers.some(ans => ans.toLowerCase() === userVal);
        if (isCorrect) rwCorrect++;
        rwReview.push({
            id: q.id,
            skill: 'reading_writing',
            part: 2,
            prompt: q.statement,
            userAns: userVal || 'Not answered',
            correctAns: q.correct_answers[0],
            isCorrect,
            explanation: q.explanation
        });
    });

    // RW Part 3 (11 - 15)
    test.reading_writing.parts[2].questions.forEach(q => {
        const userVal = (startersUserAnswers.reading_writing[q.id] || '').trim().toUpperCase();
        const isCorrect = (userVal === q.correct_word.toUpperCase());
        if (isCorrect) rwCorrect++;
        rwReview.push({
            id: q.id,
            skill: 'reading_writing',
            part: 3,
            prompt: `Part 3: Question ${q.id} (${q.correct_word ? q.correct_word.length + " letters" : "Write the word"})`,
            userAns: userVal || 'Not answered',
            correctAns: q.correct_word,
            isCorrect,
            explanation: q.explanation
        });
    });

    // RW Part 4 (16 - 20)
    const p4 = test.reading_writing.parts.find(p => p.part_number === 4) || test.reading_writing.parts[3];
    const p4Questions = (p4 && p4.questions) ? p4.questions : ((p4 && p4.cloze) ? p4.cloze.questions : []);
    p4Questions.forEach(q => {
        const userVal = (startersUserAnswers.reading_writing[q.id] || '').trim().toLowerCase();
        const correctAnswers = q.correct_answers ? q.correct_answers.map(a => a.toLowerCase()) : (q.correct_answer ? [q.correct_answer.toLowerCase()] : []);
        const isCorrect = correctAnswers.some(ans => ans === userVal);
        if (isCorrect) rwCorrect++;
        rwReview.push({
            id: q.id,
            skill: 'reading_writing',
            part: 4,
            prompt: q.question || `Part 4: Question ${q.id}`,
            userAns: startersUserAnswers.reading_writing[q.id] || 'Not answered',
            correctAns: q.correct_answers ? q.correct_answers.join(' / ') : (q.correct_answer || ''),
            isCorrect,
            explanation: q.explanation
        });
    });

    // RW Part 5 (21 - 25)
    test.reading_writing.parts[4].questions.forEach(q => {
        const userVal = (startersUserAnswers.reading_writing[q.id] || '').trim().toLowerCase();
        const isCorrect = q.correct_answers.some(ans => ans.toLowerCase() === userVal);
        if (isCorrect) rwCorrect++;
        rwReview.push({
            id: q.id,
            skill: 'reading_writing',
            part: 5,
            prompt: q.question,
            userAns: startersUserAnswers.reading_writing[q.id] || 'Not answered',
            correctAns: q.correct_answers.join(' / '),
            isCorrect,
            explanation: q.explanation
        });
    });

    // Calculate Cambridge Shields (1 to 5 shields per skill)
    function calcShields(correct, total) {
        const pct = (correct / total) * 100;
        if (pct >= 85) return 5;
        if (pct >= 65) return 4;
        if (pct >= 45) return 3;
        if (pct >= 25) return 2;
        return 1;
    }

    const lisShields = calcShields(lisCorrect, 20);
    const rwShields = calcShields(rwCorrect, 25);
    const spkShields = 4; // Speaking baseline score
    const totalShields = lisShields + rwShields + spkShields;

    startersTestScoreResult = {
        lisCorrect, lisTotal: 20, lisShields,
        rwCorrect, rwTotal: 25, rwShields,
        spkShields, totalShields,
        lisReview, rwReview
    };

    startersTestSubmitted = true;
    saveStartersProgress();

    if (showModal) showStartersResultsModal();
    return startersTestScoreResult;
}

function showStartersResultsModal() {
    const res = startersTestScoreResult;
    if (!res) return;

    function renderShieldIcons(count) {
        let s = '';
        for (let i = 0; i < count; i++) s += '🛡️ ';
        for (let i = count; i < 5; i++) s += '⚪ ';
        return s.trim();
    }

    let reviewHtml = '';
    const allReview = [...res.lisReview, ...res.rwReview];
    reviewHtml = allReview.map((item, idx) => `
        <div class="p-3 rounded-xl border ${item.isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'} space-y-1 text-xs">
            <div class="flex items-center justify-between">
                <span class="font-extrabold uppercase tracking-wide ${item.isCorrect ? 'text-emerald-800' : 'text-rose-800'}">
                    #${item.id} • ${item.skill.toUpperCase()} (Part ${item.part})
                </span>
                <span class="px-2 py-0.5 rounded-full font-black text-[10px] ${item.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}">
                    ${item.isCorrect ? 'CORRECT ✓' : 'INCORRECT ✗'}
                </span>
            </div>
            <p class="font-bold text-slate-800 mt-1">${escapeHtml(item.prompt)}</p>
            <div class="flex flex-wrap items-center gap-3 mt-1.5 text-[11px]">
                <span class="${item.isCorrect ? 'text-emerald-800' : 'text-rose-800'}">
                    <strong>Your Answer:</strong> ${escapeHtml(item.userAns)}
                </span>
                ${!item.isCorrect ? `
                    <span class="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                        <strong>Correct Answer:</strong> ${escapeHtml(item.correctAns)}
                    </span>
                ` : ''}
            </div>
            ${item.explanation ? `
                <p class="text-[11px] text-slate-500 italic mt-1 bg-white/60 p-1.5 rounded-lg border border-slate-100">
                    💡 ${escapeHtml(item.explanation)}
                </p>
            ` : ''}
        </div>
    `).join('');

    let modal = document.getElementById('starters-result-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'starters-result-modal';
        modal.className = "fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6";
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <!-- MODAL HEADER -->
            <div class="p-5 sm:p-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-between">
                <div>
                    <h2 class="text-xl sm:text-2xl font-black">CAMBRIDGE STARTERS OFFICIAL SCORE REPORT</h2>
                    <p class="text-xs text-amber-100 font-bold mt-0.5">
                        ${startersProfileData.starters_tests[activeStartersTestId]?.book_title} • ${startersProfileData.starters_tests[activeStartersTestId]?.test_title}
                    </p>
                </div>
                <button onclick="closeStartersResultModal()" class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold flex items-center justify-center transition">✕</button>
            </div>

            <!-- MODAL CONTENT SCROLLABLE -->
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 custom-scroll space-y-6">
                <!-- SHIELDS SUMMARY CARD -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-center space-y-3">
                    <span class="text-xs font-black uppercase text-amber-900 tracking-wider">Cambridge Pre-A1 Starters Shields:</span>
                    <div class="text-4xl sm:text-5xl font-black text-amber-600 flex items-center justify-center gap-2">
                        <span>🛡️</span> <span>${res.totalShields}</span> <span class="text-2xl sm:text-3xl text-slate-400">/ 15</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
                        <div class="p-3 rounded-xl bg-white/90 border border-amber-200 shadow-2xs">
                            <span class="text-[11px] font-black uppercase text-indigo-900 block">Listening:</span>
                            <div class="text-sm font-black text-amber-600 mt-1">${renderShieldIcons(res.lisShields)}</div>
                            <span class="text-xs text-slate-500 font-bold mt-0.5 block">${res.lisCorrect}/${res.lisTotal} Correct (${res.lisShields}/5 Shields)</span>
                        </div>
                        <div class="p-3 rounded-xl bg-white/90 border border-amber-200 shadow-2xs">
                            <span class="text-[11px] font-black uppercase text-indigo-900 block">Reading & Writing:</span>
                            <div class="text-sm font-black text-amber-600 mt-1">${renderShieldIcons(res.rwShields)}</div>
                            <span class="text-xs text-slate-500 font-bold mt-0.5 block">${res.rwCorrect}/${res.rwTotal} Correct (${res.rwShields}/5 Shields)</span>
                        </div>
                        <div class="p-3 rounded-xl bg-white/90 border border-amber-200 shadow-2xs">
                            <span class="text-[11px] font-black uppercase text-indigo-900 block">Speaking:</span>
                            <div class="text-sm font-black text-amber-600 mt-1">${renderShieldIcons(res.spkShields)}</div>
                            <span class="text-xs text-slate-500 font-bold mt-0.5 block">Examiner Feedback (${res.spkShields}/5 Shields)</span>
                        </div>
                    </div>
                </div>

                <!-- DETAILED QUESTION REVIEW -->
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <h4 class="text-sm font-black uppercase text-slate-900">Detailed Answer Review:</h4>
                        <span class="text-xs font-bold text-slate-500">${allReview.filter(r => r.isCorrect).length}/${allReview.length} Correct</span>
                    </div>
                    <div class="space-y-2.5">
                        ${reviewHtml}
                    </div>
                </div>
            </div>

            <!-- MODAL FOOTER -->
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button onclick="resetStartersTest()" class="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-extrabold transition">
                    🔄 Reset & Practice Again
                </button>
                <button onclick="closeStartersResultModal()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black shadow-md hover:shadow-lg transition">
                    Close Report
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeStartersResultModal() {
    const modal = document.getElementById('starters-result-modal');
    if (modal) modal.classList.add('hidden');
}

function resetStartersTest() {
    if (!confirm("Are you sure you want to reset all answers and retake this test?")) return;
    startersUserAnswers = { listening: {}, reading_writing: {}, speaking: {} };
    startersTestSubmitted = false;
    startersTestScoreResult = null;
    startersTimerSeconds = 45 * 60;
    saveStartersProgress();
    closeStartersResultModal();
    renderStartersSkillContent();
}

// Global ESC key shortcut to close modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        const imgModal = document.getElementById('starters-image-modal');
        if (imgModal && !imgModal.classList.contains('hidden')) {
            e.preventDefault();
            closeStartersImageModal();
            return;
        }

        const resultModal = document.getElementById('starters-result-modal');
        if (resultModal && !resultModal.classList.contains('hidden')) {
            e.preventDefault();
            closeStartersResultModal();
            return;
        }
    }
});
