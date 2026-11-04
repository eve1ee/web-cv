// --- 1. Burger Menu Hide/Show ---
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});


// --- 2. Go to Top Floating Button ---
const topBtn = document.getElementById('top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// --- 3. Visitor Counter ---
let visitors = localStorage.getItem('visitorCount') || 150;
visitors++;
localStorage.setItem('visitorCount', visitors);
document.getElementById('visitor-count').innerText = visitors;


// --- 4. Contact Form Variables & Sanitization ---
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let rawName = document.getElementById('name').value;
    let rawEmail = document.getElementById('email').value;

    // Sanitize basic HTML tags to prevent XSS
    let sanitizedName = rawName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let sanitizedEmail = rawEmail.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Store in JS variables for future use
    let contactData = {
        name: sanitizedName,
        email: sanitizedEmail,
        timestamp: new Date().toISOString()
    };

    console.log("Stored Contact Data:", contactData);
    alert(`Thank you, ${contactData.name}! Your message has been saved.`);
    this.reset();
});


// --- 5. Carousel Functionality ---
const images = document.querySelectorAll('.carousel-img');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let currentIndex = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});


// --- 6. Fetch API for Clock (Workshop 8) ---
async function fetchClock() {
    try {
        let response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Bangkok');
        let data = await response.json();
        let datetime = new Date(data.datetime);
        let timeString = datetime.toLocaleTimeString();
        document.getElementById('clock').innerText = `Current Time (Bangkok): ${timeString}`;
    } catch (error) {
        document.getElementById('clock').innerText = "Could not load time via Fetch API.";
    }
}

fetchClock();
setInterval(fetchClock, 1000);

// --- 6th Workshop: Guessing Number Game ---
function guessingGame() {
    let target = Math.floor(Math.random() * 11); // สุ่มเลข 0-10
    let guess;
    do {
        guess = prompt("Guess a number between 0 and 10:");
        if (guess === null) break; // กดยกเลิก
        guess = Number(guess);
        
        if (guess === target) {
            alert("Yeah, you guessed it!");
            break;
        } else if (guess < target) {
            alert("Too low, try again");
        } else {
            alert("Too high, try again");
        }
    } while (guess !== target);
}

guessingGame();