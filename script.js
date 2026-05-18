document.addEventListener('DOMContentLoaded', () => {
    // 1. Efekt stínu u navigace při scrollování
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // 2. Mobilní menu (Hamburger toggle)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
        });
    }
});
