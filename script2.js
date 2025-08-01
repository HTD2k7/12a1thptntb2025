// GV Lop 10
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const carouselSlide = document.getElementById('carouselSlide');
  const memberCards = document.querySelectorAll('.member-card');

  let currentIndex = 0;
  const totalCards = 12;
  const cardsPerView = 5;

  function updateCarousel() {
    const offset = (currentIndex * -97.7) / cardsPerView;
    carouselSlide.style.transform = `translateX(${offset}%)`;

    memberCards.forEach((card, index) => {
      card.classList.remove('highlight');
      if (index >= currentIndex && index < currentIndex + cardsPerView) {
        if (index === currentIndex + Math.floor(cardsPerView / 2 - 1)) {
          card.classList.add('highlight');
        }
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : totalCards - cardsPerView;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex =
      currentIndex < totalCards - cardsPerView ? currentIndex + 1 : 0;
    updateCarousel();
  });

  updateCarousel();
});

// Thanh thong bao
document.addEventListener('DOMContentLoaded', function () {
  let index = 0;
  const items = document.querySelectorAll('.carousel-item');
  const itemCount = items.length;
  const interval = 5000; // 5 seconds

  function showNextItem() {
    items[index].classList.remove('active');
    index = (index + 1) % itemCount;
    items[index].classList.add('active');
  }

  setInterval(showNextItem, interval);
});

//GV Lop 11
document.addEventListener('DOMContentLoaded', () => {
  const prevButton1 = document.getElementById('prevButton1');
  const nextButton1 = document.getElementById('nextButton1');
  const carouselSlide1 = document.getElementById('carouselSlide1');
  const memberCards1 = document.querySelectorAll('.member-card1teacher');

  let currentIndex1 = 0;
  const totalCards1 = 12;
  const cardsPerView1 = 5;

  function updateCarousel() {
    const offset = (currentIndex1 * -97.7) / cardsPerView1;
    carouselSlide1.style.transform = `translateX(${offset}%)`;

    memberCards1.forEach((card, index) => {
      card.classList.remove('highlight1');
      if (index >= currentIndex1 && index < currentIndex1 + cardsPerView1) {
        if (index === currentIndex1 + Math.floor(cardsPerView1 / 2 - 1)) {
          card.classList.add('highlight1');
        }
      }
    });
  }

  prevButton1.addEventListener('click', () => {
    currentIndex1 =
      currentIndex1 > 0 ? currentIndex1 - 1 : totalCards1 - cardsPerView1;
    updateCarousel();
  });

  nextButton1.addEventListener('click', () => {
    currentIndex1 =
      currentIndex1 < totalCards1 - cardsPerView1 ? currentIndex1 + 1 : 0;
    updateCarousel();
  });

  updateCarousel();
});

// GV Lop 12
document.addEventListener('DOMContentLoaded', () => {
  const prevButton2 = document.getElementById('prevButton2');
  const nextButton2 = document.getElementById('nextButton2');
  const carouselSlide2 = document.getElementById('carouselSlide2');
  const memberCards2 = document.querySelectorAll('.member-card2teacher');

  let currentIndex2 = 0;
  const totalCards2 = 12;
  const cardsPerView2 = 5;

  function updateCarousel() {
    const offset = (currentIndex2 * -97.7) / cardsPerView2;
    carouselSlide2.style.transform = `translateX(${offset}%)`;

    memberCards2.forEach((card, index) => {
      card.classList.remove('highlight2');
      if (index >= currentIndex2 && index < currentIndex2 + cardsPerView2) {
        if (index === currentIndex2 + Math.floor(cardsPerView2 / 2 - 1)) {
          card.classList.add('highlight2');
        }
      }
    });
  }

  prevButton2.addEventListener('click', () => {
    currentIndex2 =
      currentIndex2 > 0 ? currentIndex2 - 1 : totalCards2 - cardsPerView2;
    updateCarousel();
  });

  nextButton2.addEventListener('click', () => {
    currentIndex2 =
      currentIndex2 < totalCards2 - cardsPerView2 ? currentIndex2 + 1 : 0;
    updateCarousel();
  });

  updateCarousel();
});

function openLightbox(src) {
      document.getElementById("lightbox-imgky").src = src;
      document.getElementById("lightboxky").style.display = "flex";
    }

    function closeLightbox() {
      document.getElementById("lightboxky").style.display = "none";
    }


const music = document.getElementById("bgMusic");
const toggleMusicBtn = document.getElementById("toggle-music");
const songTitle = document.getElementById("song-title");

const playlist = [
  "https://dl.dropboxusercontent.com/scl/fi/6o0lt4cn5l6yofb7szkfa/camonvaxinloi.mp3?rlkey=306t6p7xthtnmurgg7q9oopx5&st=js19nkeb",
  "https://dl.dropboxusercontent.com/scl/fi/whsbahfaie6qy2sznpwm2/dailomattroi.mp3?rlkey=1xp4n1yaz9a30n6b7n05g6zi2&st=ar6x6ply",
  "https://dl.dropboxusercontent.com/scl/fi/d4qgoypci8mec84suc58t/emdungkhoc.mp3?rlkey=52x0u9yjyuo836f9rwldsm3sy&st=e9rseuqz",
  "https://dl.dropboxusercontent.com/scl/fi/s2sbxzxdbb0xlssa9p3jx/maiminhxa.mp3?rlkey=x6wvpxwy3t7olxytc0k20jes6&st=dij5a8z9",
  "https://dl.dropboxusercontent.com/scl/fi/l7lxbj6e3r67urljzm6nw/sayhineversaygoodbye.mp3?rlkey=omqwkamhynqflf3wkvsrkvudk&st=z7wppafg",
  "https://dl.dropboxusercontent.com/scl/fi/s2xy750ypfo12fqtdj2wf/thanhxuan.mp3?rlkey=ujmksluu3yxyonou21zeau47l&st=v45yo01u",
  "https://dl.dropboxusercontent.com/scl/fi/bi4dxcgitkn63cqrooza1/vungkiuc.mp3?rlkey=vserbsx9ow02vvfp4coj0pqiu&st=gx4bdkyy",
  "https://dl.dropboxusercontent.com/scl/fi/51hsj0qh6js4gjaps2xbg/vuotvumon.mp3?rlkey=cslaxrbdum4ebpldgcnbxx30y&st=btm8yzyw",
  "https://dl.dropboxusercontent.com/scl/fi/zdt4wr42kjxmguxhacfwn/nhomaichuyendinay.mp3?rlkey=9olfxtmmix19tnx93j5icc8u0&st=o49omwgv",
  "https://dl.dropboxusercontent.com/scl/fi/coix71afuxfe8ea4iizab/noiphaohoarucro.mp3?rlkey=mpx4hkw80zavkqk8gugw85i2t&st=3oxgynaj",
  "https://dl.dropboxusercontent.com/scl/fi/3a9gku76yypruezt3acze/phaohoa.mp3?rlkey=yay4xko6s5od939uhtjbizgry&st=yqirmwpx",
  "https://dl.dropboxusercontent.com/scl/fi/m5090rfslej6vc94xmzrh/phepmau.mp3?rlkey=q75nwhrpp44oifhahp8vwy9tf&st=jnb9jtap"
];

// Tên bài hát (cùng thứ tự playlist)
const songNames = [
  "Cảm Ơn Và Xin Lỗi",
  "Đại Lộ Mặt Trời",
  "Em Đừng Khóc",
  "Mai Mình Xa",
  "Say Hi Never Say Goodbye",
  "Thanh Xuân",
  "Vùng Ký Ức",
  "Vượt Vũ Môn",
  "Nhỏ Mãi Chuyện Đi Này",
  "Nơi Pháo Hoa Rực Rỡ",
  "Pháo Hoa",
  "Phép Màu"
];

let currentTrack = 0;
let isPlaying = false;

function updateSong() {
  music.src = playlist[currentTrack];
  const titleBox = document.getElementById("song-title");

  // Cập nhật và hiển thị bong bóng
  titleBox.textContent = "🎵 " + songNames[currentTrack];
  titleBox.style.display = "block";
  titleBox.style.opacity = "1";

  // Sau 5 giây, làm mờ dần và ẩn đi
  setTimeout(() => {
    titleBox.style.opacity = "0";
    setTimeout(() => {
      titleBox.style.display = "none";
    }, 500); // chờ 0.5 giây cho hiệu ứng mờ
  }, 5000); // hiện 5 giây rồi ẩn

  // Nếu đang bật nhạc thì load và phát
  if (isPlaying) {
    music.load();
    music.addEventListener("canplay", playNext, { once: true });
  }
}

function playNext() {
  music.play().catch(e => console.error("Play failed:", e));
}

// Gán bài đầu tiên và tiêu đề
updateSong();

// Nút bật/tắt nhạc
toggleMusicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleMusicBtn.textContent = "🔈 Bật nhạc";
  } else {
    music.play();
    toggleMusicBtn.textContent = "🔇 Tắt nhạc";
  }
  isPlaying = !isPlaying;
});

// Khi nhạc hết -> phát bài tiếp theo, vòng lại nếu hết danh sách
music.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  updateSong();
});