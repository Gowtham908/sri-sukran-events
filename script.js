const translations = {
    en: {
        home: "Home",
        gallery: "Gallery",
        services: "Services",
        contact: "Contact",
        heroTitle: "Sri Sukran Events",
        heroDesc: "We bring magic to your celebrations!",
        btnBook: "Book Now",
        servicesTitle: "Our Premium Services",
        s1: "Wedding Reception",
        s2: "Birthday Party",
        s3: "Surprise Events",
        s4: "Car Decoration",
        galleryTitle: "Event Highlights"
    },
    ta: {
        home: "முகப்பு",
        gallery: "புகைப்படங்கள்",
        services: "சேவைகள்",
        contact: "தொடர்பு",
        heroTitle: "ஸ்ரீ சுக்ரன் ஈவென்ட்ஸ்",
        heroDesc: "உங்கள் விசேஷங்களை அழகாக்குகிறோம்!",
        btnBook: "இப்போதே முன்பதிவு செய்யுங்கள்",
        servicesTitle: "எங்கள் சேவைகள்",
        s1: "திருமண வரவேற்பு",
        s2: "பிறந்தநாள் விழா",
        s3: "சர்ப்ரைஸ் நிகழ்வுகள்",
        s4: "கார் அலங்காரம்",
        galleryTitle: "நிகழ்வின் சிறப்பம்சங்கள்"
    }
};

function switchLang(lang) {
    document.getElementById('nav-home').innerText = translations[lang].home;
    document.getElementById('nav-gallery').innerText = translations[lang].gallery;
    document.getElementById('nav-services').innerText = translations[lang].services;
    document.getElementById('nav-contact').innerText = translations[lang].contact;
    document.getElementById('hero-title').innerText = translations[lang].heroTitle;
    document.getElementById('hero-desc').innerText = translations[lang].heroDesc;
    document.getElementById('btn-book').innerText = translations[lang].btnBook;
    document.getElementById('services-title').innerText = translations[lang].servicesTitle;
    document.getElementById('s1').innerText = translations[lang].s1;
    document.getElementById('s2').innerText = translations[lang].s2;
    document.getElementById('s3').innerText = translations[lang].s3;
    document.getElementById('s4').innerText = translations[lang].s4;
    document.getElementById('gallery-title').innerText = translations[lang].galleryTitle;
}