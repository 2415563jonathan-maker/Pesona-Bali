var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: 'BFS9n4B_2xA', 
        playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            playlist: 'BFS9n4B_2xA', 
            mute: 1 
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    const container = document.getElementById('video-background');
    const playerElement = document.getElementById('youtube-player');
    const aspectRatio = 16/9; 

    function resizeVideo() {
        let width = container.clientWidth;
        let height = container.clientHeight;

        if (width / height > aspectRatio) {
            playerElement.style.width = width + 'px';
            playerElement.style.height = (width / aspectRatio) + 'px';
        } else {
            playerElement.style.height = height + 'px';
            playerElement.style.width = (height * aspectRatio) + 'px';
        }
    }

    window.addEventListener('resize', resizeVideo);
    resizeVideo();

    event.target.playVideo();
    event.target.mute(); 
    event.target.setPlaybackRate(1); 
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

function handleScroll() {
    const header = document.getElementById('header');
    if (window.innerWidth > 768) { 
        const scrollThreshold = 100;

        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled-header');
        } else {
            header.classList.remove('scrolled-header');
        }
    }
}

const animateElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animateElements.forEach(element => {
    observer.observe(element);
});

// Data Destinasi
const destinationsData = {
    uluwatu: {
        title: 'Uluwatu Temple',
        image: 'Uluwatu.webp',
        description: 'Pura Luhur Uluwatu adalah salah satu pura paling ikonik di Bali yang terletak di tebing curam setinggi 70 meter di atas Samudra Hindia. Tempat ini terkenal dengan pemandangan sunset yang memukau dan pertunjukan Tari Kecak yang mengagumkan setiap sore hari.',
        location: 'Pecatu, Badung, Bali',
        duration: '3-4 Jam',
        price: 'Rp 50.000 / orang',
        highlights: [
            'Pemandangan sunset terbaik di Bali',
            'Pertunjukan Tari Kecak tradisional',
            'Arsitektur pura yang menakjubkan',
            'Monyet-monyet liar yang ramah',
            'Spot foto Instagram-worthy',
            'Tebing dramatis menghadap lautan'
        ]
    },
    tegalalang: {
        title: 'Tegalalang Rice Terrace',
        image: 'Tegalalang.jpg',
        description: 'Sawah terasering Tegalalang adalah salah satu pemandangan paling ikonis di Ubud. Sistem irigasi tradisional Subak yang digunakan di sini telah diakui UNESCO sebagai Warisan Budaya Dunia. Hamparan hijau bertingkat ini menawarkan pemandangan yang menenangkan jiwa.',
        location: 'Tegalalang, Ubud, Bali',
        duration: '2-3 Jam',
        price: 'Rp 20.000 / orang',
        highlights: [
            'Pemandangan sawah bertingkat yang memukau',
            'Sistem irigasi Subak UNESCO',
            'Ayunan bali yang terkenal (Bali Swing)',
            'Spot foto terbaik di Ubud',
            'Kafe dengan pemandangan sawah',
            'Suasana pedesaan yang asri'
        ]
    },
    batur: {
        title: 'Gunung Batur Sunrise Trek',
        image: 'Gunung batur.jpeg',
        description: 'Gunung Batur adalah gunung berapi aktif yang menawarkan pengalaman trekking sunrise paling populer di Bali. Dengan ketinggian 1.717 meter, pendakian dimulai dini hari untuk menyaksikan matahari terbit yang spektakuler dari puncak, lengkap dengan pemandangan Danau Batur dan Gunung Agung di kejauhan.',
        location: 'Kintamani, Bangli, Bali',
        duration: '6-7 Jam (termasuk trekking)',
        price: 'Rp 350.000 / orang',
        highlights: [
            'Sunrise spektakuler dari puncak gunung',
            'Sarapan telur rebus di kawah aktif',
            'Pemandangan Danau Batur yang indah',
            'Pengalaman mendaki gunung berapi aktif',
            'Guide profesional dan ramah',
            'Udara segar pegunungan'
        ]
    },
    seminyak: {
        title: 'Seminyak & Canggu Beach',
        image: 'Seminyak.jpg',
        description: 'Seminyak dan Canggu adalah destinasi pantai yang sempurna untuk peselancar dan pencinta kehidupan pantai modern. Dengan pasir hitam vulkanik, ombak yang bagus, dan deretan beach club serta kafe hipster, kawasan ini menjadi surga bagi mereka yang mencari kombinasi relaksasi dan gaya hidup trendi.',
        location: 'Seminyak & Canggu, Badung, Bali',
        duration: 'Sepanjang hari',
        price: 'Gratis (beach club terpisah)',
        highlights: [
            'Spot surfing terbaik untuk pemula',
            'Beach club dengan infinity pool',
            'Sunset cocktails di tepi pantai',
            'Kafe-kafe instagrammable',
            'Yoga dan wellness center',
            'Nightlife yang meriah'
        ]
    },
    nusa: {
        title: 'Nusa Penida Island',
        image: 'Nusa penida.jpg',
        description: 'Nusa Penida adalah pulau kecil di tenggara Bali yang terkenal dengan formasi tebing Kelingking Beach yang ikonik berbentuk T-Rex. Pulau ini menawarkan pemandangan alam yang masih sangat alami, air laut biru jernih, dan spot snorkeling dengan manta ray.',
        location: 'Nusa Penida, Klungkung, Bali',
        duration: 'Full Day Trip (10-12 Jam)',
        price: 'Rp 500.000 / orang',
        highlights: [
            'Kelingking Beach (T-Rex cliff)',
            'Angel\'s Billabong natural infinity pool',
            'Broken Beach (Pasih Uug)',
            'Crystal Bay untuk snorkeling',
            'Berenang dengan Manta Ray',
            'Pemandangan laut yang pristine'
        ]
    },
    tirta: {
        title: 'Tirta Empul Temple',
        image: 'Tirta empul.jpg',
        description: 'Pura Tirta Empul adalah pura mata air suci yang terletak di Tampaksiring. Dibangun pada tahun 962 M, pura ini terkenal dengan ritual pembersihan spiritual (Melukat) di kolam pemandian suci yang dipercaya dapat menyucikan jiwa dan raga serta membawa keberuntungan.',
        location: 'Tampaksiring, Gianyar, Bali',
        duration: '2-3 Jam',
        price: 'Rp 50.000 / orang',
        highlights: [
            'Ritual Melukat (pembersihan spiritual)',
            'Mata air suci yang jernih',
            'Arsitektur pura yang megah',
            'Pengalaman spiritual yang otentik',
            'Kolam pemandian bertingkat',
            'Pemandangan area persawahan'
        ]
    }
};

// Fungsi untuk membuka modal
function openModal(destination) {
    const data = destinationsData[destination];
    const modal = document.getElementById('destination-modal');
    
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-image').style.backgroundImage = `url('${data.image}')`;
    document.getElementById('modal-description').innerHTML = `<p>${data.description}</p>`;
    document.getElementById('modal-location').textContent = data.location;
    document.getElementById('modal-duration').textContent = data.duration;
    document.getElementById('modal-price').textContent = data.price;
    
    const highlightsList = document.getElementById('modal-highlights-list');
    highlightsList.innerHTML = '';
    data.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.textContent = highlight;
        highlightsList.appendChild(li);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('destination-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Menutup modal ketika klik di luar konten
window.onclick = function(event) {
    const modal = document.getElementById('destination-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Menutup modal dengan tombol ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tour-form');
    const feedback = document.getElementById('form-feedback');
    
    handleScroll(); 

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const package = document.getElementById('tour-package').value;
            const travelDate = document.getElementById('travel-date').value; 
            const participants = document.getElementById('participants').value; 

            if (name === "" || email === "" || package === "" || travelDate === "" || participants === "" || parseInt(participants) < 1) {
                feedback.textContent = "⚠️ Mohon isi semua bidang wajib (Nama, Email, Paket, Tanggal, Jumlah Peserta).";
                feedback.className = 'feedback-message error'; 
                feedback.classList.remove('hidden');
            } else if (!isValidEmail(email)) {
                feedback.textContent = "❌ Format email tidak valid.";
                feedback.className = 'feedback-message error'; 
                feedback.classList.remove('hidden');
            } else {
                feedback.textContent = `✅ Terima kasih ${name}! Permintaan tur Anda untuk ${travelDate} (${package}) telah kami terima. Kami akan segera menghubungi Anda melalui email.`;
                feedback.className = 'feedback-message success';
                feedback.classList.remove('hidden');
                form.reset();
            }
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let current = '';
        const scrollY = window.scrollY;
        const offset = window.innerHeight / 3; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset; 
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('load', updateActiveNav);
    window.addEventListener('scroll', handleScroll); 
    window.addEventListener('resize', handleScroll); 
});