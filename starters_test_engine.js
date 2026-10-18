// =========================================================================
// CAMBRIDGE STARTERS TEST ENGINE (PRE-A1 STARTERS 1 - 4)
// TỰ ĐỘNG CHẤM ĐIỂM KHIÊN CAMBRIDGE (SHIELDS 🛡️ TỐI ĐA 15 KHIÊN)
// ĐẦY ĐỦ 3 KỸ NĂNG: LISTENING - READING & WRITING - SPEAKING
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
let startersTimerSeconds = 45 * 60; // 45 phút cho đề thi Starters
let startersTestSubmitted = false;
let startersTestScoreResult = null;

const STARTERS_STORAGE_KEY_PREFIX = 'smart_starters_progress_';

// 1. KHỞI TẠO TEST ENGINE
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
            startersTestSubmitted = data.submitted || false;
            startersTimerSeconds = data.timer || 45 * 60;
            startersTestScoreResult = data.result || null;
        } else {
            startersUserAnswers = { listening: {}, reading_writing: {}, speaking: {} };
            startersTestSubmitted = false;
            startersTimerSeconds = 45 * 60;
            startersTestScoreResult = null;
        }
    } catch(e) {
        console.error("Lỗi khi nạp tiến độ Starters:", e);
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
        console.error("Lỗi khi lưu tiến độ Starters:", e);
    }
}

function startStartersTimer() {
    if (startersTimerInterval) clearInterval(startersTimerInterval);
    startersTimerInterval = setInterval(() => {
        if (!startersTestSubmitted && startersTimerSeconds > 0) {
            startersTimerSeconds--;
            updateStartersTimerDisplay();
            if (startersTimerSeconds % 15 === 0) saveStartersProgress();
            if (startersTimerSeconds === 0) {
                alert("⏰ Đã hết 45 phút thời gian làm bài thi Starters! Hệ thống sẽ tự động tổng kết số Khiên Cambridge của bé.");
                gradeStartersTest(true);
            }
        }
    }, 1000);
    updateStartersTimerDisplay();
}

function updateStartersTimerDisplay() {
    const el = document.getElementById('starters-timer-display');
    if (!el) return;
    const m = Math.floor(startersTimerSeconds / 60);
    const s = startersTimerSeconds % 60;
    el.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// 2. CHUYỂN BÀI TEST & KỸ NĂNG
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
    activeStartersSkill = skill;
    updateStartersSkillNavButtons();
    renderStartersSkillContent();
}

function updateStartersSkillNavButtons() {
    const skills = ['listening', 'reading_writing', 'speaking'];
    skills.forEach(s => {
        const btn = document.getElementById(`btn-starters-skill-${s}`);
        if (!btn) return;
        if (s === activeStartersSkill) {
            btn.className = "px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-1.5 transition active:scale-95 shadow-sm bg-amber-400 text-slate-950 ring-2 ring-amber-300 shrink-0";
        } else {
            btn.className = "px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition active:scale-95 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shrink-0";
        }
    });
}

// 3. VẼ GIAO DIỆN CHÍNH
function renderStartersTestView() {
    const container = document.getElementById('starters-test-view');
    if (!container) return;

    const test = startersProfileData.starters_tests[activeStartersTestId];
    if (!test) return;

    // Cập nhật select chọn đề thi
    const select = document.getElementById('starters-test-selector');
    if (select) select.value = activeStartersTestId;

    updateStartersSkillNavButtons();
    renderStartersSkillContent();
}

function renderStartersSkillContent() {
    const container = document.getElementById('starters-content-area');
    if (!container) return;

    if (activeStartersSkill === 'listening') {
        renderStartersListeningView(container);
    } else if (activeStartersSkill === 'reading_writing') {
        renderStartersReadingWritingView(container);
    } else if (activeStartersSkill === 'speaking') {
        renderStartersSpeakingView(container);
    }
}

// -------------------------------------------------------------
// HELPER: RENDER GALLERY HÌNH ẢNH SÁCH GỐC CAMBRIDGE STARTERS
// -------------------------------------------------------------
function renderBookImageGallery(images, title = "Tranh gốc Cambridge Starters", galleryId = "gallery-default") {
    if (!images || images.length === 0) return '';
    
    // Nếu chỉ có 1 trang ảnh
    if (images.length === 1) {
        return `
            <div class="mb-4 bg-slate-900/5 rounded-2xl p-2.5 sm:p-3 border border-slate-200/90 shadow-2xs">
                <div class="flex items-center justify-between mb-2 px-1">
                    <span class="text-xs font-black text-slate-800 flex items-center gap-1.5">
                        <span class="text-amber-500">📖</span> <span>${title}</span>
                    </span>
                    <button onclick="openStartersImageModal('${images[0]}', '${escapeQuotes(title)}')" 
                            class="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 text-indigo-600 border border-slate-200 text-[11px] font-bold flex items-center gap-1 shadow-2xs transition active:scale-95">
                        <span>🔍</span> <span>Phóng to tranh gốc</span>
                    </button>
                </div>
                <div class="relative group cursor-zoom-in overflow-hidden rounded-xl bg-white border border-slate-200 flex justify-center items-center max-h-[460px]"
                     onclick="openStartersImageModal('${images[0]}', '${escapeQuotes(title)}')">
                    <img src="${images[0]}" alt="${title}" class="max-h-[460px] w-auto object-contain transition duration-200 group-hover:scale-[1.01]">
                    <div class="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
                        <span class="px-3 py-1.5 rounded-full bg-slate-900/80 text-white text-xs font-bold shadow-lg backdrop-blur-xs flex items-center gap-1.5">
                            🔍 Nhấp để xem to toàn màn hình
                        </span>
                    </div>
                </div>
            </div>
        `;
    }

    // Nếu có nhiều trang ảnh (2 hoặc 3 trang liên tiếp)
    const uniqueId = galleryId || 'gallery_' + Math.random().toString(36).substr(2, 9);
    return `
        <div class="mb-4 bg-slate-900/5 rounded-2xl p-2.5 sm:p-3 border border-slate-200/90 shadow-2xs" id="${uniqueId}">
            <div class="flex items-center justify-between mb-2 px-1 flex-wrap gap-2">
                <span class="text-xs font-black text-slate-800 flex items-center gap-1.5">
                    <span class="text-amber-500">📖</span> <span>${title}</span> <span class="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">${images.length} trang</span>
                </span>
                <div class="flex items-center gap-1.5">
                    ${images.map((img, i) => `
                        <button onclick="switchGalleryTab('${uniqueId}', ${i})" 
                                id="${uniqueId}_tab_${i}"
                                class="px-2.5 py-1 rounded-lg text-xs font-bold transition active:scale-95 ${i === 0 ? 'bg-indigo-600 text-white shadow-2xs' : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'}">
                            Trang ${i + 1}
                        </button>
                    `).join('')}
                    <button onclick="openCurrentGalleryModal('${uniqueId}')" 
                            class="ml-1 px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 text-indigo-600 border border-slate-200 text-[11px] font-bold flex items-center gap-1 shadow-2xs transition active:scale-95">
                        <span>🔍</span> <span>Phóng to</span>
                    </button>
                </div>
            </div>

            ${images.map((img, i) => `
                <div id="${uniqueId}_img_${i}" 
                     class="${i === 0 ? 'block' : 'hidden'} relative group cursor-zoom-in overflow-hidden rounded-xl bg-white border border-slate-200 flex justify-center items-center max-h-[460px]"
                     data-src="${img}"
                     onclick="openStartersImageModal('${img}', '${escapeQuotes(title)} - Trang ${i + 1}')">
                    <img src="${img}" alt="${title}" class="max-h-[460px] w-auto object-contain transition duration-200 group-hover:scale-[1.01]">
                    <div class="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
                        <span class="px-3 py-1.5 rounded-full bg-slate-900/80 text-white text-xs font-bold shadow-lg backdrop-blur-xs flex items-center gap-1.5">
                            🔍 Nhấp để xem to toàn màn hình
                        </span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function switchGalleryTab(galleryId, tabIndex) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;
    const imgs = gallery.querySelectorAll(`[id^="${galleryId}_img_"]`);
    const tabs = gallery.querySelectorAll(`[id^="${galleryId}_tab_"]`);
    imgs.forEach((el, i) => {
        if (i === tabIndex) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
    tabs.forEach((tab, i) => {
        if (i === tabIndex) {
            tab.className = "px-2.5 py-1 rounded-lg text-xs font-bold transition active:scale-95 bg-indigo-600 text-white shadow-2xs";
        } else {
            tab.className = "px-2.5 py-1 rounded-lg text-xs font-bold transition active:scale-95 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200";
        }
    });
}

function openCurrentGalleryModal(galleryId) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;
    const activeImg = gallery.querySelector(`[id^="${galleryId}_img_"]:not(.hidden)`);
    if (activeImg) {
        const src = activeImg.getAttribute('data-src');
        openStartersImageModal(src, 'Tranh gốc sách Cambridge');
    }
}

function openStartersImageModal(src, title = 'Tranh gốc sách Cambridge') {
    let modal = document.getElementById('starters-image-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'starters-image-modal';
        modal.className = "fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-2 sm:p-4 transition-opacity";
        modal.innerHTML = `
            <div class="relative max-w-5xl max-h-[92vh] w-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700" onclick="event.stopPropagation()">
                <div class="px-4 py-3 bg-slate-900 text-white flex items-center justify-between shrink-0">
                    <h3 id="starters-modal-title" class="font-bold text-sm sm:text-base flex items-center gap-2">
                        <span>📖</span> <span>Tranh gốc sách Cambridge</span>
                    </h3>
                    <button onclick="closeStartersImageModal()" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-sm transition">
                        ✕
                    </button>
                </div>
                <div class="p-2 overflow-auto custom-scroll flex justify-center items-center bg-slate-100 flex-1 min-h-[300px]">
                    <img id="starters-modal-img" src="" alt="Tranh gốc sách Cambridge" class="max-h-[82vh] w-auto object-contain rounded-lg shadow-sm">
                </div>
            </div>
        `;
        modal.addEventListener('click', closeStartersImageModal);
        document.body.appendChild(modal);
    }
    
    document.getElementById('starters-modal-title').innerHTML = `<span>📖</span> <span>${escapeHtml(title)}</span>`;
    document.getElementById('starters-modal-img').src = src;
    modal.classList.remove('hidden');
}

function closeStartersImageModal() {
    const modal = document.getElementById('starters-image-modal');
    if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// A. GIAO DIỆN LISTENING (4 PARTS)
// -------------------------------------------------------------
function renderStartersListeningView(container) {
    const test = startersProfileData.starters_tests[activeStartersTestId];
    const lis = test.listening;
    const currentPart = lis.parts.find(p => p.part_number === activeStartersLisPart) || lis.parts[0];

    let partHtml = '';

    if (activeStartersLisPart === 1) {
        // Part 1: Listen and draw lines
        const galleryHtml = renderBookImageGallery(test.book_images?.listening?.part_1, "Tranh toàn cảnh Part 1 (Nhìn tranh và nối bạn nhỏ)", "gal_lis_1");
        partHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center justify-between">
                    <span>🎧 <strong>Part 1:</strong> Nghe đoạn hội thoại và chọn đúng vị trí hoặc hành động của từng bạn nhỏ trong bức tranh gốc bên dưới.</span>
                </div>

                ${galleryHtml}

                <div class="space-y-3">
                    ${currentPart.questions.map((q, qIdx) => {
                        const userVal = startersUserAnswers.listening[q.id] || '';
                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2">
                                        <span class="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0">${q.id}</span>
                                        <h4 class="font-extrabold text-sm text-slate-900">${q.name}</h4>
                                    </div>
                                    <button onclick="speakStartersQuestion('${escapeQuotes(q.audio_prompt)}')" class="px-3 py-1 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1 transition active:scale-95 shrink-0">
                                        <span>🔊</span> <span>Nghe câu đố</span>
                                    </button>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                    ${q.options.map(opt => {
                                        const isSelected = userVal === opt;
                                        return `
                                            <button onclick="handleStartersAnswerChange('listening', ${q.id}, '${escapeQuotes(opt)}')"
                                                    class="text-left p-2.5 rounded-xl border text-xs font-semibold transition active:scale-95 ${
                                                        isSelected 
                                                            ? 'bg-amber-100 border-amber-500 text-amber-950 font-bold ring-2 ring-amber-300' 
                                                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                                                    }">
                                                ${isSelected ? '✓ ' : '○ '} ${opt}
                                            </button>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else if (activeStartersLisPart === 2) {
        // Part 2: Listen and write a name or a number
        const galleryHtml = renderBookImageGallery(test.book_images?.listening?.part_2, "Tranh minh họa Part 2 (Nghe và viết tên/số)", "gal_lis_2");
        partHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-950 flex items-center justify-between">
                    <span>🎧 <strong>Part 2:</strong> Nghe đoạn hội thoại và điền một TÊN (Name) hoặc một CON SỐ (Number) vào chỗ trống.</span>
                </div>

                ${galleryHtml}

                <div class="space-y-3">
                    ${currentPart.questions.map(q => {
                        const userVal = startersUserAnswers.listening[q.id] || '';
                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                <div class="flex-1 space-y-1">
                                    <p class="font-extrabold text-xs sm:text-sm text-slate-900">${q.question}</p>
                                    <button onclick="speakStartersQuestion('${escapeQuotes(q.audio_script)}')" class="inline-flex items-center gap-1 text-[11px] font-bold text-violet-700 hover:text-violet-900 mt-1">
                                        <span>🔊 Nghe hội thoại</span>
                                    </button>
                                </div>
                                <div class="w-full sm:w-auto">
                                    <input type="text" 
                                           value="${escapeHtml(userVal)}" 
                                           oninput="handleStartersAnswerChange('listening', ${q.id}, this.value)"
                                           placeholder="Nhập tên hoặc số..."
                                           class="w-full sm:w-48 px-3.5 py-2 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-xs sm:text-sm font-bold font-mono outline-none">
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else if (activeStartersLisPart === 3) {
        // Part 3: Listen and tick the box
        const galleryHtml = renderBookImageGallery(test.book_images?.listening?.part_3, "Tranh câu hỏi A, B, C Part 3 (Nhìn tranh trong sách & chọn đáp án)", "gal_lis_3");
        partHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                    <span>🎧 <strong>Part 3:</strong> Nhìn tranh các câu hỏi trong sách bên dưới, nghe đoạn hội thoại và bấm chọn đáp án đúng (A, B hoặc C).</span>
                </div>

                ${galleryHtml}

                <div class="space-y-3.5">
                    ${currentPart.questions.map(q => {
                        const userVal = startersUserAnswers.listening[q.id] || '';
                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                                <div class="flex items-start justify-between gap-2">
                                    <p class="font-extrabold text-xs sm:text-sm text-slate-900">${q.question}</p>
                                    <button onclick="speakStartersQuestion('${escapeQuotes(q.audio_script)}')" class="px-3 py-1 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1 transition active:scale-95 shrink-0">
                                        <span>🔊</span> <span>Nghe bài</span>
                                    </button>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                    ${q.options.map(opt => {
                                        const optLetter = opt.charAt(0);
                                        const isSelected = userVal.toUpperCase() === optLetter.toUpperCase();
                                        return `
                                            <button onclick="handleStartersAnswerChange('listening', ${q.id}, '${optLetter}')"
                                                    class="p-3 rounded-2xl border text-left transition active:scale-95 ${
                                                        isSelected 
                                                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300' 
                                                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 font-semibold'
                                                    }">
                                                <div class="flex items-center gap-2">
                                                    <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-700'}">${optLetter}</span>
                                                    <span class="text-xs leading-snug">${opt.substring(3)}</span>
                                                </div>
                                            </button>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else if (activeStartersLisPart === 4) {
        // Part 4: Listen and colour
        const galleryHtml = renderBookImageGallery(test.book_images?.listening?.part_4, "Tranh tô màu Part 4 (Nhìn tranh trong sách & chọn màu sắc)", "gal_lis_4");
        partHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-fuchsia-50 border border-fuchsia-200 text-xs text-fuchsia-950 flex items-center justify-between">
                    <span>🎨 <strong>Part 4:</strong> Quan sát bức tranh gốc trong sách bên dưới, nghe hướng dẫn và chọn màu sắc phù hợp cho từng đồ vật.</span>
                </div>

                ${galleryHtml}

                <div class="space-y-3">
                    ${currentPart.questions.map(q => {
                        const userVal = startersUserAnswers.listening[q.id] || '';
                        const colours = [
                            { name: "Red (Đỏ)", bg: "bg-rose-500", text: "text-white" },
                            { name: "Blue (Xanh dương)", bg: "bg-sky-500", text: "text-white" },
                            { name: "Yellow (Vàng)", bg: "bg-amber-400", text: "text-slate-950" },
                            { name: "Green (Xanh lá)", bg: "bg-emerald-500", text: "text-white" },
                            { name: "Brown (Nâu)", bg: "bg-amber-800", text: "text-white" },
                            { name: "Purple (Tím)", bg: "bg-purple-600", text: "text-white" }
                        ];

                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2">
                                        <span class="w-7 h-7 rounded-full bg-fuchsia-500 text-white font-black text-xs flex items-center justify-center shrink-0">${q.id}</span>
                                        <h4 class="font-extrabold text-xs sm:text-sm text-slate-900">${q.item}</h4>
                                    </div>
                                    <button onclick="speakStartersQuestion('${escapeQuotes(q.audio_script)}')" class="px-3 py-1 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1 transition active:scale-95 shrink-0">
                                        <span>🔊</span> <span>Nghe màu sắc</span>
                                    </button>
                                </div>

                                <div class="flex flex-wrap gap-2 pt-1">
                                    ${colours.map(c => {
                                        const isSelected = userVal === c.name;
                                        return `
                                            <button onclick="handleStartersAnswerChange('listening', ${q.id}, '${c.name}')"
                                                    class="px-3 py-1.5 rounded-xl text-xs font-bold transition active:scale-95 flex items-center gap-1.5 ${
                                                        isSelected 
                                                            ? `${c.bg} ${c.text} ring-2 ring-offset-2 ring-indigo-500 shadow-sm scale-105` 
                                                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                                    }">
                                                <span class="w-2.5 h-2.5 rounded-full ${c.bg} border border-white"></span>
                                                <span>${c.name}</span>
                                            </button>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="flex flex-col h-full overflow-hidden">
            <!-- PART TABS (PART 1, 2, 3, 4) -->
            <div class="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200 shrink-0">
                <div class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
                    ${[1, 2, 3, 4].map(pNum => `
                        <button onclick="switchStartersLisPart(${pNum})" class="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition shrink-0 ${
                            activeStartersLisPart === pNum ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }">
                            Part ${pNum}
                        </button>
                    `).join('')}
                </div>
                <span class="text-xs font-bold text-slate-500 hidden sm:inline">20 câu hỏi • Chuẩn Cambridge Pre-A1</span>
            </div>

            <div class="flex-1 overflow-y-auto custom-scroll pr-1">
                ${partHtml}
            </div>
        </div>
    `;
}

function switchStartersLisPart(partNum) {
    activeStartersLisPart = partNum;
    renderStartersSkillContent();
}

// -------------------------------------------------------------
// B. GIAO DIỆN READING & WRITING (5 PARTS)
// -------------------------------------------------------------
function renderStartersReadingWritingView(container) {
    const test = startersProfileData.starters_tests[activeStartersTestId];
    const rw = test.reading_writing;
    const currentPart = rw.parts.find(p => p.part_number === activeStartersRwPart) || rw.parts[0];

    let partHtml = '';

    if (activeStartersRwPart === 1) {
        // Part 1: Tick or Cross
        const galleryHtml = renderBookImageGallery(test.book_images?.reading_writing?.part_1, "Trang tranh câu hỏi Part 1 (Nhìn hình trong sách và chọn Tick ✓ hoặc Cross ✗)", "gal_rw_1");
        partHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center justify-between">
                    <span>📖 <strong>Part 1:</strong> Nhìn hình trong trang sách gốc bên dưới và đọc câu khẳng định. Nếu ĐÚNG bấm Tick (✓), nếu SAI bấm Cross (✗).</span>
                </div>

                ${galleryHtml}

                <div class="space-y-3">
                    ${currentPart.questions.map(q => {
                        const userVal = startersUserAnswers.reading_writing[q.id] || '';
                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                                <div class="flex items-center gap-3">
                                    <span class="w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0">Câu ${q.id}</span>
                                    <div>
                                        <p class="font-extrabold text-sm text-slate-900">${q.statement}</p>
                                    </div>
                                </div>

                                <div class="flex items-center gap-2">
                                    <button onclick="handleStartersAnswerChange('reading_writing', ${q.id}, 'tick')"
                                            class="px-4 py-2 rounded-xl text-xs font-black transition active:scale-95 flex items-center gap-1.5 ${
                                                userVal === 'tick'
                                                    ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-300'
                                                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
                                            }">
                                        <span>✓ Tick (Đúng)</span>
                                    </button>
                                    <button onclick="handleStartersAnswerChange('reading_writing', ${q.id}, 'cross')"
                                            class="px-4 py-2 rounded-xl text-xs font-black transition active:scale-95 flex items-center gap-1.5 ${
                                                userVal === 'cross'
                                                    ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-300'
                                                    : 'bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200'
                                            }">
                                        <span>✗ Cross (Sai)</span>
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else if (activeStartersRwPart === 2) {
        // Part 2: Look and write 'yes' or 'no'
        const galleryHtml = renderBookImageGallery(test.book_images?.reading_writing?.part_2, "Tranh toàn cảnh Part 2 (Nhìn tranh trong sách & chọn yes/no)", "gal_rw_2");
        partHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-950 flex items-center justify-between">
                    <span>📖 <strong>Part 2:</strong> Quan sát bức tranh sinh hoạt trong sách bên dưới và đọc câu miêu tả. Bấm chọn <strong>yes</strong> hoặc <strong>no</strong>.</span>
                </div>

                ${galleryHtml}

                <div class="space-y-3">
                    ${currentPart.questions.map(q => {
                        const userVal = startersUserAnswers.reading_writing[q.id] || '';
                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                <div class="flex-1">
                                    <span class="text-xs font-black text-sky-600">Câu ${q.id}</span>
                                    <p class="font-extrabold text-xs sm:text-sm text-slate-900 mt-0.5">${q.statement}</p>
                                </div>

                                <div class="flex items-center gap-2">
                                    <button onclick="handleStartersAnswerChange('reading_writing', ${q.id}, 'yes')"
                                            class="px-5 py-2 rounded-xl text-xs font-black transition active:scale-95 ${
                                                userVal.toLowerCase() === 'yes'
                                                    ? 'bg-sky-600 text-white shadow-md ring-2 ring-sky-300'
                                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                            }">
                                        yes (Có)
                                    </button>
                                    <button onclick="handleStartersAnswerChange('reading_writing', ${q.id}, 'no')"
                                            class="px-5 py-2 rounded-xl text-xs font-black transition active:scale-95 ${
                                                userVal.toLowerCase() === 'no'
                                                    ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-300'
                                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                            }">
                                        no (Không)
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else if (activeStartersRwPart === 3) {
        // Part 3: Jumbled letters
        const galleryHtml = renderBookImageGallery(test.book_images?.reading_writing?.part_3, "Trang tranh đồ vật Part 3 (Nhìn hình đồ vật & thớt chữ cái)", "gal_rw_3");
        partHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-violet-50 border border-violet-200 text-xs text-violet-950 flex items-center justify-between">
                    <span>🔤 <strong>Part 3:</strong> Quan sát đồ vật trong trang sách bên dưới và sắp xếp các chữ cái thành từ vựng tiếng Anh đúng.</span>
                </div>

                ${galleryHtml}

                <div class="space-y-3.5">
                    ${currentPart.questions.map(q => {
                        const userVal = startersUserAnswers.reading_writing[q.id] || '';
                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                                <div class="flex items-center gap-3">
                                    <span class="w-8 h-8 rounded-full bg-violet-600 text-white font-black text-xs flex items-center justify-center shrink-0">${q.id}</span>
                                    <div>
                                        <p class="font-bold text-xs text-slate-600">${q.hint}</p>
                                        <div class="flex items-center gap-1.5 mt-1 font-mono font-black text-base text-violet-900 tracking-wider">
                                            ${q.scrambled.split(' / ').map(ch => `<span class="px-2 py-0.5 rounded bg-violet-100 border border-violet-300">${ch}</span>`).join('')}
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full sm:w-auto">
                                    <input type="text" 
                                           value="${escapeHtml(userVal)}" 
                                           oninput="handleStartersAnswerChange('reading_writing', ${q.id}, this.value)"
                                           placeholder="Gõ từ hoàn chỉnh..."
                                           class="w-full sm:w-44 px-3.5 py-2 rounded-xl border border-slate-300 focus:border-violet-600 focus:ring-2 focus:ring-violet-100 text-sm font-black font-mono uppercase tracking-wider outline-none text-center">
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else if (activeStartersRwPart === 4) {
        // Part 4: Cloze test
        const cloze = currentPart.cloze;
        const galleryHtml = renderBookImageGallery(test.book_images?.reading_writing?.part_4, "Trang bài đọc & Word Bank Part 4 (Nhìn ô từ vựng trong sách)", "gal_rw_4");
        partHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                    <span>📖 <strong>Part 4:</strong> Đọc bài và nhìn hình trong ô từ vựng của trang sách bên dưới để điền từ vào chỗ trống 16 - 20.</span>
                </div>

                ${galleryHtml}

                <!-- WORD BANK -->
                <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                    <span class="text-xs font-black text-amber-900 uppercase block mb-2">🎁 Ngân hàng từ vựng gợi ý:</span>
                    <div class="flex flex-wrap gap-2">
                        ${cloze.word_bank.map(wb => `
                            <span class="px-3 py-1 rounded-xl bg-white border border-amber-300 shadow-2xs text-xs font-bold text-slate-800 flex items-center gap-1.5">
                                <span>${wb.icon}</span> <span>${wb.word}</span> <span class="text-[10px] text-slate-400">(${wb.meaning})</span>
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- STORY TEXT -->
                <div class="p-5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm leading-loose text-slate-800 font-sans shadow-xs space-y-3">
                    <h4 class="font-black text-sm sm:text-base text-slate-900 pb-2 border-b border-slate-100">${cloze.title}</h4>
                    <p class="whitespace-pre-line">${cloze.text_template}</p>
                </div>

                <!-- INPUT SLOTS 16 - 20 -->
                <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-1">
                    ${cloze.questions.map(q => {
                        const userVal = startersUserAnswers.reading_writing[q.id] || '';
                        return `
                            <div class="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col">
                                <span class="text-[10px] font-bold text-indigo-600 mb-1">Chỗ trống [${q.id}]:</span>
                                <input type="text" 
                                       value="${escapeHtml(userVal)}" 
                                       oninput="handleStartersAnswerChange('reading_writing', ${q.id}, this.value)"
                                       placeholder="Từ điền..."
                                       class="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 focus:border-indigo-600 text-xs font-bold font-mono outline-none">
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else if (activeStartersRwPart === 5) {
        // Part 5: One-word answers
        const galleryHtml = renderBookImageGallery(test.book_images?.reading_writing?.part_5, "Tranh diễn biến câu chuyện Part 5 (Nhìn tranh 1, 2, 3 trong sách & trả lời)", "gal_rw_5");
        partHtml = `
            <div class="space-y-4">
                <div class="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950 flex items-center justify-between">
                    <span>📖 <strong>Part 5:</strong> Quan sát 3 bức tranh diễn biến câu chuyện trong sách bên dưới và viết câu trả lời bằng <strong>ĐÚNG 1 TỪ DUY NHẤT</strong>.</span>
                </div>

                ${galleryHtml}

                <div class="space-y-3">
                    ${currentPart.questions.map(q => {
                        const userVal = startersUserAnswers.reading_writing[q.id] || '';
                        return `
                            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                <div class="flex-1 space-y-1">
                                    <p class="font-extrabold text-xs sm:text-sm text-slate-900">${q.question}</p>
                                    <p class="text-[11px] text-slate-500 italic">💡 Gợi ý: ${q.clue}</p>
                                </div>

                                <div class="w-full sm:w-auto">
                                    <input type="text" 
                                           value="${escapeHtml(userVal)}" 
                                           oninput="handleStartersAnswerChange('reading_writing', ${q.id}, this.value)"
                                           placeholder="Gõ 1 từ duy nhất..."
                                           class="w-full sm:w-44 px-3.5 py-2 rounded-xl border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 text-xs sm:text-sm font-bold font-mono outline-none">
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="flex flex-col h-full overflow-hidden">
            <!-- PART TABS (PART 1 - 5) -->
            <div class="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200 shrink-0">
                <div class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
                    ${[1, 2, 3, 4, 5].map(pNum => `
                        <button onclick="switchStartersRwPart(${pNum})" class="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition shrink-0 ${
                            activeStartersRwPart === pNum ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }">
                            Part ${pNum}
                        </button>
                    `).join('')}
                </div>
                <span class="text-xs font-bold text-slate-500 hidden sm:inline">25 câu hỏi • Chuẩn Cambridge Pre-A1</span>
            </div>

            <div class="flex-1 overflow-y-auto custom-scroll pr-1">
                ${partHtml}
            </div>
        </div>
    `;
}

function switchStartersRwPart(partNum) {
    activeStartersRwPart = partNum;
    renderStartersSkillContent();
}

// -------------------------------------------------------------
// C. GIAO DIỆN SPEAKING (4 PARTS)
// -------------------------------------------------------------
function renderStartersSpeakingView(container) {
    const test = startersProfileData.starters_tests[activeStartersTestId];
    const spk = test.speaking;
    const partKey = `part_${activeStartersSpkPart}`;
    const currentPart = spk[partKey];

    let spkGalleryHtml = '';
    if (activeStartersSpkPart === 1 || activeStartersSpkPart === 3) {
        spkGalleryHtml = renderBookImageGallery(test.book_images?.speaking?.part_1, "Tranh toàn cảnh Speaking (Scene Picture)", "gal_spk_scene");
    } else if (activeStartersSpkPart === 2) {
        spkGalleryHtml = renderBookImageGallery(test.book_images?.speaking?.part_2, "Các thẻ đồ vật Speaking (Object Cards)", "gal_spk_cards");
    }

    container.innerHTML = `
        <div class="flex flex-col h-full overflow-hidden">
            <!-- PART TABS (PART 1, 2, 3, 4) -->
            <div class="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-200 shrink-0">
                <div class="flex items-center gap-1.5 sm:gap-2">
                    <button onclick="switchStartersSpkPart(1)" class="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeStartersSpkPart === 1 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        Part 1: Scene
                    </button>
                    <button onclick="switchStartersSpkPart(2)" class="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeStartersSpkPart === 2 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        Part 2: Object Cards
                    </button>
                    <button onclick="switchStartersSpkPart(3)" class="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeStartersSpkPart === 3 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        Part 3: Questions
                    </button>
                    <button onclick="switchStartersSpkPart(4)" class="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition ${
                        activeStartersSpkPart === 4 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }">
                        Part 4: Personal
                    </button>
                </div>
                <span class="text-xs font-bold text-slate-500 hidden sm:inline">3 - 5 phút • Giám khảo AI bản xứ & Ghi âm</span>
            </div>

            <!-- SPEAKING CONTENT -->
            <div class="flex-1 overflow-y-auto custom-scroll pr-1 space-y-4">
                <div class="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-center justify-between">
                    <span>💡 <strong>${currentPart.title}:</strong> Lắng nghe giám khảo hỏi và bấm micro để ghi âm câu trả lời tự tin của bé nhé!</span>
                </div>

                ${spkGalleryHtml}

                ${currentPart.prompts.map((p, idx) => `
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                        <div class="flex items-start justify-between gap-2">
                            <p class="font-extrabold text-xs sm:text-sm text-slate-900">
                                <span class="text-indigo-600 mr-1.5">Q${idx + 1}:</span> ${p.q}
                            </p>
                            <button onclick="speakStartersQuestion('${escapeQuotes(p.q)}')" class="px-3 py-1 rounded-xl bg-violet-100 hover:bg-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1 transition active:scale-95 shrink-0">
                                <span>🔊</span> <span>Nghe giám khảo</span>
                            </button>
                        </div>

                        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                            <button onclick="toggleStartersVoiceRecord('spk_${activeStartersSpkPart}_${idx}')" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs flex items-center gap-1.5 transition active:scale-95">
                                <span>🎙️</span> <span>Ghi âm câu trả lời</span>
                            </button>
                            <div id="starters-audio-playback-spk_${activeStartersSpkPart}_${idx}" class="inline-flex"></div>

                            <button onclick="toggleTranscript('sample-starters-spk-${activeStartersSpkPart}-${idx}')" class="ml-auto px-3 py-1 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition">
                                💡 Xem mẫu trả lời
                            </button>
                        </div>

                        <div id="sample-starters-spk-${activeStartersSpkPart}-${idx}" class="hidden mt-2 p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-slate-800 space-y-1">
                            <p class="font-bold text-amber-900">Câu trả lời mẫu:</p>
                            <p class="italic font-serif bg-white p-2 rounded-lg border border-amber-100 text-slate-800">"${p.model_answer}"</p>
                            <p class="text-[11px] text-slate-500">👉 ${p.vietnamese_hint}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function switchStartersSpkPart(partNum) {
    activeStartersSpkPart = partNum;
    renderStartersSkillContent();
}

// -------------------------------------------------------------
// D. XỬ LÝ ĐÁP ÁN & ÂM THANH
// -------------------------------------------------------------
function handleStartersAnswerChange(skill, qId, val) {
    if (startersTestSubmitted) return;
    if (!startersUserAnswers[skill]) startersUserAnswers[skill] = {};
    startersUserAnswers[skill][qId] = val;
    saveStartersProgress();
    renderStartersSkillContent();
}

function speakStartersQuestion(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const ut = new SpeechSynthesisUtterance(text);
        ut.lang = 'en-GB';
        ut.rate = 0.85; // Tốc độ nói chậm rãi, rõ ràng cho trẻ em
        window.speechSynthesis.speak(ut);
    }
}

async function toggleStartersVoiceRecord(slotId) {
    if (startersMediaRecorder && startersMediaRecorder.state === 'recording') {
        startersMediaRecorder.stop();
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        startersMediaRecorder = new MediaRecorder(stream);
        startersAudioChunks = [];

        startersMediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) startersAudioChunks.push(e.data);
        };

        startersMediaRecorder.onstop = () => {
            const audioBlob = new Blob(startersAudioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            startersRecordedAudioUrls[slotId] = audioUrl;

            const playbackContainer = document.getElementById('starters-audio-playback-' + slotId);
            if (playbackContainer) {
                playbackContainer.innerHTML = `<audio controls src="${audioUrl}" class="h-8 max-w-[180px]"></audio>`;
            }
            stream.getTracks().forEach(track => track.stop());
        };

        startersMediaRecorder.start();
        alert("🎙️ Đang ghi âm giọng nói của bé! Bấm lại nút để dừng ghi âm.");
    } catch(e) {
        alert("Không thể mở microphone. Vui lòng cấp quyền truy cập micro trong trình duyệt!");
    }
}

// -------------------------------------------------------------
// E. CHẤM ĐIỂM KHIÊN CAMBRIDGE (SHIELDS 🛡️ 15 KHIÊN)
// -------------------------------------------------------------
function submitStartersTest() {
    if (!confirm("Bạn có chắc chắn muốn nộp bài thi Starters để nhận Huân chương Khiên Cambridge (Shields 🛡️) và xem đáp án giải thích?")) {
        return;
    }
    gradeStartersTest(true);
}

function gradeStartersTest(showModal = true) {
    const test = startersProfileData.starters_tests[activeStartersTestId];
    if (!test) return;

    // 1. Chấm điểm Listening (20 câu)
    let lisCorrect = 0;
    const lisReview = [];

    test.listening.parts.forEach(p => {
        p.questions.forEach(q => {
            const userVal = startersUserAnswers.listening[q.id] || '';
            let isCorr = false;

            if (p.part_number === 1) {
                isCorr = (userVal === q.correct_answer);
            } else if (p.part_number === 2) {
                const cleanUser = userVal.toString().trim().toLowerCase();
                isCorr = q.correct_answers.some(c => cleanUser === c.toLowerCase());
            } else if (p.part_number === 3) {
                isCorr = (userVal.toUpperCase() === q.correct_answers[0].toUpperCase());
            } else if (p.part_number === 4) {
                isCorr = (userVal.trim().toLowerCase().includes(q.correct_color.split(' ')[0].toLowerCase()));
            }

            if (isCorr) lisCorrect++;

            lisReview.push({
                skill: "Listening",
                part: p.part_number,
                id: q.id,
                prompt: q.name || q.question || q.item || '',
                userAns: userVal || '(Chưa điền)',
                correctAns: q.correct_answer || q.correct_answers?.[0] || q.correct_color || '',
                isCorrect: isCorr,
                explanation: q.explanation || ''
            });
        });
    });

    // Quy đổi số câu đúng Listening sang số Khiên (1 - 5 Khiên)
    let lisShields = 0;
    if (lisCorrect >= 18) lisShields = 5;
    else if (lisCorrect >= 14) lisShields = 4;
    else if (lisCorrect >= 10) lisShields = 3;
    else if (lisCorrect >= 5) lisShields = 2;
    else if (lisCorrect >= 1) lisShields = 1;
    else lisShields = 0;

    // 2. Chấm điểm Reading & Writing (25 câu)
    let rwCorrect = 0;
    const rwReview = [];

    test.reading_writing.parts.forEach(p => {
        if (p.part_number === 4) {
            // Cloze test
            p.cloze.questions.forEach(q => {
                const userVal = startersUserAnswers.reading_writing[q.id] || '';
                const cleanUser = userVal.toString().trim().toLowerCase();
                const isCorr = (cleanUser === q.correct_answer.toLowerCase());
                if (isCorr) rwCorrect++;

                rwReview.push({
                    skill: "Reading & Writing",
                    part: 4,
                    id: q.id,
                    prompt: `Chỗ trống [${q.id}] trong bài ${p.cloze.title}`,
                    userAns: userVal || '(Chưa điền)',
                    correctAns: q.correct_answer,
                    isCorrect: isCorr,
                    explanation: q.explanation
                });
            });
        } else {
            p.questions.forEach(q => {
                const userVal = startersUserAnswers.reading_writing[q.id] || '';
                let isCorr = false;

                if (p.part_number === 1) {
                    const expected = q.is_correct ? 'tick' : 'cross';
                    isCorr = (userVal === expected);
                } else if (p.part_number === 2) {
                    isCorr = (userVal.toLowerCase() === q.correct_answers[0].toLowerCase());
                } else if (p.part_number === 3) {
                    isCorr = (userVal.trim().toUpperCase() === q.correct_word.toUpperCase());
                } else if (p.part_number === 5) {
                    const cleanUser = userVal.toString().trim().toLowerCase();
                    isCorr = q.correct_answers.some(c => cleanUser === c.toLowerCase());
                }

                if (isCorr) rwCorrect++;

                rwReview.push({
                    skill: "Reading & Writing",
                    part: p.part_number,
                    id: q.id,
                    prompt: q.statement || q.hint || q.question || '',
                    userAns: userVal || '(Chưa điền)',
                    correctAns: (p.part_number === 1 ? (q.is_correct ? 'Tick (✓)' : 'Cross (✗)') : (q.correct_answers?.[0] || q.correct_word || '')),
                    isCorrect: isCorr,
                    explanation: q.explanation || ''
                });
            });
        }
    });

    // Quy đổi số câu đúng Reading & Writing sang số Khiên (1 - 5 Khiên)
    let rwShields = 0;
    if (rwCorrect >= 22) rwShields = 5;
    else if (rwCorrect >= 17) rwShields = 4;
    else if (rwCorrect >= 12) rwShields = 3;
    else if (rwCorrect >= 6) rwShields = 2;
    else if (rwCorrect >= 1) rwShields = 1;
    else rwShields = 0;

    // 3. Chấm điểm Speaking (1 - 5 Khiên)
    const recordedCount = Object.keys(startersRecordedAudioUrls || {}).length;
    let spkShields = 0;
    if (recordedCount >= 3) spkShields = 5;
    else if (recordedCount === 2) spkShields = 4;
    else if (recordedCount === 1) spkShields = 3;
    else spkShields = 0; // Chưa ghi âm

    // Tổng số Khiên (Tối đa 15 Khiên)
    const totalShields = lisShields + rwShields + spkShields;

    startersTestScoreResult = {
        lisCorrect, lisTotal: 20, lisShields,
        rwCorrect, rwTotal: 25, rwShields,
        spkShields, recordedCount,
        totalShields,
        allReview: [...lisReview, ...rwReview]
    };

    startersTestSubmitted = true;
    saveStartersProgress();

    if (showModal) showStartersResultsModal();
}

function showStartersResultsModal() {
    const modal = document.getElementById('starters-result-modal');
    const body = document.getElementById('starters-result-body');
    if (!modal || !body) return;

    const res = startersTestScoreResult;
    if (!res) return;

    let awardTitle = "Starters Explorer (Đang tiến bộ)";
    let awardBadge = "🌱 Khởi động vui vẻ";
    if (res.totalShields >= 14) {
        awardTitle = "Starters Champion (Xuất Sắc Tuyệt Đối)";
        awardBadge = "🏆 Xuất sắc đạt chuẩn Pre-A1";
    } else if (res.totalShields >= 12) {
        awardTitle = "Starters Expert (Rất Tốt)";
        awardBadge = "🌟 Sẵn sàng lên cấp độ Movers";
    } else if (res.totalShields >= 9) {
        awardTitle = "Good Explorer (Đạt Chuẩn)";
        awardBadge = "⭐ Nắm vững từ vựng cơ bản";
    }

    const reviewItemsHtml = res.allReview.map(item => `
        <div class="p-3.5 rounded-2xl border text-xs transition ${
            item.isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'
        }">
            <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span class="font-extrabold ${item.isCorrect ? 'text-emerald-700' : 'text-rose-700'}">
                    ${item.isCorrect ? '✓ Đúng' : '✗ Chưa đúng'} • ${item.skill} Part ${item.part} (Câu ${item.id})
                </span>
            </div>
            <p class="font-bold text-slate-800 mt-1">${escapeHtml(item.prompt)}</p>
            <div class="flex flex-wrap items-center gap-3 mt-1.5 text-[11px]">
                <span class="${item.isCorrect ? 'text-emerald-800' : 'text-rose-800'}">
                    <strong>Bé chọn:</strong> ${escapeHtml(item.userAns)}
                </span>
                ${!item.isCorrect ? `
                    <span class="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                        <strong>Đáp án đúng:</strong> ${escapeHtml(item.correctAns)}
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

    body.innerHTML = `
        <!-- HEADER KHIÊN CAMBRIDGE -->
        <div class="text-center pb-4 border-b border-slate-200">
            <span class="text-3xl block mb-1">🛡️</span>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900">BẢNG KẾT QUẢ CAMBRIDGE STARTERS</h2>
            <p class="text-xs text-indigo-600 font-bold mt-0.5">${startersProfileData.starters_tests[activeStartersTestId]?.book_title} • ${startersProfileData.starters_tests[activeStartersTestId]?.test_title}</p>
        </div>

        <!-- TOTAL SHIELDS DISPLAY -->
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 py-4">
            <div class="p-4 rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-500 text-white flex flex-col items-center justify-center text-center shadow-lg sm:col-span-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-amber-100">TỔNG SỐ KHIÊN</span>
                <div class="text-4xl font-black font-mono my-0.5">${res.totalShields} / 15</div>
                <span class="text-[11px] font-black bg-white/20 px-2.5 py-0.5 rounded-full">${awardBadge}</span>
            </div>

            <div class="sm:col-span-3 grid grid-cols-3 gap-2">
                <div class="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col justify-between items-center text-center">
                    <span class="text-[10px] font-black text-indigo-700 uppercase">🎧 Listening</span>
                    <div class="text-2xl font-black text-indigo-950 font-mono my-1">${res.lisShields} 🛡️</div>
                    <span class="text-[10px] text-indigo-600 font-bold">${res.lisCorrect}/20 câu đúng</span>
                </div>

                <div class="p-3 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col justify-between items-center text-center">
                    <span class="text-[10px] font-black text-amber-800 uppercase">📖 Reading & Writing</span>
                    <div class="text-2xl font-black text-amber-950 font-mono my-1">${res.rwShields} 🛡️</div>
                    <span class="text-[10px] text-amber-700 font-bold">${res.rwCorrect}/25 câu đúng</span>
                </div>

                <div class="p-3 rounded-2xl bg-rose-50 border border-rose-200 flex flex-col justify-between items-center text-center">
                    <span class="text-[10px] font-black text-rose-800 uppercase">🗣️ Speaking</span>
                    <div class="text-2xl font-black text-rose-950 font-mono my-1">${res.spkShields} 🛡️</div>
                    <span class="text-[10px] text-rose-700 font-bold">${res.spkShields === 0 ? 'Chưa ghi âm' : `Đã ghi âm ${res.recordedCount} phần`}</span>
                </div>
            </div>
        </div>

        <!-- REVIEW LIST -->
        <div class="space-y-3 pt-2">
            <h3 class="font-extrabold text-sm sm:text-base text-slate-900 flex items-center justify-between">
                <span>Đáp Án & Giải Thích Chi Tiết Từng Câu Hỏi</span>
                <span class="text-xs font-bold text-slate-500">Tổng cộng: ${res.allReview.length} câu</span>
            </h3>
            <div class="space-y-2 max-h-72 overflow-y-auto custom-scroll pr-1">
                ${reviewItemsHtml}
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
    if (!confirm("Bạn có muốn đặt lại toàn bộ bài làm của đề thi Starters này để luyện lại từ đầu không?")) return;
    startersUserAnswers = { listening: {}, reading_writing: {}, speaking: {} };
    startersTestSubmitted = false;
    startersTestScoreResult = null;
    startersTimerSeconds = 45 * 60;
    saveStartersProgress();
    closeStartersResultModal();
    renderStartersSkillContent();
}

// PHÍM TẮT BÀN PHÍM: BẤM ESC ĐỂ ĐÓNG BẢNG ĐÁP ÁN HOẶC MODAL XEM ẢNH STARTERS
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
