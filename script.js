document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-item');
  const loginBtn = document.getElementById('login-btn'); // Select the login button
  const navItems = document.querySelectorAll('.nav-item');
  const contents = document.querySelectorAll('.content');
  const loginButton = document.getElementById('loginButton');
  const logoutButton = document.getElementById('logoutButton');
  const loggedOutHome = document.getElementById('home-logged-out');
  const loggedInHome = document.getElementById('home-logged-in');
  const loggedOutEvents = document.getElementById('events-logged-out');
  const loggedInEvents = document.getElementById('events-logged-in');
  const loggedOutMembers = document.getElementById('members-logged-out');
  const loggedInMembers = document.getElementById('members-logged-in');
  const loggedOutAbout = document.getElementById('about-logged-out');
  const loggedInAbout = document.getElementById('about-logged-in');
  const loggedOutTeacher = document.getElementById('teacher-logged-out');
  const loggedInTeacher = document.getElementById('teacher-logged-in');
  const loggedInbuble = document.getElementById('buble');
  const userAvatars = {
    BBA12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    PQTA12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    HTD12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    NHD12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    NHH12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    NDK12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    NTL12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    NHNN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    HTP12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    HTT12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nam1.jfif?v=1722005906914',
    NTM12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    VLNB12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    TNTD12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NPBH12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    MBGH12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    TTNH12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    TPKH12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    LKH12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    HTKL12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NNDL12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    LNTN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NHMN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    HLBN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NHBN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    THBN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    PHMN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NNTN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NQN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    PPN12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NNP12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NTQ12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    BTHT12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NPT12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NTTTS12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    HTTT12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NTTTF12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    NTUT12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    PLKT12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    ĐHT12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    VBT12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    TKV12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    ĐTNY12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
    PPHY12A12025:
      'https://cdn.glitch.global/4ea9b6bc-9a3c-4d0f-a608-cde18f3c3444/Nu1.jfif?v=1722009975415',
  };
  // Xử lý scroll để đánh dấu các mục điều hướng active
  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Xử lý sự kiện khi nhấp vào các mục điều hướng
  navItems.forEach((navItem) => {
    navItem.addEventListener('click', function (event) {
      event.preventDefault();
      const contentId = this.getAttribute('data-content');
      var loadingOverlay1 = document.getElementById('loadingOverlay1');
      loadingOverlay1.style.display = 'flex';
      setTimeout(() => {
        // Xóa lớp active khỏi tất cả các mục điều hướng
        navItems.forEach((item) => item.classList.remove('active'));
        // Ẩn tất cả các nội dung
        contents.forEach((content) => content.classList.remove('active'));
        // Thêm lớp active vào mục điều hướng đã nhấp và hiển thị nội dung tương ứng
        this.classList.add('active');
        document.getElementById(contentId).classList.add('active');
        // Ẩn overlay sau khi nội dung được hiển thị
        loadingOverlay1.style.display = 'none';
      }, 2000);
    });
  });
  // Xử lý sự kiện khi nhấp vào nút Đăng nhập
  loginBtn.addEventListener('click', () => {
    var loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'flex';
    setTimeout(() => {
      window.location.href = 'indexdn.html';
    }, 3000); // Chuyển hướng sau 3 giây
  });

  // Lấy tên người dùng từ localStorage và hiển thị nếu đã đăng nhập
  const loggedInUsername = localStorage.getItem('username');
  const currentUser = localStorage.getItem('username');
  if (loggedInUsername) {
    const avatarPath = userAvatars[currentUser];
    loginButton.style.setProperty('--avatar-url', `url(${avatarPath})`);
    loginBtn.style.display = 'none';
    loginButton.style.display = 'inline';
    let displayName = 'Xin Chào, ' + mapUsernameToFullName(loggedInUsername);
    loginButton.textContent = displayName;
    logoutButton.style.display = 'inline'; // Hiển thị nút đăng xuất
    loggedInHome.style.display = 'inline';
    loggedOutHome.style.display = 'none';
    loggedInEvents.style.display = 'inline';
    loggedOutEvents.style.display = 'none';
    loggedOutAbout.style.display = 'none';
    loggedInAbout.style.display = 'inline';
    loggedInTeacher.style.display = 'inline';
    loggedOutTeacher.style.display = 'none';
    loggedInMembers.style.display = 'inline';
    loggedOutMembers.style.display = 'none';
    loggedInbuble.style.display = 'inline';
  }

  // Xử lý sự kiện khi nhấp vào nút đăng xuất
  logoutButton.addEventListener('click', () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Bạn có chắc muốn đăng xuất!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, please log me out!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Logged out',
          text: 'You have been logged out successfully.',
          icon: 'success',
        }).then(() => {
          localStorage.removeItem('username');
          loginBtn.style.display = 'inline'; // Hiển thị lại nút Đăng nhập
          logoutButton.style.display = 'none'; // Ẩn nút Đăng xuất
          loginButton.textContent = 'Đăng Nhập';
          loginButton.style.display = 'none';
          loggedInHome.style.display = 'none';
          loggedOutHome.style.display = 'inline';
          loggedInAbout.style.display = 'none';
          loggedOutAbout.style.display = 'inline';
          loggedInEvents.style.display = 'none';
          loggedOutEvents.style.display = 'inline';
          loggedInTeacher.style.display = 'none';
          loggedOutTeacher.style.display = 'inline';
          loggedInMembers.style.display = 'none';
          loggedOutMembers.style.display = 'inline';
          loggedInbuble.style.display = 'none';
        });
      }
    });
  });
  function mapUsernameToFullName(username) {
    const userMap = {
      DQA12A12025: 'Dương Quốc Anh',
      NTM12A12025: 'Nguyễn Thị Mến',
      BBA12A12025: 'Biện Bình An',
      PQTA12A12025: 'Phạm Quang Tuấn An',
      VLNB12A12025: 'Võ Lê Ngọc Bích',
      HTD12A12025: 'Hoàng Trọng Đại',
      TNTD12A12025: 'Tô Nhựt Thái Đan',
      NHD12A12025: 'Nguyễn Hữu Đạt',
      NPBH12A12025: 'Nông Phùng Bích Hằng',
      MBGH12A12025: 'Mai Bảo Gia Hân',
      NHH12A12025: 'Nguyễn Hoàng Hiệp',
      TTNH12A12025: 'Trần Thị Ngọc Hiếu',
      TPKH12A12025: 'Thái Phạm Khánh Huyền',
      LKH12A12025: 'Lộc Kiệt Hương',
      NDK12A12025: 'Nguyễn Doãn Khoa',
      NTL12A12025: 'Nguyễn Thành Lộc',
      HTKL12A12025: 'Hoàng Thị Khánh Ly',
      NNDL12A12025: 'Nguyễn Ngọc Diệu Ly',
      LNTN12A12025: 'Lê Nguyễn Thúy Nga',
      NHMN12A12025: 'Nguyễn Hoàng Minh Ngân',
      HLBN12A12025: 'Huỳnh Lương Bảo Ngọc',
      NHBN12A12025: 'Nguyễn Hoàng Bảo Ngọc',
      THBN12A12025: 'Trần Huỳnh Bảo Ngọc',
      NHNN12A12025: 'Nguyễn Huỳnh Nhật Nguyên',
      PHMN12A12025: 'Phan Hoàng Minh Nguyệt',
      NNTN12A12025: 'Nguyễn Nhật Thu Nhi',
      NQN12A12025: 'Nguyễn Quỳnh Như',
      PPN12A12025: 'Phạm Phương Như',
      NNP12A12025: 'Nguyễn Ngọc Phụng',
      HTP12A12025: 'Huỳnh Thanh Phước',
      NTQ12A12025: 'Nguyễn Thảo Quyên',
      BTHT12A12025: 'Bùi Thị Hồng Thanh',
      NPT12A12025: 'Nguyễn Phương Thảo',
      NTTTF12A12025: 'Nguyễn Thị Thanh Thùy',
      HTTTR12A12025: 'Huỳnh Thị Thu Thủy',
      NTTTS12A12025: 'Nông Thị Thanh Thúy',
      NTUT12A12025: 'Nguyễn Thị Uyên Thy',
      PLKT12A12025: 'Phan Lê Kim Trang',
      ĐHT12A12025: 'Đinh Huyền Trân',
      HTT12A12025: 'Hoàng Thanh Tuấn',
      HTTTF12A12025: 'Huỳnh Thị Thanh Tuyền',
      VBT12A12025: 'Vương Bạch Tuyết',
      TKV12A12025: 'Tạ Khánh Vy',
      ĐTNY12A12025: 'Đào Thị Như Ý',
      PPHY12A12025: 'Phạm Phương Hải Yến',
    };

    return userMap[username] || username;
  }
});
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Khi sự kiện vào viewport, thêm lớp "visible"
        entry.target.classList.add('visible');
      } else {
        // Khi sự kiện ra khỏi viewport, loại bỏ lớp "visible"
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    threshold: 0.1, // 10% của sự kiện phải vào viewport mới hiển thị
  }
);

// Lựa chọn tất cả các sự kiện và gắn chúng với observer
document.querySelectorAll('.eventtl').forEach((event) => {
  observer.observe(event);
});

const track = document.querySelector('.carousel-track-home');
const prevButtonhome = document.querySelector('.button-home-prev');
const nextButtonhome = document.querySelector('.button-home-next');
const itemshome = Array.from(track.children);

let currentIndexhome = 1; // Bắt đầu ở item giữa

function updateCarouselhome() {
  const itemWidth = itemshome[0].getBoundingClientRect().width + 180; // Tính cả gap
  track.style.transform = `translateX(-${currentIndexhome * itemWidth}px)`;

  // Đặt lại trạng thái của tất cả item
  itemshome.forEach((item, index) => {
    item.classList.remove('center');
    if (index === currentIndexhome + 1) {
      // Item tiếp theo bên phải sẽ lớn hơn
      item.classList.add('center');
    }
  });
}

prevButtonhome.addEventListener('click', () => {
  // Quay lại cuối nếu ở đầu
  if (currentIndexhome === 0) {
    currentIndexhome = itemshome.length - 3; // Di chuyển đến vị trí trước cuối cùng
  } else {
    currentIndexhome--;
  }
  updateCarouselhome();
});

nextButtonhome.addEventListener('click', () => {
  // Quay về đầu nếu ở cuối
  if (currentIndexhome >= itemshome.length - 3) {
    currentIndexhome = 0; // Quay về đầu
  } else {
    currentIndexhome++;
  }
  updateCarouselhome();
});

// Initialize
updateCarouselhome();

const track2 = document.querySelector('.carousel1-track-home');
const prevButtonhome2 = document.querySelector('.button1-home-prev');
const nextButtonhome2 = document.querySelector('.button1-home-next');
const itemshome2 = Array.from(track.children);

let currentIndexhome2 = 1; // Bắt đầu ở item giữa

function updateCarouselhome2() {
  const itemWidth2 = itemshome[0].getBoundingClientRect().width; // Tính cả gap
  track2.style.transform = `translateX(-${currentIndexhome2 * itemWidth2}px)`;
}
prevButtonhome2.addEventListener('click', () => {
  // Quay lại cuối nếu ở đầu
  if (currentIndexhome2 === 0) {
    currentIndexhome2 = itemshome2.length - 3; // Di chuyển đến vị trí trước cuối cùng
  } else {
    currentIndexhome2--;
  }
  updateCarouselhome2();
});

nextButtonhome2.addEventListener('click', () => {
  // Quay về đầu nếu ở cuối
  if (currentIndexhome2 >= itemshome2.length - 3) {
    currentIndexhome2 = 0; // Quay về đầu
  } else {
    currentIndexhome2++;
  }
  updateCarouselhome2();
});

// Initialize
updateCarouselhome2();
