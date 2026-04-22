// ==========================================
// 1. TẮT MÀN HÌNH CHỜ (PRELOADER) ĐỂ HẾT BỊ XOAY
// ==========================================
function hidePreloader() {
    const preloader = document.getElementById("preloader");
    if (preloader && preloader.style.display !== "none") {
        preloader.style.opacity = "0"; // Làm mờ
        setTimeout(function() {
            preloader.style.display = "none"; // Ẩn hoàn toàn sau 0.5s
        }, 500);
    }
}
// Chạy hàm tắt preloader khi tải xong web, hoặc bắt buộc tắt sau 1.5 giây
window.addEventListener("load", hidePreloader);
setTimeout(hidePreloader, 1500); 

// ==========================================
// KHI WEB ĐÃ SẴN SÀNG THÌ CHẠY CÁC CHỨC NĂNG BÊN DƯỚI
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Đại học Đà Lạt đã sẵn sàng!");

    // 2. KÍCH HOẠT HIỆU ỨNG CHUYỂN ĐỘNG (AOS) - RẤT QUAN TRỌNG
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // 3. LOGIC TỰ ĐỘNG SÁNG (HIGHLIGHT) MENU THEO TRANG ĐANG ĐỨNG
    const currentUrl = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Xóa các class làm đậm/đổi màu cũ
        link.classList.remove('active', 'fw-bold', 'text-success');
        
        const linkHref = link.getAttribute('href');
        // Trùng khớp URL thì thêm class để làm nổi bật Menu
        if (linkHref === currentUrl || (currentUrl === '' && linkHref === 'index.html')) {
            link.classList.add('active', 'fw-bold', 'text-success');
        }
    });

    // 4. XỬ LÝ THÔNG BÁO KHI GỬI FORM LIÊN HỆ
    const contactForm = document.getElementById('contactForm'); // Lưu ý: Form trong HTML phải có id="contactForm"
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Chặn không cho trang load lại
            alert('Cảm ơn bạn đã gửi liên hệ. Chúng tôi sẽ phản hồi sớm nhất!');
            contactForm.reset(); // Xóa trắng form sau khi gửi
        });
    }

    // 5. CÁC TÍNH NĂNG NHỎ: NÚT LÊN ĐẦU TRANG & THANH TIẾN TRÌNH CUỘN
    const btnBackToTop = document.getElementById("btnBackToTop");
    const progressBar = document.getElementById("progressBar");
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
        // Hiển thị nút lên đầu trang khi cuộn xuống
        if (btnBackToTop) {
            btnBackToTop.style.display = window.scrollY > 300 ? "block" : "none";
        }
        
        // Làm đậm viền bóng của Menu khi cuộn
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("shadow");
                navbar.classList.remove("shadow-sm");
            } else {
                navbar.classList.remove("shadow");
                navbar.classList.add("shadow-sm");
            }
        }

        // Chạy thanh tiến trình trên cùng màn hình
        if (progressBar) {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        }
    });

    // Sự kiện click cho nút Lên đầu trang
    if (btnBackToTop) {
        btnBackToTop.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ==========================================
    // 6. HIỆU ỨNG ĐẾM SỐ (ANIMATED COUNTER) ĐÃ ĐƯỢC THÊM VÀO
    // ==========================================
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
        // Dùng IntersectionObserver để chỉ đếm khi người dùng cuộn chuột tới phần đó
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target'); // Lấy số liệu đích
                        const count = +counter.innerText;
                        
                        // Tốc độ nhảy số (số càng to thì nhảy càng chậm)
                        const speed = 150; 
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 15); // Lặp lại sau 15ms
                        } else {
                            counter.innerText = target; // Đảm bảo dừng đúng số
                        }
                    };
                    updateCount();
                    observer.unobserve(counter); // Xong thì ngừng theo dõi
                }
            });
        }, { threshold: 0.8 }); // 0.8 nghĩa là cuộn thấy 80% khối đó mới bắt đầu đếm

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
});