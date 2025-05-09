// Thêm sự kiện khi trang web đã tải xong
document.addEventListener('DOMContentLoaded', function () {
  // 1. Hiệu ứng thay đổi navbar khi cuộn trang
  window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // 2. Tính năng scroll to top
  const scrollToTopBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 3. Scroll Animations (hiệu ứng khi cuộn trang đến phần tử)
  const scrollElements = document.querySelectorAll('.scroll');
  const scrollIntoView = () => {
    scrollElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition < windowHeight - 150) {
        element.classList.add('scrolled-in');
      } else {
        element.classList.remove('scrolled-in');
      }
    });
  };

  // Thực thi khi cuộn trang
  window.addEventListener('scroll', scrollIntoView);
  scrollIntoView(); // Kiểm tra khi mới tải trang

  // 4. Thêm hiệu ứng lightbox cho ảnh trong portfolio
  const images = document.querySelectorAll('.portfolio-image');
  images.forEach(image => {
    image.addEventListener('click', function () {
      openLightbox(image.src);
    });
  });

  function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${imageSrc}" alt="Image" class="lightbox-img">
        <span class="lightbox-close">&times;</span>
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', function () {
      document.body.removeChild(lightbox);
    });
  }

  // 5. Form validation cho form liên hệ
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng gửi form
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!validateEmail(email)) {
      alert('Vui lòng nhập một email hợp lệ!');
      return;
    }

    if (message.length < 10) {
      alert('Vui lòng nhập thông điệp ít nhất 10 ký tự!');
      return;
    }

    alert('Form đã được gửi thành công!');
    contactForm.reset(); // Xóa form sau khi gửi
  });

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
});
