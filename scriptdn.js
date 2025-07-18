function showCustomAlert() {
  document.getElementById('custom-alert').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closeCustomAlert() {
  document.getElementById('custom-alert').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

const accounts = {
  DQA12A12025: '@Jd8WqZ#7nTpLm3',
  NTM12A12025: '@xF2r9G#2aYhPq1',
  BBA12A12025: 'Q8#jYt@3S5KwM9s',
  PQTA12A12025: 'zG@4tF#W9qRsT1n',
  VLNB12A12025: '7x@B3Q#1mLhTR4g',
  HTD12A12025: 'K#5yR9@7pD3uWv2',
  TNTD12A12025: '@cW1J#2t9vZ8Kp6',
  NHĐ12A12025: '6X#tH3@5nRv9Pq7',
  NPBH12A12025: 'F7#y@8L4qG2Tm5',
  MBGH12A12025: '@b2T#9J1pH7xLq4',
  NHH12A12025: '3W@R#8k9tF2pXy5',
  TTNH12A12025: 'K#4w@5T9hG7sPm6',
  TPKH12A12025: 'y2@R#7X8pL3vTx9',
  LKH12A12025: '5X@c#6N9wR2pGj4',
  NDK12A12025: '@T3xR#5pH9k1Wm8',
  NTL12A12025: 'Q6#j@7W4t8L2Nq5',
  HTKL12A12025: '9tW#@3K1rY6xVp7',
  NNDL12A12025: 'K#8c@2R5yL7nTm4',
  LNTN12A12025: '1Y@G#9k4R6xWBq8',
  NHMN12A12025: 'T7#p@8Q5v3X2Lj5',
  HLBN12A12025: '@L4X#2R9y1H6Pm9',
  NHBN12A12025: '5R@k#7p1Q8nXy2T',
  THBN12A12025: 'z#6G@4T3r9H1Wp3',
  NHNN12A12025: 'Q#2p@7X1L8t9Gy5',
  PHMN12A12025: 'F4#y@5K9r2nTq6P',
  NNTN12A12025: 'x3@R#7k8L6p1Wy9',
  NQN12A12025: 'N7#2T@4pR9yXq5L',
  PPN12A12025: 'y1@G#6k4R2n8Tm7',
  NNP12A12025: '3R#t@8W5k1Y9Lq2',
  HTP12A12025: 'K9#2L@4R5xY8Pm6',
  NTQ12A12025: 't7#p@3Q9yR1Lk2W',
  BTHT12A12025: '@L5G#2R7k4Y8Wp9',
  NPT12A12025: '3p@k#7R1Q9tYx5T',
  NTTTS12A12025: 'N2#8R@5L4t7Xk1P',
  HTTTR12A12025: 'G1#4y@9k6R7pLq3',
  NTTTF12A12025: 'R7#1L@3p4G8yWq6',
  NTUT12A12025:'9r@S#4H5n3Gk1Lm0',
  PLKT12A12025: '5y@Q#2R9k6L7Pm8',
  ĐHT12A12025: '3k@p#8R1Q4tYx9L',
  HTT12A12025: 'T2#9L@4R5y8kWp1',
  HTTTF12A12025: 'y1#R@6p3G4k8Lm2',
  VBT12A12025: 'x3#T@5k8R9Q2Ly4',
  TKV12A12025: 'R7#1L@9p3k4Gm5X',
  ĐTNY12A12025: '5y#2Q@7R9L6kNp7',
  PPHY12A12025: 'k3#T@4R1p8Q9Lq2',
};

function validateLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const userInput = document.getElementById('captchaInput').value.trim();

  if (
    accounts[username] &&
    accounts[username] === password &&
    userInput === storedCaptcha
  ) {
    localStorage.setItem('username', username);
    if (document.getElementById('remembercheck').checked) {
      localStorage.setItem('usernamedn', username);
      localStorage.setItem('passworddn', password); // Lưu mật khẩu chưa mã hóa
    } else {
      localStorage.removeItem('usernamedn');
      localStorage.removeItem('passworddn');
    }
    window.parent.postMessage(
      { type: 'loginSuccess', username: username },
      '*'
    );
    Swal.fire({
      heightAuto: false,
      icon: 'success',
      text: 'Đăng nhập thành công!',
      confirmButtonText: 'OK',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        var loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.style.display = 'flex';
        setTimeout(() => {
          window.location.href = 'indexchinh.html';
        }, 2000);
      }
    });
    return false;
  } else if (accounts[username] !== password) {
    Swal.fire({
      heightAuto: false,
      icon: 'error',
      text: 'Tên đăng nhập hoặc mật khẩu không đúng!',
      footer: 'Nhấn Help nếu bạn cần hỗ trợ, và Cancel để thoát!',
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonText: 'Help',
    }).then((result) => {
      if (result.isConfirmed) {
        showCustomAlert();
      }
    });
    return false;
  } else if (userInput !== storedCaptcha) {
    Swal.fire({
      heightAuto: false,
      icon: 'error',
      text: 'Mã CAPTCHA bạn đã nhập không chính xác!',
      footer: 'Vui lòng kiểm tra lại mã captcha!',
      allowOutsideClick: false,
    });
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const rememberedUsername = localStorage.getItem('username');
  if (rememberedUsername) {
    document.getElementById('username').value = rememberedUsername;
    document.getElementById('remembercheck').checked = true;
  }
  const rememberedUsernameDN = localStorage.getItem('usernamedn');
  const rememberedPassword = localStorage.getItem('passworddn');

  if (rememberedUsernameDN) {
    document.getElementById('username').value = rememberedUsernameDN;
    document.getElementById('remembercheck').checked = true;
  }

  if (rememberedPassword) {
    document.getElementById('password').value = rememberedPassword;
  }
});

// CAPTCHA
let storedCaptcha = '';

// Function to generate random CAPTCHA text
function generateCaptcha() {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captchaText = '';
  for (let i = 0; i < 6; i++) {
    captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captchaText;
}

// Function to draw CAPTCHA on canvas
function drawCaptcha(captchaText) {
  const canvas = document.getElementById('captchaCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 170;
  canvas.height = 20;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set font and style
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Draw text
  ctx.fillText(captchaText, canvas.width / 2, canvas.height / 2);

  // Add some noise
  for (let i = 0; i < 50; i++) {
    ctx.fillRect(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      2,
      2
    );
  }
}

// Function to refresh CAPTCHA
function refreshCaptcha() {
  const captchaText = generateCaptcha();
  storedCaptcha = captchaText;
  drawCaptcha(captchaText);
}

// Initial CAPTCHA setup
refreshCaptcha();

// Event listener for refresh button
document
  .getElementById('refreshButton')
  .addEventListener('click', refreshCaptcha);
