// تایپینگ افکت برای بیو
const bioElement = document.getElementById('bio');
const originalBio = bioElement.textContent;
bioElement.textContent = '';

let i = 0;
const typingEffect = setInterval(() => {
    if (i < originalBio.length) {
        bioElement.textContent += originalBio.charAt(i);
        i++;
    } else {
        clearInterval(typingEffect);
    }
}, 50);

// تنظیمات اولیه برای حالت تاریک/روشن
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = localStorage.getItem('theme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// سیستم تغییر زبان
const languageToggle = document.getElementById('language-toggle');
const htmlElement = document.documentElement;

const translations = {
    'fa': {
        'skills': 'مهارت‌های فنی',
        'education': 'تحصیلات',
        'experience': 'تجربه کاری',
        'interests': 'علایق',
        'contact': 'اطلاعات تماس',
        'contact_me': 'تماس با من',
        'advanced': 'پیشرفته',
        'kntu_university': 'دانشگاه صنعتی خواجه نصیرالدین طوسی',
        'bachelor_degree': 'کارشناسی مهندسی کامپیوتر',
        'education_desc': 'گرایش نرم‌افزار - معدل 17.07',
        'apa_company': 'شرکت آپا',
        'tir_1404': 'تیر 1404',
        'internship': 'کارآموزی در زمینه توسعه وب و امنیت',
        'programming': 'برنامه‌نویسی',
        'technology': 'تکنولوژی',
        'music': 'موسیقی',
        'books': 'کتاب',
        'made_by': 'ساخته شده با',
        'by_parsa': 'توسط پارسا پولادوند',
        'print_message': 'چاپ شده از نسخه آنلاین رزومه - برای مشاهده نسخه به‌روز به آدرس [URL رزومه] مراجعه کنید'
    },
    'en': {
        'skills': 'Technical Skills',
        'education': 'Education',
        'experience': 'Work Experience',
        'interests': 'Interests',
        'contact': 'Contact Information',
        'contact_me': 'Contact Me',
        'advanced': 'Advanced',
        'kntu_university': 'K. N. Toosi University of Technology',
        'bachelor_degree': 'Bachelor of Computer Engineering',
        'education_desc': 'Software Engineering - GPA: 17.07',
        'apa_company': 'APA Company',
        'tir_1404': 'July 2025',
        'internship': 'Internship in Web Development and Security',
        'programming': 'Programming',
        'technology': 'Technology',
        'music': 'Music',
        'books': 'Books',
        'made_by': 'Made with',
        'by_parsa': 'by Parsa Pooladvand',
        'print_message': 'Printed from online resume version - For the latest version visit [Resume URL]'
    }
};

function toggleLanguage() {
    const currentLang = htmlElement.getAttribute('lang');
    const newLang = currentLang === 'fa' ? 'en' : 'fa';
    
    htmlElement.setAttribute('dir', newLang === 'fa' ? 'rtl' : 'ltr');
    htmlElement.setAttribute('lang', newLang);
    
    languageToggle.innerHTML = `<i class="fas fa-language"></i> ${newLang === 'fa' ? 'EN' : 'FA'}`;
    
    applyTranslations(newLang);
    localStorage.setItem('language', newLang);
}

function applyTranslations(lang) {
    const trans = translations[lang];
    
    document.querySelectorAll('.translation-key').forEach(element => {
        const key = element.getAttribute('data-key');
        if (trans[key]) {
            element.textContent = trans[key];
        }
    });
    
    document.querySelector('.contact-btn').innerHTML = `<i class="fas fa-paper-plane"></i> ${trans['contact_me']}`;
}

// بارگذاری زبان ذخیره شده یا پیش‌فرض
const savedLanguage = localStorage.getItem('language') || 'fa';
htmlElement.setAttribute('lang', savedLanguage);
htmlElement.setAttribute('dir', savedLanguage === 'fa' ? 'rtl' : 'ltr');
applyTranslations(savedLanguage);
languageToggle.innerHTML = `<i class="fas fa-language"></i> ${savedLanguage === 'fa' ? 'EN' : 'FA'}`;

languageToggle.addEventListener('click', toggleLanguage);

// (بقیه کدهای JavaScript بدون تغییر باقی می‌مانند)