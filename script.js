const content = {
    en: {
        navHome: "Home",
        navServices: "Services",
        navGallery: "Gallery",
        navContact: "Contact",
        heroTitle: "Sri Sukran Events",
        heroDesc: "Making Your Special Moments Unforgettable",
        btnBook: "Contact Us Now",
        servicesTitle: "Our Premium Services",
        s1: "Wedding Reception",
        s2: "Birthday Party",
        s3: "Surprise Events",
        s4: "Baby Shower"
    },
    ta: {
        navHome: "முகப்பு",
        navServices: "சேவைகள்",
        navGallery: "புகைப்படங்கள்",
        navContact: "தொடர்பு",
        heroTitle: "ஸ்ரீ சுக்ரன் ஈவென்ட்ஸ்",
        heroDesc: "உங்கள் விசேஷங்களை அழகாக்குகிறோம்!",
        btnBook: "இப்போதே அழையுங்கள்",
        servicesTitle: "எங்கள் சேவைகள்",
        s1: "திருமண வரவேற்பு",
        s2: "பிறந்தநாள் விழா",
        s3: "சர்ப்ரைஸ் நிகழ்வுகள்",
        s4: "வளைகாப்பு விழா"
    }
};

function switchLang(lang) {
    document.getElementById('nav-home').innerText = content[lang].navHome;
    document.getElementById('nav-services').innerText = content[lang].navServices;
    document.getElementById('nav-gallery').innerText = content[lang].navGallery;
    document.getElementById('nav-contact').innerText = content[lang].navContact;
    document.getElementById('hero-title').innerText = content[lang].heroTitle;
    document.getElementById('hero-desc').innerText = content[lang].heroDesc;
    document.getElementById('btn-book').innerText = content[lang].btnBook;
    document.getElementById('services-title').innerText = content[lang].servicesTitle;
    document.getElementById('s1').innerText = content[lang].s1;
    document.getElementById('s2').innerText = content[lang].s2;
    document.getElementById('s3').innerText = content[lang].s3;
    document.getElementById('s4').innerText = content[lang].s4;
    
    // Switch font for better Tamil readability
    document.body.style.fontFamily = lang === 'ta' ? "'Noto Serif Tamil', serif" : "'Poppins', sans-serif";
}