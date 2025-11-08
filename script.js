let lang = 'en';
function toggleLang() {
  if (lang === 'en') {
    document.getElementById('lang-tag').innerText = 'आम्ही लग्नबंधनात अडकत आहोत';
    document.getElementById('lang-bless').innerText = 'पालकांच्या आशीर्वादाने';
    document.getElementById('lang-family').innerHTML = 'पवन, लीलाताई आणि रामेश्वर वेरुळकर यांचा मुलगा<br/>मयुरी, शारदाताई आणि संतोष भुडके यांची मुलगी';
    document.getElementById('lang-ceremony').innerText = 'विवाह सोहळा';
    document.getElementById('lang-date').innerText = '२३ नोव्हेंबर २०२५ | सकाळी १०:५८ (मुहूर्त)';
    document.getElementById('lang-venue').innerText = 'स्थळ';
    document.getElementById('lang-loc').innerText = 'आडगाव (खु), तालुका अकोट, जिल्हा अकोला';
    document.getElementById('lang-footer').innerText = 'आपल्या उपस्थितीत हा सोहळा अधिक सुंदर होईल 💕';
    document.querySelector('.lang-toggle').innerText = 'English';
    lang = 'mr';
  } else {
    document.getElementById('lang-tag').innerText = 'We are getting married';
    document.getElementById('lang-bless').innerText = 'With the blessings of';
    document.getElementById('lang-family').innerHTML = 'Pawan, beloved son of Leelatai & Rameshwar Werulkar<br/>Mayuri, cherished daughter of Shardatai & Santosh Bhudke';
    document.getElementById('lang-ceremony').innerText = 'Wedding Ceremony';
    document.getElementById('lang-date').innerText = '23 November 2025 | 10:58 AM (Muhurat)';
    document.getElementById('lang-venue').innerText = 'Venue';
    document.getElementById('lang-loc').innerText = 'Adgaon Kh., Block Akot, District Akola';
    document.getElementById('lang-footer').innerText = 'We look forward to celebrating this beautiful day with you 💕';
    document.querySelector('.lang-toggle').innerText = 'मराठी';
    lang = 'en';
  }
}

// Countdown Timer
const countDownDate = new Date("Nov 23, 2025 10:58:00").getTime();
const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "It's Wedding Time!";
  }
}, 1000);
