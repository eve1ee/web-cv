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
// หากต้องการลองเล่นเกม ให้ลองเอาคอมเมนต์บรรทัดล่างนี้ออกครับ
// guessingGame();


// --- 7th Workshop: Visitor Counter & Form Variables ---
// จำลองการนับผู้เข้าชมเว็บไซต์
let visitors = localStorage.getItem('visitorCount') || 120;
visitors++;
localStorage.setItem('visitorCount', visitors);
document.getElementById('visitor-count').innerText = visitors;

// เก็บค่าฟอร์มลงตัวแปรเมื่อมีการกดส่ง
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    
    console.log("Saved User Name:", userName);
    console.log("Saved User Email:", userEmail);
    alert("Form submitted successfully! Data saved to JS variables.");
});


// --- 8th Workshop: Fetch API for Clock (World Clock) ---
async function fetchClock() {
    try {
        // ดึงเวลาปัจจุบันตามโซนเวลา (ตัวอย่างใช้ Asia/Bangkok)
        let response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Bangkok');
        let data = await response.json();
        let datetime = new Date(data.datetime);
        let timeString = datetime.toLocaleTimeString();
        
        document.getElementById('clock').innerText = `Current Time (Bangkok): ${timeString}`;
    } catch (error) {
        document.getElementById('clock').innerText = "Could not load time via Fetch API.";
    }
}

// เรียกใช้งานฟังก์ชันนาฬิกา
fetchClock();
setInterval(fetchClock, 1000); // อัปเดตทุกๆ 1 วินาที
