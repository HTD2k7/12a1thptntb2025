// Set the date we're counting down to
let countDownDate = new Date('July 16, 2025 08:00:00').getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML =
      'Đã đến thời điểm công bố điểm tốt nghiệm THPT 2025 rồi! Mong rằng dù cho kết quả như thế nào thì các bạn hãy luôn tự hào rằng bản thân mình đã cố gắng hết sức rồi, không có gì phải hối tiếc nhé!';
  }
}, 1000);

function showInfo(event, classId, className) {
  event.preventDefault();
  var infos = document.getElementsByClassName('info');
  for (var i = 0; i < infos.length; i++) {
    infos[i].style.display = 'none';
  }
  document.getElementById(classId).style.display = 'block';
  document.getElementById('dropbtn').innerText = className;
  event.returnValue = false;
  return false;
}

const nextButton = document.querySelector('.buttonnextmuc3');
const prevButton = document.querySelector('.buttonprevmuc3');

nextButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc3');
  document.querySelector('.slidemuc3').appendChild(items[0]);
});

prevButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc3');
  document.querySelector('.slidemuc3').prepend(items[items.length - 1]);
});

const nextButton1 = document.querySelector('.buttonnextmuc31');
const prevButton1 = document.querySelector('.buttonprevmuc31');

nextButton1.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc31');
  document.querySelector('.slidemuc31').appendChild(items[0]);
});

prevButton1.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc31');
  document.querySelector('.slidemuc31').prepend(items[items.length - 1]);
});

const nextButton2 = document.querySelector('.buttonnextmuc32');
const prevButton2 = document.querySelector('.buttonprevmuc32');

nextButton2.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc32');
  document.querySelector('.slidemuc32').appendChild(items[0]);
});

prevButton2.addEventListener('click', () => {
  const items = document.querySelectorAll('.itemmuc32');
  document.querySelector('.slidemuc32').prepend(items[items.length - 1]);
});

const lightbox = document.getElementById('lightboxlop');
const lightboxImg = document.getElementById('lightboxlop-img');
const thumbnails = document.querySelectorAll('.anhlop img');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

    // Đóng khi bấm ra ngoài ảnh
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target === lightboxImg) {
    closeLightbox();
  }
});

function toggleGallery() {
    document.getElementById('galleryPopup').classList.toggle('show');
  }

  // Lightbox cho ảnh tổ
  function openGalleryLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
  }

  function closeGalleryLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }

  // Tabs cho ảnh tổ
  function showTab(tabName) {
    const images = document.querySelectorAll('#galleryContent img');
    images.forEach(img => {
      if (img.dataset.tab === tabName) {
        img.style.display = 'block';
        img.classList.add('fade-in');
        setTimeout(() => img.classList.remove('fade-in'), 400);
      } else {
        img.style.display = 'none';
      }
    });

    // Cập nhật nút active
    const buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-buttons button[onclick*="${tabName}"]`).classList.add('active');
  }

  // Lightbox cho ảnh kỷ yếu
  function openKyYeuLightbox(src) {
    document.getElementById("lightbox-imgky").src = src;
    document.getElementById("lightboxky").style.display = "flex";
  }

  function closeKyYeuLightbox() {
    document.getElementById("lightboxky").style.display = "none";
  }

    // Lá rơi
    let leavesEnabled = true;
    let leafInterval;

    function createLeaf() {
      if (!leavesEnabled) return;
      const leaf = document.createElement("div");
      leaf.classList.add("leaf");
      leaf.style.left = Math.random() * window.innerWidth + "px";
      leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
      leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(leaf);
      setTimeout(() => leaf.remove(), 10000);
    }

    leafInterval = setInterval(createLeaf, 300);

document.getElementById("toggle-leaves").onclick = function () {
  leavesEnabled = !leavesEnabled;
  if (leavesEnabled) {
    this.innerText = "Tắt Lá Rơi 🍃";
    leafInterval = setInterval(createLeaf, 300);
  } else {
    this.innerText = "Bật Lá Rơi 🍂";
    clearInterval(leafInterval);
    // ✨ Xoá tất cả lá đang rơi
    document.querySelectorAll(".leaf").forEach(leaf => leaf.remove());
  }
};

function toggleTooltip(img) {
  const tooltip = img.parentElement.querySelector(".tooltipbd");
  tooltip.classList.toggle("show-tooltip");
}

const lines = [
      "Dear HuynhThuy,",
      " I have to write this in English because it feels too cheesy to say it in Vietnamese:”))). You can use a translation app to understand hihi :>>>.",
      "I can't believe we've spent nearly 3 years together — it's insane!🥵🥵",
      "Thanks so much for being my girl and listening to me yap every day🥺. I really appreciate everything you do for me, and I hope we go far together🥰🥰.",
      "This website will keep our love here, so we can look back and remember these cute memories when we grow up 😉 he he he.",
      "From Doãn Kho with luv🫀🫂",

    ];

    function showLines(index = 0) {
      if (index < lines.length) {
        const textContainer = document.getElementById("coupleText");
        const newLine = document.createElement("p");
        newLine.textContent = lines[index];
        newLine.style.margin = "6px 0";
        newLine.style.opacity = 0;
        textContainer.appendChild(newLine);
        setTimeout(() => {
          newLine.style.transition = "opacity 0.5s ease";
          newLine.style.opacity = 1;
        }, 10);
        setTimeout(() => showLines(index + 1), 700);
      }
    }

    function showLinescp(lines, containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = "";
      let i = 0;
      function next() {
        if (i < lines.length) {
          const p = document.createElement("p");
          p.textContent = lines[i];
          p.style.margin = "6px 0";
          container.appendChild(p);
          i++;
          setTimeout(next, 700);
        }
      }
      next();
    }


    function checkCoupleReveal() {
      const input = document.getElementById("secretInput").value.trim().toLowerCase();
      const coupleDiv = document.getElementById("coupleReveal");
      const coupleText = document.getElementById("coupleText");
      const coupleBox = document.getElementById("coupleBox");
      const bestieBox = document.getElementById("bestieBox");
      const containerdvn = document.getElementById("imageContainerdvn");
      const iconsdvn = document.querySelectorAll(".icondvn");


      if (input === "19/9") {
        coupleDiv.classList.add("couple-show");
        coupleText.innerHTML = "";
        showLines();
      }
      else if (input == "10/12"){
        coupleBox.classList.add("show-box");
        showLinescp(coupleLines, "coupleMessage");
      }
      else if (input === "ngocvanguyet"){
        bestieBox.classList.add("show-box");
        showLinescp(bestieLines, "bestieMessage");
      }
      else if(input == "mnganxinhdep"){
        containerdvn.style.display = "block";
        containerdvn.style.animation = "fadeIn 2s forwards";
        iconsdvn.forEach(icon => icon.classList.add("show-icondvn"));
      }
      else {
        coupleDiv.classList.remove("couple-show");
        coupleText.innerHTML = "";
        coupleBox.classList.remove("show-box");
        bestieBox.classList.remove("show-box");
        containerdvn.style.display = "none";
        containerdvn.style.opacity = 0;
        iconsdvn.forEach(icondvn => icondvn.classList.remove("show-icondvn"));
      }
    }

    const coupleLines = [
      "Một người là mùa thu Hà Nội – lặng lẽ, dịu dàng, tinh khôi như sương sớm đầu mùa.",
      "Một người là Photon cuối thu – trầm lặng nhưng luôn hướng về phía ánh sáng của riêng mình.",
      "",
      "Không rực rỡ, không ồn ào, chỉ đơn giản là sự hiện diện đủ khiến không gian trở nên ấm hơn.",
      "Là cái nhìn lén nhẹ nơi cửa sổ lớp, là những lần chạm ánh mắt nhưng chẳng nói gì…",
      "Là thứ tình cảm âm thầm – mà sâu, chậm – mà bền.",
      "Giữa dòng đời xô bồ, họ chọn bước thật chậm…",
      "… để kịp cảm nhận hết sự dịu dàng của nhau. 🍂💡",
    ];

    const bestieLines = [
      "Một người lấp lánh như viên ngọc trong đá – sắc sảo, nổi bật.",
      "Một người dịu dàng như ánh trăng cuối tháng – lặng lẽ nhưng khiến người ta chẳng thể rời mắt.",
      "",
      "Họ không cần phải ồn ào để được chú ý.",
      "Khi đi riêng, họ là chính mình.",
      "Nhưng khi đứng cạnh nhau – họ là một bộ đôi khiến cả lớp phải dè chừng.",
      "Không vì nói to, không vì đùa nhiều – mà vì sự ăn ý không cần hiệu lệnh.",
      "Một ánh mắt, một nụ cười, một câu đùa đúng thời điểm – đủ khiến cả bầu không khí nghiêng về phía họ.",
      "",
      "Người ta gọi họ là Song Sát Ánh Bạc – không phải vì họ đáng sợ, mà vì họ tỏa sáng theo cách riêng:",
      "Không rực rỡ như nắng – mà sắc lạnh như ánh bạc dưới trăng.",
      "Không náo nhiệt – mà khiến người khác không thể không để ý.",
    ];


    const lightboxlb = document.getElementById('lightboxlb');
    const lightboxlbImg = lightboxlb.querySelector('img');
    document.querySelectorAll('.gallerylb img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxlbImg.src = img.src;
        lightboxlb.classList.add('active');
      });
    });
    lightboxlb.addEventListener('click', () => {
      lightboxlb.classList.remove('active');
    });

    const images = [
      "https://i.postimg.cc/rpCfmh0H/0165b5c3-3909-4965-8d17-2b5326823d84.jpg",
      "https://i.postimg.cc/ZqhfJkR3/02f56871-b029-44f1-a2fe-2e3c83b397db.jpg",
      "https://i.postimg.cc/wMBfnhBG/20240522-174404-100.jpg",
      "https://i.postimg.cc/pXpcZY49/3a41f40e-cc4b-4587-9d2a-e1a0a5eba9d2.jpg",
      "https://i.postimg.cc/8zvK8k1N/ddb353d1-0f51-48ec-8cd1-14e2735cff34.jpg",
      "https://i.postimg.cc/gjM50g5p/FB-IMG-1750229561631.jpg",
      "https://i.postimg.cc/VLpGH0PK/fe910eb9-730b-4807-9ea6-6c1ac75cd656.jpg",
      "https://i.postimg.cc/wTGZ8bLc/IMG-1748614430855-1748614506233-3.jpg",
      "https://i.postimg.cc/2SLJzFxp/IMG-20240205-145623-2.jpg",
      "https://i.postimg.cc/KjsqbRkv/IMG-20240226-191528.jpg",
      "https://i.postimg.cc/MGyFB64d/IMG-20241016-155504-2.jpg",
      "https://i.postimg.cc/ZR4DxkzZ/IMG-20241019-130304-2.jpg",
      "https://i.postimg.cc/44wjw330/IMG-20241211-125657-2.jpg",
      "https://i.postimg.cc/gJHQCzHn/IMG-20241211-125755-2.jpg",
      "https://i.postimg.cc/9FMKkjRQ/IMG-20250404-201813.jpg",
      "https://i.postimg.cc/6QRDhL7V/IMG-20250530-211527-2.jpg",
      "https://i.postimg.cc/1zxd4nW8/IMG-20250613-152843.jpg",
      "https://i.postimg.cc/NFGSY3db/IMG-20250613-153019.jpg",
      "https://i.postimg.cc/dtVcKyXv/IMG-20250614-201213.jpg",
      "https://i.postimg.cc/gJW1tXRC/Screenshot-20240514-211148.png",
      "https://i.postimg.cc/QdBLFrhy/z5832088742951-d7ae53d379668fbbf263d0c07f89600e.jpg",
      "https://i.postimg.cc/fTqnWbnd/z6238526681528-1df5292d77adbd90a2ca22f2c7f9d5ed.jpg",
      "https://i.postimg.cc/Gm6WYSph/z6475612769014-dacfbaa72b7016763eb7053465ade8e1.jpg",
      "https://i.postimg.cc/cHxX8QfL/z6700973003164-1361c2c30bfbbb334e08f9fdb5751536.jpg",
      "https://i.postimg.cc/1tvM0fKc/z6700973007609-4998ea1046b286e6b9c21e6fe91cfbd6.jpg",
      "https://i.postimg.cc/3NW1tYSM/z6701384002232-5ec9762e01ddf7dfbe2ea02ee15f5245.jpg",
      "https://i.postimg.cc/C17rvvw8/z6705505907575-5990bc9948c96037c5c99038d73f2ffb.jpg",
      "https://i.postimg.cc/RCPbKbs5/z6762158241983-e4b5e9fac98c8aa398933c69854ec37e.jpg",
      "https://i.postimg.cc/RCRx8RgX/z6762375808166-6266914839fe3a2f0c69ff737c12a382.jpg"
    ];

    const tracktt = document.getElementById("tracktt");
    // Append all images twice for smooth looping
    for (let i = 0; i < 2; i++) {
      images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Ảnh ${index + 1}`;
        tracktt.appendChild(img);
      });
    }