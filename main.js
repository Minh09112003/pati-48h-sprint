const currencyBtn = document.getElementById('currency-btn');
const currencyDropdown = document.getElementById('currency-dropdown');
const arrowIcon = document.getElementById('arrow-icon');

// 1. Xử lý khi nhấn nút USD để đóng/mở
currencyBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Ngăn sự kiện click lan lên document
    const isHidden = currencyDropdown.classList.contains('hidden');
    
    if (isHidden) {
        currencyDropdown.classList.remove('hidden');
        arrowIcon.classList.add('rotate-180');
    } else {
        currencyDropdown.classList.add('hidden');
        arrowIcon.classList.remove('rotate-180');
    }
});

// 2. QUAN TRỌNG: Ngăn việc đóng menu khi nhấn VÀO TRONG dropdown (bao gồm cả ô input)
currencyDropdown.addEventListener('click', (e) => {
    e.stopPropagation(); // Khi bạn nhấn vào ô search, sự kiện dừng lại ở đây, không lan lên document
});

// 3. Click ra ngoài bất kỳ đâu trên trang thì đóng menu
document.addEventListener('click', () => {
    currencyDropdown.classList.add('hidden');
    arrowIcon.classList.remove('rotate-180');
});


const mainHeader = document.getElementById("main-header");
const miniHeader = document.getElementById("mini-header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current > 50 && current > lastScroll) {
        // Scroll xuống
        mainHeader.style.opacity = "0";
        mainHeader.style.pointerEvents = "none";

        miniHeader.classList.add("show");
    } else if (current < 50) {
        // Scroll lên gần đầu trang
        mainHeader.style.opacity = "1";
        mainHeader.style.pointerEvents = "auto";

        miniHeader.classList.remove("show");
    }

    lastScroll = current;
});


document.addEventListener("DOMContentLoaded", function () {

    const thumbnails = document.querySelectorAll(".thumb-item");
    const mainImage = document.getElementById("main-product-image");
    const container = document.getElementById("thumbnail-container");
    const btnDown = document.getElementById("thumb-down");

    const THUMB_HEIGHT = 96 + 12; 
    // 96px = h-24, 12px = gap ~ (gồm gap-3 = 12px)
    // tổng khoảng scroll mỗi lần: 108px

    // ==============================
    // CLICK THAY ẢNH LỚN
    // ==============================
    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {

            // cập nhật ảnh lớn
            const fullImage = thumb.getAttribute("data-full");
            if (fullImage) mainImage.src = fullImage;

            // reset active
            thumbnails.forEach(t => {
                t.classList.remove("border-2", "border-[#4A0000]");
                t.classList.add("border", "border-black");
            });

            // add active
            thumb.classList.remove("border", "border-black");
            thumb.classList.add("border-2", "border-[#4A0000]");
        });
    });

    // ==============================
    // NÚT MŨI TÊN ĐI XUỐNG
    // ==============================
    btnDown.addEventListener("click", () => {
        container.scrollBy({
            top: THUMB_HEIGHT,
            behavior: "smooth"
        });
    });

});


// Auto scroll to active when load
const active = document.querySelector(".thumb-item.active-thumb");
if (active) {
    active.scrollIntoView({ block: "center", behavior: "instant" });
}




// Lấy các phần tử cần thiết
const mainImg = document.getElementById('main-product-image');
const thumbnails = document.querySelectorAll('.thumb-item');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        // 1. Lấy link ảnh từ data attribute
        const newSrc = this.getAttribute('data-full');

        // 2. Tạo hiệu ứng mờ dần (Fade out) trước khi đổi ảnh
        mainImg.style.opacity = '0';
        
        setTimeout(() => {
            // 3. Đổi link ảnh
            mainImg.src = newSrc;
            // 4. Hiện lại (Fade in)
            mainImg.style.opacity = '1';
        }, 200); // Thời gian khớp với transition-opacity của CSS

        // 5. Cập nhật trạng thái Border (Active)
        thumbnails.forEach(t => {
            t.classList.remove('active-thumb', 'border-[#4A0000]', 'border-2');
            t.classList.add('border-gray-200', 'border');
        });
        
        this.classList.add('active-thumb', 'border-[#4A0000]', 'border-2');
        this.classList.remove('border-gray-200', 'border');
    });
});


// Optional: Add animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, {
        threshold: 0.1
    });

    const stats = document.querySelectorAll('.space-y-3');
    stats.forEach(stat => observer.observe(stat));
});




// --- LOGIC SECTION 2: Longevity ---
const lgCards = document.querySelectorAll(".lg-card");
const lgPanels = document.querySelectorAll(".lg-content-panel");

lgCards.forEach(card => {
    card.addEventListener("click", () => {
        const id = card.getAttribute("data-lg");

        // 1) Xóa active ở tất cả các card
        lgCards.forEach(c => {
            c.classList.remove("ring-2", "ring-[#9b5e2a]", "bg-active-lg");
        });

        // 2) Active card hiện tại
        card.classList.add("ring-2", "ring-[#9b5e2a]", "bg-active-lg");

        // 3) Ẩn tất cả panel
        lgPanels.forEach(p => p.classList.add("hidden"));

        // 4) Hiện panel tương ứng
        document.querySelector(`.lg-content-panel[data-lg="${id}"]`)
            .classList.remove("hidden");
    });
});




 document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("giftModal");
    const closeBtn = document.getElementById("closeModal");
    const passBtn = document.getElementById("passModal");

    // Sau 5s hiện modal
    setTimeout(() => {
      modal.classList.remove("hidden");
    }, 5000);

    // Hàm đóng modal
    function closeModal() {
      modal.classList.add("hidden");
    }

    // Close khi nhấn X
    closeBtn.addEventListener("click", closeModal);

    // Close khi nhấn "I'll pass"
    passBtn.addEventListener("click", closeModal);
  });




// =========================
// Longevity Pillars Logic
// =========================

document.querySelectorAll(".pillar-card-longevity").forEach(card => {
    card.addEventListener("click", () => {

        // Bỏ active ở tất cả
        document.querySelectorAll(".pillar-card-longevity").forEach(c => {
            c.classList.remove("active-longevity");
        });

        // Thêm active vào card được click
        card.classList.add("active-longevity");

        const id = card.dataset.pillar;

        // Ẩn hết detail cards
        document.querySelectorAll("[id^='pillars-detail-longevity-']").forEach(d => {
            d.classList.add("hidden");
        });

        // Hiện đúng detail
        document.getElementById(`pillars-detail-longevity-${id}`).classList.remove("hidden");
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".scroll-container");

    let isDown = false;
    let startX;
    let scrollLeft;

    // ----- Kéo bằng chuột -----
    container.addEventListener("mousedown", (e) => {
        isDown = true;
        container.classList.add("active");
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.parentElement.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
        isDown = false;
    });

    container.addEventListener("mouseup", () => {
        isDown = false;
    });

    container.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.3; // tốc độ kéo
        container.parentElement.scrollLeft = scrollLeft - walk;
    });



    // ----- Auto scroll -----
    let autoScrollSpeed = 0.8; 
    let autoScrolling = true;

    function autoScroll() {
        if (autoScrolling) {
            container.parentElement.scrollLeft += autoScrollSpeed;
        }
        requestAnimationFrame(autoScroll);
    }
    autoScroll();

    // ----- Hover vào thì dừng -----
    container.addEventListener("mouseenter", () => {
        autoScrolling = false;
    });

    container.addEventListener("mouseleave", () => {
        autoScrolling = true;
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeModal = document.getElementById("closeVideoModal");

    document.querySelectorAll(".video-card video").forEach(video => {
        video.addEventListener("click", (e) => {
            e.stopPropagation();

            // LẤY SRC ĐÚNG CÁCH
            const sourceEl = video.querySelector("source");
            const src = sourceEl.getAttribute("src");

            // GÁN VÀ SHOW MODAL
            modalVideo.src = src;
            modal.classList.remove("hidden");
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
        modalVideo.pause();
        modalVideo.src = "";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
            modalVideo.pause();
            modalVideo.src = "";
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("supplyBtn");
    const dropdown = document.getElementById("supplyDropdown");
    const icon = document.getElementById("dropdownIcon");
    const selectedBox = document.getElementById("supplySelected");

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("hidden");
        icon.classList.toggle("rotate-180");
    });

    document.querySelectorAll(".supply-option").forEach(option => {
        option.addEventListener("click", () => {
            const title = option.dataset.title;
            const price = option.dataset.price;

            selectedBox.innerHTML = `
                <span class="text-[14px] font-bold text-[#4A0000]">${title}</span>
                <span class="text-[12px] font-semibold text-[#4A0000]">${price}</span>
            `;

            dropdown.classList.add("hidden");
            icon.classList.remove("rotate-180");
        });
    });

    document.addEventListener("click", () => {
        dropdown.classList.add("hidden");
        icon.classList.remove("rotate-180");
    });
});






document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.5, // Kích hoạt khi 50% section xuất hiện
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".counter-value");
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            
            // Tốc độ chạy: số càng lớn chạy càng nhanh để kết thúc cùng lúc
            const speed = target / 100; 

            if (count < target) {
              counter.innerText = Math.ceil(count + speed);
              setTimeout(updateCount, 100); // 20ms mỗi bước nhảy
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
        // Ngừng quan sát sau khi đã chạy xong hiệu ứng một lần
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Chọn section chứa các con số để quan sát
  const targetSection = document.querySelector("section.relative");
  if (targetSection) {
    counterObserver.observe(targetSection);
  }
});



const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("shopDropdown");
const arrow = document.getElementById("shopArrow");

hamburger.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
});

// Cho phép click trực tiếp vào chữ “Shop” cũng toggle
document.getElementById("shopTrigger").addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
    arrow.classList.toggle("rotate-180");
});