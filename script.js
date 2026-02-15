const content = {
    en: {
        navHome: "Home", navServices: "Services", navGallery: "Gallery", navContact: "Contact",
        heroTitle: "Sri Sukran Events", heroDesc: "Making Your Special Moments Unforgettable",
        btnBook: "Book Your Event", servicesTitle: "Our Premium Services",
        s1: "Wedding Reception", s2: "Birthday Party", s3: "Surprise Events", s4: "Baby Shower",
        s5: "Car Decoration", s6: "Plate Decoration", s7: "Balloon Decoration", s8: "DJ Services",
        galleryTitle: "Event Highlights"
    },
    ta: {
        navHome: "முகப்பு", navServices: "சேவைகள்", navGallery: "புகைப்படங்கள்", navContact: "தொடர்பு",
        heroTitle: "ஸ்ரீ சுக்ரன் ஈவென்ட்ஸ்", heroDesc: "உங்கள் விசேஷங்களை அழகாக்குகிறோம்!",
        btnBook: "முன்பதிவு செய்யுங்கள்", servicesTitle: "எங்கள் சேவைகள்",
        s1: "திருமண வரவேற்பு", s2: "பிறந்தநாள் விழா", s3: "சர்ப்ரைஸ் நிகழ்வுகள்", s4: "வளைகாப்பு விழா",
        s5: "கார் அலங்காரம்", s6: "தட்டு அலங்காரம்", s7: "பலூன் அலங்காரம்", s8: "டிஜே இசை",
        galleryTitle: "நிகழ்வின் சிறப்பம்சங்கள்"
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
    for (let i = 1; i <= 8; i++) { document.getElementById('s' + i).innerText = content[lang]['s' + i]; }
    document.getElementById('gallery-title').innerText = content[lang].galleryTitle;
    document.body.style.fontFamily = lang === 'ta' ? "'Noto Serif Tamil', serif" : "'Poppins', sans-serif";
}

// Mobile Playback Fix: Ensures video tries to play after page load
window.addEventListener('load', () => {
    const video = document.getElementById('mainVideo');
    if (video) {
        video.play().catch(error => {
            console.log("Auto-play was prevented. Waiting for user interaction.");
        });
    }
});