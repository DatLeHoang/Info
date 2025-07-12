document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initScrollToTop();
  initScrollAnimations();
  initLightbox();
  initFormValidation();
  initDarkModeToggle();
  initMultiLineTyping();
  createFallingCoins(20); // 👈 Thêm hiệu ứng đồng tiền vàng rơi
});

// Navbar thay đổi khi cuộn
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('navbar-scrolled', window.scrollY > 50);
  });
}

// Nút lên đầu trang
function initScrollToTop() {
  const btn = document.getElementById('scrollToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Hiệu ứng scroll-in khi cuộn
function initScrollAnimations() {
  const elements = document.querySelectorAll('.scroll');
  const animate = () => {
    const threshold = window.innerHeight - 150;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      el.classList.toggle('scrolled-in', rect.top < threshold);
    });
  };
  window.addEventListener('scroll', animate);
  animate();
}

// Lightbox ảnh (click ảnh mở rộng)
function initLightbox() {
  const images = document.querySelectorAll('.portfolio-image');
  images.forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });
}

function openLightbox(src) {
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" class="lightbox-img" alt="Image" />
      <span class="lightbox-close">&times;</span>
    </div>
  `;
  document.body.appendChild(lightbox);
  setTimeout(() => lightbox.classList.add('show'), 10);

  const close = () => {
    lightbox.classList.remove('show');
    setTimeout(() => lightbox.remove(), 300);
  };

  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  }, { once: true });
}

// Xác thực form (nếu có form liên hệ)
function initFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!isValidEmail(email)) {
      alert('Vui lòng nhập email hợp lệ!');
      return;
    }
    if (message.length < 10) {
      alert('Vui lòng nhập thông điệp ít nhất 10 ký tự!');
      return;
    }

    alert('Form đã được gửi thành công!');
    form.reset();
  });
}

function isValidEmail(email) {
  return /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// Nút đổi Dark/Light mode
function initDarkModeToggle() {
  const toggleBtn = document.getElementById('toggleMode');
  if (!toggleBtn) return;
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}

// Hiệu ứng gõ chữ nhiều dòng
function initMultiLineTyping() {
  const lines = [
    "Lê Hoàng Đạt có hơn 5 năm kinh nghiệm quản lý kho trong các lĩnh vực quản lý tài sản, quản lý kho hàng Food, Non-Food và Fulfillment.",
    "Từng làm việc tại các hệ thống lớn như kho thương mại điện tử của TIKI và chuỗi F&B IN DINING, White Palace.",
    "Thành thạo Excel nâng cao, Google Sheets, Onedrive, phần mềm ERP (Fast Business Online), Power BI, Looker Studio.",
    "Đặc biệt giỏi trong tối ưu hóa không gian kho, quy trình kiểm kê – xuất nhập và xử lý dữ liệu vận hành thực tế và lập thống kê báo cáo."
  ];

  const box = document.getElementById("typing-intro");
  let line = 0, char = 0;

  function type() {
    if (line < lines.length) {
      if (char < lines[line].length) {
        box.innerHTML += lines[line].charAt(char);
        char++;
        setTimeout(type, 25);
      } else {
        box.innerHTML += "<br/>";
        line++;
        char = 0;
        setTimeout(type, 400);
      }
    }
  }

  type();
}

// TẠO HIỆU ỨNG ĐỒNG TIỀN VÀNG RƠI
function createFallingCoins(count) {
  const container = document.querySelector('.falling-coins');
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coin.style.left = Math.random() * 100 + 'vw';
    coin.style.animationDelay = Math.random() * 10 + 's';
    coin.style.animationDuration = 6 + Math.random() * 4 + 's';
    container.appendChild(coin);
  }
}
