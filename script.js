// ===== Application State =====
let state = {
    language: 'en',
    syllabusLanguage: 'en',
    settings: {
        schoolName: '',
        schoolAddress: '',
        schoolPhone: '',
        schoolEmail: '',
        schoolLogo: '',
        className: '',
        subjectName: '',
        examType: 'Monthly Test',
        timeDuration: '',
        paperMarks: '',
        examDate: '',
        teacherName: '',
        instructions: '',
        shortAttempt: '',
        longAttempt: ''
    },
    customization: {
        logoPosition: 'right',
        logoSize: '80',
        logoVerticalPosition: '0',
        logoMargin: '15',
        showSchoolName: true,
        showAddress: true,
        showPhone: true,
        showEmail: false,
        showExamTitle: true,
        showClass: true,
        showSubject: true,
        showTime: true,
        showMarks: true,
        showDate: true,
        showTeacher: true,
        showInstructions: true,
        schoolNameSize: '18',
        addressSize: '10',
        contactInfoSize: '10',
        contactInfoStyle: 'inline',
        headerTextSize: '10',
        questionTextSize: '11',
        questionSpacing: 'compact',
        sectionSpacing: 'compact',
        headerSpacing: 'compact',
        headingContentSpacing: 'compact',
        sectionTitleSize: '12',
        marksSize: '9',
        lineHeight: '1.4',
        sectionHeaderStyle: 'bordered',
        infoGridColumns: '3',
        headerStyle: 'modern',
        pageMargins: 'normal'
    },
    mcqs: [],
    fillBlanks: [],
    trueFalse: [],
    shortQuestions: [],
    longQuestions: []
};

// Syllabus Translations
const syllabusTranslations = {
    en: {
        term: 'Term',
        class: 'Class',
        academicYear: 'Academic Year',
        search: '🔍 Search by Subject',
        loadSyllabus: 'Load Syllabus',
        addWeek: 'Add Week',
        saveSyllabus: 'Save Syllabus',
        print: 'Print',
        pdf: 'PDF',
        exportJSON: 'Export JSON',
        importJSON: 'Import JSON',
        clearAll: 'Clear All',
        weekNumber: 'Week Number',
        dateFrom: 'Date From',
        dateTo: 'Date To',
        addSubject: 'Add Subject',
        cancel: 'Cancel',
        saveWeek: 'Save Week',
        subject: 'Subject',
        unitsTopics: 'Units / Topics',
        activity: 'Activity',
        slos: 'SLOs (Student Learning Outcomes)',
        assessment: 'Assessment',
        edit: 'Edit',
        delete: 'Delete',
        week: 'Week',
        subjects: 'subjects',
        syllabus: 'SYLLABUS',
        generatedOn: 'Generated on'
    },
    ur: {
        term: 'ٹرم',
        class: 'جماعت',
        academicYear: 'تعلیمی سال',
        search: '🔍 مضمون سے تلاش کریں',
        loadSyllabus: 'نصاب لوڈ کریں',
        addWeek: 'ہفتہ شامل کریں',
        saveSyllabus: 'نصاب محفوظ کریں',
        print: 'پرنٹ',
        pdf: 'پی ڈی ایف',
        exportJSON: 'ایکسپورٹ',
        importJSON: 'امپورٹ',
        clearAll: 'سب صاف کریں',
        weekNumber: 'ہفتہ نمبر',
        dateFrom: 'تاریخ شروع',
        dateTo: 'تاریخ اختتام',
        addSubject: 'مضمون شامل کریں',
        cancel: 'منسوخ',
        saveWeek: 'ہفتہ محفوظ کریں',
        subject: 'مضمون',
        unitsTopics: 'اکائیاں / عنوانات',
        activity: 'سرگرمی',
        slos: 'طلباء کے سیکھنے کے نتائج',
        assessment: 'جائزہ',
        edit: 'ترمیم',
        delete: 'حذف',
        week: 'ہفتہ',
        subjects: 'مضامین',
        syllabus: 'نصاب',
        generatedOn: 'تاریخ'
    }
};

// ===== Language Translations =====
const translations = {
    en: {
        sectionA: 'Section A',
        sectionB: 'Section B',
        sectionC: 'Section C',
        sectionD: 'Section D',
        sectionE: 'Section E',
        mcqs: 'Multiple Choice Questions',
        fillBlanks: 'Fill in the Blanks',
        trueFalse: 'True/False',
        shortQuestions: 'Short Questions',
        longQuestions: 'Long Questions',
        marks: 'Marks',
        totalMarks: 'Total Marks',
        time: 'Time',
        date: 'Date',
        class: 'Class',
        subject: 'Subject',
        teacher: 'Teacher',
        examType: 'Examination',
        chooseCorrect: 'Choose the correct option.',
        fillBlanksInstruction: 'Fill in the blanks.',
        trueFalseInstruction: 'Write True or False.',
        shortInstruction: 'Answer the following.',
        longInstruction: 'Answer in detail.',
        attemptAny: 'Attempt any',
        outOf: 'out of',
        trueWord: 'True',
        falseWord: 'False',
        paperGeneratedBy: 'Paper generated using Smart Question Paper Generator',
        note: 'Note',
        instructions: 'Instructions',
        endOfPaper: '--- End of Paper/ Design By Yaseen Khan ---'
    },
    ur: {
        sectionA: 'حصہ الف',
        sectionB: 'حصہ ب',
        sectionC: 'حصہ ج',
        sectionD: 'حصہ د',
        sectionE: 'حصہ ہ',
        mcqs: 'کثیر الانتخابی سوالات',
        fillBlanks: 'خالی جگہ پُر کریں',
        trueFalse: 'صحیح/غلط',
        shortQuestions: 'مختصر سوالات',
        longQuestions: 'تفصیلی سوالات',
        marks: 'نمبر',
        totalMarks: 'کل نمبر',
        time: 'وقت',
        date: 'تاریخ',
        class: 'جماعت',
        subject: 'مضمون',
        teacher: 'استاد',
        examType: 'امتحان',
        chooseCorrect: 'درست جواب کا انتخاب کریں۔',
        fillBlanksInstruction: 'خالی جگہیں پُر کریں۔',
        trueFalseInstruction: 'صحیح یا غلط لکھیں۔',
        shortInstruction: 'مندرجہ ذیل کے جوابات دیں۔',
        longInstruction: 'تفصیلی جوابات دیں۔',
        attemptAny: 'کوئی بھی',
        outOf: 'میں سے',
        trueWord: 'صحیح',
        falseWord: 'غلط',
        paperGeneratedBy: 'یہ پرچہ سمارٹ پیپر جنریٹر سے بنایا گیا',
        note: 'نوٹ',
        instructions: 'ہدایات',
        endOfPaper: '--- پرچہ ختم ---'
    }
};

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', function() {
    // Set default date
    document.getElementById('examDate').valueAsDate = new Date();
    
    // Check saved data
    checkSavedSchoolData();
    
    // Load customization
    loadCustomization();
    
    // Update stats
    updateStats();
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });
});

// ===== Customization Functions =====
function saveCustomization() {
    const customization = {
        logoPosition: document.getElementById('logoPosition').value,
        logoSize: document.getElementById('logoSize').value,
        logoVerticalPosition: document.getElementById('logoVerticalPosition').value,
        logoMargin: document.getElementById('logoMargin').value,
        showSchoolName: document.getElementById('showSchoolName').checked,
        showAddress: document.getElementById('showAddress').checked,
        showPhone: document.getElementById('showPhone').checked,
        showEmail: document.getElementById('showEmail').checked,
        showExamTitle: document.getElementById('showExamTitle').checked,
        showClass: document.getElementById('showClass').checked,
        showSubject: document.getElementById('showSubject').checked,
        showTime: document.getElementById('showTime').checked,
        showMarks: document.getElementById('showMarks').checked,
        showDate: document.getElementById('showDate').checked,
        showTeacher: document.getElementById('showTeacher').checked,
        showInstructions: document.getElementById('showInstructions').checked,
        schoolNameSize: document.getElementById('schoolNameSize').value,
        addressSize: document.getElementById('addressSize').value,
        contactInfoSize: document.getElementById('contactInfoSize').value,
        contactInfoStyle: document.getElementById('contactInfoStyle').value,
        headerTextSize: document.getElementById('headerTextSize').value,
        questionTextSize: document.getElementById('questionTextSize').value,
        sectionTitleSize: document.getElementById('sectionTitleSize')?.value || '12',
        marksSize: document.getElementById('marksSize')?.value || '9',
        lineHeight: document.getElementById('lineHeight')?.value || '1.4',
        questionSpacing: document.getElementById('questionSpacing').value,
        sectionSpacing: document.getElementById('sectionSpacing')?.value || 'compact',
        headerSpacing: document.getElementById('headerSpacing').value,
        headingContentSpacing: document.getElementById('headingContentSpacing')?.value || 'compact',
        mcqOptionSpacing: document.getElementById('mcqOptionSpacing')?.value || 'normal', // <-- ADD THIS LINE
        sectionHeaderStyle: document.getElementById('sectionHeaderStyle').value,
        infoGridColumns: document.getElementById('infoGridColumns').value,
        headerStyle: document.getElementById('headerStyle').value,
        pageMargins: document.getElementById('pageMargins').value,
        // QR code settings
        enableQrCode: document.getElementById('enableQrCode')?.value || 'no',
        qrPosition: document.getElementById('qrPosition')?.value || 'opposite',
        qrSize: document.getElementById('qrSize')?.value || '80',
        qrIncludeInfo: document.getElementById('qrIncludeInfo')?.checked !== false,
        qrIncludeQuestions: document.getElementById('qrIncludeQuestions')?.checked !== false,
        qrIncludeAnswers: document.getElementById('qrIncludeAnswers')?.checked === true,
        // Syllabus-specific settings
        syllabusTextSize: document.getElementById('syllabusTextSize')?.value || '10',
        syllabusWeekTitleSize: document.getElementById('syllabusWeekTitleSize')?.value || '12',
        syllabusTableHeaderSize: document.getElementById('syllabusTableHeaderSize')?.value || '10',
        syllabusInfoSize: document.getElementById('syllabusInfoSize')?.value || '10'
    };
    
    state.customization = customization;
    localStorage.setItem('paperCustomization', JSON.stringify(customization));
    showToast('Layout settings saved!', 'success');
    // update preview after layout/qr options change
    try { previewQRCode(); } catch(e) {}
}

function loadCustomization() {
    const saved = localStorage.getItem('paperCustomization');
    if (saved) {
        const customization = JSON.parse(saved);
        state.customization = customization;
        
        // Apply to form elements
        const setVal = (id, val, defaultVal) => {
            const el = document.getElementById(id);
            if (el) el.value = val || defaultVal;
        };
        const setCheck = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.checked = val !== false;
        };
        
        setVal('logoPosition', customization.logoPosition, 'right');
        setVal('logoSize', customization.logoSize, '80');
        setVal('logoVerticalPosition', customization.logoVerticalPosition, '0');
        setVal('logoMargin', customization.logoMargin, '15');
        setVal('schoolNameSize', customization.schoolNameSize, '18');
        setVal('addressSize', customization.addressSize, '10');
        setVal('contactInfoSize', customization.contactInfoSize, '10');
        setVal('contactInfoStyle', customization.contactInfoStyle, 'inline');
        setVal('headerTextSize', customization.headerTextSize, '10');
        setVal('questionTextSize', customization.questionTextSize, '11');
        setVal('sectionTitleSize', customization.sectionTitleSize, '12');
        setVal('marksSize', customization.marksSize, '9');
        setVal('lineHeight', customization.lineHeight, '1.4');
        setVal('questionSpacing', customization.questionSpacing, 'compact');
        setVal('sectionSpacing', customization.sectionSpacing, 'compact');
        setVal('headerSpacing', customization.headerSpacing, 'compact');
        setVal('mcqOptionSpacing', customization.mcqOptionSpacing, 'normal'); // <-- ADD THIS LINE
        setVal('headingContentSpacing', customization.headingContentSpacing, 'compact');
        setVal('sectionHeaderStyle', customization.sectionHeaderStyle, 'bordered');
        setVal('infoGridColumns', customization.infoGridColumns, '3');
        setVal('headerStyle', customization.headerStyle, 'modern');
        setVal('pageMargins', customization.pageMargins, 'normal');
        
        // QR code settings
        setVal('enableQrCode', customization.enableQrCode, 'no');
        setVal('qrPosition', customization.qrPosition, 'opposite');
        setVal('qrSize', customization.qrSize, '80');
        setCheck('qrIncludeInfo', customization.qrIncludeInfo);
        setCheck('qrIncludeQuestions', customization.qrIncludeQuestions);
        setCheck('qrIncludeAnswers', customization.qrIncludeAnswers);
        // make preview update whenever these toggles change
        ['enableQrCode','qrIncludeInfo','qrIncludeQuestions','qrIncludeAnswers'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', previewQRCode);
        });
        
        // Syllabus-specific settings
        setVal('syllabusTextSize', customization.syllabusTextSize, '10');
        setVal('syllabusWeekTitleSize', customization.syllabusWeekTitleSize, '12');
        setVal('syllabusTableHeaderSize', customization.syllabusTableHeaderSize, '10');
        setVal('syllabusInfoSize', customization.syllabusInfoSize, '10');
        
        setCheck('showSchoolName', customization.showSchoolName);
        setCheck('showAddress', customization.showAddress);
        setCheck('showPhone', customization.showPhone);
        setCheck('showEmail', customization.showEmail);
        setCheck('showExamTitle', customization.showExamTitle);
        setCheck('showClass', customization.showClass);
        setCheck('showSubject', customization.showSubject);
        setCheck('showTime', customization.showTime);
        setCheck('showMarks', customization.showMarks);
        setCheck('showDate', customization.showDate);
        setCheck('showTeacher', customization.showTeacher);
        setCheck('showInstructions', customization.showInstructions);
    }
}

function resetCustomization() {
    if (confirm('Reset all layout settings to default?')) {
        localStorage.removeItem('paperCustomization');
        
        state.customization = {
            logoPosition: 'right',
            logoSize: '80',
            logoVerticalPosition: '0',
            logoMargin: '15',
            showSchoolName: true,
            showAddress: true,
            showPhone: true,
            showEmail: false,
            showExamTitle: true,
            showClass: true,
            showSubject: true,
            showTime: true,
            showMarks: true,
            showDate: true,
            showTeacher: true,
            showInstructions: true,
            schoolNameSize: '16',
            addressSize: '9',
            contactInfoSize: '9',
            contactInfoStyle: 'inline',
            headerTextSize: '9',
            questionTextSize: '10',
            questionSpacing: 'tight',
            headerSpacing: 'tight',
            mcqOptionSpacing: 'normal', // <-- ADD THIS LINE
            sectionHeaderStyle: 'bordered',
            infoGridColumns: '3',
            headerStyle: 'modern',
            pageMargins: 'normal',
            // defaults for QR code settings
            enableQrCode: 'no',
            qrPosition: 'opposite',
            qrSize: '80',
            qrIncludeInfo: true,
            qrIncludeQuestions: true,
            qrIncludeAnswers: false
        };
        
        // Reset form elements
        const setVal = (id, val) => { if (document.getElementById(id)) document.getElementById(id).value = val; };
        const setCheck = (id, val) => { if (document.getElementById(id)) document.getElementById(id).checked = val; };
        
        setVal('logoPosition', 'right');
        setVal('logoSize', '80');
        setVal('logoVerticalPosition', '0');
        setVal('logoMargin', '15');
        setVal('schoolNameSize', '16');
        setVal('addressSize', '9');
        setVal('contactInfoSize', '9');
        setVal('contactInfoStyle', 'inline');
        setVal('headerTextSize', '9');
        setVal('questionTextSize', '10');
        setVal('questionSpacing', 'tight');
        setVal('headerSpacing', 'tight');
        setVal('mcqOptionSpacing', 'normal'); // <-- ADD THIS LINE
        setVal('sectionHeaderStyle', 'bordered');
        setVal('infoGridColumns', '3');
        setVal('headerStyle', 'modern');
        setVal('pageMargins', 'normal');
        
        // reset QR controls
        setVal('enableQrCode', 'no');
        setVal('qrPosition', 'opposite');
        setVal('qrSize', '80');
        setCheck('qrIncludeInfo', true);
        setCheck('qrIncludeQuestions', true);
        setCheck('qrIncludeAnswers', false);
        
        setCheck('showSchoolName', true);
        setCheck('showAddress', true);
        setCheck('showPhone', true);
        setCheck('showEmail', false);
        setCheck('showExamTitle', true);
        setCheck('showClass', true);
        setCheck('showSubject', true);
        setCheck('showTime', true);
        setCheck('showMarks', true);
        setCheck('showDate', true);
        setCheck('showTeacher', true);
        setCheck('showInstructions', true);
        
        showToast('Reset to default', 'success');
    }
}

// ===== Sidebar Functions =====
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburgerBtn');
    
    const isOpen = sidebar.classList.contains('open');
    
    if (isOpen) {
        closeSidebar();
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburgerBtn');
    
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

function handleResize() {
    if (window.innerWidth > 900) {
        closeSidebar();
    }
}

// ===== Tab Switching =====
function switchTab(tabName) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update panels
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`${tabName}-panel`).classList.add('active');
    
    // Close mobile sidebar
    if (window.innerWidth <= 900) {
        closeSidebar();
    }
}

// ===== Language Toggle =====
function setLanguage(lang) {
    state.language = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    showToast(lang === 'en' ? 'Language: English' : 'زبان: اردو', 'success');
}

// ===== Logo Preview =====
function previewLogo(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            state.settings.schoolLogo = e.target.result;
            document.getElementById('logoPreview').innerHTML = `<img src="${e.target.result}" alt="Logo">`;
            document.getElementById('removeLogoBtn').style.display = 'inline-block';
        };
        reader.readAsDataURL(file);
    }
}

function removeLogo() {
    state.settings.schoolLogo = '';
    document.getElementById('logoPreview').innerHTML = '<span>📷 Click to upload logo</span>';
    document.getElementById('schoolLogo').value = '';
    document.getElementById('removeLogoBtn').style.display = 'none';
}

// ===== School Data Save/Load =====
function saveSchoolData() {
    const schoolData = {
        schoolName: document.getElementById('schoolName').value,
        schoolAddress: document.getElementById('schoolAddress').value,
        schoolPhone: document.getElementById('schoolPhone').value,
        schoolEmail: document.getElementById('schoolEmail').value,
        schoolLogo: state.settings.schoolLogo,
        className: document.getElementById('className').value,
        subjectName: document.getElementById('subjectName').value,
        examType: document.getElementById('examType').value,
        timeDuration: document.getElementById('timeDuration').value,
        paperMarks: document.getElementById('paperMarks').value,
        teacherName: document.getElementById('teacherName').value,
        instructions: document.getElementById('paperInstructions').value
    };
    
    localStorage.setItem('schoolData', JSON.stringify(schoolData));
    document.getElementById('savedDataIndicator').style.display = 'block';
    showToast('School data saved!', 'success');
}

function loadSchoolData() {
    const savedData = localStorage.getItem('schoolData');
    if (savedData) {
        const data = JSON.parse(savedData);
        
        document.getElementById('schoolName').value = data.schoolName || '';
        document.getElementById('schoolAddress').value = data.schoolAddress || '';
        document.getElementById('schoolPhone').value = data.schoolPhone || '';
        document.getElementById('schoolEmail').value = data.schoolEmail || '';
        document.getElementById('className').value = data.className || '';
        document.getElementById('subjectName').value = data.subjectName || '';
        document.getElementById('examType').value = data.examType || 'Monthly Test';
        document.getElementById('timeDuration').value = data.timeDuration || '';
        document.getElementById('paperMarks').value = data.paperMarks || '';
        document.getElementById('teacherName').value = data.teacherName || '';
        document.getElementById('paperInstructions').value = data.instructions || '';
        
        if (data.schoolLogo) {
            state.settings.schoolLogo = data.schoolLogo;
            document.getElementById('logoPreview').innerHTML = `<img src="${data.schoolLogo}" alt="Logo">`;
            document.getElementById('removeLogoBtn').style.display = 'inline-block';
        }
        
        document.getElementById('savedDataIndicator').style.display = 'block';
        showToast('Data loaded!', 'success');
    } else {
        showToast('No saved data found', 'error');
    }
}

function clearSchoolData() {
    if (confirm('Clear saved school data?')) {
        localStorage.removeItem('schoolData');
        document.getElementById('savedDataIndicator').style.display = 'none';
        showToast('Data cleared', 'success');
    }
}

function checkSavedSchoolData() {
    const savedData = localStorage.getItem('schoolData');
    if (savedData) {
        document.getElementById('savedDataIndicator').style.display = 'block';
        loadSchoolData();
    }
}

// ===== MCQ Functions =====
function addMCQ() {
    const question = document.getElementById('mcqQuestion').value.trim();
    const optionA = document.getElementById('mcqOptionA').value.trim();
    const optionB = document.getElementById('mcqOptionB').value.trim();
    const optionC = document.getElementById('mcqOptionC').value.trim();
    const optionD = document.getElementById('mcqOptionD').value.trim();
    const marks = parseInt(document.getElementById('mcqMarks').value) || 1;
    
    if (!question || !optionA || !optionB || !optionC || !optionD) {
        showToast('Fill all fields', 'error');
        return;
    }
    
    state.mcqs.push({
        id: Date.now(),
        question,
        options: [optionA, optionB, optionC, optionD],
        marks
    });
    
    renderMCQs();
    clearMCQForm();
    updateStats();
    showToast('MCQ added!', 'success');
}

function renderMCQs() {
    const container = document.getElementById('mcqList');
    
    if (state.mcqs.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📋</span>
                <p>No MCQs added yet</p>
                <small>Add your first MCQ above</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = state.mcqs.map((mcq, index) => `
        <div class="question-card" draggable="true" data-id="${mcq.id}" data-type="mcq">
            <div class="question-card-header">
                <span class="question-number">Q${index + 1}</span>
                <span class="question-marks">${mcq.marks} Mark${mcq.marks > 1 ? 's' : ''}</span>
            </div>
            <div class="question-text">${mcq.question}</div>
            <div class="question-options">
                <div class="question-option"><strong>A)</strong> ${mcq.options[0]}</div>
                <div class="question-option"><strong>B)</strong> ${mcq.options[1]}</div>
                <div class="question-option"><strong>C)</strong> ${mcq.options[2]}</div>
                <div class="question-option"><strong>D)</strong> ${mcq.options[3]}</div>
            </div>
            <div class="question-actions">
                <button class="btn btn-sm btn-danger" onclick="deleteMCQ(${mcq.id})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
    
    setupDragAndDrop('mcq');
}

function deleteMCQ(id) {
    state.mcqs = state.mcqs.filter(mcq => mcq.id !== id);
    renderMCQs();
    updateStats();
    showToast('Deleted', 'success');
}

function clearMCQForm() {
    document.getElementById('mcqQuestion').value = '';
    document.getElementById('mcqOptionA').value = '';
    document.getElementById('mcqOptionB').value = '';
    document.getElementById('mcqOptionC').value = '';
    document.getElementById('mcqOptionD').value = '';
    document.getElementById('mcqMarks').value = '1';
}

// ===== Fill in the Blanks Functions =====
function addFillBlank() {
    const question = document.getElementById('fillBlankQuestion').value.trim();
    const marks = parseInt(document.getElementById('fillBlankMarks').value) || 1;
    
    if (!question) {
        showToast('Enter question', 'error');
        return;
    }
    
    state.fillBlanks.push({
        id: Date.now(),
        question,
        marks
    });
    
    renderFillBlanks();
    document.getElementById('fillBlankQuestion').value = '';
    document.getElementById('fillBlankMarks').value = '1';
    updateStats();
    showToast('Added!', 'success');
}

function renderFillBlanks() {
    const container = document.getElementById('fillBlankList');
    
    if (state.fillBlanks.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">✏️</span>
                <p>No questions added yet</p>
                <small>Add your first question above</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = state.fillBlanks.map((q, index) => `
        <div class="question-card" draggable="true" data-id="${q.id}" data-type="fillBlank">
            <div class="question-card-header">
                <span class="question-number">Q${index + 1}</span>
                <span class="question-marks">${q.marks} Mark${q.marks > 1 ? 's' : ''}</span>
            </div>
            <div class="question-text">${q.question}</div>
            <div class="question-actions">
                <button class="btn btn-sm btn-danger" onclick="deleteFillBlank(${q.id})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
    
    setupDragAndDrop('fillBlank');
}

function deleteFillBlank(id) {
    state.fillBlanks = state.fillBlanks.filter(q => q.id !== id);
    renderFillBlanks();
    updateStats();
    showToast('Deleted', 'success');
}

// ===== True/False Functions =====
function addTrueFalse() {
    const question = document.getElementById('trueFalseQuestion').value.trim();
    const marks = parseInt(document.getElementById('trueFalseMarks').value) || 1;
    
    if (!question) {
        showToast('Enter statement', 'error');
        return;
    }
    
    state.trueFalse.push({
        id: Date.now(),
        question,
        marks
    });
    
    renderTrueFalse();
    document.getElementById('trueFalseQuestion').value = '';
    document.getElementById('trueFalseMarks').value = '1';
    updateStats();
    showToast('Added!', 'success');
}

function renderTrueFalse() {
    const container = document.getElementById('trueFalseList');
    
    if (state.trueFalse.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">✓✗</span>
                <p>No statements added yet</p>
                <small>Add your first statement above</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = state.trueFalse.map((q, index) => `
        <div class="question-card" draggable="true" data-id="${q.id}" data-type="trueFalse">
            <div class="question-card-header">
                <span class="question-number">Q${index + 1}</span>
                <span class="question-marks">${q.marks} Mark${q.marks > 1 ? 's' : ''}</span>
            </div>
            <div class="question-text">${q.question}</div>
            <div class="question-actions">
                <button class="btn btn-sm btn-danger" onclick="deleteTrueFalse(${q.id})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
    
    setupDragAndDrop('trueFalse');
}

function deleteTrueFalse(id) {
    state.trueFalse = state.trueFalse.filter(q => q.id !== id);
    renderTrueFalse();
    updateStats();
    showToast('Deleted', 'success');
}

// ===== Short Questions Functions =====
function addShortQuestion() {
    const question = document.getElementById('shortQuestion').value.trim();
    const marks = parseInt(document.getElementById('shortMarks').value) || 2;
    
    if (!question) {
        showToast('Enter question', 'error');
        return;
    }
    
    state.shortQuestions.push({
        id: Date.now(),
        question,
        marks
    });
    
    renderShortQuestions();
    document.getElementById('shortQuestion').value = '';
    document.getElementById('shortMarks').value = '2';
    updateStats();
    showToast('Added!', 'success');
}

function renderShortQuestions() {
    const container = document.getElementById('shortList');
    
    if (state.shortQuestions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📝</span>
                <p>No questions added yet</p>
                <small>Add your first question above</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = state.shortQuestions.map((q, index) => `
        <div class="question-card" draggable="true" data-id="${q.id}" data-type="short">
            <div class="question-card-header">
                <span class="question-number">Q${index + 1}</span>
                <span class="question-marks">${q.marks} Mark${q.marks > 1 ? 's' : ''}</span>
            </div>
            <div class="question-text">${q.question}</div>
            <div class="question-actions">
                <button class="btn btn-sm btn-danger" onclick="deleteShortQuestion(${q.id})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
    
    setupDragAndDrop('short');
}

function deleteShortQuestion(id) {
    state.shortQuestions = state.shortQuestions.filter(q => q.id !== id);
    renderShortQuestions();
    updateStats();
    showToast('Deleted', 'success');
}

// ===== Long Questions Functions =====
function addLongPart() {
    const container = document.getElementById('longPartsContainer');
    const count = container.children.length;
    const letter = String.fromCharCode(97 + count);
    const row = document.createElement('div');
    row.className = 'long-part-row';
    row.style = 'display: flex; gap: 10px; margin-bottom: 10px; align-items: center;';
    row.innerHTML = `
        <span style="font-weight: bold; min-width: 20px;">${letter})</span>
        <input type="text" class="long-part-text" placeholder="Part description..." style="flex: 1;">
        <input type="number" class="long-part-marks" placeholder="Marks" value="5" min="1" style="width: 80px;">
    `;
    container.appendChild(row);
}

function addLongQuestion() {
    const question = document.getElementById('longQuestion').value.trim();
    const parts = [];
    let totalMarks = 0;

    document.querySelectorAll('.long-part-row').forEach(row => {
        const text = row.querySelector('.long-part-text').value.trim();
        const marks = parseInt(row.querySelector('.long-part-marks').value) || 0;
        if (text) {
            parts.push({ text, marks });
            totalMarks += marks;
        }
    });

    if (parts.length === 0) {
        showToast('Add at least one part with a description', 'error');
        return;
    }
    
    state.longQuestions.push({
        id: Date.now(),
        question,
        parts,
        marks: totalMarks
    });
    
    renderLongQuestions();
    document.getElementById('longQuestion').value = '';
    document.getElementById('longPartsContainer').innerHTML = `
        <div class="long-part-row" style="display: flex; gap: 10px; margin-bottom: 10px; align-items: center;">
            <span style="font-weight: bold; min-width: 20px;">a)</span>
            <input type="text" class="long-part-text" placeholder="Part description..." style="flex: 1;">
            <input type="number" class="long-part-marks" placeholder="Marks" value="5" min="1" style="width: 80px;">
        </div>
    `;
    updateStats();
    showToast('Added!', 'success');
}
function renderLongQuestions() {
    const container = document.getElementById('longList');
    
    if (state.longQuestions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📄</span>
                <p>No questions added yet</p>
                <small>Add your first question above</small>
            </div>
        `;
        return;
    }
    
   container.innerHTML = state.longQuestions.map((q, index) => {
        let partsHtml = '';
        if (q.parts && q.parts.length > 0) {
            partsHtml = '<div style="margin-top: 8px; font-size: 0.9em; color: #444;">';
           q.parts.forEach((p, i) => {
                partsHtml += `<div style="margin-bottom: 10px; margin-top: 5px;"><strong>${String.fromCharCode(97+i)})</strong> ${p.text} <em>(${p.marks} Marks)</em></div>`;
            });
            partsHtml += '</div>';
        }

        return `
        <div class="question-card" draggable="true" data-id="${q.id}" data-type="long">
            <div class="question-card-header">
                <span class="question-number">Q${index + 1}</span>
                <span class="question-marks">${q.marks} Mark${q.marks > 1 ? 's' : ''}</span>
            </div>
            <div class="question-text">
                ${q.question ? `<strong>${q.question}</strong>` : '<em>Answer the following:</em>'}
                ${partsHtml}
            </div>
            <div class="question-actions">
                <button class="btn btn-sm btn-danger" onclick="deleteLongQuestion(${q.id})">🗑️ Delete</button>
            </div>
        </div>
        `;
    }).join('');
    setupDragAndDrop('long');
}

function deleteLongQuestion(id) {
    state.longQuestions = state.longQuestions.filter(q => q.id !== id);
    renderLongQuestions();
    updateStats();
    showToast('Deleted', 'success');
}

// ===== Drag and Drop =====
function setupDragAndDrop(type) {
    const cards = document.querySelectorAll(`[data-type="${type}"]`);
    
    cards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        card.addEventListener('dragover', handleDragOver);
        card.addEventListener('drop', handleDrop);
    });
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedElement = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
    e.preventDefault();
    
    if (draggedElement !== this) {
        const type = this.dataset.type;
        const draggedId = parseInt(draggedElement.dataset.id);
        const targetId = parseInt(this.dataset.id);
        
        let array;
        switch(type) {
            case 'mcq': array = state.mcqs; break;
            case 'fillBlank': array = state.fillBlanks; break;
            case 'trueFalse': array = state.trueFalse; break;
            case 'short': array = state.shortQuestions; break;
            case 'long': array = state.longQuestions; break;
        }
        
        const draggedIndex = array.findIndex(item => item.id === draggedId);
        const targetIndex = array.findIndex(item => item.id === targetId);
        
        const [removed] = array.splice(draggedIndex, 1);
        array.splice(targetIndex, 0, removed);
        
        switch(type) {
            case 'mcq': renderMCQs(); break;
            case 'fillBlank': renderFillBlanks(); break;
            case 'trueFalse': renderTrueFalse(); break;
            case 'short': renderShortQuestions(); break;
            case 'long': renderLongQuestions(); break;
        }
        // stats might not change but QR payload order has – refresh anyway
        updateStats();
    }
}

// ===== Statistics =====
function updateStats() {
    const totalQuestions = state.mcqs.length + state.fillBlanks.length + 
                          state.trueFalse.length + state.shortQuestions.length + 
                          state.longQuestions.length;
    
    const totalMarks = state.mcqs.reduce((sum, q) => sum + q.marks, 0) +
                      state.fillBlanks.reduce((sum, q) => sum + q.marks, 0) +
                      state.trueFalse.reduce((sum, q) => sum + q.marks, 0) +
                      state.shortQuestions.reduce((sum, q) => sum + q.marks, 0) +
                      state.longQuestions.reduce((sum, q) => sum + q.marks, 0);
    
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('totalMarks').textContent = totalMarks;

    // refresh QR preview whenever the pool changes
    try { previewQRCode(); } catch(e) { /* ignore if preview not yet present */ }
}

// ===== Reset All =====
function resetAllQuestions() {
    if (confirm('Delete ALL questions?')) {
        state.mcqs = [];
        state.fillBlanks = [];
        state.trueFalse = [];
        state.shortQuestions = [];
        state.longQuestions = [];
        
        renderMCQs();
        renderFillBlanks();
        renderTrueFalse();
        renderShortQuestions();
        renderLongQuestions();
        updateStats();
        
        document.getElementById('previewContainer').innerHTML = `
            <div class="preview-placeholder">
                <span class="preview-icon">📄</span>
                <p>Click "Generate" to see your paper</p>
            </div>
        `;
        
        showToast('All reset', 'success');
    }
}

// ===== Generate Preview =====
function generatePreview() {
    const t = translations[state.language];
    const isRTL = state.language === 'ur';
    
    // Get customization settings
    const c = {
        logoPosition: document.getElementById('logoPosition')?.value || 'right',
        logoSize: document.getElementById('logoSize')?.value || '80',
        logoVerticalPosition: document.getElementById('logoVerticalPosition')?.value || '0',
        logoMargin: document.getElementById('logoMargin')?.value || '15',
        showSchoolName: document.getElementById('showSchoolName')?.checked !== false,
        showAddress: document.getElementById('showAddress')?.checked !== false,
        showPhone: document.getElementById('showPhone')?.checked !== false,
        showEmail: document.getElementById('showEmail')?.checked === true,
        showExamTitle: document.getElementById('showExamTitle')?.checked !== false,
        showClass: document.getElementById('showClass')?.checked !== false,
        showSubject: document.getElementById('showSubject')?.checked !== false,
        showTime: document.getElementById('showTime')?.checked !== false,
        showMarks: document.getElementById('showMarks')?.checked !== false,
        showDate: document.getElementById('showDate')?.checked !== false,
        showTeacher: document.getElementById('showTeacher')?.checked !== false,
        showInstructions: document.getElementById('showInstructions')?.checked !== false,
        schoolNameSize: document.getElementById('schoolNameSize')?.value || '18',
        addressSize: document.getElementById('addressSize')?.value || '10',
        contactInfoSize: document.getElementById('contactInfoSize')?.value || '10',
        contactInfoStyle: document.getElementById('contactInfoStyle')?.value || 'inline',
        headerTextSize: document.getElementById('headerTextSize')?.value || '10',
        questionTextSize: document.getElementById('questionTextSize')?.value || '11',
        sectionTitleSize: document.getElementById('sectionTitleSize')?.value || '12',
        marksSize: document.getElementById('marksSize')?.value || '9',
        lineHeight: document.getElementById('lineHeight')?.value || '1.4',
        questionSpacing: document.getElementById('questionSpacing')?.value || 'compact',
        sectionSpacing: document.getElementById('sectionSpacing')?.value || 'compact',
        headerSpacing: document.getElementById('headerSpacing')?.value || 'compact',
        headingContentSpacing: document.getElementById('headingContentSpacing')?.value || 'compact',
        mcqOptionSpacing: document.getElementById('mcqOptionSpacing')?.value || 'normal', // <-- ADD THIS LINE
    sectionHeaderStyle: document.getElementById('sectionHeaderStyle')?.value || 'bordered',
        infoGridColumns: document.getElementById('infoGridColumns')?.value || '3',
        headerStyle: document.getElementById('headerStyle')?.value || 'modern',
        pageMargins: document.getElementById('pageMargins')?.value || 'normal',
        
        // ADD THESE 3 LINES:
        enableQrCode: document.getElementById('enableQrCode')?.value || 'no',
        qrPosition: document.getElementById('qrPosition')?.value || 'opposite',
        qrSize: document.getElementById('qrSize')?.value || '80'
    };
    
    // Get settings
    const schoolName = document.getElementById('schoolName').value || 'School Name';
    const schoolAddress = document.getElementById('schoolAddress').value || '';
    const schoolPhone = document.getElementById('schoolPhone').value || '';
    const schoolEmail = document.getElementById('schoolEmail').value || '';
    const className = document.getElementById('className').value || '';
    const subjectName = document.getElementById('subjectName').value || '';
    const examType = document.getElementById('examType').value || '';
    const timeDuration = document.getElementById('timeDuration').value || '';
    const paperMarks = document.getElementById('paperMarks').value || '';
    const examDate = document.getElementById('examDate').value || '';
    const teacherName = document.getElementById('teacherName').value || '';
    const instructions = document.getElementById('paperInstructions').value || '';
    const shortAttempt = document.getElementById('shortAttempt')?.value || '';
    const longAttempt = document.getElementById('longAttempt')?.value || '';
    
    // Calculate total marks
    const calculatedMarks = state.mcqs.reduce((sum, q) => sum + q.marks, 0) +
                           state.fillBlanks.reduce((sum, q) => sum + q.marks, 0) +
                           state.trueFalse.reduce((sum, q) => sum + q.marks, 0) +
                           state.shortQuestions.reduce((sum, q) => sum + q.marks, 0) +
                           state.longQuestions.reduce((sum, q) => sum + q.marks, 0);
    
    // Format date
    let formattedDate = '';
    if (examDate) {
        const date = new Date(examDate);
        formattedDate = date.toLocaleDateString(isRTL ? 'ur-PK' : 'en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
    
    // Build sections
    let sections = [];
    let sectionLabels = ['sectionA', 'sectionB', 'sectionC', 'sectionD', 'sectionE'];
    let sectionIndex = 0;
    
    if (state.mcqs.length > 0) {
        sections.push({
            label: t[sectionLabels[sectionIndex++]],
            title: t.mcqs,
            marks: state.mcqs.reduce((sum, q) => sum + q.marks, 0),
            type: 'mcq',
            questions: state.mcqs,
            attempt: ''
        });
    }
    
    if (state.fillBlanks.length > 0) {
        sections.push({
            label: t[sectionLabels[sectionIndex++]],
            title: t.fillBlanks,
            marks: state.fillBlanks.reduce((sum, q) => sum + q.marks, 0),
            type: 'fillBlank',
            questions: state.fillBlanks,
            attempt: ''
        });
    }
    
    if (state.trueFalse.length > 0) {
        sections.push({
            label: t[sectionLabels[sectionIndex++]],
            title: t.trueFalse,
            marks: state.trueFalse.reduce((sum, q) => sum + q.marks, 0),
            type: 'trueFalse',
            questions: state.trueFalse,
            attempt: ''
        });
    }
    
    if (state.shortQuestions.length > 0) {
        let attemptText = '';
        if (shortAttempt && parseInt(shortAttempt) < state.shortQuestions.length) {
            attemptText = isRTL 
                ? `${t.attemptAny} ${shortAttempt} ${t.outOf} ${state.shortQuestions.length}`
                : `${t.attemptAny} ${shortAttempt} ${t.outOf} ${state.shortQuestions.length}`;
        }
        sections.push({
            label: t[sectionLabels[sectionIndex++]],
            title: t.shortQuestions,
            marks: state.shortQuestions.reduce((sum, q) => sum + q.marks, 0),
            type: 'short',
            questions: state.shortQuestions,
            attempt: attemptText
        });
    }
    
    if (state.longQuestions.length > 0) {
        let attemptText = '';
        if (longAttempt && parseInt(longAttempt) < state.longQuestions.length) {
            attemptText = isRTL 
                ? `${t.attemptAny} ${longAttempt} ${t.outOf} ${state.longQuestions.length}`
                : `${t.attemptAny} ${longAttempt} ${t.outOf} ${state.longQuestions.length}`;
        }
        sections.push({
            label: t[sectionLabels[sectionIndex++]],
            title: t.longQuestions,
            marks: state.longQuestions.reduce((sum, q) => sum + q.marks, 0),
            type: 'long',
            questions: state.longQuestions,
            attempt: attemptText
        });
    }
    
    // Get spacing classes
    const spacingClass = c.questionSpacing === 'none' ? 'spacing-none' :
                        c.questionSpacing === 'tight' ? 'spacing-tight' :
                        c.questionSpacing === 'compact' ? 'spacing-compact' : 
                        c.questionSpacing === 'relaxed' ? 'spacing-relaxed' : 
                        c.questionSpacing === 'wide' ? 'spacing-wide' : 'spacing-normal';
    const sectionSpacingClass = c.sectionSpacing === 'none' ? 'section-none' :
                               c.sectionSpacing === 'tight' ? 'section-tight' :
                               c.sectionSpacing === 'compact' ? 'section-compact' : 
                               c.sectionSpacing === 'relaxed' ? 'section-relaxed' : 
                               c.sectionSpacing === 'wide' ? 'section-wide' : 'section-normal';
    const headerSpacingClass = c.headerSpacing === 'none' ? 'header-none' :
                              c.headerSpacing === 'tight' ? 'header-tight' :
                              c.headerSpacing === 'compact' ? 'header-compact' : 
                              c.headerSpacing === 'relaxed' ? 'header-relaxed' : 'header-normal';
    const headingContentClass = c.headingContentSpacing === 'none' ? 'hc-none' :
                               c.headingContentSpacing === 'tight' ? 'hc-tight' :
                               c.headingContentSpacing === 'compact' ? 'hc-compact' : 
                               c.headingContentSpacing === 'relaxed' ? 'hc-relaxed' : 'hc-normal';

                               // ADD THIS NEW LINE:
    const mcqSpacingClass = `mcq-space-${c.mcqOptionSpacing}`;
    
   
    const marginClass = c.pageMargins === 'narrow' ? 'margin-narrow' :
                       c.pageMargins === 'wide' ? 'margin-wide' : 'margin-normal';
    const lineHeightClass = `lh-${c.lineHeight.replace('.', '-')}`;
    
    // Build address
    const addressHtml = (c.showAddress && schoolAddress) ? 
        `<div class="school-address size-${c.addressSize}">${schoolAddress}</div>` : '';
    
    // Build contact info (phone and email)
    let contactParts = [];
    if (c.showPhone && schoolPhone) contactParts.push(`📞 ${schoolPhone}`);
    if (c.showEmail && schoolEmail) contactParts.push(`✉ ${schoolEmail}`);
    const contactInfo = contactParts.length > 0 ? 
        `<div class="school-contact size-${c.contactInfoSize} style-${c.contactInfoStyle}">${
            c.contactInfoStyle === 'inline' 
                ? contactParts.join(' &nbsp;|&nbsp; ')
                : contactParts.map(p => `<span>${p}</span>`).join('')
        }</div>` : '';
    
    // Build info grid items
    let infoItems = [];
    if (c.showClass && className) {
        infoItems.push(`<div class="paper-info-item"><strong>${t.class}:</strong><span>${className}</span></div>`);
    }
    if (c.showSubject && subjectName) {
        infoItems.push(`<div class="paper-info-item"><strong>${t.subject}:</strong><span>${subjectName}</span></div>`);
    }
    if (c.showTime && timeDuration) {
        infoItems.push(`<div class="paper-info-item"><strong>${t.time}:</strong><span>${timeDuration}</span></div>`);
    }
    if (c.showMarks) {
        infoItems.push(`<div class="paper-info-item"><strong>${t.totalMarks}:</strong><span>${paperMarks || calculatedMarks}</span></div>`);
    }
    if (c.showDate && formattedDate) {
        infoItems.push(`<div class="paper-info-item"><strong>${t.date}:</strong><span>${formattedDate}</span></div>`);
    }
    if (c.showTeacher && teacherName) {
        infoItems.push(`<div class="paper-info-item"><strong>${t.teacher}:</strong><span>${teacherName}</span></div>`);
    }
    
   // Generate HTML - COMPACT Design with Customization
   // Generate HTML - COMPACT Design with Customization
    let leftItem = '';
    let rightItem = '';
    let centerItem = '';

    const logoHTML = state.settings.schoolLogo ? `
        <div class="school-logo-container" style="margin-top: ${c.logoVerticalPosition}px;">
            <img src="${state.settings.schoolLogo}" alt="Logo" class="school-logo size-${c.logoSize}">
        </div>
    ` : '';

let qrHTML = '';
    if (c.enableQrCode === 'yes') {
        const rawData = getQrPayload();
        let qrDataStr = rawData;
        // compress only when payload exceeds ~2k characters (sms-style limit)
        if (rawData.length > 2000 && typeof LZString !== 'undefined') {
            try { qrDataStr = 'LZ:' + LZString.compressToBase64(rawData); } catch(e){ console.warn('zip failed', e); }
        }
        // use a larger cell size for high-resolution print output
        const qrSVG = generateQRCodeSVG(qrDataStr, 30);
        if (qrSVG) {
            // Smart Size: Force a minimum size for the printer if the data is heavy
            const isDense = qrDataStr.length > 500;
            let actualSize = parseInt(c.qrSize) || 80;
            if (isDense && actualSize < 120) actualSize = 120;

            qrHTML = `
                <div class="qr-header-container" style="margin-top: ${c.logoVerticalPosition}px; width: ${actualSize}px; height: ${actualSize}px; display: inline-flex; align-items: center; justify-content: center; background: white; padding: 2px;">
                    ${qrSVG}
                </div>
            `;
        } else {
            // generation failed: data too large or library error
            console.warn('QR generation returned null (size', qrDataStr.length, ')');
            qrHTML = `<div class="qr-header-container" style="margin-top: ${c.logoVerticalPosition}px; width: ${c.qrSize}px; height: ${c.qrSize}px; display: inline-flex; align-items: center; justify-content: center; background: #ffe6e6; padding: 2px;">
                        <span style="font-size:8px;color:#d00;">QR unavailable</span>
                      </div>`;
            showToast('QR data too large; try disabling questions/answers', 'error');
        }
    }

    // Determine exact positions
    let actualQrPos = c.qrPosition;
    if (actualQrPos === 'opposite') {
        if (c.logoPosition === 'right') actualQrPos = 'left';
        else if (c.logoPosition === 'left') actualQrPos = 'right';
        else actualQrPos = 'right'; // fallback if logo is center
    }

    if (c.logoPosition === 'left') leftItem = logoHTML;
    else if (c.logoPosition === 'right') rightItem = logoHTML;
    else if (c.logoPosition === 'center') centerItem = logoHTML;

    if (actualQrPos === 'left') leftItem = leftItem ? leftItem + qrHTML : qrHTML;
    else if (actualQrPos === 'right') rightItem = rightItem ? qrHTML + rightItem : qrHTML;
    else if (actualQrPos === 'center') centerItem = centerItem ? centerItem + qrHTML : qrHTML;

  const headerTextHTML = `
        <div class="header-text" style="flex: 1; text-align: center; padding: 0 10px;">
            ${centerItem}
            ${c.showSchoolName ? `<div class="school-name size-${c.schoolNameSize}" style="white-space: nowrap;">${schoolName}</div>` : ''}
            ${addressHtml}
            ${contactInfo}
        </div>
    `;

let html = `
    <div class="paper-preview ${isRTL ? 'rtl' : ''} ${spacingClass} ${mcqSpacingClass} ${sectionSpacingClass} ${headerSpacingClass} ${headingContentClass} ${marginClass} ${lineHeightClass} qtext-${c.questionTextSize} htext-${c.headerTextSize} stitle-${c.sectionTitleSize} marks-${c.marksSize}" id="paperContent">
            <div class="paper-header style-${c.headerStyle}">
                <div class="header-content" style="display: flex; align-items: flex-start; justify-content: space-between;">
                    <div style="flex-shrink: 0; min-width: ${Math.max(c.logoSize || 0, c.qrSize || 0)}px; display: flex; gap: 10px; justify-content: flex-start;">${leftItem}</div>
                    ${headerTextHTML}
                    <div style="flex-shrink: 0; min-width: ${Math.max(c.logoSize || 0, c.qrSize || 0)}px; display: flex; gap: 10px; justify-content: flex-end;">${rightItem}</div>
                </div>
                
                ${c.showExamTitle ? `<div class="exam-title">${examType}${subjectName ? ' - ' + subjectName : ''}</div>` : ''}
                
                ${infoItems.length > 0 ? `<div class="paper-info-grid cols-${c.infoGridColumns}">${infoItems.join('')}</div>` : ''}
                
                ${c.showInstructions && instructions ? `<div class="paper-instructions"><strong>${t.instructions}:</strong> ${instructions}</div>` : ''}
            </div>
            <div class="paper-body">

    `;
    
    // Add sections
    sections.forEach(section => {
        html += `
            <div class="paper-section">
                <div class="section-header style-${c.sectionHeaderStyle}">
                    <span>${section.label}: ${section.title}${section.attempt ? ` <span class="section-attempt">(${section.attempt})</span>` : ''}</span>
                    <span class="section-marks">[${section.marks} ${t.marks}]</span>
                </div>
        `;
        
        section.questions.forEach((q, index) => {
            const qNum = index + 1;
            
            if (section.type === 'mcq') {
                html += `
                    <div class="paper-question">
                        <span class="paper-question-number">${qNum}.</span>
                        <div class="paper-question-content">
                            ${q.question}
                            <div class="paper-mcq-options">
                                <span class="paper-mcq-option">(a) ${q.options[0]}</span>
                                <span class="paper-mcq-option">(b) ${q.options[1]}</span>
                                <span class="paper-mcq-option">(c) ${q.options[2]}</span>
                                <span class="paper-mcq-option">(d) ${q.options[3]}</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (section.type === 'trueFalse') {
                html += `
                    <div class="paper-question">
                        <span class="paper-question-number">${qNum}.</span>
                        <div class="paper-question-content">
                            ${q.question} <span class="tf-indicator">(${t.trueWord}/${t.falseWord})</span>
                        </div>
                    </div>
                `;
        } else {
                html += `
                    <div class="paper-question">
                        <span class="paper-question-number">${qNum}.</span>
                        <div class="paper-question-content" style="flex: 1;">
                            ${q.question ? `<div style="margin-bottom: 3px;">${q.question}</div>` : ''}
                `;
                
             if (q.parts && q.parts.length > 0) {
                    html += `<div class="paper-subquestions" style="margin-top: 8px; width: 100%;">`;
                    q.parts.forEach((p, i) => {
                        html += `
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding-${isRTL ? 'right' : 'left'}: 15px;">
                                <span>(${String.fromCharCode(97+i)}) ${p.text}</span>
                                <span>(${p.marks})</span>
                            </div>
                        `;
                    });
                    html += `</div></div></div>`; 
                } else {
                    html += `</div><span class="paper-question-marks">(${q.marks})</span></div>`;
                }
            }
        });
        
        html += `</div>`;
    });
    
    html += `
            </div>
            <div class="paper-footer">
                <div>${t.endOfPaper}</div>
            </div>
        </div>
    `;
    
    document.getElementById('previewContainer').innerHTML = html;
    showToast('Preview ready!', 'success');
}

// ===== Download PDF =====
function downloadPDF() {
    const element = document.getElementById('paperContent');
    
    if (!element) {
        showToast('Generate preview first', 'error');
        return;
    }
    
    const schoolName = document.getElementById('schoolName').value || 'Paper';
    const subjectName = document.getElementById('subjectName').value || '';
    const className = document.getElementById('className').value || '';
    
    const filename = `${schoolName}_${subjectName}_${className}.pdf`.replace(/\s+/g, '_');
    
    const c = getCustomizationSettings();
    const opt = {
        margin: [2, 2, 2, 2], // smaller margins so content fills page
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: c.enableQrCode === 'yes' ? 3 : 2,
            useCORS: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait' 
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    showToast('Creating PDF...', 'success');
    
    html2pdf().set(opt).from(element).save().then(() => {
        showToast('PDF downloaded!', 'success');
    }).catch(err => {
        showToast('PDF error', 'error');
        console.error(err);
    });
}

// ===== Print Paper =====
function printPaper() {
    const element = document.getElementById('paperContent');
    
    if (!element) {
        showToast('Generate preview first', 'error');
        return;
    }
    
    // Get the exact HTML from preview
    const previewHTML = element.outerHTML;
    const printWindow = window.open('', '_blank');
    const isRTL = state.language === 'ur';
    
    // Get all customization settings
    const c = getCustomizationSettings();
    
    // Use exact preview HTML with all the same CSS classes - COPY ALL STYLES FROM style.css
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="${state.language}" ${isRTL ? 'dir="rtl"' : ''}>
        <head>
            <meta charset="UTF-8">
            <title>Question Paper</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">
            <style>
                /* === EXACT COPY OF PREVIEW STYLES === */
                * { margin: 0; padding: 0; box-sizing: border-box; }
                
                body {
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 10pt;
                    line-height: 1.3;
                    color: #000;
                    background: white;
                    padding: ${c.pageMargins === 'narrow' ? '5mm 8mm' : c.pageMargins === 'wide' ? '12mm 18mm' : '8mm 12mm'};
                }
                
                /* Paper Preview Container */
                .paper-preview {
                    background: white;
                    max-width: 210mm;
                    margin: 0 auto;
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 10pt;
                    line-height: 1.3;
                    color: #000;
                }
                
                .paper-preview.rtl {
                    direction: rtl;
                    font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif;
                }
                
                /* Paper Header */
                .paper-header {
                    margin-bottom: 3mm;
                    padding-bottom: 2mm;
                    border-bottom: 1.5pt solid #000;
                }
                .paper-header.style-modern { border-bottom: 2pt double #000; }
                .paper-header.style-classic { border-bottom: 1pt solid #000; }
                .paper-header.style-minimal { border-bottom: none; padding-bottom: 0; }
                
                /* Header Layout with Logo */
                .header-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4mm;
                    margin-bottom: 1.5mm;
                }
                .header-content.logo-right {
                    flex-direction: row-reverse;
                    justify-content: space-between;
                }
                .header-content.logo-left {
                    flex-direction: row;
                    justify-content: space-between;
                }
                .header-content.logo-center {
                    flex-direction: column;
                    text-align: center;
                }
                
                .school-logo-container { flex-shrink: 0; }
                .school-logo {
                    object-fit: contain;
                    border: none !important;
                    outline: none !important;
                    box-shadow: none !important;
                }
                .school-logo.size-40 { width: 40px; height: 40px; }
                .school-logo.size-50 { width: 50px; height: 50px; }
                .school-logo.size-60 { width: 60px; height: 60px; }
                .school-logo.size-70 { width: 70px; height: 70px; }
                .school-logo.size-80 { width: 80px; height: 80px; }
                .school-logo.size-90 { width: 90px; height: 90px; }
                .school-logo.size-100 { width: 100px; height: 100px; }
                
                .header-text { flex: 1; text-align: center; }
                .header-content.logo-right .header-text,
                .header-content.logo-left .header-text { text-align: center; }
                
                /* School Name */
                .school-name {
                    font-weight: bold;
                    margin-bottom: 0.5mm;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .school-name.size-12 { font-size: 12pt; }
                .school-name.size-14 { font-size: 14pt; }
                .school-name.size-16 { font-size: 16pt; }
                .school-name.size-18 { font-size: 18pt; }
                .school-name.size-20 { font-size: 20pt; }
                .school-name.size-22 { font-size: 22pt; }
                .school-name.size-24 { font-size: 24pt; }
                .school-name.size-26 { font-size: 26pt; }
                
                /* School Address */
                .school-address { margin-top: 0.5mm; }
                .school-address.size-7 { font-size: 7pt; }
                .school-address.size-8 { font-size: 8pt; }
                .school-address.size-9 { font-size: 9pt; }
                .school-address.size-10 { font-size: 10pt; }
                .school-address.size-11 { font-size: 11pt; }
                .school-address.size-12 { font-size: 12pt; }
                
                /* School Contact */
                .school-contact { color: #333; margin-top: 0.5mm; line-height: 1.3; }
                .school-contact.size-7 { font-size: 7pt; }
                .school-contact.size-8 { font-size: 8pt; }
                .school-contact.size-9 { font-size: 9pt; }
                .school-contact.size-10 { font-size: 10pt; }
                .school-contact.size-11 { font-size: 11pt; }
                .school-contact.size-12 { font-size: 12pt; }
                .school-contact.style-inline { display: flex; flex-wrap: wrap; justify-content: center; gap: 2mm; }
                .school-contact.style-separate { display: flex; flex-direction: column; align-items: center; gap: 0.3mm; }
                
                /* Exam Title */
                .exam-title {
                    text-align: center;
                    font-size: 10pt;
                    font-weight: bold;
                    margin: 2mm 0;
                    padding: 1.5mm;
                    background: #f0f0f0;
                    border: 1px solid #000;
                }
                
                /* Paper Info Grid */
                .paper-info-grid {
                    display: grid;
                    gap: 0.5mm 5mm;
                    margin-top: 2mm;
                    text-align: left;
                    font-size: 9pt;
                }
                .paper-info-grid.cols-1 { grid-template-columns: 1fr; }
                .paper-info-grid.cols-2 { grid-template-columns: 1fr 1fr; }
                .paper-info-grid.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
                .paper-preview.rtl .paper-info-grid { text-align: right; }
                
                .paper-info-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.3mm 0;
                    border-bottom: 1px dotted #666;
                }
                .paper-info-item strong { font-weight: 600; }
                
                /* Paper Instructions */
                .paper-instructions {
                    margin: 2mm 0;
                    padding: 1.5mm 2mm;
                    background: #fafafa;
                    border-left: 2px solid #000;
                    font-size: 8pt;
                    font-style: italic;
                }
                .paper-preview.rtl .paper-instructions {
                    border-left: none;
                    border-right: 2px solid #000;
                }
                
                /* Paper Section */
                .paper-section {
                    margin-bottom: 2.5mm;
                    page-break-inside: avoid;
                }
                
                /* Section Header Styles */
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1mm 2mm;
                    margin-bottom: 1.5mm;
                    font-weight: bold;
                    font-size: 9pt;
                    background: transparent;
                    color: #000;
                    border: 1.5pt solid #000;
                }
                .section-header.style-bordered {
                    background: transparent;
                    color: #000;
                    border: 1.5pt solid #000;
                }
                .section-header.style-underline {
                    background: transparent;
                    color: #000;
                    border: none;
                    border-bottom: 2pt solid #000;
                    padding-left: 0;
                    padding-right: 0;
                }
                .section-header.style-simple {
                    background: transparent;
                    color: #000;
                    border: none;
                    padding-left: 0;
                    padding-right: 0;
                }
                .section-header.style-boxed {
                    background: #f5f5f5;
                    color: #000;
                    border: 1pt solid #000;
                    border-left: 4pt solid #000;
                }
                .paper-preview.rtl .section-header.style-boxed {
                    border-left: 1pt solid #000;
                    border-right: 4pt solid #000;
                }
                
                .section-attempt {
                    font-size: 8pt;
                    font-weight: normal;
                    font-style: italic;
                    margin-left: 5mm;
                }
                .paper-preview.rtl .section-attempt { margin-left: 0; margin-right: 5mm; }
                .section-marks { font-size: 8pt; font-weight: normal; }
                
                /* Question Items */
                .paper-question {
                    margin-bottom: 0.8mm;
                    padding: 0.3mm 0;
                    display: flex;
                    gap: 1.5mm;
                    line-height: 1.2;
                }
                .paper-question-number {
                    font-weight: bold;
                    min-width: 16px;
                    font-size: 9pt;
                }
                .paper-question-content { flex: 1; font-size: 9pt; }
                .paper-question-marks { font-size: 8pt; color: #444; white-space: nowrap; }
                
                /* MCQ Options */
                .paper-mcq-options {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5mm 10mm;
                    margin-top: 0.5mm;
                    padding-left: 3mm;
                }
                .paper-preview.rtl .paper-mcq-options { padding-left: 0; padding-right: 3mm; }
                .paper-mcq-option { font-size: 9pt; }
                
                /* True/False indicator */
                .tf-indicator { margin-left: 5mm; font-weight: bold; font-size: 9pt; }
                .paper-preview.rtl .tf-indicator { margin-left: 0; margin-right: 5mm; }
                
                /* Paper Footer */
                .paper-footer {
                    margin-top: 3mm;
                    padding-top: 2mm;
                    border-top: 1px solid #666;
                    text-align: center;
                    font-size: 7pt;
                    color: #666;
                }
                
           /* === SPACING CLASSES === */
                #paperContent.spacing-none .paper-question { margin-bottom: 0 !important; padding: 0 !important; }
                #paperContent.spacing-tight .paper-question { margin-bottom: 2mm !important; padding: 0.5mm 0 !important; }
                #paperContent.spacing-compact .paper-question { margin-bottom: 4mm !important; padding: 1mm 0 !important; }
                #paperContent.spacing-normal .paper-question { margin-bottom: 6mm !important; padding: 1.5mm 0 !important; }
                #paperContent.spacing-relaxed .paper-question { margin-bottom: 8mm !important; padding: 2mm 0 !important; }
                #paperContent.spacing-wide .paper-question { margin-bottom: 10mm !important; padding: 2.5mm 0 !important; }


            
                /* Section Spacing */
                .paper-preview.section-none .paper-section { margin-bottom: 0; }
                .paper-preview.section-tight .paper-section { margin-bottom: 3mm; }
                .paper-preview.section-compact .paper-section { margin-bottom: 6mm; }
                .paper-preview.section-normal .paper-section { margin-bottom: 10mm; }
                .paper-preview.section-relaxed .paper-section { margin-bottom: 14mm; }
                .paper-preview.section-wide .paper-section { margin-bottom: 18mm; }
                
                /* Header Spacing */
                .paper-preview.header-none .paper-header { margin-bottom: 0.5mm; padding-bottom: 0.5mm; }
                .paper-preview.header-tight .paper-header { margin-bottom: 1mm; padding-bottom: 1mm; }
                .paper-preview.header-compact .paper-header { margin-bottom: 1.5mm; padding-bottom: 1.5mm; }
                .paper-preview.header-normal .paper-header { margin-bottom: 2.5mm; padding-bottom: 2mm; }
                .paper-preview.header-relaxed .paper-header { margin-bottom: 8mm; padding-bottom: 4mm; }
                
                /* Heading Content Spacing */
                .paper-preview.hc-none .section-header { margin-bottom: 0; }
                .paper-preview.hc-tight .section-header { margin-bottom: 2mm; }
                .paper-preview.hc-compact .section-header { margin-bottom: 4mm; }
                .paper-preview.hc-normal .section-header { margin-bottom: 6mm; }
                .paper-preview.hc-relaxed .section-header { margin-bottom: 10mm; }

                
                
                /* Page Margins */
                .paper-preview.margin-narrow { padding: 3mm 5mm; }
                .paper-preview.margin-normal { padding: 5mm 8mm; }
                .paper-preview.margin-wide { padding: 8mm 12mm; }
                
                /* Question Text Size */
                .paper-preview.qtext-8 .paper-question-content,
                .paper-preview.qtext-8 .paper-mcq-option { font-size: 8pt; }
                .paper-preview.qtext-9 .paper-question-content,
                .paper-preview.qtext-9 .paper-mcq-option { font-size: 9pt; }
                .paper-preview.qtext-10 .paper-question-content,
                .paper-preview.qtext-10 .paper-mcq-option { font-size: 10pt; }
                .paper-preview.qtext-11 .paper-question-content,
                .paper-preview.qtext-11 .paper-mcq-option { font-size: 11pt; }
                .paper-preview.qtext-12 .paper-question-content,
                .paper-preview.qtext-12 .paper-mcq-option { font-size: 12pt; }
                .paper-preview.qtext-13 .paper-question-content,
                .paper-preview.qtext-13 .paper-mcq-option { font-size: 13pt; }
                .paper-preview.qtext-14 .paper-question-content,
                .paper-preview.qtext-14 .paper-mcq-option { font-size: 14pt; }
                
                /* Section Title Size */
                .paper-preview.stitle-10 .section-header { font-size: 10pt; }
                .paper-preview.stitle-11 .section-header { font-size: 11pt; }
                .paper-preview.stitle-12 .section-header { font-size: 12pt; }
                .paper-preview.stitle-13 .section-header { font-size: 13pt; }
                .paper-preview.stitle-14 .section-header { font-size: 14pt; }
                .paper-preview.stitle-16 .section-header { font-size: 16pt; }
                
                /* Marks Size */
                .paper-preview.marks-7 .paper-question-marks,
                .paper-preview.marks-7 .section-marks { font-size: 7pt; }
                .paper-preview.marks-8 .paper-question-marks,
                .paper-preview.marks-8 .section-marks { font-size: 8pt; }
                .paper-preview.marks-9 .paper-question-marks,
                .paper-preview.marks-9 .section-marks { font-size: 9pt; }
                .paper-preview.marks-10 .paper-question-marks,
                .paper-preview.marks-10 .section-marks { font-size: 10pt; }
                .paper-preview.marks-11 .paper-question-marks,
                .paper-preview.marks-11 .section-marks { font-size: 11pt; }
                
                /* Header Text Size */
                .paper-preview.htext-7 .paper-info-item,
                .paper-preview.htext-7 .paper-instructions { font-size: 7pt; }
                .paper-preview.htext-8 .paper-info-item,
                .paper-preview.htext-8 .paper-instructions { font-size: 8pt; }
                .paper-preview.htext-9 .paper-info-item,
                .paper-preview.htext-9 .paper-instructions { font-size: 9pt; }
                .paper-preview.htext-10 .paper-info-item,
                .paper-preview.htext-10 .paper-instructions { font-size: 10pt; }
                .paper-preview.htext-11 .paper-info-item,
                .paper-preview.htext-11 .paper-instructions { font-size: 11pt; }
                .paper-preview.htext-12 .paper-info-item,
                .paper-preview.htext-12 .paper-instructions { font-size: 12pt; }
                
                /* Line Height */
                .paper-preview.lh-1-2 { line-height: 1.2; }
                .paper-preview.lh-1-4 { line-height: 1.4; }
                .paper-preview.lh-1-6 { line-height: 1.6; }
                .paper-preview.lh-1-8 { line-height: 1.8; }
                .paper-preview.lh-2-0 { line-height: 2.0; }
                
                /* Print Styles */
                @media print {
                    body { margin: 0; padding: 0; }
                    .paper-preview { padding: 0; max-width: none; box-shadow: none; }
                    @page { 
                        size: A4; 
                        margin: ${c.pageMargins === 'narrow' ? '5mm' : c.pageMargins === 'wide' ? '15mm' : '10mm'}; 
                    }
                }
            </style>
        </head>
        <body>
            ${previewHTML}
            <script>
                window.onload = function() {
                    setTimeout(function() {
                        window.print();
                    }, 300);
                    window.onafterprint = function() { window.close(); };
                };
            </script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}

// ===== Toast Notification =====
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ===================================================================
// ===================== SYLLABUS MANAGEMENT MODULE ==================
// ===================================================================

// Syllabus State
let syllabusState = {
    term: '1st Term',
    class: 'Nursery',
    year: '',
    weeks: [],
    editingWeekIndex: -1,
    language: 'en'
};

// ===== Syllabus Language Toggle =====
function setSyllabusLanguage(lang) {
    syllabusState.language = lang;
    state.syllabusLanguage = lang;
    
    // Update toggle buttons
    document.querySelectorAll('.syllabus-lang-toggle .lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.syllabus-lang-toggle [data-lang="${lang}"]`)?.classList.add('active');
    
    // Update content direction
    const syllabusContent = document.getElementById('syllabusContent');
    if (syllabusContent) {
        if (lang === 'ur') {
            syllabusContent.classList.add('syllabus-rtl');
        } else {
            syllabusContent.classList.remove('syllabus-rtl');
        }
    }
    
    // Update all syllabus labels
    updateSyllabusLabels();
    
    showToast(lang === 'en' ? 'Language: English' : 'زبان: اردو', 'success');
}

function updateSyllabusLabels() {
    const lang = syllabusState.language;
    const t = syllabusTranslations[lang];
    
    // Update all labels with data-en and data-ur attributes
    document.querySelectorAll('.syllabus-label').forEach(label => {
        const text = label.getAttribute(`data-${lang}`);
        if (text) {
            label.textContent = text;
        }
    });
    
    // Update search placeholder
    const searchInput = document.getElementById('syllabusSearch');
    if (searchInput) {
        searchInput.placeholder = lang === 'ur' ? 'مضمون کا نام ٹائپ کریں...' : 'Type subject name to search...';
    }
}

// Initialize Syllabus on Load
document.addEventListener('DOMContentLoaded', function() {
    // Set default academic year
    const currentYear = new Date().getFullYear();
    const yearInput = document.getElementById('syllabusYear');
    if (yearInput) {
        yearInput.value = `${currentYear}-${currentYear + 1}`;
    }
    
    // Load saved syllabus if exists
    loadSyllabusFromStorage();
});

// ===== Syllabus LocalStorage Functions =====
function getSyllabusKey() {
    const term = document.getElementById('syllabusTerm')?.value || '1st Term';
    const cls = document.getElementById('syllabusClass')?.value || 'Nursery';
    const year = document.getElementById('syllabusYear')?.value || '';
    return `syllabus_${term}_${cls}_${year}`.replace(/\s+/g, '_');
}

function saveSyllabus() {
    const term = document.getElementById('syllabusTerm').value;
    const cls = document.getElementById('syllabusClass').value;
    const year = document.getElementById('syllabusYear').value;
    
    const syllabusData = {
        term: term,
        class: cls,
        year: year,
        weeks: syllabusState.weeks
    };
    
    const key = getSyllabusKey();
    localStorage.setItem(key, JSON.stringify(syllabusData));
    
    // Also save to the master list of syllabi
    let syllabusList = JSON.parse(localStorage.getItem('syllabusList') || '[]');
    if (!syllabusList.includes(key)) {
        syllabusList.push(key);
        localStorage.setItem('syllabusList', JSON.stringify(syllabusList));
    }
    
    showToast('Syllabus saved successfully!', 'success');
}

function loadSyllabus() {
    const key = getSyllabusKey();
    const saved = localStorage.getItem(key);
    
    if (saved) {
        const data = JSON.parse(saved);
        syllabusState.term = data.term;
        syllabusState.class = data.class;
        syllabusState.year = data.year;
        syllabusState.weeks = data.weeks || [];
        
        renderWeeks();
        showToast('Syllabus loaded!', 'success');
    } else {
        syllabusState.weeks = [];
        renderWeeks();
        showToast('No saved syllabus found for this selection', 'error');
    }
}

function loadSyllabusFromStorage() {
    // Try to load last used syllabus
    const lastKey = localStorage.getItem('lastSyllabusKey');
    if (lastKey) {
        const saved = localStorage.getItem(lastKey);
        if (saved) {
            const data = JSON.parse(saved);
            syllabusState.weeks = data.weeks || [];
            
            // Set form values
            if (document.getElementById('syllabusTerm')) {
                document.getElementById('syllabusTerm').value = data.term || '1st Term';
            }
            if (document.getElementById('syllabusClass')) {
                document.getElementById('syllabusClass').value = data.class || 'Nursery';
            }
            if (document.getElementById('syllabusYear')) {
                document.getElementById('syllabusYear').value = data.year || '';
            }
            
            renderWeeks();
        }
    }
}

function clearSyllabus() {
    if (confirm('Are you sure you want to clear all weeks?')) {
        syllabusState.weeks = [];
        renderWeeks();
        showToast('Syllabus cleared', 'success');
    }
}

// ===== Week Management =====
function addNewWeek() {
    syllabusState.editingWeekIndex = -1;
    document.getElementById('weekModalTitle').textContent = 'Add New Week';
    document.getElementById('weekNumber').value = syllabusState.weeks.length + 1;
    
    // Clear subjects container and add one empty subject
    document.getElementById('subjectsContainer').innerHTML = '';
    addSubjectToWeek();
    
    openWeekModal();
}

function editWeek(index) {
    syllabusState.editingWeekIndex = index;
    const week = syllabusState.weeks[index];
    const t = syllabusTranslations[syllabusState.language];
    
    document.getElementById('weekModalTitle').textContent = `${t.edit} ${t.week} ${week.week}`;
    document.getElementById('weekNumber').value = week.week;
    
    // Set date range if exists
    if (document.getElementById('weekDateFrom')) {
        document.getElementById('weekDateFrom').value = week.dateFrom || '';
    }
    if (document.getElementById('weekDateTo')) {
        document.getElementById('weekDateTo').value = week.dateTo || '';
    }
    
    // Populate subjects
    const container = document.getElementById('subjectsContainer');
    container.innerHTML = '';
    
    week.subjects.forEach((subject, idx) => {
        addSubjectToWeek(subject);
    });
    
    openWeekModal();
}

function deleteWeek(index) {
    if (confirm('Are you sure you want to delete this week?')) {
        syllabusState.weeks.splice(index, 1);
        renderWeeks();
        showToast('Week deleted', 'success');
    }
}

function saveWeek() {
    const weekNumber = parseInt(document.getElementById('weekNumber').value);
    const dateFrom = document.getElementById('weekDateFrom')?.value || '';
    const dateTo = document.getElementById('weekDateTo')?.value || '';
    const subjectForms = document.querySelectorAll('.subject-form');
    
    if (subjectForms.length === 0) {
        showToast(syllabusState.language === 'ur' ? 'کم از کم ایک مضمون شامل کریں' : 'Please add at least one subject', 'error');
        return;
    }
    
    const subjects = [];
    let isValid = true;
    
    subjectForms.forEach((form, idx) => {
        const subjectName = form.querySelector('.subject-name-input').value.trim();
        const topics = form.querySelector('.subject-topics').value.trim();
        const slos = form.querySelector('.subject-slos')?.value.trim() || form.querySelector('.subject-concepts')?.value.trim() || '';
        const activities = form.querySelector('.subject-activities').value.trim();
        const assessment = form.querySelector('.subject-assessment')?.value.trim() || form.querySelector('.subject-remarks')?.value.trim() || '';
        
        if (!subjectName) {
            isValid = false;
            showToast(syllabusState.language === 'ur' ? 'تمام مضامین کے نام درج کریں' : 'Please fill subject name for all subjects', 'error');
            return;
        }
        
        subjects.push({
            name: subjectName,
            topics: topics,
            slos: slos,
            activities: activities,
            assessment: assessment
        });
    });
    
    if (!isValid) return;
    
    const weekData = {
        week: weekNumber,
        dateFrom: dateFrom,
        dateTo: dateTo,
        subjects: subjects
    };
    
    if (syllabusState.editingWeekIndex >= 0) {
        // Editing existing week
        syllabusState.weeks[syllabusState.editingWeekIndex] = weekData;
    } else {
        // Adding new week
        syllabusState.weeks.push(weekData);
    }
    
    // Sort weeks by week number
    syllabusState.weeks.sort((a, b) => a.week - b.week);
    
    closeWeekModal();
    renderWeeks();
    showToast(syllabusState.language === 'ur' ? 'ہفتہ محفوظ ہو گیا!' : 'Week saved!', 'success');
    
    // Save to storage
    localStorage.setItem('lastSyllabusKey', getSyllabusKey());
}

function addSubjectToWeek(data = null) {
    const container = document.getElementById('subjectsContainer');
    const idx = container.children.length;
    const lang = syllabusState.language;
    const t = syllabusTranslations[lang];
    
    const subjectHtml = `
        <div class="subject-form">
            <button type="button" class="remove-subject" onclick="removeSubjectForm(this)">&times;</button>
            <div class="form-grid">
                <div class="form-group full">
                    <label class="syllabus-label" data-en="Subject Name *" data-ur="مضمون کا نام *">${t.subject} *</label>
                    <input type="text" class="subject-name-input" placeholder="${lang === 'ur' ? 'مثلاً انگریزی، ریاضی' : 'e.g., English, Math, Science'}" value="${data?.name || ''}">
                </div>
                <div class="form-group full">
                    <label class="syllabus-label" data-en="Units / Topics" data-ur="اکائیاں / عنوانات">${t.unitsTopics}</label>
                    <textarea class="subject-topics" rows="2" placeholder="${lang === 'ur' ? 'مثلاً حروف الف تا و' : 'e.g., Letters A-F, Numbers 1-10'}">${data?.topics || ''}</textarea>
                </div>
                <div class="form-group full activity-field">
                    <label class="syllabus-label" data-en="Activity" data-ur="سرگرمی">${t.activity}</label>
                    <textarea class="subject-activities" rows="3" placeholder="${lang === 'ur' ? 'مثلاً رنگ بھرنا، ملانا' : 'e.g., Coloring, Matching, Group Work, Presentations'}">${data?.activities || ''}</textarea>
                </div>
                <div class="form-group full">
                    <label class="syllabus-label" data-en="SLOs (Student Learning Outcomes)" data-ur="طلباء کے سیکھنے کے نتائج">${t.slos}</label>
                    <textarea class="subject-slos" rows="2" placeholder="${lang === 'ur' ? 'طالب علم سیکھے گا...' : 'Student will be able to...'}">${data?.slos || data?.concepts || ''}</textarea>
                </div>
                <div class="form-group full">
                    <label class="syllabus-label" data-en="Assessment" data-ur="جائزہ">${t.assessment}</label>
                    <input type="text" class="subject-assessment" placeholder="${lang === 'ur' ? 'مثلاً کوئز، ٹیسٹ' : 'e.g., Quiz, Written Test, Oral Presentation'}" value="${data?.assessment || data?.remarks || ''}">
                </div>
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', subjectHtml);
}

function removeSubjectForm(btn) {
    const form = btn.closest('.subject-form');
    const container = document.getElementById('subjectsContainer');
    
    if (container.children.length > 1) {
        form.remove();
    } else {
        showToast('At least one subject is required', 'error');
    }
}

// ===== Modal Functions =====
function openWeekModal() {
    document.getElementById('weekModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWeekModal() {
    document.getElementById('weekModal').classList.remove('active');
    document.body.style.overflow = '';
    syllabusState.editingWeekIndex = -1;
}

// ===== Render Weeks =====
function renderWeeks(weeksToRender = null) {
    const container = document.getElementById('weeksContainer');
    const weeks = weeksToRender || syllabusState.weeks;
    const lang = syllabusState.language;
    const t = syllabusTranslations[lang];
    
    if (weeks.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📘</span>
                <p>${lang === 'ur' ? 'ابھی تک کوئی ہفتہ شامل نہیں کیا گیا' : 'No weeks added yet'}</p>
                <small>${lang === 'ur' ? '"ہفتہ شامل کریں" پر کلک کریں' : 'Click "Add Week" to create your syllabus'}</small>
            </div>
        `;
        return;
    }
    
    container.innerHTML = weeks.map((week, index) => {
        // Format date range
        let dateRangeText = '';
        if (week.dateFrom || week.dateTo) {
            const fromDate = week.dateFrom ? new Date(week.dateFrom).toLocaleDateString(lang === 'ur' ? 'ur-PK' : 'en-US', { month: 'short', day: 'numeric' }) : '';
            const toDate = week.dateTo ? new Date(week.dateTo).toLocaleDateString(lang === 'ur' ? 'ur-PK' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
            if (fromDate && toDate) {
                dateRangeText = `(${fromDate} - ${toDate})`;
            } else if (fromDate) {
                dateRangeText = `(${fromDate})`;
            }
        }
        
        return `
        <div class="week-card" data-week="${week.week}">
            <div class="week-header" onclick="toggleWeekCollapse(this)">
                <div class="week-title">
                    <span class="collapse-icon">▼</span>
                    <span>📅 ${t.week} ${week.week}</span>
                    ${dateRangeText ? `<span class="week-date-range">${dateRangeText}</span>` : ''}
                    <span style="opacity: 0.8; font-weight: normal; font-size: 0.85rem;">
                        (${week.subjects.length} ${t.subjects})
                    </span>
                </div>
                <div class="week-actions" onclick="event.stopPropagation()">
                    <button class="btn btn-sm" onclick="editWeek(${index})">
                        ✏️ <span>${t.edit}</span>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteWeek(${index})">
                        🗑️ <span>${t.delete}</span>
                    </button>
                </div>
            </div>
            <div class="week-body">
                ${week.subjects.map(subject => `
                    <div class="subject-card">
                        <div class="subject-header">
                            <span class="subject-name">📚 ${subject.name}</span>
                        </div>
                        <div class="subject-details">
                            ${subject.topics ? `
                                <div class="subject-detail">
                                    <strong>${t.unitsTopics}:</strong>
                                    <span>${subject.topics}</span>
                                </div>
                            ` : ''}
                            ${subject.activities ? `
                                <div class="subject-detail">
                                    <strong>${t.activity}:</strong>
                                    <span>${subject.activities}</span>
                                </div>
                            ` : ''}
                            ${subject.slos || subject.concepts ? `
                                <div class="subject-detail">
                                    <strong>${t.slos}:</strong>
                                    <span>${subject.slos || subject.concepts}</span>
                                </div>
                            ` : ''}
                            ${subject.assessment || subject.remarks ? `
                                <div class="subject-detail">
                                    <strong>${t.assessment}:</strong>
                                    <span>${subject.assessment || subject.remarks}</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `}).join('');
}

function toggleWeekCollapse(header) {
    const card = header.closest('.week-card');
    card.classList.toggle('collapsed');
}

// ===== Search Functionality =====
function searchSyllabus() {
    const searchTerm = document.getElementById('syllabusSearch').value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderWeeks();
        return;
    }
    
    const filteredWeeks = syllabusState.weeks.filter(week => {
        return week.subjects.some(subject => 
            subject.name.toLowerCase().includes(searchTerm) ||
            subject.topics.toLowerCase().includes(searchTerm) ||
            subject.concepts.toLowerCase().includes(searchTerm) ||
            subject.activities.toLowerCase().includes(searchTerm)
        );
    });
    
    renderWeeks(filteredWeeks);
    
    // Highlight search terms
    setTimeout(() => {
        const container = document.getElementById('weeksContainer');
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        
        container.querySelectorAll('.subject-detail span, .subject-name').forEach(el => {
            if (el.innerHTML.toLowerCase().includes(searchTerm)) {
                el.innerHTML = el.innerHTML.replace(regex, '<span class="highlight">$1</span>');
            }
        });
    }, 100);
}

// ===== Export/Import Functions =====
function exportSyllabusJSON() {
    if (syllabusState.weeks.length === 0) {
        showToast('No syllabus to export', 'error');
        return;
    }
    
    const data = {
        term: document.getElementById('syllabusTerm').value,
        class: document.getElementById('syllabusClass').value,
        year: document.getElementById('syllabusYear').value,
        weeks: syllabusState.weeks,
        exportDate: new Date().toISOString()
    };
    
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `Syllabus_${data.class}_${data.term}_${data.year}.json`.replace(/\s+/g, '_');
    a.click();
    
    URL.revokeObjectURL(url);
    showToast('JSON exported!', 'success');
}

function importSyllabusJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (!data.weeks || !Array.isArray(data.weeks)) {
                showToast('Invalid syllabus file format', 'error');
                return;
            }
            
            // Update form fields
            if (data.term) document.getElementById('syllabusTerm').value = data.term;
            if (data.class) document.getElementById('syllabusClass').value = data.class;
            if (data.year) document.getElementById('syllabusYear').value = data.year;
            
            // Update state
            syllabusState.weeks = data.weeks;
            renderWeeks();
            
            showToast('Syllabus imported successfully!', 'success');
        } catch (error) {
            showToast('Error reading file: ' + error.message, 'error');
        }
    };
    
    reader.readAsText(file);
    event.target.value = ''; // Reset file input
}

function exportSyllabusPDF() {
    if (syllabusState.weeks.length === 0) {
        showToast('No syllabus to export', 'error');
        return;
    }
    
    // Get customization settings
    const c = getCustomizationSettings();
    
    // Generate preview HTML with styles
    const previewHTML = generateSyllabusPDFContent(c);
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = previewHTML;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.width = '210mm';
    document.body.appendChild(tempDiv);
    
    const element = tempDiv.querySelector('.syllabus-pdf-content');
    
    let marginSize = c.pageMargins === 'narrow' ? 5 : c.pageMargins === 'wide' ? 15 : 10;
    marginSize = Math.max(marginSize, 2); // ensure at least 2mm
    
    const opt = {
        margin: [marginSize, marginSize, marginSize, marginSize],
        filename: `Syllabus_${document.getElementById('syllabusClass').value}_${document.getElementById('syllabusTerm').value}.pdf`.replace(/\s+/g, '_'),
        image: { type: 'jpeg', quality: 0.98 },
        // scale may need to be higher when QR present
        html2canvas: { scale: (getCustomizationSettings().enableQrCode === 'yes' ? 3 : 2), useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    showToast('Creating PDF...', 'success');
    
    html2pdf().set(opt).from(element).save().then(() => {
        document.body.removeChild(tempDiv);
        showToast('PDF downloaded!', 'success');
    }).catch(err => {
        document.body.removeChild(tempDiv);
        showToast('PDF error: ' + err.message, 'error');
        console.error(err);
    });
}

function generateSyllabusPDFContent(c) {
    const term = document.getElementById('syllabusTerm').value;
    const cls = document.getElementById('syllabusClass').value;
    const year = document.getElementById('syllabusYear').value;
    const lang = syllabusState.language;
    const t = syllabusTranslations[lang];
    const isRTL = lang === 'ur';
    
    // Get school info
    const schoolName = document.getElementById('schoolName')?.value || 'School Name';
    const schoolAddress = document.getElementById('schoolAddress')?.value || '';
    const schoolPhone = document.getElementById('schoolPhone')?.value || '';
    const schoolEmail = document.getElementById('schoolEmail')?.value || '';
    const schoolLogo = state.settings.schoolLogo || '';
    
    // Get syllabus-specific text sizes
    const syllabusTextSize = document.getElementById('syllabusTextSize')?.value || '10';
    const syllabusWeekTitleSize = document.getElementById('syllabusWeekTitleSize')?.value || '12';
    const syllabusTableHeaderSize = document.getElementById('syllabusTableHeaderSize')?.value || '10';
    const syllabusInfoSize = document.getElementById('syllabusInfoSize')?.value || '10';
    
    // Build contact info
    let contactParts = [];
    if (c.showPhone && schoolPhone) contactParts.push(`📞 ${schoolPhone}`);
    if (c.showEmail && schoolEmail) contactParts.push(`✉ ${schoolEmail}`);
    const contactInfo = contactParts.length > 0 ? 
        `<div style="font-size: ${c.contactInfoSize}pt; color: #333; margin-top: 2px;">${contactParts.join(' | ')}</div>` : '';
    
    // Week header styles based on sectionHeaderStyle
    const weekHeaderStyle = c.sectionHeaderStyle === 'bordered' ? 'border: 1.5px solid #000; background: transparent;' :
                           c.sectionHeaderStyle === 'underline' ? 'border: none; border-bottom: 2px solid #000;' :
                           c.sectionHeaderStyle === 'simple' ? 'border: none;' :
                           'background: #f0f0f0; border-left: 4px solid #000;';
    
    // Build header based on logo position - TEXT ALWAYS CENTERED
    let headerContentHTML = '';
    
    if (c.logoPosition === 'right' && schoolLogo) {
        headerContentHTML = `
            <div style="display: flex; align-items: flex-start; justify-content: space-between;">
                <div style="flex: 1; text-align: center;">
                    ${c.showSchoolName ? `<div style="font-size: ${c.schoolNameSize}pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">${schoolName}</div>` : ''}
                    ${c.showAddress && schoolAddress ? `<div style="font-size: ${c.addressSize}pt; color: #333; margin-top: 2px;">${schoolAddress}</div>` : ''}
                    ${contactInfo}
                </div>
                <div style="flex-shrink: 0; margin-top: ${c.logoVerticalPosition}px; margin-left: ${c.logoMargin}px;">
                    <img src="${schoolLogo}" alt="Logo" style="width: ${c.logoSize}px; height: ${c.logoSize}px; object-fit: contain; border: none;">
                </div>
            </div>
        `;
    } else if (c.logoPosition === 'left' && schoolLogo) {
        headerContentHTML = `
            <div style="display: flex; align-items: flex-start; justify-content: space-between;">
                <div style="flex-shrink: 0; margin-top: ${c.logoVerticalPosition}px; margin-right: ${c.logoMargin}px;">
                    <img src="${schoolLogo}" alt="Logo" style="width: ${c.logoSize}px; height: ${c.logoSize}px; object-fit: contain; border: none;">
                </div>
                <div style="flex: 1; text-align: center;">
                    ${c.showSchoolName ? `<div style="font-size: ${c.schoolNameSize}pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">${schoolName}</div>` : ''}
                    ${c.showAddress && schoolAddress ? `<div style="font-size: ${c.addressSize}pt; color: #333; margin-top: 2px;">${schoolAddress}</div>` : ''}
                    ${contactInfo}
                </div>
            </div>
        `;
    } else if (c.logoPosition === 'center' && schoolLogo) {
        headerContentHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div style="margin-bottom: 2mm; margin-top: ${c.logoVerticalPosition}px;">
                    <img src="${schoolLogo}" alt="Logo" style="width: ${c.logoSize}px; height: ${c.logoSize}px; object-fit: contain; border: none;">
                </div>
                ${c.showSchoolName ? `<div style="font-size: ${c.schoolNameSize}pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">${schoolName}</div>` : ''}
                ${c.showAddress && schoolAddress ? `<div style="font-size: ${c.addressSize}pt; color: #333; margin-top: 2px;">${schoolAddress}</div>` : ''}
                ${contactInfo}
            </div>
        `;
    } else {
        headerContentHTML = `
            <div style="text-align: center;">
                ${c.showSchoolName ? `<div style="font-size: ${c.schoolNameSize}pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">${schoolName}</div>` : ''}
                ${c.showAddress && schoolAddress ? `<div style="font-size: ${c.addressSize}pt; color: #333; margin-top: 2px;">${schoolAddress}</div>` : ''}
                ${contactInfo}
            </div>
        `;
    }
    
    let html = `
        <div class="syllabus-pdf-content" style="font-family: ${isRTL ? "'Noto Nastaliq Urdu', serif" : "'Times New Roman', serif"}; font-size: ${syllabusTextSize}pt; color: #000; background: white; width: 100%; direction: ${isRTL ? 'rtl' : 'ltr'};">
            <!-- Header -->
            <div style="margin-bottom: 4mm; padding-bottom: 3mm; border-bottom: ${c.headerStyle === 'modern' ? '2px double #000' : c.headerStyle === 'classic' ? '1px solid #000' : 'none'};">
                ${headerContentHTML}
                
                <div style="text-align: center; font-size: 12pt; font-weight: bold; margin-top: 3mm; padding: 2mm 4mm; background: #f0f0f0; border: 1px solid #000;">
                    ${t.syllabus} - ${term.toUpperCase()}
                </div>
            </div>
            
            <!-- Info Row -->
            <div style="display: flex; justify-content: space-between; margin: 3mm 0; font-size: ${syllabusInfoSize}pt; padding: 2mm 3mm; background: #fafafa; border: 1px solid #ddd;">
                <span><strong>${t.class}:</strong> ${cls}</span>
                <span><strong>${t.term}:</strong> ${term}</span>
                <span><strong>${t.academicYear}:</strong> ${year}</span>
            </div>
    `;
    
    // Add weeks
    syllabusState.weeks.forEach(week => {
        // Format date range
        let dateRangeText = '';
        if (week.dateFrom || week.dateTo) {
            const fromDate = week.dateFrom ? new Date(week.dateFrom).toLocaleDateString(isRTL ? 'ur-PK' : 'en-US', { month: 'short', day: 'numeric' }) : '';
            const toDate = week.dateTo ? new Date(week.dateTo).toLocaleDateString(isRTL ? 'ur-PK' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
            if (fromDate && toDate) {
                dateRangeText = `${fromDate} - ${toDate}`;
            } else if (fromDate) {
                dateRangeText = fromDate;
            }
        }
        
        html += `
            <div style="margin-bottom: 4mm; page-break-inside: avoid;">
                <div style="padding: 1.5mm 3mm; font-weight: bold; font-size: ${syllabusWeekTitleSize}pt; margin-bottom: 1mm; ${weekHeaderStyle} display: flex; justify-content: space-between; align-items: center;">
                    <span>📅 ${t.week} ${week.week}</span>
                    ${dateRangeText ? `<span style="font-weight: normal; font-size: 9pt; color: #333;">📆 ${dateRangeText}</span>` : ''}
                </div>
                <table style="width: 100%; border-collapse: collapse; font-size: ${syllabusTextSize}pt;">
                    <thead>
                        <tr>
                            <th style="width: 12%; border: 1px solid #000; padding: 2mm; background: #e8e8e8; text-align: ${isRTL ? 'right' : 'left'}; font-size: ${syllabusTableHeaderSize}pt;">${t.subject}</th>
                            <th style="width: 18%; border: 1px solid #000; padding: 2mm; background: #e8e8e8; text-align: ${isRTL ? 'right' : 'left'}; font-size: ${syllabusTableHeaderSize}pt;">${t.unitsTopics}</th>
                            <th style="width: 25%; border: 1px solid #000; padding: 2mm; background: #e8e8e8; text-align: ${isRTL ? 'right' : 'left'}; font-size: ${syllabusTableHeaderSize}pt;">${t.activity}</th>
                            <th style="width: 22%; border: 1px solid #000; padding: 2mm; background: #e8e8e8; text-align: ${isRTL ? 'right' : 'left'}; font-size: ${syllabusTableHeaderSize}pt;">${t.slos}</th>
                            <th style="width: 23%; border: 1px solid #000; padding: 2mm; background: #e8e8e8; text-align: ${isRTL ? 'right' : 'left'}; font-size: ${syllabusTableHeaderSize}pt;">${t.assessment}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${week.subjects.map(subject => `
                            <tr>
                                <td style="border: 1px solid #000; padding: 2mm; vertical-align: top; text-align: ${isRTL ? 'right' : 'left'};"><strong>${subject.name}</strong></td>
                                <td style="border: 1px solid #000; padding: 2mm; vertical-align: top; text-align: ${isRTL ? 'right' : 'left'};">${subject.topics || '-'}</td>
                                <td style="border: 1px solid #000; padding: 2mm; vertical-align: top; text-align: ${isRTL ? 'right' : 'left'};">${subject.activities || '-'}</td>
                                <td style="border: 1px solid #000; padding: 2mm; vertical-align: top; text-align: ${isRTL ? 'right' : 'left'};">${subject.slos || subject.concepts || '-'}</td>
                                <td style="border: 1px solid #000; padding: 2mm; vertical-align: top; text-align: ${isRTL ? 'right' : 'left'};">${subject.assessment || subject.remarks || '-'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    });
    
    html += `
            <div style="margin-top: 4mm; padding-top: 2mm; border-top: 0.5px solid #666; text-align: center;">
                <div style="font-size: 7pt; color: #666;">${t.generatedOn} ${new Date().toLocaleDateString(isRTL ? 'ur-PK' : 'en-US')}</div>
            </div>
        </div>
    `;
    
    return html;
}

// ===== Print Syllabus =====
function printSyllabus() {
    if (syllabusState.weeks.length === 0) {
        showToast('No syllabus to print', 'error');
        return;
    }
    
    // Get customization settings
    const c = getCustomizationSettings();
    const previewHTML = generateSyllabusPreviewHTML(c);
    
    // Get syllabus-specific text sizes
    const syllabusTextSize = document.getElementById('syllabusTextSize')?.value || '10';
    const syllabusWeekTitleSize = document.getElementById('syllabusWeekTitleSize')?.value || '12';
    const syllabusTableHeaderSize = document.getElementById('syllabusTableHeaderSize')?.value || '10';
    const syllabusInfoSize = document.getElementById('syllabusInfoSize')?.value || '10';
    
    const isRTL = syllabusState.language === 'ur';
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html ${isRTL ? 'dir="rtl"' : ''}>
        <head>
            <meta charset="UTF-8">
            <title>Syllabus - ${document.getElementById('syllabusClass').value} - ${document.getElementById('syllabusTerm').value}</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: ${isRTL ? "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif" : "'Times New Roman', serif"};
                    font-size: ${syllabusTextSize}pt;
                    color: #000;
                    background: white;
                    direction: ${isRTL ? 'rtl' : 'ltr'};
                }
                .syllabus-preview { 
                    max-width: 210mm; 
                    margin: 0 auto; 
                    padding: ${c.pageMargins === 'narrow' ? '5mm' : c.pageMargins === 'wide' ? '15mm' : '10mm'};
                }
                .syllabus-preview.rtl {
                    direction: rtl;
                    font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif;
                }
                
                /* Header styles - SAME AS PAPER GENERATOR */
                .syllabus-header {
                    margin-bottom: 4mm;
                    padding-bottom: 3mm;
                    border-bottom: 2px double #000;
                }
                .syllabus-header.style-modern { border-bottom: 2px double #000; }
                .syllabus-header.style-classic { border-bottom: 1px solid #000; }
                .syllabus-header.style-minimal { border-bottom: none; }
                
                /* Header content with logo positioning - TEXT ALWAYS CENTERED */
                .header-content {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    margin-bottom: 2mm;
                }
                
                .header-text {
                    flex: 1;
                    text-align: center !important;
                }
                
                .school-logo-container {
                    flex-shrink: 0;
                }
                .school-logo {
                    object-fit: contain;
                    border: none !important;
                    outline: none !important;
                    box-shadow: none !important;
                }
                .school-logo.size-40 { width: 40px; height: 40px; }
                .school-logo.size-50 { width: 50px; height: 50px; }
                .school-logo.size-60 { width: 60px; height: 60px; }
                .school-logo.size-70 { width: 70px; height: 70px; }
                .school-logo.size-80 { width: 80px; height: 80px; }
                .school-logo.size-90 { width: 90px; height: 90px; }
                .school-logo.size-100 { width: 100px; height: 100px; }
                
                .school-name {
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    line-height: 1.2;
                }
                .school-name.size-14 { font-size: 14pt; }
                .school-name.size-16 { font-size: 16pt; }
                .school-name.size-18 { font-size: 18pt; }
                .school-name.size-20 { font-size: 20pt; }
                .school-name.size-22 { font-size: 22pt; }
                .school-name.size-24 { font-size: 24pt; }
                .school-name.size-26 { font-size: 26pt; }
                
                .school-address {
                    color: #333;
                    margin-top: 1mm;
                    line-height: 1.3;
                }
                .school-address.size-7 { font-size: 7pt; }
                .school-address.size-8 { font-size: 8pt; }
                .school-address.size-9 { font-size: 9pt; }
                .school-address.size-10 { font-size: 10pt; }
                .school-address.size-11 { font-size: 11pt; }
                .school-address.size-12 { font-size: 12pt; }
                
                .school-contact {
                    color: #333;
                    margin-top: 1mm;
                    line-height: 1.3;
                }
                .school-contact.size-7 { font-size: 7pt; }
                .school-contact.size-8 { font-size: 8pt; }
                .school-contact.size-9 { font-size: 9pt; }
                .school-contact.size-10 { font-size: 10pt; }
                .school-contact.size-11 { font-size: 11pt; }
                .school-contact.size-12 { font-size: 12pt; }
                
                .syllabus-title {
                    text-align: center;
                    font-weight: bold;
                    margin: 2mm 0;
                    padding: 2mm 4mm;
                    background: #f0f0f0;
                    border: 1px solid #000;
                    font-size: 12pt;
                }
                
                .info-row {
                    display: flex;
                    justify-content: space-between;
                    margin: 3mm 0;
                    flex-wrap: wrap;
                    gap: 2mm;
                    padding: 2mm 3mm;
                    background: #fafafa;
                    border: 1px solid #ddd;
                }
                .info-row span { font-weight: normal; }
                .info-row strong { font-weight: bold; }
                
                .week-section {
                    margin-bottom: 4mm;
                    page-break-inside: avoid;
                }
                
                .week-title {
                    padding: 1.5mm 3mm;
                    font-weight: bold;
                    margin-bottom: 1mm;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .week-title.style-bordered {
                    border: 1.5px solid #000;
                    background: transparent;
                }
                .week-title.style-underline {
                    border: none;
                    border-bottom: 2px solid #000;
                }
                .week-title.style-simple {
                    border: none;
                }
                .week-title.style-boxed {
                    background: #f5f5f5;
                    border-left: 4px solid #000;
                }
                .syllabus-preview.rtl .week-title.style-boxed {
                    border-left: none;
                    border-right: 4px solid #000;
                }
                
                .week-date-display {
                    font-weight: normal;
                    font-size: 9pt;
                    color: #333;
                }
                
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #000;
                    padding: 2mm;
                    text-align: ${isRTL ? 'right' : 'left'};
                    vertical-align: top;
                }
                th {
                    background: #e8e8e8;
                    font-weight: bold;
                }
                
                .footer {
                    margin-top: 4mm;
                    padding-top: 2mm;
                    border-top: 0.5px solid #666;
                    text-align: center;
                    font-size: 7pt;
                    color: #666;
                }
                
                @media print {
                    body { padding: 0; margin: 0; }
                    .syllabus-preview { padding: 0; max-width: none; }
                    @page { size: A4; margin: 8mm; }
                }
            </style>
        </head>
        <body>
            ${previewHTML}
            <script>
                window.onload = function() {
                    setTimeout(function() {
                        window.print();
                    }, 300);
                    window.onafterprint = function() { window.close(); };
                };
            </script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}

// Get unified customization settings
function getCustomizationSettings() {
    return {
        logoPosition: document.getElementById('logoPosition')?.value || 'right',
        logoSize: document.getElementById('logoSize')?.value || '80',
        logoVerticalPosition: document.getElementById('logoVerticalPosition')?.value || '0',
        logoMargin: document.getElementById('logoMargin')?.value || '15',
        showSchoolName: document.getElementById('showSchoolName')?.checked !== false,
        showAddress: document.getElementById('showAddress')?.checked !== false,
        showPhone: document.getElementById('showPhone')?.checked !== false,
        showEmail: document.getElementById('showEmail')?.checked === true,
        showExamTitle: document.getElementById('showExamTitle')?.checked !== false,
        showClass: document.getElementById('showClass')?.checked !== false,
        showSubject: document.getElementById('showSubject')?.checked !== false,
        showTime: document.getElementById('showTime')?.checked !== false,
        showMarks: document.getElementById('showMarks')?.checked !== false,
        showDate: document.getElementById('showDate')?.checked !== false,
        showTeacher: document.getElementById('showTeacher')?.checked !== false,
        showInstructions: document.getElementById('showInstructions')?.checked !== false,
        schoolNameSize: document.getElementById('schoolNameSize')?.value || '18',
        addressSize: document.getElementById('addressSize')?.value || '10',
        contactInfoSize: document.getElementById('contactInfoSize')?.value || '10',
        contactInfoStyle: document.getElementById('contactInfoStyle')?.value || 'inline',
        headerTextSize: document.getElementById('headerTextSize')?.value || '10',
        questionTextSize: document.getElementById('questionTextSize')?.value || '11',
        sectionTitleSize: document.getElementById('sectionTitleSize')?.value || '12',
        marksSize: document.getElementById('marksSize')?.value || '9',
        lineHeight: document.getElementById('lineHeight')?.value || '1.4',
        questionSpacing: document.getElementById('questionSpacing')?.value || 'compact',
        sectionSpacing: document.getElementById('sectionSpacing')?.value || 'compact',
        headerSpacing: document.getElementById('headerSpacing')?.value || 'compact',
        headingContentSpacing: document.getElementById('headingContentSpacing')?.value || 'compact',
        mcqOptionSpacing: document.getElementById('mcqOptionSpacing')?.value || 'normal', // <-- ADD THIS LINE
        sectionHeaderStyle: document.getElementById('sectionHeaderStyle')?.value || 'bordered',
        infoGridColumns: document.getElementById('infoGridColumns')?.value || '3',
        headerStyle: document.getElementById('headerStyle')?.value || 'modern',
        pageMargins: document.getElementById('pageMargins')?.value || 'normal',
        enableQrCode: document.getElementById('enableQrCode')?.value || 'no',
        qrPosition: document.getElementById('qrPosition')?.value || 'opposite',
        qrSize: document.getElementById('qrSize')?.value || '80',
        qrIncludeInfo: document.getElementById('qrIncludeInfo')?.checked !== false,
        qrIncludeQuestions: document.getElementById('qrIncludeQuestions')?.checked !== false,
        qrIncludeAnswers: document.getElementById('qrIncludeAnswers')?.checked === true
    };

}

function generateSyllabusPreviewHTML(c = null) {
    if (!c) c = getCustomizationSettings();
    
    const term = document.getElementById('syllabusTerm').value;
    const cls = document.getElementById('syllabusClass').value;
    const year = document.getElementById('syllabusYear').value;
    const lang = syllabusState.language;
    const t = syllabusTranslations[lang];
    const isRTL = lang === 'ur';
    
    // Get school info from settings
    const schoolName = document.getElementById('schoolName')?.value || 'School Name';
    const schoolAddress = document.getElementById('schoolAddress')?.value || '';
    const schoolPhone = document.getElementById('schoolPhone')?.value || '';
    const schoolEmail = document.getElementById('schoolEmail')?.value || '';
    const schoolLogo = state.settings.schoolLogo || '';
    
    // Get syllabus-specific text sizes
    const syllabusTextSize = document.getElementById('syllabusTextSize')?.value || '10';
    const syllabusWeekTitleSize = document.getElementById('syllabusWeekTitleSize')?.value || '12';
    const syllabusTableHeaderSize = document.getElementById('syllabusTableHeaderSize')?.value || '10';
    const syllabusInfoSize = document.getElementById('syllabusInfoSize')?.value || '10';
    
    // Build contact info
    let contactParts = [];
    if (c.showPhone && schoolPhone) contactParts.push(`📞 ${schoolPhone}`);
    if (c.showEmail && schoolEmail) contactParts.push(`✉ ${schoolEmail}`);
    const contactInfo = contactParts.length > 0 ? 
        `<div class="school-contact size-${c.contactInfoSize}">${contactParts.join(' &nbsp;|&nbsp; ')}</div>` : '';
    
    // Build header content - TEXT ALWAYS CENTERED, LOGO ON SIDES
    let headerContentHTML = '';
    
    if (c.logoPosition === 'right' && schoolLogo) {
        headerContentHTML = `
            <div class="header-content" style="display: flex; align-items: flex-start; justify-content: space-between;">
                <div class="header-text" style="flex: 1; text-align: center;">
                    ${c.showSchoolName ? `<div class="school-name size-${c.schoolNameSize}">${schoolName}</div>` : ''}
                    ${c.showAddress && schoolAddress ? `<div class="school-address size-${c.addressSize}">${schoolAddress}</div>` : ''}
                    ${contactInfo}
                </div>
                <div class="school-logo-container" style="flex-shrink: 0; margin-top: ${c.logoVerticalPosition}px; margin-left: ${c.logoMargin}px;">
                    <img src="${schoolLogo}" alt="Logo" class="school-logo size-${c.logoSize}">
                </div>
            </div>
        `;
    } else if (c.logoPosition === 'left' && schoolLogo) {
        headerContentHTML = `
            <div class="header-content" style="display: flex; align-items: flex-start; justify-content: space-between;">
                <div class="school-logo-container" style="flex-shrink: 0; margin-top: ${c.logoVerticalPosition}px; margin-right: ${c.logoMargin}px;">
                    <img src="${schoolLogo}" alt="Logo" class="school-logo size-${c.logoSize}">
                </div>
                <div class="header-text" style="flex: 1; text-align: center;">
                    ${c.showSchoolName ? `<div class="school-name size-${c.schoolNameSize}">${schoolName}</div>` : ''}
                    ${c.showAddress && schoolAddress ? `<div class="school-address size-${c.addressSize}">${schoolAddress}</div>` : ''}
                    ${contactInfo}
                </div>
            </div>
        `;
    } else if (c.logoPosition === 'center' && schoolLogo) {
        headerContentHTML = `
            <div class="header-content" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="school-logo-container" style="margin-top: ${c.logoVerticalPosition}px; margin-bottom: 2mm;">
                    <img src="${schoolLogo}" alt="Logo" class="school-logo size-${c.logoSize}">
                </div>
                <div class="header-text" style="text-align: center;">
                    ${c.showSchoolName ? `<div class="school-name size-${c.schoolNameSize}">${schoolName}</div>` : ''}
                    ${c.showAddress && schoolAddress ? `<div class="school-address size-${c.addressSize}">${schoolAddress}</div>` : ''}
                    ${contactInfo}
                </div>
            </div>
        `;
    } else {
        headerContentHTML = `
            <div class="header-content" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                <div class="header-text" style="text-align: center;">
                    ${c.showSchoolName ? `<div class="school-name size-${c.schoolNameSize}">${schoolName}</div>` : ''}
                    ${c.showAddress && schoolAddress ? `<div class="school-address size-${c.addressSize}">${schoolAddress}</div>` : ''}
                    ${contactInfo}
                </div>
            </div>
        `;
    }
    
    let html = `
        <div class="syllabus-preview ${isRTL ? 'rtl' : ''}">
            <div class="syllabus-header style-${c.headerStyle}">
                ${headerContentHTML}
                
                <div class="syllabus-title">${t.syllabus} - ${term.toUpperCase()}</div>
            </div>
            
            <div class="info-row" style="font-size: ${syllabusInfoSize}pt;">
                <span><strong>${t.class}:</strong> ${cls}</span>
                <span><strong>${t.term}:</strong> ${term}</span>
                <span><strong>${t.academicYear}:</strong> ${year}</span>
            </div>
    `;
    
    syllabusState.weeks.forEach(week => {
        // Format date range
        let dateRangeText = '';
        if (week.dateFrom || week.dateTo) {
            const fromDate = week.dateFrom ? new Date(week.dateFrom).toLocaleDateString(isRTL ? 'ur-PK' : 'en-US', { month: 'short', day: 'numeric' }) : '';
            const toDate = week.dateTo ? new Date(week.dateTo).toLocaleDateString(isRTL ? 'ur-PK' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
            if (fromDate && toDate) {
                dateRangeText = `${fromDate} - ${toDate}`;
            } else if (fromDate) {
                dateRangeText = fromDate;
            }
        }
        
        // Week and Date on opposite sides
        html += `
            <div class="week-section">
                <div class="week-title style-${c.sectionHeaderStyle}" style="font-size: ${syllabusWeekTitleSize}pt; display: flex; justify-content: space-between; align-items: center;">
                    <span>📅 ${t.week} ${week.week}</span>
                    ${dateRangeText ? `<span class="week-date-display">📆 ${dateRangeText}</span>` : ''}
                </div>
                <table style="font-size: ${syllabusTextSize}pt;">
                    <thead>
                        <tr style="font-size: ${syllabusTableHeaderSize}pt;">
                            <th style="width: 12%;">${t.subject}</th>
                            <th style="width: 18%;">${t.unitsTopics}</th>
                            <th style="width: 25%;">${t.activity}</th>
                            <th style="width: 22%;">${t.slos}</th>
                            <th style="width: 23%;">${t.assessment}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${week.subjects.map(subject => `
                            <tr>
                                <td><strong>${subject.name}</strong></td>
                                <td>${subject.topics || '-'}</td>
                                <td>${subject.activities || '-'}</td>
                                <td>${subject.slos || subject.concepts || '-'}</td>
                                <td>${subject.assessment || subject.remarks || '-'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    });
    
    html += `
            <div class="footer">
                <div>${t.generatedOn} ${new Date().toLocaleDateString(isRTL ? 'ur-PK' : 'en-US')}</div>
            </div>
        </div>
    `;
    
    return html;
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('weekModal');
    if (e.target === modal) {
        closeWeekModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('weekModal');
        if (modal && modal.classList.contains('active')) {
            closeWeekModal();
        }
    }
});

// ===================================================================
// ===================== WEEKLY ASSIGNMENT MODULE ====================
// ===================================================================

// Assignment State
let assignmentState = {
    language: 'en',
    shortQuestions: [],
    longQuestions: [],
    mcqs: [],
    fillBlanks: [],
    trueFalse: [],
    matchSections: [],
    wordMeanings: [],
    tables: [],
    pictureQuestions: [],
    reflectionQuestions: [],
    currentPictureData: ''
};

// Assignment Translations
const assignmentTranslations = {
    en: {
        title: 'Weekly Assignment',
        studentName: 'Student Name',
        rollNumber: 'Roll Number',
        class: 'Class',
        section: 'Section',
        subject: 'Subject',
        date: 'Date',
        teacher: 'Teacher',
        totalMarks: 'Total Marks',
        week: 'Week',
        submissionDate: 'Submission Date',
        instructions: 'Instructions',
        shortQuestions: 'Short Questions',
        longQuestions: 'Long / Descriptive Questions',
        mcqs: 'Multiple Choice Questions',
        fillBlanks: 'Fill in the Blanks',
        trueFalse: 'True / False',
        matchFollowing: 'Match the Following',
        wordMeaning: 'Word Meanings',
        tableActivity: 'Table / Activity',
        pictureQuestion: 'Picture Based Question',
        reflection: 'Reflection / Critical Thinking',
        remarks: 'Teacher Remarks',
        marksObtained: 'Marks Obtained',
        grade: 'Grade',
        teacherSignature: 'Teacher Signature',
        parentSignature: 'Parent Signature',
        marks: 'Marks',
        word: 'Word',
        meaning: 'Meaning',
        columnA: 'Column A',
        columnB: 'Column B',
        true: 'True',
        false: 'False',
        answer: 'Answer',
        answerHere: 'Answer here'
    },
    ur: {
        title: 'ہفتہ وار اسائنمنٹ',
        studentName: 'طالب علم کا نام',
        rollNumber: 'رول نمبر',
        class: 'جماعت',
        section: 'سیکشن',
        subject: 'مضمون',
        date: 'تاریخ',
        teacher: 'استاد',
        totalMarks: 'کل نمبر',
        week: 'ہفتہ',
        submissionDate: 'جمع کرانے کی تاریخ',
        instructions: 'ہدایات',
        shortQuestions: 'مختصر سوالات',
        longQuestions: 'تفصیلی سوالات',
        mcqs: 'کثیر انتخابی سوالات',
        fillBlanks: 'خالی جگہ پر کریں',
        trueFalse: 'صحیح / غلط',
        matchFollowing: 'ملائیں',
        wordMeaning: 'الفاظ کے معنی',
        tableActivity: 'جدول / سرگرمی',
        pictureQuestion: 'تصویری سوال',
        reflection: 'تنقیدی سوچ',
        remarks: 'استاد کی رائے',
        marksObtained: 'حاصل کردہ نمبر',
        grade: 'گریڈ',
        teacherSignature: 'استاد کے دستخط',
        parentSignature: 'والدین کے دستخط',
        marks: 'نمبر',
        word: 'لفظ',
        meaning: 'معنی',
        columnA: 'کالم الف',
        columnB: 'کالم ب',
        true: 'صحیح',
        false: 'غلط',
        answer: 'جواب',
        answerHere: 'یہاں جواب لکھیں'
    }
};

// ===== Assignment Language Toggle =====
function setAssignmentLanguage(lang) {
    assignmentState.language = lang;
    
    // Update toggle buttons
    document.querySelectorAll('.assignment-lang-toggle .lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.assignment-lang-toggle [data-lang="${lang}"]`)?.classList.add('active');
    
    // Update content direction
    const assignmentContent = document.getElementById('assignmentContent');
    if (assignmentContent) {
        if (lang === 'ur') {
            assignmentContent.style.direction = 'rtl';
            assignmentContent.style.fontFamily = "'Noto Nastaliq Urdu', serif";
        } else {
            assignmentContent.style.direction = 'ltr';
            assignmentContent.style.fontFamily = "'Poppins', sans-serif";
        }
    }
    
    // Update all labels
    updateAssignmentLabels();
    
    showToast(lang === 'en' ? 'Language: English' : 'زبان: اردو', 'success');
}

function updateAssignmentLabels() {
    const lang = assignmentState.language;
    
    document.querySelectorAll('.assign-label').forEach(label => {
        const text = label.getAttribute(`data-${lang}`);
        if (text) {
            label.textContent = text;
        }
    });
}

// ===== Assignment Tab Switching =====
function switchAssignmentTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.assign-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.assign-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`assign-${tabName}-tab`).classList.add('active');
}

// ===== Add Assignment Questions =====
function addAssignmentQuestion(type) {
    switch(type) {
        case 'short':
            addAssignmentShortQuestion();
            break;
        case 'long':
            addAssignmentLongQuestion();
            break;
        case 'mcq':
            addAssignmentMCQ();
            break;
        case 'fillblanks':
            addAssignmentFillBlank();
            break;
        case 'truefalse':
            addAssignmentTrueFalse();
            break;
        case 'match':
            addAssignmentMatch();
            break;
        case 'wordmeaning':
            addAssignmentWordMeaning();
            break;
        case 'table':
            addAssignmentTable();
            break;
        case 'picture':
            addAssignmentPicture();
            break;
        case 'reflection':
            addAssignmentReflection();
            break;
    }
}

// Short Questions
function addAssignmentShortQuestion() {
    const question = document.getElementById('assignShortQ').value.trim();
    const marks = parseInt(document.getElementById('assignShortMarks').value) || 2;
    const lines = parseInt(document.getElementById('assignShortLines').value) || 3;
    
    if (!question) {
        showToast('Enter question', 'error');
        return;
    }
    
    assignmentState.shortQuestions.push({
        id: Date.now(),
        question,
        marks,
        lines
    });
    
    renderAssignmentList('short');
    document.getElementById('assignShortQ').value = '';
    showToast('Question added!', 'success');
}

// Long Questions
function addAssignmentLongQuestion() {
    const question = document.getElementById('assignLongQ').value.trim();
    const marks = parseInt(document.getElementById('assignLongMarks').value) || 5;
    const lines = parseInt(document.getElementById('assignLongLines').value) || 10;
    
    // Get sub-questions
    const subQuestions = [];
    document.querySelectorAll('.long-sub-q').forEach(input => {
        const val = input.value.trim();
        if (val) subQuestions.push(val);
    });
    
    if (!question && subQuestions.length === 0) {
        showToast('Enter question', 'error');
        return;
    }
    
    assignmentState.longQuestions.push({
        id: Date.now(),
        question,
        subQuestions,
        marks,
        lines
    });
    
    renderAssignmentList('long');
    document.getElementById('assignLongQ').value = '';
    document.getElementById('longSubQuestions').innerHTML = `
        <div class="sub-question-row">
            <span>a)</span>
            <input type="text" class="long-sub-q" placeholder="Sub-question a">
        </div>
    `;
    showToast('Question added!', 'success');
}

function addLongSubQuestion() {
    const container = document.getElementById('longSubQuestions');
    const count = container.children.length;
    const letter = String.fromCharCode(97 + count); 
    
    const row = document.createElement('div');
    row.className = 'sub-question-row';
    row.style = 'display: flex; gap: 10px; align-items: center; margin-bottom: 8px;';
    row.innerHTML = `
        <span style="font-weight: bold; min-width: 20px;">${letter})</span>
        <input type="text" class="long-sub-q" placeholder="Sub-question ${letter}" style="flex: 1;">
        <input type="number" class="long-sub-q-marks" placeholder="Marks" value="5" min="1" style="width: 80px;">
    `;
    container.appendChild(row);
}
// MCQs
function addAssignmentMCQ() {
    const question = document.getElementById('assignMcqQ').value.trim();
    const optionA = document.getElementById('assignMcqA').value.trim();
    const optionB = document.getElementById('assignMcqB').value.trim();
    const optionC = document.getElementById('assignMcqC').value.trim();
    const optionD = document.getElementById('assignMcqD').value.trim();
    const correct = document.getElementById('assignMcqCorrect').value;
    const marks = parseInt(document.getElementById('assignMcqMarks').value) || 1;
    
    if (!question || !optionA || !optionB || !optionC || !optionD) {
        showToast('Fill all fields', 'error');
        return;
    }
    
    assignmentState.mcqs.push({
        id: Date.now(),
        question,
        options: [optionA, optionB, optionC, optionD],
        correct,
        marks
    });
    
    renderAssignmentList('mcq');
    document.getElementById('assignMcqQ').value = '';
    document.getElementById('assignMcqA').value = '';
    document.getElementById('assignMcqB').value = '';
    document.getElementById('assignMcqC').value = '';
    document.getElementById('assignMcqD').value = '';
    showToast('MCQ added!', 'success');
}

// Fill in the Blanks
function addAssignmentFillBlank() {
    const question = document.getElementById('assignFillQ').value.trim();
    const answer = document.getElementById('assignFillAnswer').value.trim();
    const marks = parseInt(document.getElementById('assignFillMarks').value) || 1;
    
    if (!question) {
        showToast('Enter sentence', 'error');
        return;
    }
    
    assignmentState.fillBlanks.push({
        id: Date.now(),
        question,
        answer,
        marks
    });
    
    renderAssignmentList('fill');
    document.getElementById('assignFillQ').value = '';
    document.getElementById('assignFillAnswer').value = '';
    showToast('Added!', 'success');
}

// True/False
function addAssignmentTrueFalse() {
    const question = document.getElementById('assignTfQ').value.trim();
    const correct = document.getElementById('assignTfCorrect').value;
    const marks = parseInt(document.getElementById('assignTfMarks').value) || 1;
    
    if (!question) {
        showToast('Enter statement', 'error');
        return;
    }
    
    assignmentState.trueFalse.push({
        id: Date.now(),
        question,
        correct,
        marks
    });
    
    renderAssignmentList('tf');
    document.getElementById('assignTfQ').value = '';
    showToast('Added!', 'success');
}

// Match the Following
function addMatchPair() {
    const container = document.getElementById('matchPairsContainer');
    const count = container.children.length + 1;
    
    const row = document.createElement('div');
    row.className = 'match-pair-row';
    row.innerHTML = `
        <div class="form-group">
            <label>Column A (${count})</label>
            <input type="text" class="match-col-a" placeholder="Item ${count}">
        </div>
        <div class="form-group">
            <label>Column B (${String.fromCharCode(96 + count)})</label>
            <input type="text" class="match-col-b" placeholder="Match for ${count}">
        </div>
    `;
    container.appendChild(row);
}

function addAssignmentMatch() {
    const pairs = [];
    document.querySelectorAll('.match-pair-row').forEach((row, idx) => {
        const colA = row.querySelector('.match-col-a').value.trim();
        const colB = row.querySelector('.match-col-b').value.trim();
        if (colA && colB) {
            pairs.push({ colA, colB });
        }
    });
    
    if (pairs.length < 2) {
        showToast('Add at least 2 pairs', 'error');
        return;
    }
    
    const marks = parseInt(document.getElementById('assignMatchMarks').value) || 5;
    
    assignmentState.matchSections.push({
        id: Date.now(),
        pairs,
        marks
    });
    
    renderAssignmentList('match');
    document.getElementById('matchPairsContainer').innerHTML = `
        <div class="match-pair-row">
            <div class="form-group">
                <label>Column A (1)</label>
                <input type="text" class="match-col-a" placeholder="Item 1">
            </div>
            <div class="form-group">
                <label>Column B (a)</label>
                <input type="text" class="match-col-b" placeholder="Match for 1">
            </div>
        </div>
    `;
    showToast('Match section added!', 'success');
}

// Word Meanings
function addWordMeaningRow() {
    const container = document.getElementById('wordMeaningContainer');
    
    const row = document.createElement('div');
    row.className = 'word-meaning-row';
    row.innerHTML = `
        <div class="form-group">
            <label>Word</label>
            <input type="text" class="word-input" placeholder="Word">
        </div>
        <div class="form-group">
            <label>Meaning</label>
            <input type="text" class="meaning-input" placeholder="Meaning (leave blank for student)">
        </div>
    `;
    container.appendChild(row);
}

function addAssignmentWordMeaning() {
    const words = [];
    document.querySelectorAll('.word-meaning-row').forEach(row => {
        const word = row.querySelector('.word-input').value.trim();
        const meaning = row.querySelector('.meaning-input').value.trim();
        if (word) {
            words.push({ word, meaning });
        }
    });
    
    if (words.length < 1) {
        showToast('Add at least 1 word', 'error');
        return;
    }
    
    const marks = parseInt(document.getElementById('assignWordMarks').value) || 5;
    
    assignmentState.wordMeanings.push({
        id: Date.now(),
        words,
        marks
    });
    
    renderAssignmentList('word');
    document.getElementById('wordMeaningContainer').innerHTML = `
        <div class="word-meaning-row">
            <div class="form-group">
                <label>Word</label>
                <input type="text" class="word-input" placeholder="Word">
            </div>
            <div class="form-group">
                <label>Meaning</label>
                <input type="text" class="meaning-input" placeholder="Meaning (leave blank for student)">
            </div>
        </div>
    `;
    showToast('Word meanings added!', 'success');
}

// Table/Activity
function updateTableHeaders() {
    const cols = parseInt(document.getElementById('assignTableCols').value) || 3;
    const container = document.getElementById('tableHeadersContainer');
    
    let headersHTML = '<label>Column Headers</label><div class="table-headers-row">';
    for (let i = 1; i <= cols; i++) {
        headersHTML += `<input type="text" class="table-header-input" placeholder="Header ${i}">`;
    }
    headersHTML += '</div>';
    
    container.innerHTML = headersHTML;
}

function addAssignmentTable() {
    const title = document.getElementById('assignTableTitle').value.trim();
    const rows = parseInt(document.getElementById('assignTableRows').value) || 4;
    const cols = parseInt(document.getElementById('assignTableCols').value) || 3;
    const marks = parseInt(document.getElementById('assignTableMarks').value) || 5;
    
    const headers = [];
    document.querySelectorAll('.table-header-input').forEach(input => {
        headers.push(input.value.trim() || '');
    });
    
    assignmentState.tables.push({
        id: Date.now(),
        title,
        rows,
        cols,
        headers,
        marks
    });
    
    renderAssignmentList('table');
    document.getElementById('assignTableTitle').value = '';
    showToast('Table added!', 'success');
}

// Picture Question
function previewAssignmentPicture(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            assignmentState.currentPictureData = e.target.result;
            document.getElementById('assignPicturePreview').innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
}

function addAssignmentPicture() {
    if (!assignmentState.currentPictureData) {
        showToast('Upload an image', 'error');
        return;
    }
    
    const caption = document.getElementById('assignPictureCaption').value.trim();
    const question = document.getElementById('assignPictureQ').value.trim();
    const words = document.getElementById('assignPictureWords').value.trim();
    const lines = parseInt(document.getElementById('assignPictureLines').value) || 5;
    const marks = parseInt(document.getElementById('assignPictureMarks').value) || 5;
    
    assignmentState.pictureQuestions.push({
        id: Date.now(),
        image: assignmentState.currentPictureData,
        caption,
        question,
        words: words ? words.split(',').map(w => w.trim()) : [],
        lines,
        marks
    });
    
    renderAssignmentList('picture');
    assignmentState.currentPictureData = '';
    document.getElementById('assignPicturePreview').innerHTML = '<span>📷 Click to upload image</span>';
    document.getElementById('assignPictureCaption').value = '';
    document.getElementById('assignPictureQ').value = '';
    document.getElementById('assignPictureWords').value = '';
    showToast('Picture question added!', 'success');
}

// Reflection
function addAssignmentReflection() {
    const question = document.getElementById('assignReflectionQ').value.trim();
    const lines = parseInt(document.getElementById('assignReflectionLines').value) || 10;
    const marks = parseInt(document.getElementById('assignReflectionMarks').value) || 5;
    
    if (!question) {
        showToast('Enter question', 'error');
        return;
    }
    
    assignmentState.reflectionQuestions.push({
        id: Date.now(),
        question,
        lines,
        marks
    });
    
    renderAssignmentList('reflection');
    document.getElementById('assignReflectionQ').value = '';
    showToast('Reflection question added!', 'success');
}

// ===== Render Assignment Lists =====
function renderAssignmentList(type) {
    let container, items, emptyIcon, emptyText;
    
    switch(type) {
        case 'short':
            container = document.getElementById('assignShortList');
            items = assignmentState.shortQuestions;
            emptyIcon = '📝';
            emptyText = 'No short questions added yet';
            break;
        case 'long':
            container = document.getElementById('assignLongList');
            items = assignmentState.longQuestions;
            emptyIcon = '📄';
            emptyText = 'No long questions added yet';
            break;
        case 'mcq':
            container = document.getElementById('assignMcqList');
            items = assignmentState.mcqs;
            emptyIcon = '🔘';
            emptyText = 'No MCQs added yet';
            break;
        case 'fill':
            container = document.getElementById('assignFillList');
            items = assignmentState.fillBlanks;
            emptyIcon = '✏️';
            emptyText = 'No fill in the blanks added yet';
            break;
        case 'tf':
            container = document.getElementById('assignTfList');
            items = assignmentState.trueFalse;
            emptyIcon = '✓✗';
            emptyText = 'No true/false added yet';
            break;
        case 'match':
            container = document.getElementById('assignMatchList');
            items = assignmentState.matchSections;
            emptyIcon = '🔗';
            emptyText = 'No match sections added yet';
            break;
        case 'word':
            container = document.getElementById('assignWordList');
            items = assignmentState.wordMeanings;
            emptyIcon = '📖';
            emptyText = 'No word meanings added yet';
            break;
        case 'table':
            container = document.getElementById('assignTableList');
            items = assignmentState.tables;
            emptyIcon = '📊';
            emptyText = 'No tables added yet';
            break;
        case 'picture':
            container = document.getElementById('assignPictureList');
            items = assignmentState.pictureQuestions;
            emptyIcon = '🖼️';
            emptyText = 'No picture questions added yet';
            break;
        case 'reflection':
            container = document.getElementById('assignReflectionList');
            items = assignmentState.reflectionQuestions;
            emptyIcon = '💭';
            emptyText = 'No reflection questions added yet';
            break;
    }
    
    if (!container) return;
    
    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">${emptyIcon}</span>
                <p>${emptyText}</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = items.map((item, index) => {
        let content = '';
        
        if (type === 'short' || type === 'reflection') {
            content = `<div class="question-text">${item.question}</div>`;
        } else if (type === 'long') {
            content = `<div class="question-text">${item.question || 'Sub-questions only'}</div>`;
            if (item.subQuestions && item.subQuestions.length > 0) {
                content += `<div class="sub-q-preview">${item.subQuestions.map((sq, i) => `${String.fromCharCode(97+i)}) ${sq}`).join(', ')}</div>`;
            }
        } else if (type === 'mcq') {
            content = `
                <div class="question-text">${item.question}</div>
                <div class="question-options">
                    <div class="question-option"><strong>A)</strong> ${item.options[0]}</div>
                    <div class="question-option"><strong>B)</strong> ${item.options[1]}</div>
                    <div class="question-option"><strong>C)</strong> ${item.options[2]}</div>
                    <div class="question-option"><strong>D)</strong> ${item.options[3]}</div>
                </div>
            `;
        } else if (type === 'fill' || type === 'tf') {
            content = `<div class="question-text">${item.question}</div>`;
        } else if (type === 'match') {
            content = `<div class="question-text">${item.pairs.length} pairs to match</div>`;
        } else if (type === 'word') {
            content = `<div class="question-text">${item.words.length} words</div>`;
        } else if (type === 'table') {
            content = `<div class="question-text">${item.title || 'Table'} (${item.rows}x${item.cols})</div>`;
        } else if (type === 'picture') {
            content = `
                <div class="question-text">
                    <img src="${item.image}" alt="Preview" style="max-width: 100px; max-height: 60px; border-radius: 4px;">
                    ${item.question ? `<p>${item.question}</p>` : ''}
                </div>
            `;
        }
        
        return `
            <div class="question-card" data-id="${item.id}">
                <div class="question-card-header">
                    <span class="question-number">Q${index + 1}</span>
                    <span class="question-marks">${item.marks} Mark${item.marks > 1 ? 's' : ''}</span>
                </div>
                ${content}
                <div class="question-actions">
                    <button class="btn btn-sm btn-danger" onclick="deleteAssignmentQuestion('${type}', ${item.id})">🗑️ Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

// Delete Assignment Question
function deleteAssignmentQuestion(type, id) {
    switch(type) {
        case 'short':
            assignmentState.shortQuestions = assignmentState.shortQuestions.filter(q => q.id !== id);
            renderAssignmentList('short');
            break;
        case 'long':
            assignmentState.longQuestions = assignmentState.longQuestions.filter(q => q.id !== id);
            renderAssignmentList('long');
            break;
        case 'mcq':
            assignmentState.mcqs = assignmentState.mcqs.filter(q => q.id !== id);
            renderAssignmentList('mcq');
            break;
        case 'fill':
            assignmentState.fillBlanks = assignmentState.fillBlanks.filter(q => q.id !== id);
            renderAssignmentList('fill');
            break;
        case 'tf':
            assignmentState.trueFalse = assignmentState.trueFalse.filter(q => q.id !== id);
            renderAssignmentList('tf');
            break;
        case 'match':
            assignmentState.matchSections = assignmentState.matchSections.filter(q => q.id !== id);
            renderAssignmentList('match');
            break;
        case 'word':
            assignmentState.wordMeanings = assignmentState.wordMeanings.filter(q => q.id !== id);
            renderAssignmentList('word');
            break;
        case 'table':
            assignmentState.tables = assignmentState.tables.filter(q => q.id !== id);
            renderAssignmentList('table');
            break;
        case 'picture':
            assignmentState.pictureQuestions = assignmentState.pictureQuestions.filter(q => q.id !== id);
            renderAssignmentList('picture');
            break;
        case 'reflection':
            assignmentState.reflectionQuestions = assignmentState.reflectionQuestions.filter(q => q.id !== id);
            renderAssignmentList('reflection');
            break;
    }
    showToast('Deleted', 'success');
}

// ===== Assignment Preview =====
function previewAssignment() {
    const html = generateAssignmentHTML();
    
    document.getElementById('assignmentPreviewContainer').style.display = 'block';
    document.getElementById('assignmentPreviewContent').innerHTML = html;
    
    showToast('Preview generated!', 'success');
}

function generateAssignmentHTML() {
    const t = assignmentTranslations[assignmentState.language];
    const isRTL = assignmentState.language === 'ur';
    const c = getCustomizationSettings();
    
    // Get assignment details
    const title = document.getElementById('assignmentTitle')?.value || t.title;
    const week = document.getElementById('assignmentWeek')?.value || '1';
    const totalMarks = document.getElementById('assignmentTotalMarks')?.value || '50';
    const submissionDate = document.getElementById('assignmentSubmissionDate')?.value || '';
    const className = document.getElementById('assignmentClass')?.value || '';
    const section = document.getElementById('assignmentSection')?.value || '';
    const subject = document.getElementById('assignmentSubject')?.value || '';
    const teacher = document.getElementById('assignmentTeacher')?.value || '';
    const instructions = document.getElementById('assignmentInstructions')?.value || '';
    
    // Get school info
    const schoolName = document.getElementById('schoolName')?.value || 'School Name';
    const schoolAddress = document.getElementById('schoolAddress')?.value || '';
    const schoolPhone = document.getElementById('schoolPhone')?.value || '';
    const schoolEmail = document.getElementById('schoolEmail')?.value || '';
    const schoolLogo = state.settings.schoolLogo || '';
    
    // Format submission date
    let formattedDate = '';
    if (submissionDate) {
        const date = new Date(submissionDate);
        formattedDate = date.toLocaleDateString(isRTL ? 'ur-PK' : 'en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        });
    }
    
    // Build header - same as paper generator
    let headerContentHTML = '';
    if (c.logoPosition === 'right' && schoolLogo) {
        headerContentHTML = `
            <div style="display: flex; align-items: flex-start; justify-content: space-between;">
                <div style="flex: 1; text-align: center;">
                    ${c.showSchoolName ? `<div style="font-size: ${c.schoolNameSize}pt; font-weight: bold; text-transform: uppercase;">${schoolName}</div>` : ''}
                    ${c.showAddress && schoolAddress ? `<div style="font-size: ${c.addressSize}pt; color: #333;">${schoolAddress}</div>` : ''}
                    ${c.showPhone && schoolPhone ? `<div style="font-size: ${c.contactInfoSize}pt; color: #333;">📞 ${schoolPhone}</div>` : ''}
                </div>
                <div style="flex-shrink: 0; margin-left: ${c.logoMargin}px;">
                    <img src="${schoolLogo}" style="width: ${c.logoSize}px; height: ${c.logoSize}px; object-fit: contain; border: none;">
                </div>
            </div>
        `;
    } else if (c.logoPosition === 'left' && schoolLogo) {
        headerContentHTML = `
            <div style="display: flex; align-items: flex-start; justify-content: space-between;">
                <div style="flex-shrink: 0; margin-right: ${c.logoMargin}px;">
                    <img src="${schoolLogo}" style="width: ${c.logoSize}px; height: ${c.logoSize}px; object-fit: contain; border: none;">
                </div>
                <div style="flex: 1; text-align: center;">
                    ${c.showSchoolName ? `<div style="font-size: ${c.schoolNameSize}pt; font-weight: bold; text-transform: uppercase;">${schoolName}</div>` : ''}
                    ${c.showAddress && schoolAddress ? `<div style="font-size: ${c.addressSize}pt; color: #333;">${schoolAddress}</div>` : ''}
                    ${c.showPhone && schoolPhone ? `<div style="font-size: ${c.contactInfoSize}pt; color: #333;">📞 ${schoolPhone}</div>` : ''}
                </div>
            </div>
        `;
    } else {
        headerContentHTML = `
            <div style="text-align: center;">
                ${schoolLogo ? `<img src="${schoolLogo}" style="width: ${c.logoSize}px; height: ${c.logoSize}px; object-fit: contain; border: none; margin-bottom: 2mm;">` : ''}
                ${c.showSchoolName ? `<div style="font-size: ${c.schoolNameSize}pt; font-weight: bold; text-transform: uppercase;">${schoolName}</div>` : ''}
                ${c.showAddress && schoolAddress ? `<div style="font-size: ${c.addressSize}pt; color: #333;">${schoolAddress}</div>` : ''}
                ${c.showPhone && schoolPhone ? `<div style="font-size: ${c.contactInfoSize}pt; color: #333;">📞 ${schoolPhone}</div>` : ''}
            </div>
        `;
    }
    
    let html = `
        <div class="assign-paper ${isRTL ? 'rtl' : ''}" style="font-family: ${isRTL ? "'Noto Nastaliq Urdu', serif" : "'Times New Roman', serif"}; direction: ${isRTL ? 'rtl' : 'ltr'};">
            <!-- Header -->
            <div style="margin-bottom: 4mm; padding-bottom: 3mm; border-bottom: 2px double #000;">
                ${headerContentHTML}
                <div style="text-align: center; font-size: 14pt; font-weight: bold; margin-top: 3mm; padding: 2mm 4mm; background: #f0f0f0; border: 1px solid #000;">
                    ${title} - ${t.week} ${week}
                </div>
            </div>
            
            <!-- Assignment Info -->
            <div style="display: flex; justify-content: space-between; margin: 3mm 0; font-size: 10pt; flex-wrap: wrap; gap: 2mm;">
                ${className ? `<span><strong>${t.class}:</strong> ${className}</span>` : ''}
                ${section ? `<span><strong>${t.section}:</strong> ${section}</span>` : ''}
                ${subject ? `<span><strong>${t.subject}:</strong> ${subject}</span>` : ''}
                <span><strong>${t.totalMarks}:</strong> ${totalMarks}</span>
                ${formattedDate ? `<span><strong>${t.submissionDate}:</strong> ${formattedDate}</span>` : ''}
            </div>
            
            <!-- Student Info Fields -->
            ${document.getElementById('showStudentName')?.checked || document.getElementById('showRollNumber')?.checked ? `
                <div class="assign-student-info">
                    ${document.getElementById('showStudentName')?.checked ? `
                        <div class="assign-info-field">
                            <label>${t.studentName}:</label>
                            <div class="field-line"></div>
                        </div>
                    ` : ''}
                    ${document.getElementById('showRollNumber')?.checked ? `
                        <div class="assign-info-field">
                            <label>${t.rollNumber}:</label>
                            <div class="field-line"></div>
                        </div>
                    ` : ''}
                    ${document.getElementById('showStudentClass')?.checked ? `
                        <div class="assign-info-field">
                            <label>${t.class}:</label>
                            <div class="field-line"></div>
                        </div>
                    ` : ''}
                    ${document.getElementById('showStudentSection')?.checked ? `
                        <div class="assign-info-field">
                            <label>${t.section}:</label>
                            <div class="field-line"></div>
                        </div>
                    ` : ''}
                    ${document.getElementById('showStudentDate')?.checked ? `
                        <div class="assign-info-field">
                            <label>${t.date}:</label>
                            <div class="field-line"></div>
                        </div>
                    ` : ''}
                </div>
            ` : ''}
            
            <!-- Instructions -->
            ${instructions ? `
                <div class="assign-instructions">
                    <h4>${t.instructions}:</h4>
                    <p>${instructions}</p>
                </div>
            ` : ''}
    `;
    
    // Add sections
    let questionNumber = 1;
    
    // Short Questions
    if (assignmentState.shortQuestions.length > 0) {
        const totalMarks = assignmentState.shortQuestions.reduce((sum, q) => sum + q.marks, 0);
        html += `
            <div class="assign-section">
                <div class="assign-section-title">${t.shortQuestions} [${totalMarks} ${t.marks}]</div>
        `;
        assignmentState.shortQuestions.forEach(q => {
            html += `
                <div class="assign-question">
                    <span class="assign-marks">(${q.marks})</span>
                    <div class="assign-question-text">
                        <span class="assign-question-number">${questionNumber}.</span>
                        ${q.question}
                    </div>
                    <div class="assign-answer-lines">
                        ${Array(q.lines).fill('<div class="assign-answer-line"></div>').join('')}
                    </div>
                </div>
            `;
            questionNumber++;
        });
        html += '</div>';
    }
    
    // Long Questions
    if (assignmentState.longQuestions.length > 0) {
        const totalMarks = assignmentState.longQuestions.reduce((sum, q) => sum + q.marks, 0);
        html += `
            <div class="assign-section">
                <div class="assign-section-title">${t.longQuestions} [${totalMarks} ${t.marks}]</div>
        `;
        assignmentState.longQuestions.forEach(q => {
            html += `
                <div class="assign-question">
                    <span class="assign-marks">(${q.marks})</span>
                    <div class="assign-question-text">
                        <span class="assign-question-number">${questionNumber}.</span>
                        ${q.question}
                    </div>
            `;
            if (q.subQuestions && q.subQuestions.length > 0) {
                html += '<div style="margin-left: 20px; margin-top: 5px;">';
                q.subQuestions.forEach((sq, idx) => {
                    html += `<div style="margin: 3px 0;">${String.fromCharCode(97 + idx)}) ${sq}</div>`;
                });
                html += '</div>';
            }
            html += `
                    <div class="assign-answer-lines">
                        ${Array(q.lines).fill('<div class="assign-answer-line"></div>').join('')}
                    </div>
                </div>
            `;
            questionNumber++;
        });
        html += '</div>';
    }
    
    // MCQs
    if (assignmentState.mcqs.length > 0) {
        const totalMarks = assignmentState.mcqs.reduce((sum, q) => sum + q.marks, 0);
        html += `
            <div class="assign-section">
                <div class="assign-section-title">${t.mcqs} [${totalMarks} ${t.marks}]</div>
        `;
        assignmentState.mcqs.forEach(q => {
            html += `
                <div class="assign-question">
                    <span class="assign-marks">(${q.marks})</span>
                    <div class="assign-question-text">
                        <span class="assign-question-number">${questionNumber}.</span>
                        ${q.question}
                    </div>
                    <div class="assign-mcq-options">
                        <div class="assign-mcq-option"><span class="option-circle">A</span> ${q.options[0]}</div>
                        <div class="assign-mcq-option"><span class="option-circle">B</span> ${q.options[1]}</div>
                        <div class="assign-mcq-option"><span class="option-circle">C</span> ${q.options[2]}</div>
                        <div class="assign-mcq-option"><span class="option-circle">D</span> ${q.options[3]}</div>
                    </div>
                </div>
            `;
            questionNumber++;
        });
        html += '</div>';
    }
    
    // Fill in the Blanks
    if (assignmentState.fillBlanks.length > 0) {
        const totalMarks = assignmentState.fillBlanks.reduce((sum, q) => sum + q.marks, 0);
        html += `
            <div class="assign-section">
                <div class="assign-section-title">${t.fillBlanks} [${totalMarks} ${t.marks}]</div>
        `;
        assignmentState.fillBlanks.forEach(q => {
            html += `
                <div class="assign-question">
                    <span class="assign-marks">(${q.marks})</span>
                    <div class="assign-question-text">
                        <span class="assign-question-number">${questionNumber}.</span>
                        ${q.question}
                    </div>
                </div>
            `;
            questionNumber++;
        });
        html += '</div>';
    }
    
    // True/False
    if (assignmentState.trueFalse.length > 0) {
        const totalMarks = assignmentState.trueFalse.reduce((sum, q) => sum + q.marks, 0);
        html += `
            <div class="assign-section">
                <div class="assign-section-title">${t.trueFalse} [${totalMarks} ${t.marks}]</div>
        `;
        assignmentState.trueFalse.forEach(q => {
            html += `
                <div class="assign-question">
                    <span class="assign-marks">(${q.marks})</span>
                    <div class="assign-question-text">
                        <span class="assign-question-number">${questionNumber}.</span>
                        ${q.question}
                        <span style="margin-left: 10px; font-weight: bold;">(${t.true} / ${t.false})</span>
                    </div>
                </div>
            `;
            questionNumber++;
        });
        html += '</div>';
    }
    
    // Match the Following
    if (assignmentState.matchSections.length > 0) {
        assignmentState.matchSections.forEach(section => {
            html += `
                <div class="assign-section">
                    <div class="assign-section-title">${t.matchFollowing} [${section.marks} ${t.marks}]</div>
                    <table class="assign-match-table">
                        <thead>
                            <tr>
                                <th style="width: 10%;">#</th>
                                <th style="width: 40%;">${t.columnA}</th>
                                <th style="width: 40%;">${t.columnB}</th>
                                <th style="width: 10%;">${t.answer}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${section.pairs.map((pair, idx) => `
                                <tr>
                                    <td>${idx + 1}</td>
                                    <td>${pair.colA}</td>
                                    <td>${String.fromCharCode(97 + idx)}) ${pair.colB}</td>
                                    <td></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        });
    }
    
    // Word Meanings
    if (assignmentState.wordMeanings.length > 0) {
        assignmentState.wordMeanings.forEach(section => {
            html += `
                <div class="assign-section">
                    <div class="assign-section-title">${t.wordMeaning} [${section.marks} ${t.marks}]</div>
                    <table class="assign-word-table">
                        <thead>
                            <tr>
                                <th style="width: 10%;">#</th>
                                <th style="width: 45%;">${t.word}</th>
                                <th style="width: 45%;">${t.meaning}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${section.words.map((word, idx) => `
                                <tr>
                                    <td>${idx + 1}</td>
                                    <td>${word.word}</td>
                                    <td>${word.meaning || ''}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        });
    }
    
    // Tables/Activities
    if (assignmentState.tables.length > 0) {
        assignmentState.tables.forEach(table => {
            html += `
                <div class="assign-section">
                    <div class="assign-section-title">${t.tableActivity} ${table.title ? '- ' + table.title : ''} [${table.marks} ${t.marks}]</div>
                    <table class="assign-activity-table">
                        <thead>
                            <tr>
                                ${table.headers.map(h => `<th>${h || ''}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${Array(table.rows - 1).fill(`<tr>${Array(table.cols).fill('<td style="height: 30px;"></td>').join('')}</tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        });
    }
    
    // Picture Questions
    if (assignmentState.pictureQuestions.length > 0) {
        assignmentState.pictureQuestions.forEach(q => {
            html += `
                <div class="assign-section">
                    <div class="assign-section-title">${t.pictureQuestion} [${q.marks} ${t.marks}]</div>
                    <div class="assign-picture-container">
                        <img src="${q.image}" alt="Picture">
                        ${q.caption ? `<div class="assign-picture-caption">${q.caption}</div>` : ''}
                    </div>
                    ${q.question ? `
                        <div class="assign-question">
                            <div class="assign-question-text">
                                <span class="assign-question-number">${questionNumber}.</span>
                                ${q.question}
                            </div>
                            <div class="assign-answer-lines">
                                ${Array(q.lines).fill('<div class="assign-answer-line"></div>').join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${q.words && q.words.length > 0 ? `
                        <div style="margin-top: 10px;">
                            <strong>${t.wordMeaning}:</strong>
                            <table class="assign-word-table" style="margin-top: 5px;">
                                <thead>
                                    <tr>
                                        <th>${t.word}</th>
                                        <th>${t.meaning}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${q.words.map(w => `<tr><td>${w}</td><td></td></tr>`).join('')}
                                </tbody>
                            </table>
                        </div>
                    ` : ''}
                </div>
            `;
            questionNumber++;
        });
    }
    
    // Reflection Questions
    if (assignmentState.reflectionQuestions.length > 0) {
        const totalMarks = assignmentState.reflectionQuestions.reduce((sum, q) => sum + q.marks, 0);
        html += `
            <div class="assign-section">
                <div class="assign-section-title">${t.reflection} [${totalMarks} ${t.marks}]</div>
        `;
        assignmentState.reflectionQuestions.forEach(q => {
            html += `
                <div class="assign-question">
                    <span class="assign-marks">(${q.marks})</span>
                    <div class="assign-question-text">
                        <span class="assign-question-number">${questionNumber}.</span>
                        ${q.question}
                    </div>
                    <div class="assign-answer-lines">
                        ${Array(q.lines).fill('<div class="assign-answer-line"></div>').join('')}
                    </div>
                </div>
            `;
            questionNumber++;
        });
        html += '</div>';
    }
    
    // Teacher Remarks Section
    const showRemarks = document.getElementById('showRemarksBox')?.checked;
    const showMarksObtained = document.getElementById('showMarksObtained')?.checked;
    const showGrade = document.getElementById('showGrade')?.checked;
    const showTeacherSig = document.getElementById('showTeacherSignature')?.checked;
    const showParentSig = document.getElementById('showParentSignature')?.checked;
    
    if (showRemarks || showMarksObtained || showGrade || showTeacherSig || showParentSig) {
        html += `
            <div class="assign-remarks-section">
                ${showRemarks ? `
                    <div class="assign-remarks-box">
                        <label>${t.remarks}:</label>
                        <div class="remarks-area"></div>
                    </div>
                ` : ''}
                
                ${showMarksObtained || showGrade ? `
                    <div class="assign-grade-row">
                        ${showMarksObtained ? `
                            <div class="assign-grade-item">
                                <label>${t.marksObtained}:</label>
                                <div class="grade-line"></div>
                                <span>/ ${totalMarks}</span>
                            </div>
                        ` : ''}
                        ${showGrade ? `
                            <div class="assign-grade-item">
                                <label>${t.grade}:</label>
                                <div class="grade-line"></div>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
                
                ${showTeacherSig || showParentSig ? `
                    <div class="assign-signature-row">
                        ${showTeacherSig ? `
                            <div class="assign-signature">
                                <div class="sig-line"></div>
                                <label>${t.teacherSignature}</label>
                            </div>
                        ` : ''}
                        ${showParentSig ? `
                            <div class="assign-signature">
                                <div class="sig-line"></div>
                                <label>${t.parentSignature}</label>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    html += '</div>';
    
    return html;
}

// ===== Print Assignment =====
function printAssignment() {
    const html = generateAssignmentHTML();
    const isRTL = assignmentState.language === 'ur';
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html ${isRTL ? 'dir="rtl"' : ''}>
        <head>
            <meta charset="UTF-8">
            <title>Weekly Assignment</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: ${isRTL ? "'Noto Nastaliq Urdu', serif" : "'Times New Roman', serif"};
                    font-size: 11pt;
                    color: #000;
                    background: white;
                    direction: ${isRTL ? 'rtl' : 'ltr'};
                }
                .assign-paper { max-width: 210mm; margin: 0 auto; padding: 10mm; }
                .assign-student-info { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 15px 0; padding: 15px; border: 1px solid #333; border-radius: 5px; }
                .assign-info-field { display: flex; align-items: center; gap: 5px; }
                .assign-info-field label { font-weight: 600; white-space: nowrap; }
                .assign-info-field .field-line { flex: 1; border-bottom: 1px solid #333; min-width: 80px; }
                .assign-instructions { background: #f5f5f5; padding: 12px 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #4f46e5; }
                .assign-instructions h4 { margin: 0 0 8px 0; font-size: 11pt; }
                .assign-instructions p { margin: 0; font-size: 10pt; white-space: pre-line; }
                .assign-section { margin: 20px 0; page-break-inside: avoid; }
                .assign-section-title { font-weight: bold; font-size: 12pt; padding: 8px 15px; background: #f0f0f0; border: 2px solid #333; margin-bottom: 15px; }
                .assign-question { margin: 12px 0; page-break-inside: avoid; }
                .assign-question-text { font-size: 11pt; margin-bottom: 8px; }
                .assign-question-number { font-weight: bold; margin-right: 8px; }
                .assign-marks { float: ${isRTL ? 'left' : 'right'}; font-weight: bold; color: #555; font-size: 9pt; }
                .assign-answer-lines { margin: 10px 0 15px ${isRTL ? '0' : '20px'}; margin-${isRTL ? 'right' : 'left'}: 20px; }
                .assign-answer-line { border-bottom: 1px solid #999; height: 25px; margin: 5px 0; }
                .assign-mcq-options { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; margin: 8px 0 15px ${isRTL ? '0' : '25px'}; margin-${isRTL ? 'right' : 'left'}: 25px; }
                .assign-mcq-option { display: flex; align-items: center; gap: 8px; }
                .assign-mcq-option .option-circle { width: 18px; height: 18px; border: 2px solid #333; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 10pt; }
                .assign-match-table, .assign-word-table, .assign-activity-table { width: 100%; border-collapse: collapse; margin: 10px 0; }
                .assign-match-table th, .assign-match-table td, .assign-word-table th, .assign-word-table td, .assign-activity-table th, .assign-activity-table td { border: 1px solid #333; padding: 10px; text-align: ${isRTL ? 'right' : 'left'}; }
                .assign-match-table th, .assign-word-table th, .assign-activity-table th { background: #f0f0f0; font-weight: bold; }
                .assign-picture-container { text-align: center; margin: 15px 0; }
                .assign-picture-container img { max-width: 300px; max-height: 250px; border: 2px solid #333; border-radius: 5px; }
                .assign-picture-caption { font-style: italic; margin-top: 8px; font-size: 10pt; }
                .assign-remarks-section { margin-top: 30px; padding: 15px; border: 2px solid #333; border-radius: 5px; page-break-inside: avoid; }
                .assign-remarks-box { margin: 10px 0; }
                .assign-remarks-box label { font-weight: bold; }
                .assign-remarks-box .remarks-area { border: 1px solid #999; min-height: 60px; margin-top: 5px; }
                .assign-grade-row { display: flex; gap: 30px; margin: 15px 0; }
                .assign-grade-item { display: flex; align-items: center; gap: 10px; }
                .assign-grade-item label { font-weight: bold; }
                .assign-grade-item .grade-line { width: 80px; border-bottom: 1px solid #333; }
                .assign-signature-row { display: flex; justify-content: space-between; margin-top: 30px; padding-top: 20px; }
                .assign-signature { text-align: center; }
                .assign-signature .sig-line { width: 150px; border-bottom: 1px solid #333; margin-bottom: 5px; }
                .assign-signature label { font-size: 9pt; }
                @media print {
                    body { padding: 0; margin: 0; }
                    .assign-paper { padding: 0; max-width: none; }
                    @page { size: A4; margin: 10mm; }
                }
            </style>
        </head>
        <body>
            ${html}
            <script>
                window.onload = function() {
                    setTimeout(function() { window.print(); }, 300);
                    window.onafterprint = function() { window.close(); };
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// ===== Download Assignment PDF =====
function downloadAssignmentPDF() {
    const html = generateAssignmentHTML();
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.width = '210mm';
    document.body.appendChild(tempDiv);
    
    const element = tempDiv.querySelector('.assign-paper');
    
    let assignMargin = 10;
    assignMargin = Math.max(assignMargin, 2);
    const opt = {
        margin: [assignMargin, assignMargin, assignMargin, assignMargin],
        filename: `Assignment_Week_${document.getElementById('assignmentWeek')?.value || '1'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: (getCustomizationSettings().enableQrCode === 'yes' ? 3 : 2), useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    showToast('Creating PDF...', 'success');
    
    html2pdf().set(opt).from(element).save().then(() => {
        document.body.removeChild(tempDiv);
        showToast('PDF downloaded!', 'success');
    }).catch(err => {
        document.body.removeChild(tempDiv);
        showToast('PDF error', 'error');
        console.error(err);
    });
}

// ===== Save/Load Assignment =====
function saveAssignment() {
    const data = {
        settings: {
            title: document.getElementById('assignmentTitle')?.value || '',
            week: document.getElementById('assignmentWeek')?.value || '1',
            totalMarks: document.getElementById('assignmentTotalMarks')?.value || '50',
            submissionDate: document.getElementById('assignmentSubmissionDate')?.value || '',
            className: document.getElementById('assignmentClass')?.value || '',
            section: document.getElementById('assignmentSection')?.value || '',
            subject: document.getElementById('assignmentSubject')?.value || '',
            teacher: document.getElementById('assignmentTeacher')?.value || '',
            instructions: document.getElementById('assignmentInstructions')?.value || ''
        },
        questions: assignmentState
    };
    
    localStorage.setItem('weeklyAssignment', JSON.stringify(data));
    showToast('Assignment saved!', 'success');
}

function loadAssignment() {
    const saved = localStorage.getItem('weeklyAssignment');
    if (saved) {
        const data = JSON.parse(saved);
        
        // Load settings
        if (data.settings) {
            if (document.getElementById('assignmentTitle')) document.getElementById('assignmentTitle').value = data.settings.title || '';
            if (document.getElementById('assignmentWeek')) document.getElementById('assignmentWeek').value = data.settings.week || '1';
            if (document.getElementById('assignmentTotalMarks')) document.getElementById('assignmentTotalMarks').value = data.settings.totalMarks || '50';
            if (document.getElementById('assignmentSubmissionDate')) document.getElementById('assignmentSubmissionDate').value = data.settings.submissionDate || '';
            if (document.getElementById('assignmentClass')) document.getElementById('assignmentClass').value = data.settings.className || '';
            if (document.getElementById('assignmentSection')) document.getElementById('assignmentSection').value = data.settings.section || '';
            if (document.getElementById('assignmentSubject')) document.getElementById('assignmentSubject').value = data.settings.subject || '';
            if (document.getElementById('assignmentTeacher')) document.getElementById('assignmentTeacher').value = data.settings.teacher || '';
            if (document.getElementById('assignmentInstructions')) document.getElementById('assignmentInstructions').value = data.settings.instructions || '';
        }
        
        // Load questions
        if (data.questions) {
            assignmentState = { ...assignmentState, ...data.questions };
            
            // Render all lists
            renderAssignmentList('short');
            renderAssignmentList('long');
            renderAssignmentList('mcq');
            renderAssignmentList('fill');
            renderAssignmentList('tf');
            renderAssignmentList('match');
            renderAssignmentList('word');
            renderAssignmentList('table');
            renderAssignmentList('picture');
            renderAssignmentList('reflection');
        }
        
        showToast('Assignment loaded!', 'success');
    } else {
        showToast('No saved assignment found', 'error');
    }
}

function clearAssignment() {
    if (confirm('Clear all assignment data?')) {
        assignmentState = {
            language: assignmentState.language,
            shortQuestions: [],
            longQuestions: [],
            mcqs: [],
            fillBlanks: [],
            trueFalse: [],
            matchSections: [],
            wordMeanings: [],
            tables: [],
            pictureQuestions: [],
            reflectionQuestions: [],
            currentPictureData: ''
        };
        
        // Clear subject questions
        subjectQuestions = {
            english: [], urdu: [], maths: [], science: [], islamiat: [], general: []
        };
        
        // Clear all form fields
        if (document.getElementById('assignmentTitle')) document.getElementById('assignmentTitle').value = '';
        if (document.getElementById('assignmentWeek')) document.getElementById('assignmentWeek').value = '1';
        if (document.getElementById('assignmentInstructions')) document.getElementById('assignmentInstructions').value = '';
        
        // Render all empty lists
        renderAssignmentList('short');
        renderAssignmentList('long');
        renderAssignmentList('mcq');
        renderAssignmentList('fill');
        renderAssignmentList('tf');
        renderAssignmentList('match');
        renderAssignmentList('word');
        renderAssignmentList('table');
        renderAssignmentList('picture');
        renderAssignmentList('reflection');
        
        // Render subject questions
        renderSubjectQuestionsList();
        
        // Hide preview
        if (document.getElementById('assignmentPreviewContainer')) {
            document.getElementById('assignmentPreviewContainer').style.display = 'none';
        }
        
        showToast('Assignment cleared', 'success');
    }
}

// ===================================================================
// ===================== SUBJECT-BASED WORKSHEET MODULE ===============
// ===================================================================

// Subject Questions State - Questions organized by subject
let subjectQuestions = {
    english: [],
    urdu: [],
    maths: [],
    science: [],
    islamiat: [],
    general: []
};

let currentSubject = 'english';
let currentQuestionType = 'short';

// Subject icons and translations
const subjectInfo = {
    english: { icon: '📖', name: 'English', urduName: 'انگریزی' },
    urdu: { icon: '📗', name: 'Urdu', urduName: 'اردو' },
    maths: { icon: '🔢', name: 'Mathematics', urduName: 'ریاضی' },
    science: { icon: '🔬', name: 'Science', urduName: 'سائنس' },
    islamiat: { icon: '☪️', name: 'Islamiat', urduName: 'اسلامیات' },
    general: { icon: '📋', name: 'General Knowledge', urduName: 'عمومی معلومات' }
};

// Switch between subjects
function switchSubjectTab(subject) {
    currentSubject = subject;
    
    // Update subject tab buttons
    document.querySelectorAll('.subject-tabs .assign-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.subject-tabs [data-subject="${subject}"]`)?.classList.add('active');
    
    // Update current subject display
    const info = subjectInfo[subject];
    document.getElementById('currentSubjectName').textContent = assignmentState.language === 'ur' ? info.urduName : info.name;
    document.querySelector('.current-subject-display .subject-icon').textContent = info.icon;
    
    // Update question count
    updateSubjectQuestionCount();
    
    // Render questions for this subject
    renderSubjectQuestionsList();
}

// Switch between question types
function switchQuestionTypeTab(type) {
    currentQuestionType = type;
    
    // Update question type tab buttons
    document.querySelectorAll('.qtype-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show the corresponding content
    document.querySelectorAll('.assign-qtype-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`qtype-${type}`)?.classList.add('active');
}

// Update subject question count
function updateSubjectQuestionCount() {
    const count = subjectQuestions[currentSubject]?.length || 0;
    const el = document.getElementById('currentSubjectCount');
    if (el) {
        el.textContent = `${count} question${count !== 1 ? 's' : ''}`;
    }
}

// Add question for current subject
function addSubjectQuestion(type) {
    const lang = assignmentState.language;
    let question = null;
    
    switch(type) {
        case 'short':
            const shortQ = document.getElementById('assignShortQ')?.value.trim();
            const shortMarks = parseInt(document.getElementById('assignShortMarks')?.value) || 2;
            const shortLines = parseInt(document.getElementById('assignShortLines')?.value) || 3;
            if (!shortQ) { showToast('Enter question', 'error'); return; }
            question = { id: Date.now(), type: 'short', question: shortQ, marks: shortMarks, lines: shortLines };
            document.getElementById('assignShortQ').value = '';
            break;
            
      case 'long':
            const longQ = document.getElementById('assignLongQ')?.value.trim();
            const longLines = parseInt(document.getElementById('assignLongLines')?.value) || 10;
            const subQs = [];
            let totalLongMarks = 0;
            document.querySelectorAll('#longSubQuestions .sub-question-row').forEach(row => {
                const sqText = row.querySelector('.long-sub-q')?.value.trim();
                const sqMarks = parseInt(row.querySelector('.long-sub-q-marks')?.value) || 0;
                if (sqText) { 
                    subQs.push({ text: sqText, marks: sqMarks }); 
                    totalLongMarks += sqMarks;
                }
            });
            if (subQs.length === 0) { showToast('Add at least one sub-question with marks', 'error'); return; }
            question = { id: Date.now(), type: 'long', question: longQ, subQuestions: subQs, marks: totalLongMarks, lines: longLines };
            document.getElementById('assignLongQ').value = '';
            document.getElementById('longSubQuestions').innerHTML = '<div class="sub-question-row" style="display: flex; gap: 10px; align-items: center; margin-bottom: 8px;"><span style="font-weight: bold; min-width: 20px;">a)</span><input type="text" class="long-sub-q" placeholder="Sub-question a" style="flex: 1;"><input type="number" class="long-sub-q-marks" placeholder="Marks" value="5" min="1" style="width: 80px;"></div>';
            break;
            
        case 'mcq':
            const mcqQ = document.getElementById('assignMcqQ')?.value.trim();
            const mcqA = document.getElementById('assignMcqA')?.value.trim();
            const mcqB = document.getElementById('assignMcqB')?.value.trim();
            const mcqC = document.getElementById('assignMcqC')?.value.trim();
            const mcqD = document.getElementById('assignMcqD')?.value.trim();
            const mcqMarks = parseInt(document.getElementById('assignMcqMarks')?.value) || 1;
            if (!mcqQ || !mcqA || !mcqB || !mcqC || !mcqD) { showToast('Fill all fields', 'error'); return; }
            question = { id: Date.now(), type: 'mcq', question: mcqQ, options: [mcqA, mcqB, mcqC, mcqD], marks: mcqMarks };
            document.getElementById('assignMcqQ').value = '';
            document.getElementById('assignMcqA').value = '';
            document.getElementById('assignMcqB').value = '';
            document.getElementById('assignMcqC').value = '';
            document.getElementById('assignMcqD').value = '';
            break;
            
        case 'fillblanks':
            const fillQ = document.getElementById('assignFillQ')?.value.trim();
            const fillMarks = parseInt(document.getElementById('assignFillMarks')?.value) || 1;
            if (!fillQ) { showToast('Enter sentence', 'error'); return; }
            question = { id: Date.now(), type: 'fillblanks', question: fillQ, marks: fillMarks };
            document.getElementById('assignFillQ').value = '';
            break;
            
        case 'truefalse':
            const tfQ = document.getElementById('assignTfQ')?.value.trim();
            const tfMarks = parseInt(document.getElementById('assignTfMarks')?.value) || 1;
            if (!tfQ) { showToast('Enter statement', 'error'); return; }
            question = { id: Date.now(), type: 'truefalse', question: tfQ, marks: tfMarks };
            document.getElementById('assignTfQ').value = '';
            break;
            
        case 'match':
            const pairs = [];
            document.querySelectorAll('.match-pair-row').forEach(row => {
                const colA = row.querySelector('.match-col-a')?.value.trim();
                const colB = row.querySelector('.match-col-b')?.value.trim();
                if (colA && colB) pairs.push({ colA, colB });
            });
            if (pairs.length < 2) { showToast('Add at least 2 pairs', 'error'); return; }
            const matchMarks = parseInt(document.getElementById('assignMatchMarks')?.value) || 5;
            question = { id: Date.now(), type: 'match', pairs, marks: matchMarks };
            document.getElementById('matchPairsContainer').innerHTML = '<div class="match-pair-row"><div class="form-group"><label>Column A</label><input type="text" class="match-col-a" placeholder="Item 1"></div><div class="form-group"><label>Column B</label><input type="text" class="match-col-b" placeholder="Match 1"></div></div>';
            break;
            
        case 'wordmeaning':
            const words = [];
            document.querySelectorAll('.word-meaning-row').forEach(row => {
                const word = row.querySelector('.word-input')?.value.trim();
                const meaning = row.querySelector('.meaning-input')?.value.trim();
                if (word) words.push({ word, meaning: meaning || '' });
            });
            if (words.length < 1) { showToast('Add at least 1 word', 'error'); return; }
            const wordMarks = parseInt(document.getElementById('assignWordMarks')?.value) || 5;
            question = { id: Date.now(), type: 'wordmeaning', words, marks: wordMarks };
            document.getElementById('wordMeaningContainer').innerHTML = '<div class="word-meaning-row"><div class="form-group"><label>Word</label><input type="text" class="word-input" placeholder="Word"></div><div class="form-group"><label>Meaning</label><input type="text" class="meaning-input" placeholder="Meaning"></div></div>';
            break;
            
        case 'table':
            const tableTitle = document.getElementById('assignTableTitle')?.value.trim();
            const tableRows = parseInt(document.getElementById('assignTableRows')?.value) || 4;
            const tableCols = parseInt(document.getElementById('assignTableCols')?.value) || 3;
            const tableMarks = parseInt(document.getElementById('assignTableMarks')?.value) || 5;
            const headers = [];
            document.querySelectorAll('.table-header-input').forEach(input => headers.push(input.value.trim() || ''));
            question = { id: Date.now(), type: 'table', title: tableTitle, rows: tableRows, cols: tableCols, headers, marks: tableMarks };
            document.getElementById('assignTableTitle').value = '';
            break;
            
        case 'picture':
            if (!assignmentState.currentPictureData) { showToast('Upload an image', 'error'); return; }
            const picCaption = document.getElementById('assignPictureCaption')?.value.trim();
            const picQ = document.getElementById('assignPictureQ')?.value.trim();
            const picLines = parseInt(document.getElementById('assignPictureLines')?.value) || 5;
            const picMarks = parseInt(document.getElementById('assignPictureMarks')?.value) || 5;
            question = { id: Date.now(), type: 'picture', image: assignmentState.currentPictureData, caption: picCaption, question: picQ, lines: picLines, marks: picMarks };
            assignmentState.currentPictureData = '';
            document.getElementById('assignPicturePreview').innerHTML = '<span>📷 Click to upload</span>';
            document.getElementById('assignPictureCaption').value = '';
            document.getElementById('assignPictureQ').value = '';
            break;
            
        case 'handwriting':
            const hwType = document.getElementById('handwritingType')?.value || 'alphabet';
            const hwContent = document.getElementById('handwritingContent')?.value.trim();
            const hwLines = parseInt(document.getElementById('handwritingLines')?.value) || 4;
            const hwMarks = parseInt(document.getElementById('handwritingMarks')?.value) || 5;
            if (!hwContent) { showToast('Enter content', 'error'); return; }
            question = { id: Date.now(), type: 'handwriting', hwType, content: hwContent, lines: hwLines, marks: hwMarks };
            document.getElementById('handwritingContent').value = '';
            break;
    }
    
    if (question) {
        if (!subjectQuestions[currentSubject]) {
            subjectQuestions[currentSubject] = [];
        }
        subjectQuestions[currentSubject].push(question);
        updateSubjectQuestionCount();
        renderSubjectQuestionsList();
        showToast('Question added to ' + subjectInfo[currentSubject].name + '!', 'success');
    }
}

// Render subject questions list
function renderSubjectQuestionsList() {
    const container = document.getElementById('subjectQuestionsList');
    if (!container) return;
    
    const questions = subjectQuestions[currentSubject] || [];
    
    if (questions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">${subjectInfo[currentSubject].icon}</span>
                <p>No questions added for ${subjectInfo[currentSubject].name} yet</p>
                <small>Select a question type above and add questions</small>
            </div>
        `;
        return;
    }
    
    const typeLabels = {
        short: 'Short Q',
        long: 'Long Q',
        mcq: 'MCQ',
        fillblanks: 'Fill Blank',
        truefalse: 'True/False',
        match: 'Match',
        wordmeaning: 'Word Meaning',
        table: 'Table',
        picture: 'Picture',
        handwriting: 'Handwriting'
    };
    
    container.innerHTML = questions.map((q, index) => {
        let preview = '';
        if (q.type === 'short' || q.type === 'long' || q.type === 'fillblanks' || q.type === 'truefalse') {
            preview = q.question.substring(0, 80) + (q.question.length > 80 ? '...' : '');
        } else if (q.type === 'mcq') {
            preview = q.question.substring(0, 60) + (q.question.length > 60 ? '...' : '');
        } else if (q.type === 'match') {
            preview = `${q.pairs.length} pairs to match`;
        } else if (q.type === 'wordmeaning') {
            preview = `${q.words.length} words`;
        } else if (q.type === 'table') {
            preview = q.title || `${q.rows}x${q.cols} table`;
        } else if (q.type === 'picture') {
            preview = q.caption || 'Picture question';
        } else if (q.type === 'handwriting') {
            preview = q.content.substring(0, 50);
        }
        
        return `
            <div class="subject-question-card">
                <div class="q-header">
                    <span class="q-type-badge">${typeLabels[q.type] || q.type}</span>
                    <span class="q-marks">${q.marks} marks</span>
                </div>
                <div class="q-text">${index + 1}. ${preview}</div>
                <div class="q-actions">
                    <button class="btn btn-sm btn-danger" onclick="deleteSubjectQuestion('${currentSubject}', ${q.id})">🗑️ Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

// Delete subject question
function deleteSubjectQuestion(subject, id) {
    subjectQuestions[subject] = subjectQuestions[subject].filter(q => q.id !== id);
    updateSubjectQuestionCount();
    renderSubjectQuestionsList();
    showToast('Deleted', 'success');
}

// Generate formal worksheet HTML
function generateWorksheetHTML() {
    const t = assignmentTranslations[assignmentState.language];
    const isRTL = assignmentState.language === 'ur';
    const c = getCustomizationSettings();
    
    // Get assignment details
    const campus = document.getElementById('assignmentCampus')?.value || '';
    const assignNo = document.getElementById('assignmentNo')?.value || '1';
    const session = document.getElementById('assignmentSession')?.value || '';
    const term = document.getElementById('assignmentTerm')?.value || '1st Term';
    const className = document.getElementById('assignmentClass')?.value || '';
    const section = document.getElementById('assignmentSection')?.value || '';
    const borderStyle = document.getElementById('assignmentBorderStyle')?.value || 'double';
    const headerStyle = document.getElementById('assignmentHeaderStyle')?.value || 'official';
    
    // Get school info
    const schoolName = document.getElementById('schoolName')?.value || 'School Name';
    const schoolAddress = document.getElementById('schoolAddress')?.value || '';
    const schoolPhone = document.getElementById('schoolPhone')?.value || '';
    const schoolLogo = state.settings.schoolLogo || '';
    
    // Check which subjects have questions
    const activeSubjects = Object.keys(subjectQuestions).filter(subj => 
        subjectQuestions[subj] && subjectQuestions[subj].length > 0
    );
    
    // Build worksheet
    let html = `
        <div class="worksheet-page border-${borderStyle} ${isRTL ? 'rtl' : ''}" style="font-family: ${isRTL ? "'Noto Nastaliq Urdu', serif" : "'Times New Roman', serif"};">
            <!-- Header -->
            <div class="worksheet-header style-${headerStyle}">
                <div class="worksheet-header-content">
                    ${schoolLogo && c.logoPosition === 'left' ? `<img class="worksheet-logo" src="${schoolLogo}" alt="Logo">` : ''}
                    <div class="worksheet-school-info">
                        <div class="worksheet-school-name">${schoolName}</div>
                        ${campus ? `<div class="worksheet-campus">${campus}</div>` : ''}
                        ${schoolPhone ? `<div class="worksheet-contact">📞 ${schoolPhone}</div>` : ''}
                    </div>
                    ${schoolLogo && c.logoPosition === 'right' ? `<img class="worksheet-logo" src="${schoolLogo}" alt="Logo">` : ''}
                </div>
            </div>
            
            <!-- Assignment Info Box -->
            <div class="worksheet-info-box">
                <span class="worksheet-info-item"><strong>Assignment No.:</strong> ${assignNo}</span>
                <span class="worksheet-info-item"><strong>Session:</strong> ${session}</span>
                <span class="worksheet-info-item"><strong>Term:</strong> ${term}</span>
                ${className ? `<span class="worksheet-info-item"><strong>Grade:</strong> ${className}</span>` : ''}
            </div>
            
            <!-- Title -->
            <div class="worksheet-title">WEEKLY ASSIGNMENT</div>
            
            <!-- Student Info Lines -->
            <div class="worksheet-student-info">
                ${document.getElementById('showNameLine')?.checked ? '<div class="worksheet-field"><label>Name:</label><span class="line"></span></div>' : ''}
                ${document.getElementById('showDateLine')?.checked ? '<div class="worksheet-field"><label>Date:</label><span class="line"></span></div>' : ''}
                ${document.getElementById('showClassLine')?.checked ? '<div class="worksheet-field"><label>Class:</label><span class="line"></span></div>' : ''}
                ${document.getElementById('showRollLine')?.checked ? '<div class="worksheet-field"><label>Roll No.:</label><span class="line"></span></div>' : ''}
            </div>
    `;
    
    // Generate subject sections
    activeSubjects.forEach(subjectKey => {
        const info = subjectInfo[subjectKey];
        const questions = subjectQuestions[subjectKey];
        const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
        
        html += `
            <div class="worksheet-subject-section">
                <div class="worksheet-subject-label">${info.icon} ${isRTL ? info.urduName : info.name}</div>
        `;
        
        // Group questions by type
        const questionsByType = {};
        questions.forEach(q => {
            if (!questionsByType[q.type]) questionsByType[q.type] = [];
            questionsByType[q.type].push(q);
        });
        
        let qNum = 1;
        
        // Short Questions
        if (questionsByType.short && questionsByType.short.length > 0) {
            const typeMarks = questionsByType.short.reduce((s, q) => s + q.marks, 0);
            html += `<div class="worksheet-question-section">
                <div class="worksheet-section-title">A. Short Questions [${typeMarks} Marks]</div>`;
            questionsByType.short.forEach(q => {
                html += `
                    <div class="worksheet-question">
                        <div class="worksheet-question-text"><span class="worksheet-q-number">${qNum}.</span> ${q.question}</div>
                        <div class="worksheet-answer-lines">${Array(q.lines).fill('<div class="worksheet-line"></div>').join('')}</div>
                    </div>
                `;
                qNum++;
            });
            html += '</div>';
        }
        
        // MCQs
        if (questionsByType.mcq && questionsByType.mcq.length > 0) {
            const typeMarks = questionsByType.mcq.reduce((s, q) => s + q.marks, 0);
            html += `<div class="worksheet-question-section">
                <div class="worksheet-section-title">Multiple Choice Questions [${typeMarks} Marks]</div>`;
            questionsByType.mcq.forEach(q => {
                html += `
                    <div class="worksheet-question">
                        <div class="worksheet-question-text"><span class="worksheet-q-number">${qNum}.</span> ${q.question}</div>
                        <div class="worksheet-mcq-options">
                            <div class="worksheet-mcq-option"><span class="worksheet-option-box"></span> A) ${q.options[0]}</div>
                            <div class="worksheet-mcq-option"><span class="worksheet-option-box"></span> B) ${q.options[1]}</div>
                            <div class="worksheet-mcq-option"><span class="worksheet-option-box"></span> C) ${q.options[2]}</div>
                            <div class="worksheet-mcq-option"><span class="worksheet-option-box"></span> D) ${q.options[3]}</div>
                        </div>
                    </div>
                `;
                qNum++;
            });
            html += '</div>';
        }
        
        // Fill in Blanks
        if (questionsByType.fillblanks && questionsByType.fillblanks.length > 0) {
            const typeMarks = questionsByType.fillblanks.reduce((s, q) => s + q.marks, 0);
            html += `<div class="worksheet-question-section">
                <div class="worksheet-section-title">Fill in the Blanks [${typeMarks} Marks]</div>`;
            questionsByType.fillblanks.forEach(q => {
                html += `
                    <div class="worksheet-question">
                        <div class="worksheet-question-text"><span class="worksheet-q-number">${qNum}.</span> ${q.question}</div>
                    </div>
                `;
                qNum++;
            });
            html += '</div>';
        }
        
        // True/False
        if (questionsByType.truefalse && questionsByType.truefalse.length > 0) {
            const typeMarks = questionsByType.truefalse.reduce((s, q) => s + q.marks, 0);
            html += `<div class="worksheet-question-section">
                <div class="worksheet-section-title">True / False [${typeMarks} Marks]</div>`;
            questionsByType.truefalse.forEach(q => {
                html += `
                    <div class="worksheet-question">
                        <div class="worksheet-question-text"><span class="worksheet-q-number">${qNum}.</span> ${q.question} <strong>(True / False)</strong></div>
                    </div>
                `;
                qNum++;
            });
            html += '</div>';
        }
        
        // Match
        if (questionsByType.match && questionsByType.match.length > 0) {
            questionsByType.match.forEach(q => {
                html += `<div class="worksheet-question-section">
                    <div class="worksheet-section-title">Match the Following [${q.marks} Marks]</div>
                    <div class="worksheet-match">
                        <div class="worksheet-match-col">
                            <h5>Column A</h5>
                            ${q.pairs.map((p, i) => `<div class="worksheet-match-item">${i + 1}. ${p.colA}</div>`).join('')}
                        </div>
                        <div class="worksheet-match-col">
                            <h5>Column B</h5>
                            ${q.pairs.map((p, i) => `<div class="worksheet-match-item">${String.fromCharCode(97 + i)}) ${p.colB}</div>`).join('')}
                        </div>
                    </div>
                    <div class="worksheet-match-answer">
                        ${q.pairs.map((p, i) => `<div class="worksheet-match-box">${i + 1} <span class="arrow">→</span> <span class="blank"></span></div>`).join('')}
                    </div>
                </div>`;
            });
        }
        
        // Word Meaning
        if (questionsByType.wordmeaning && questionsByType.wordmeaning.length > 0) {
            questionsByType.wordmeaning.forEach(q => {
                html += `<div class="worksheet-question-section">
                    <div class="worksheet-section-title">Word Meanings [${q.marks} Marks]</div>
                    <table class="worksheet-table">
                        <thead>
                            <tr><th style="width: 10%;">#</th><th style="width: 45%;">Word</th><th style="width: 45%;">Meaning</th></tr>
                        </thead>
                        <tbody>
                            ${q.words.map((w, i) => `<tr><td>${i + 1}</td><td>${w.word}</td><td>${w.meaning || ''}</td></tr>`).join('')}
                        </tbody>
                    </table>
                </div>`;
            });
        }
        
        // Tables
        if (questionsByType.table && questionsByType.table.length > 0) {
            questionsByType.table.forEach(q => {
                html += `<div class="worksheet-question-section">
                    <div class="worksheet-section-title">${q.title || 'Table Activity'} [${q.marks} Marks]</div>
                    <table class="worksheet-table">
                        <thead>
                            <tr>${q.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${Array(q.rows - 1).fill(`<tr>${Array(q.cols).fill('<td style="height: 28px;"></td>').join('')}</tr>`).join('')}
                        </tbody>
                    </table>
                </div>`;
            });
        }
        
        // Picture Questions
        if (questionsByType.picture && questionsByType.picture.length > 0) {
            questionsByType.picture.forEach(q => {
                html += `<div class="worksheet-question-section">
                    <div class="worksheet-section-title">Picture Based Question [${q.marks} Marks]</div>
                    <div class="worksheet-picture">
                        <img src="${q.image}" alt="Picture">
                        ${q.caption ? `<div class="worksheet-picture-caption">${q.caption}</div>` : ''}
                    </div>
                    ${q.question ? `
                        <div class="worksheet-question">
                            <div class="worksheet-question-text"><span class="worksheet-q-number">${qNum}.</span> ${q.question}</div>
                            <div class="worksheet-answer-lines">${Array(q.lines).fill('<div class="worksheet-line"></div>').join('')}</div>
                        </div>
                    ` : ''}
                </div>`;
                qNum++;
            });
        }
        
        // Handwriting Practice
        if (questionsByType.handwriting && questionsByType.handwriting.length > 0) {
            questionsByType.handwriting.forEach(q => {
                const typeLabels = {
                    alphabet: 'Trace and Write',
                    words: 'Word Writing Practice',
                    sentence: 'Sentence Writing',
                    numbers: 'Number Writing',
                    urdu: 'اردو حروف کی مشق'
                };
                html += `<div class="worksheet-question-section">
                    <div class="worksheet-section-title">${typeLabels[q.hwType] || 'Writing Practice'} [${q.marks} Marks]</div>
                    <div class="worksheet-handwriting">
                        <div class="worksheet-trace-line">${q.content}</div>
                        ${Array(q.lines).fill('<div class="worksheet-practice-line"></div>').join('')}
                    </div>
                </div>`;
            });
        }
        
       
       // Long Questions
        if (questionsByType.long && questionsByType.long.length > 0) {
            const typeMarks = questionsByType.long.reduce((s, q) => s + q.marks, 0);
            html += `<div class="worksheet-question-section">
                <div class="worksheet-section-title">Descriptive Questions [${typeMarks} Marks]</div>`;
            questionsByType.long.forEach(q => {
                html += `
                    <div class="worksheet-question">
                        ${q.question ? `<div class="worksheet-question-text"><span class="worksheet-q-number">${qNum}.</span> ${q.question}</div>` : ''}
                `;
                if (q.subQuestions && q.subQuestions.length > 0) {
                    html += `<div style="margin-left: ${q.question ? '15px' : '0'}; margin-top: 3px; width: 100%;">`;
                    q.subQuestions.forEach((sq, idx) => {
                        const sqText = sq.text || sq; 
                        const sqMarks = sq.marks ? `(${sq.marks})` : '';
                        const printNum = q.question ? String.fromCharCode(97 + idx) + ')' : `${qNum}.`;
                        html += `
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <span>${printNum} ${sqText}</span>
                                <span style="font-weight: bold;">${sqMarks}</span>
                            </div>
                            <div class="worksheet-answer-lines">${Array(q.lines).fill('<div class="worksheet-line"></div>').join('')}</div>
                        `;
                        if(!q.question) qNum++;
                    });
                    html += '</div>';
                    if(q.question) qNum++;
                } else {
                    html += `<div class="worksheet-answer-lines">${Array(q.lines).fill('<div class="worksheet-line"></div>').join('')}</div>`;
                    qNum++;
                }
                html += '</div>';
            });
            html += '</div>';
        }
        
        html += '</div>'; // Close subject section
    });
    
    // Footer with signatures
    html += `
            <div class="worksheet-footer">
                ${document.getElementById('showParentSign')?.checked ? '<div class="worksheet-signature"><div class="sig-line"></div><label>Parent\'s Signature</label></div>' : ''}
                ${document.getElementById('showMarksBox')?.checked ? '<div class="worksheet-signature"><div class="sig-line"></div><label>Marks Obtained</label></div>' : ''}
                ${document.getElementById('showTeacherSign')?.checked ? '<div class="worksheet-signature"><div class="sig-line"></div><label>Teacher\'s Signature</label></div>' : ''}
            </div>
        </div>
    `;
    
    return html;
}

// Override previewAssignment to use new worksheet format
const originalPreviewAssignment = previewAssignment;
previewAssignment = function() {
    // Check if using subject-based workflow
    const hasSubjectQuestions = Object.values(subjectQuestions).some(arr => arr && arr.length > 0);
    
    if (hasSubjectQuestions) {
        const html = generateWorksheetHTML();
        document.getElementById('assignmentPreviewContainer').style.display = 'block';
        document.getElementById('assignmentPreviewContent').innerHTML = html;
        showToast('Worksheet preview generated!', 'success');
    } else {
        // Fall back to original preview
        originalPreviewAssignment();
    }
};

// Generate Compact Worksheet HTML - optimized for minimal space
function generateCompactWorksheetHTML() {
    const t = assignmentTranslations[assignmentState.language];
    const isRTL = assignmentState.language === 'ur';
    const c = getCustomizationSettings();
    
    // Get assignment text size settings
    const baseTextSize = document.getElementById('assignmentTextSize')?.value || '10';
    const subjectHeadingSize = document.getElementById('assignmentSubjectSize')?.value || '12';
    const questionSize = document.getElementById('assignmentQuestionSize')?.value || '10';
    const lineHeight = document.getElementById('assignmentLineHeight')?.value || '22';
    const answerStyle = document.getElementById('assignmentAnswerStyle')?.value || 'lines';
    
    // Get assignment details
    const campus = document.getElementById('assignmentCampus')?.value || '';
    const assignNo = document.getElementById('assignmentNo')?.value || '1';
    const session = document.getElementById('assignmentSession')?.value || '';
    const term = document.getElementById('assignmentTerm')?.value || '1st';
    const className = document.getElementById('assignmentClass')?.value || '';
    const section = document.getElementById('assignmentSection')?.value || '';
    const borderStyle = document.getElementById('assignmentBorderStyle')?.value || 'simple';
    
    // Get school info
    const schoolName = document.getElementById('schoolName')?.value || 'School Name';
    const schoolPhone = document.getElementById('schoolPhone')?.value || '';
    const schoolLogo = state.settings.schoolLogo || '';
    
    // Check which subjects have questions
    const activeSubjects = Object.keys(subjectQuestions).filter(subj => 
        subjectQuestions[subj] && subjectQuestions[subj].length > 0
    );
    
    // Build compact worksheet
    let html = `
        <div class="compact-worksheet border-${borderStyle} assign-text-${baseTextSize} line-height-${lineHeight} ${isRTL ? 'rtl' : ''}" style="font-family: ${isRTL ? "'Noto Nastaliq Urdu', serif" : "'Times New Roman', serif"};">
            <!-- Compact Header -->
            <div class="compact-header">
                <div style="display: flex; align-items: center; justify-content: ${c.logoPosition === 'right' ? 'flex-end' : c.logoPosition === 'left' ? 'flex-start' : 'center'}; gap: 10px;">
                    ${schoolLogo && c.logoPosition === 'left' ? `<img src="${schoolLogo}" style="width: ${c.logoSize}px; height: ${c.logoSize}px; object-fit: contain; border: none;">` : ''}
                    <div style="flex: 1; text-align: center;">
                        <div class="school-name" style="font-size: ${parseInt(c.schoolNameSize) - 4}pt;">${schoolName}</div>
                        <div class="header-info-line">
                            ${campus ? `<span>${campus}</span>` : ''}
                            <span>Session: ${session}</span>
                            <span>Term: ${term}</span>
                            ${className ? `<span>Grade: ${className}</span>` : ''}
                            ${section ? `<span>Sec: ${section}</span>` : ''}
                        </div>
                    </div>
                    ${schoolLogo && c.logoPosition === 'right' ? `<img src="${schoolLogo}" style="width: ${c.logoSize}px; height: ${c.logoSize}px; object-fit: contain; border: none;">` : ''}
                </div>
            </div>
            
            <!-- Compact Title & Student Info on same line -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin: 1mm 0; flex-wrap: wrap; gap: 5px;">
                <div class="compact-title">ASSIGNMENT #${assignNo}</div>
                <div class="compact-student-line">
                    ${document.getElementById('showNameLine')?.checked ? '<div class="field"><label>Name:</label><span class="line" style="width: 80px;"></span></div>' : ''}
                    ${document.getElementById('showDateLine')?.checked ? '<div class="field"><label>Date:</label><span class="line" style="width: 50px;"></span></div>' : ''}
                </div>
            </div>
    `;
    
    // Generate compact subject sections
    activeSubjects.forEach(subjectKey => {
        const info = subjectInfo[subjectKey];
        const questions = subjectQuestions[subjectKey];
        const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
        
        html += `
            <div style="margin: 1.5mm 0;">
                <div class="compact-subject-label" style="font-size: ${subjectHeadingSize}pt;">${isRTL ? info.urduName : info.name}</div>
        `;
        
        // Group questions by type
        const questionsByType = {};
        questions.forEach(q => {
            if (!questionsByType[q.type]) questionsByType[q.type] = [];
            questionsByType[q.type].push(q);
        });
        
        let qNum = 1;
        
        // Generate compact question sections
        const generateCompactQuestions = (typeQuestions, sectionTitle) => {
            if (!typeQuestions || typeQuestions.length === 0) return '';
            
            const typeMarks = typeQuestions.reduce((s, q) => s + q.marks, 0);
            let sectionHTML = `<div style="margin: 1mm 0;"><div style="font-weight: bold; font-size: 9pt; border-bottom: 1px solid #000; margin-bottom: 1mm; padding: 0.5mm 0;">${sectionTitle} [${typeMarks}]</div>`;
            
            typeQuestions.forEach(q => {
                sectionHTML += `<div class="compact-question" style="font-size: ${questionSize}pt;">`;
                sectionHTML += `<span class="q-num">${qNum}.</span>`;
                sectionHTML += `<span class="q-text">${q.question || ''}</span>`;
                sectionHTML += `</div>`;
                
                // Add compact answer space based on style
                if (q.lines && q.lines > 0 && q.type !== 'mcq' && q.type !== 'fillblanks' && q.type !== 'truefalse') {
                    sectionHTML += `<div class="compact-answer-lines" style="margin-left: 15px;">`;
                    sectionHTML += `<span class="ans-label">Ans:</span>`;
                    for (let i = 0; i < Math.min(q.lines, 3); i++) {
                        sectionHTML += `<div class="compact-answer-line ${answerStyle === 'dotted' ? 'dotted' : answerStyle === 'box' ? 'box' : ''}" style="height: ${lineHeight}px;"></div>`;
                    }
                    sectionHTML += `</div>`;
                }
                
                // MCQ options - inline compact
                if (q.type === 'mcq' && q.options) {
                    sectionHTML += `<div class="compact-mcq-options">`;
                    q.options.forEach((opt, i) => {
                        sectionHTML += `<span class="compact-mcq-option"><span class="opt-box"></span>${String.fromCharCode(65 + i)}) ${opt}</span>`;
                    });
                    sectionHTML += `</div>`;
                }
                
                // True/False indicator
                if (q.type === 'truefalse') {
                    sectionHTML += `<span style="margin-left: 5px; font-weight: bold;">(T / F)</span>`;
                }
                
                qNum++;
            });
            
            sectionHTML += '</div>';
            return sectionHTML;
        };
        
        // Add each question type in compact format
        html += generateCompactQuestions(questionsByType.short, 'Short Questions');
        html += generateCompactQuestions(questionsByType.long, 'Long Questions');
        
        // MCQs - super compact
        if (questionsByType.mcq && questionsByType.mcq.length > 0) {
            const typeMarks = questionsByType.mcq.reduce((s, q) => s + q.marks, 0);
            html += `<div style="margin: 1mm 0;"><div style="font-weight: bold; font-size: 9pt; border-bottom: 1px solid #000; margin-bottom: 1mm;">MCQs [${typeMarks}]</div>`;
            questionsByType.mcq.forEach(q => {
                html += `<div class="compact-question" style="font-size: ${questionSize}pt;">`;
                html += `<span class="q-num">${qNum}.</span>`;
                html += `<span class="q-text">${q.question}</span>`;
                html += `</div>`;
                html += `<div class="compact-mcq-options">`;
                q.options.forEach((opt, i) => {
                    html += `<span class="compact-mcq-option"><span class="opt-box"></span>${String.fromCharCode(65 + i)}) ${opt}</span>`;
                });
                html += `</div>`;
                qNum++;
            });
            html += '</div>';
        }
        
        // Fill blanks - compact inline
        if (questionsByType.fillblanks && questionsByType.fillblanks.length > 0) {
            const typeMarks = questionsByType.fillblanks.reduce((s, q) => s + q.marks, 0);
            html += `<div style="margin: 1mm 0;"><div style="font-weight: bold; font-size: 9pt; border-bottom: 1px solid #000; margin-bottom: 1mm;">Fill in the Blanks [${typeMarks}]</div>`;
            questionsByType.fillblanks.forEach(q => {
                html += `<div class="compact-question" style="font-size: ${questionSize}pt;"><span class="q-num">${qNum}.</span><span class="q-text">${q.question}</span></div>`;
                qNum++;
            });
            html += '</div>';
        }
        
        // True/False - compact
        if (questionsByType.truefalse && questionsByType.truefalse.length > 0) {
            const typeMarks = questionsByType.truefalse.reduce((s, q) => s + q.marks, 0);
            html += `<div style="margin: 1mm 0;"><div style="font-weight: bold; font-size: 9pt; border-bottom: 1px solid #000; margin-bottom: 1mm;">True / False [${typeMarks}]</div>`;
            questionsByType.truefalse.forEach(q => {
                html += `<div class="compact-question" style="font-size: ${questionSize}pt;"><span class="q-num">${qNum}.</span><span class="q-text">${q.question} <strong>(T / F)</strong></span></div>`;
                qNum++;
            });
            html += '</div>';
        }
        
        // Match - compact table
        if (questionsByType.match && questionsByType.match.length > 0) {
            questionsByType.match.forEach(q => {
                html += `<div style="margin: 1mm 0;"><div style="font-weight: bold; font-size: 9pt; border-bottom: 1px solid #000; margin-bottom: 1mm;">Match [${q.marks}]</div>`;
                html += `<div class="compact-match">`;
                html += `<div class="compact-match-col">${q.pairs.map((p, i) => `<div class="compact-match-item">${i + 1}. ${p.colA}</div>`).join('')}</div>`;
                html += `<div class="compact-match-col">${q.pairs.map((p, i) => `<div class="compact-match-item">${String.fromCharCode(97 + i)}) ${p.colB}</div>`).join('')}</div>`;
                html += `</div>`;
                html += `<div class="compact-match-answer">${q.pairs.map((p, i) => `<span class="ans">${i + 1}→<span class="ans-blank"></span></span>`).join(' ')}</div>`;
                html += '</div>';
            });
        }
        
        // Word meanings - compact table
        if (questionsByType.wordmeaning && questionsByType.wordmeaning.length > 0) {
            questionsByType.wordmeaning.forEach(q => {
                html += `<div style="margin: 1mm 0;"><div style="font-weight: bold; font-size: 9pt; border-bottom: 1px solid #000; margin-bottom: 1mm;">Words [${q.marks}]</div>`;
                html += `<table class="compact-table"><thead><tr><th>Word</th><th>Meaning</th></tr></thead><tbody>`;
                q.words.forEach(w => {
                    html += `<tr><td>${w.word}</td><td>${w.meaning || ''}</td></tr>`;
                });
                html += `</tbody></table></div>`;
            });
        }
        
        // Tables - compact
        if (questionsByType.table && questionsByType.table.length > 0) {
            questionsByType.table.forEach(q => {
                html += `<div style="margin: 1mm 0;"><div style="font-weight: bold; font-size: 9pt; border-bottom: 1px solid #000; margin-bottom: 1mm;">${q.title || 'Table'} [${q.marks}]</div>`;
                html += `<table class="compact-table"><thead><tr>${q.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
                html += Array(Math.min(q.rows - 1, 4)).fill(`<tr>${Array(q.cols).fill('<td style="height: 18px;"></td>').join('')}</tr>`).join('');
                html += `</tbody></table></div>`;
            });
        }
        
        html += '</div>'; // Close subject section
    });
    
    // Compact Footer
    html += `
            <div class="compact-footer">
                <div class="compact-footer-row">
                    ${document.getElementById('showParentComment')?.checked ? '<div class="compact-footer-item"><label>Parent\'s Comment:</label><span class="footer-line"></span></div>' : ''}
                    ${document.getElementById('showTeacherRemarks')?.checked ? '<div class="compact-footer-item"><label>Teacher\'s Remarks:</label><span class="footer-line"></span></div>' : ''}
                </div>
                <div class="compact-footer-row">
                    ${document.getElementById('showParentSign')?.checked ? '<div class="compact-footer-item"><label>Parent\'s Sign:</label><span class="footer-line" style="width: 80px;"></span></div>' : ''}
                    ${document.getElementById('showTeacherSign')?.checked ? '<div class="compact-footer-item"><label>Teacher\'s Sign:</label><span class="footer-line" style="width: 80px;"></span></div>' : ''}
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// Download compact assignment PDF - FIXED
function downloadAssignmentPDF() {
    const hasSubjectQuestions = Object.values(subjectQuestions).some(arr => arr && arr.length > 0);
    
    let html;
    if (hasSubjectQuestions) {
        html = generateCompactWorksheetHTML();
    } else {
        html = generateAssignmentHTML();
    }
    
    // Create a container with all styles inline
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.width = '210mm';
    tempDiv.style.background = 'white';
    document.body.appendChild(tempDiv);
    
    // Add inline styles to the content
    const content = tempDiv.firstElementChild;
    if (content) {
        content.style.fontFamily = "'Times New Roman', serif";
        content.style.fontSize = '10pt';
        content.style.color = '#000';
        content.style.background = 'white';
        content.style.padding = '10mm';
        content.style.maxWidth = '210mm';
    }
    
    const opt = {
        margin: [8, 8, 8, 8],
        filename: `Assignment_${document.getElementById('assignmentNo')?.value || '1'}_${document.getElementById('assignmentClass')?.value || 'Class'}.pdf`.replace(/\s+/g, '_'),
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    showToast('Creating PDF...', 'success');
    
    html2pdf().set(opt).from(tempDiv).save().then(() => {
        document.body.removeChild(tempDiv);
        showToast('PDF downloaded!', 'success');
    }).catch(err => {
        document.body.removeChild(tempDiv);
        showToast('PDF error: ' + err.message, 'error');
        console.error(err);
    });
}

// Save syllabus column width customization
function saveSyllabusColumnWidths() {
    const colWidths = {
        subject: document.getElementById('syllabusColSubject')?.value || '12',
        topics: document.getElementById('syllabusColTopics')?.value || '20',
        activity: document.getElementById('syllabusColActivity')?.value || '25',
        slos: document.getElementById('syllabusColSLOs')?.value || '23',
        assessment: document.getElementById('syllabusColAssessment')?.value || '20'
    };
    localStorage.setItem('syllabusColWidths', JSON.stringify(colWidths));
}

// Load syllabus column widths
function loadSyllabusColumnWidths() {
    const saved = localStorage.getItem('syllabusColWidths');
    if (saved) {
        const colWidths = JSON.parse(saved);
        if (document.getElementById('syllabusColSubject')) document.getElementById('syllabusColSubject').value = colWidths.subject || '12';
        if (document.getElementById('syllabusColTopics')) document.getElementById('syllabusColTopics').value = colWidths.topics || '20';
        if (document.getElementById('syllabusColActivity')) document.getElementById('syllabusColActivity').value = colWidths.activity || '25';
        if (document.getElementById('syllabusColSLOs')) document.getElementById('syllabusColSLOs').value = colWidths.slos || '23';
        if (document.getElementById('syllabusColAssessment')) document.getElementById('syllabusColAssessment').value = colWidths.assessment || '20';
    }
}

// Override the saveCustomization to include syllabus column widths
const originalSaveCustomization = saveCustomization;
saveCustomization = function() {
    originalSaveCustomization();
    saveSyllabusColumnWidths();
};

// Load column widths on page load
document.addEventListener('DOMContentLoaded', function() {
    loadSyllabusColumnWidths();
});

// Override printAssignment to use new worksheet format
const originalPrintAssignment = printAssignment;
printAssignment = function() {
    const hasSubjectQuestions = Object.values(subjectQuestions).some(arr => arr && arr.length > 0);
    
    if (hasSubjectQuestions) {
        const html = generateCompactWorksheetHTML();
        const isRTL = assignmentState.language === 'ur';
        const lineHeight = document.getElementById('assignmentLineHeight')?.value || '22';
        
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html ${isRTL ? 'dir="rtl"' : ''}>
            <head>
                <meta charset="UTF-8">
                <title>Weekly Assignment</title>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body { font-family: ${isRTL ? "'Noto Nastaliq Urdu', serif" : "'Times New Roman', serif"}; font-size: 10pt; background: white; line-height: 1.25; }
                    
                    /* Compact Worksheet Styles */
                    .compact-worksheet { max-width: 210mm; margin: 0 auto; padding: 4mm 6mm; }
                    .compact-worksheet.border-double { border: 2px double #000; }
                    .compact-worksheet.border-simple { border: 1px solid #000; }
                    
                    .compact-header { text-align: center; margin-bottom: 2mm; padding-bottom: 1.5mm; border-bottom: 1.5px solid #000; }
                    .compact-header .school-name { font-weight: bold; text-transform: uppercase; margin-bottom: 0.5mm; }
                    .compact-header .header-info-line { font-size: 8pt; color: #333; }
                    .compact-header .header-info-line span { margin: 0 5px; }
                    
                    .compact-title { font-size: 9pt; font-weight: bold; padding: 1mm 4mm; border: 1px solid #000; background: #f5f5f5; display: inline-block; }
                    
                    .compact-student-line { display: flex; gap: 15px; font-size: 9pt; flex-wrap: wrap; }
                    .compact-student-line .field { display: flex; align-items: center; gap: 3px; }
                    .compact-student-line .field label { font-weight: 600; }
                    .compact-student-line .field .line { border-bottom: 1px solid #333; }
                    
                    .compact-subject-label { text-align: center; font-weight: bold; margin: 2mm 0 1mm 0; padding: 1mm 3mm; display: inline-block; border-bottom: 1.5px solid #000; text-transform: uppercase; }
                    
                    .compact-question { margin: 0.5mm 0; display: flex; gap: 2mm; }
                    .compact-question .q-num { font-weight: bold; min-width: 15px; }
                    .compact-question .q-text { flex: 1; }
                    
                    .compact-answer-lines { margin: 0.5mm 0 1.5mm 15px; }
                    .compact-answer-line { border-bottom: 1px solid #999; height: ${lineHeight}px; margin: 0; }
                    .compact-answer-line.dotted { border-bottom: 1px dotted #666; }
                    
                    .ans-label { font-weight: bold; font-size: 8pt; margin-right: 2mm; }
                    
                    .compact-mcq-options { display: flex; flex-wrap: wrap; gap: 3mm 8mm; margin: 0.5mm 0 1mm 15px; }
                    .compact-mcq-option { display: flex; align-items: center; gap: 2px; }
                    .compact-mcq-option .opt-box { width: 10px; height: 10px; border: 1px solid #000; display: inline-block; margin-right: 2px; }
                    
                    .compact-table { width: 100%; border-collapse: collapse; font-size: 9pt; margin: 1mm 0; }
                    .compact-table th, .compact-table td { border: 1px solid #000; padding: 2mm; text-align: ${isRTL ? 'right' : 'left'}; }
                    .compact-table th { background: #e8e8e8; font-weight: bold; font-size: 8pt; }
                    
                    .compact-match { display: flex; gap: 10mm; margin: 1mm 0; }
                    .compact-match-col { flex: 1; }
                    .compact-match-item { font-size: 9pt; padding: 0.5mm 0; }
                    .compact-match-answer { display: flex; gap: 3mm; margin-top: 1mm; font-size: 9pt; }
                    .compact-match-answer .ans-blank { border-bottom: 1px solid #000; width: 15px; display: inline-block; }
                    
                    .compact-footer { margin-top: 3mm; padding-top: 2mm; border-top: 1px solid #333; font-size: 8pt; }
                    .compact-footer-row { display: flex; justify-content: space-between; margin: 1mm 0; }
                    .compact-footer-item { display: flex; align-items: center; gap: 3px; }
                    .compact-footer-item label { font-weight: 500; }
                    .compact-footer-item .footer-line { border-bottom: 1px solid #333; min-width: 100px; }
                    
                    /* Text Size Classes */
                    .assign-text-8 { font-size: 8pt !important; }
                    .assign-text-9 { font-size: 9pt !important; }
                    .assign-text-10 { font-size: 10pt !important; }
                    .assign-text-11 { font-size: 11pt !important; }
                    .assign-text-12 { font-size: 12pt !important; }
                    .assign-text-13 { font-size: 13pt !important; }
                    .assign-text-14 { font-size: 14pt !important; }
                    
                    .compact-worksheet.rtl { direction: rtl; font-family: 'Noto Nastaliq Urdu', serif; }
                    .compact-worksheet.rtl .compact-answer-lines { margin-left: 0; margin-right: 15px; }
                    .compact-worksheet.rtl .compact-mcq-options { margin-left: 0; margin-right: 15px; }
                    
                    @media print {
                        body { padding: 0; margin: 0; }
                        .compact-worksheet { box-shadow: none; margin: 0; padding: 3mm 5mm; }
                        @page { size: A4; margin: 5mm; }
                    }
                    
                    .worksheet-page { max-width: 210mm; margin: 0 auto; padding: 8mm; }
                    .worksheet-page.border-double { border: 3px double #000; padding: 12mm; }
                    .worksheet-page.border-geometric { border: 2px solid #000; padding: 12mm; position: relative; }
                    .worksheet-page.border-geometric::before { content: ''; position: absolute; top: 4px; left: 4px; right: 4px; bottom: 4px; border: 1px solid #000; pointer-events: none; }
                    .worksheet-page.border-simple { border: 2px solid #000; padding: 10mm; }
                    .worksheet-page.border-decorative { border: 4px solid #000; padding: 12mm; }
                    
                    .worksheet-header { text-align: center; margin-bottom: 5mm; padding-bottom: 4mm; border-bottom: 2px solid #000; }
                    .worksheet-header-content { display: flex; align-items: flex-start; justify-content: space-between; gap: 15px; }
                    .worksheet-logo { width: 70px; height: 70px; object-fit: contain; border: none; }
                    .worksheet-school-info { flex: 1; text-align: center; }
                    .worksheet-school-name { font-size: 18pt; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2mm; }
                    .worksheet-campus { font-size: 10pt; color: #444; }
                    .worksheet-contact { font-size: 9pt; color: #666; }
                    
                    .worksheet-info-box { display: flex; justify-content: space-between; margin: 4mm 0; padding: 3mm; border: 1px solid #000; background: #f9f9f9; flex-wrap: wrap; gap: 5px; }
                    .worksheet-info-item { font-size: 10pt; }
                    
                    .worksheet-title { text-align: center; font-size: 14pt; font-weight: bold; padding: 3mm 5mm; background: #000; color: white; margin: 3mm 0; text-transform: uppercase; letter-spacing: 2px; }
                    
                    .worksheet-student-info { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin: 4mm 0; padding: 3mm; border: 1px solid #333; background: #fafafa; }
                    .worksheet-field { display: flex; align-items: center; gap: 5px; font-size: 10pt; }
                    .worksheet-field label { font-weight: bold; }
                    .worksheet-field .line { border-bottom: 1px solid #333; min-width: 100px; flex: 1; height: 20px; }
                    
                    .worksheet-subject-section { margin: 5mm 0; page-break-inside: avoid; }
                    .worksheet-subject-label { display: inline-block; padding: 2mm 6mm; background: #f0f0f0; border: 2px solid #000; border-radius: 20px; font-weight: bold; font-size: 12pt; margin-bottom: 3mm; }
                    
                    .worksheet-question-section { margin: 4mm 0; }
                    .worksheet-section-title { font-weight: bold; font-size: 11pt; padding: 2mm 4mm; background: #e8e8e8; border-left: 4px solid #000; margin-bottom: 3mm; }
                    
                    .worksheet-question { margin: 3mm 0; page-break-inside: avoid; }
                    .worksheet-question-text { font-size: 11pt; margin-bottom: 2mm; }
                    .worksheet-q-number { font-weight: bold; margin-right: 5px; }
                    
                    .worksheet-answer-lines { margin: 2mm 0 4mm 8mm; }
                    .worksheet-line { border-bottom: 1px solid #999; height: 28px; margin: 2mm 0; }
                    
                    .worksheet-mcq-options { display: grid; grid-template-columns: 1fr 1fr; gap: 2mm; margin: 2mm 0 4mm 8mm; }
                    .worksheet-mcq-option { display: flex; align-items: center; gap: 3mm; font-size: 10pt; }
                    .worksheet-option-box { width: 14px; height: 14px; border: 1.5px solid #000; display: inline-block; }
                    
                    .worksheet-table { width: 100%; border-collapse: collapse; margin: 3mm 0; font-size: 10pt; }
                    .worksheet-table th, .worksheet-table td { border: 1px solid #000; padding: 3mm; text-align: ${isRTL ? 'right' : 'left'}; }
                    .worksheet-table th { background: #e8e8e8; font-weight: bold; }
                    
                    .worksheet-match { display: flex; gap: 20mm; margin: 3mm 0; }
                    .worksheet-match-col { flex: 1; }
                    .worksheet-match-col h5 { font-size: 10pt; margin-bottom: 2mm; padding-bottom: 1mm; border-bottom: 1px solid #000; }
                    .worksheet-match-item { padding: 2mm 0; font-size: 10pt; }
                    .worksheet-match-answer { display: flex; flex-wrap: wrap; gap: 3mm; margin-top: 3mm; }
                    .worksheet-match-box { display: flex; align-items: center; gap: 2mm; font-size: 10pt; }
                    .worksheet-match-box .blank { width: 20px; border-bottom: 1px solid #000; }
                    
                    .worksheet-handwriting { margin: 4mm 0; }
                    .worksheet-trace-line { font-size: 24pt; color: #ccc; letter-spacing: 5mm; margin-bottom: 2mm; }
                    .worksheet-practice-line { border-bottom: 1px solid #ccc; height: 30px; margin: 1mm 0; }
                    
                    .worksheet-picture { text-align: center; margin: 4mm 0; padding: 3mm; border: 1px dashed #999; }
                    .worksheet-picture img { max-width: 200px; max-height: 150px; border: 1px solid #333; }
                    .worksheet-picture-caption { font-style: italic; margin-top: 2mm; font-size: 9pt; }
                    
                    .worksheet-footer { margin-top: 6mm; padding-top: 4mm; border-top: 1px solid #333; display: flex; justify-content: space-between; }
                    .worksheet-signature { text-align: center; min-width: 120px; }
                    .worksheet-signature .sig-line { border-bottom: 1px solid #333; height: 25px; margin-bottom: 2mm; }
                    .worksheet-signature label { font-size: 9pt; font-weight: 500; }
                    
                    .worksheet-page.rtl { direction: rtl; }
                    .worksheet-page.rtl .worksheet-section-title { border-left: none; border-right: 4px solid #000; }
                    .worksheet-page.rtl .worksheet-answer-lines { margin-left: 0; margin-right: 8mm; }
                    .worksheet-page.rtl .worksheet-mcq-options { margin-left: 0; margin-right: 8mm; }
                    
                    @media print {
                        body { padding: 0; margin: 0; }
                        .worksheet-page { box-shadow: none; margin: 0; padding: 5mm; }
                        @page { size: A4; margin: 8mm; }
                    }
                </style>
            </head>
            <body>
                ${html}
                <script>
                    window.onload = function() { setTimeout(function() { window.print(); }, 300); window.onafterprint = function() { window.close(); }; };
                </script>
            </body>
            </html>
        `);
      printWindow.document.close();
    } else {
        originalPrintAssignment();
    }
}; // <--- ADD THIS CLOSING BRACKET HERE! THIS CLOSES printAssignment.

// ==========================================
// QR CODE FUNCTIONALITY
// ==========================================
// ==========================================
// QR CODE FUNCTIONALITY
// ==========================================
function generatePaperID() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id1 = '', id2 = '';
    for(let i=0; i<6; i++) id1 += chars.charAt(Math.floor(Math.random() * chars.length));
    for(let i=0; i<6; i++) id2 += chars.charAt(Math.floor(Math.random() * chars.length));
    return `PAPER-${id1}-${id2}`;
}

function collectPaperData() {
    const c = getCustomizationSettings();
    const data = {
        id: generatePaperID(),
        generatedAt: new Date().toISOString().split('T')[0]
    };

    if (document.getElementById('qrIncludeInfo')?.checked) {
        data.school = {
            name: document.getElementById('schoolName')?.value || '',
            address: document.getElementById('schoolAddress')?.value || '',
            phone: document.getElementById('schoolPhone')?.value || '',
            email: document.getElementById('schoolEmail')?.value || ''
        };
        data.exam = {
            type: document.getElementById('examType')?.value || '',
            class: document.getElementById('className')?.value || '',
            subject: document.getElementById('subjectName')?.value || '',
            date: document.getElementById('examDate')?.value || '',
            totalMarks: document.getElementById('paperMarks')?.value || '',
            teacher: document.getElementById('teacherName')?.value || ''
        };
    }

    // THE GOLDEN RULE: If this is unchecked in the app, it won't add massive data!
    if (document.getElementById('qrIncludeQuestions')?.checked) {
        const includeAnswers = document.getElementById('qrIncludeAnswers')?.checked;
        data.sections = [];
        
        const addSection = (type, array) => {
            if (array.length > 0) {
                // include questions verbatim; long questions will carry parts too
                let sec = { type: type, totalMarks: array.reduce((s,q)=>s+q.marks,0), questions: [] };
                array.forEach((q, i) => {
                    let qData = { no: i+1, q: q.question, marks: q.marks };
                    if (q.options) qData.opts = q.options;
                    if (q.parts) qData.parts = q.parts; // long question parts
                    sec.questions.push(qData);
                });
                data.sections.push(sec);
            }
        };

        addSection('MCQ', state.mcqs);
        addSection('FillBlanks', state.fillBlanks);
        addSection('TrueFalse', state.trueFalse);
        addSection('ShortQ', state.shortQuestions);
        addSection('LongQ', state.longQuestions);
    }
    
    return data;
}

// build a string to encode in the QR code; we now send only the raw JSON so scanners see all sections/questions
function getQrPayload() {
    const data = collectPaperData();
    return JSON.stringify(data);
}

// QR CODE GENERATOR
// returns a high-resolution PNG image (encoded as dataURI) so html2canvas/html2pdf
// will reliably capture the code.  SVG rendering caused blanks in PDF output.
function generateQRCodeSVG(dataStr, cellSize = 25) {
    // higher cellSize produces a much larger bitmap which prints sharply;
    // the preview container scales it down via CSS so it still looks normal on-screen.
    if (typeof qrcode === 'undefined') {
        console.error("QR Library not loaded!");
        return null;
    }

    const makePng = (qrInstance) => {
        const png = qrInstance.createDataURL(cellSize, 2);
        return `<img src="${png}" style="width: 100%; height: 100%; object-fit: contain; display: block; image-rendering: crisp-edges; image-rendering: pixelated;" alt="QR Code" />`;
    };

    try {
        const qr = qrcode(0, 'L'); // always use low error correction for maximum capacity
        qr.addData(dataStr);
        qr.make();
        return makePng(qr);
    } catch (e) {
        // cannot encode full dataset
        console.error("QR Data too large", e);
        return null;
    }
}

function previewQRCode() {
    // don't show preview if QR is disabled
    if (document.getElementById('enableQrCode')?.value !== 'yes') {
        document.getElementById('qrPreviewContainer').style.display = 'none';
        return;
    }

    const payload = getQrPayload();
    const rawStr = payload;
    let dataStr = payload;
    let compressed = false;
    if (payload.length > 2000 && typeof LZString !== 'undefined') {
        try { dataStr = 'LZ:' + LZString.compressToBase64(payload); compressed = true; } catch(e){ console.warn('zip failed', e); }
    }

    document.getElementById('qrPreviewContainer').style.display = 'block';
    // show readable JSON (not compressed) in textarea, optionally include encoded payload
    document.getElementById('qrDataPreview').value =
        rawStr +
        (compressed ? '\n\n<<encoded data>>\n' + dataStr : '');

    if (dataStr.length > 2500) {
        document.getElementById('qrSizeWarning').style.display = 'block';
    } else {
        document.getElementById('qrSizeWarning').style.display = 'none';
    }

    // warn user if nothing except id
    try {
        const parsed = JSON.parse(rawStr);
        if ((!parsed.school && !parsed.sections) || (parsed.sections && parsed.sections.length === 0 && document.getElementById('qrIncludeQuestions')?.checked)) {
            showToast('QR payload contains only paper ID – add questions or enable info', 'warning');
        }
    } catch(_) {}

    console.log('QR raw payload:', rawStr);
    console.log('QR encoded payload:', dataStr);

    const qrSVG = generateQRCodeSVG(dataStr, 30);
    if (qrSVG) {
        // svg or high‑res fallback now injected; should be crisp at any scale
        document.getElementById('qrImagePreview').innerHTML = `<div style="width: 100%; max-width: 200px; margin: 0 auto;">${qrSVG}</div>`;
    } else {
        document.getElementById('qrImagePreview').innerHTML = `<span style="color:#ef4444; font-weight: bold;">Data too large! Uncheck "Include Questions".</span>`;
    }
}