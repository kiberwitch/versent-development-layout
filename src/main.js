import './style.css'


// menu.js

document.addEventListener("DOMContentLoaded", () => {
    // ELEMENTLARNI OLISH
    const menuToggle = document.querySelector("[data-header-menu-toggle]");
    const menuPanel = document.querySelector("[data-header-menu-panel]");
    const menuBackdrop = document.querySelector("[data-header-menu-backdrop]");
    const tabButtons = document.querySelectorAll("[data-menu-tab-btn]");
    const tabContents = document.querySelectorAll("[data-menu-tab]");

    // FUNKSIYA: Menyuni ochish / yopish
    function toggleMenu() {
        const isOpen = !menuPanel.classList.contains("hidden");
        if (isOpen) {
            menuPanel.classList.add("hidden");
            menuBackdrop.classList.add("hidden");
        } else {
            menuPanel.classList.remove("hidden");
            menuBackdrop.classList.remove("hidden");
        }
    }

    // MENU TOGGLEANI BOSGANDA
    menuToggle.addEventListener("click", toggleMenu);

    // BACKDROP BOSILGANDA MENYUNI YOPISH
    menuBackdrop.addEventListener("click", toggleMenu);

    // TABLAR ORASIDA ALMASHISH
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.dataset.menuTabBtn;

            // Hamma tab kontentlarini yashirish
            tabContents.forEach(content => {
                content.classList.add("hidden");
            });

            // Faqat tanlangan tabni ko'rsatish
            const activeTabContent = document.querySelector(`[data-menu-tab="${targetTab}"]`);
            if (activeTabContent) activeTabContent.classList.remove("hidden");

            // Tab button styling (optional)
            tabButtons.forEach(btn => btn.classList.remove("underline", "text-black"));
            button.classList.add("underline", "text-black");
        });
    });
});


function toggleActive(element) {
    element.classList.toggle('bg-[#57A5FF]');
    element.classList.toggle('text-white');

    const checkbox = element.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
    }
}

// global qilish
window.toggleActive = toggleActive;




// Добавить стрелки radio
document.addEventListener("DOMContentLoaded", function () {

    const radio = document.getElementById("toggleArrows");
    const block = document.getElementById("arrowsBlock");

    let active = false;

    radio.addEventListener("click", function () {

        active = !active;

        if (active) {
            block.classList.remove("hidden");
        } else {
            block.classList.add("hidden");
            radio.checked = false;
        }

    });

});



// Добавить точки radio

document.addEventListener("DOMContentLoaded", function () {

    const dotsRadio = document.getElementById("toggleDots");
    const dotsBlock = document.getElementById("dotsSettings");

    let dotsActive = false;

    dotsRadio.addEventListener("click", function () {

        dotsActive = !dotsActive;

        if (dotsActive) {
            dotsBlock.classList.remove("hidden");
        } else {
            dotsBlock.classList.add("hidden");
            dotsRadio.checked = false;
        }

    });

});



//  plan



document.addEventListener("DOMContentLoaded", () => {
    // 1. Select all locked card overlays
    const lockedCards = document.querySelectorAll(".block-card .opacity-75.cursor-pointer");

    // 2. Get modal and close button
    const modal = document.getElementById("tarifModal");
    const closeBtn = document.getElementById("closeModal");

    // 3. Function to open modal and disable background scroll
    const openModal = () => {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Disable scrolling on body
    };

    // 4. Function to close modal and restore scroll
    const closeModal = () => {
        modal.classList.add("hidden");
        document.body.style.overflow = ""; // Restore scrolling
    };

    // 5. Add click event to each locked card to open modal
    lockedCards.forEach(card => {
        card.addEventListener("click", openModal);
    });

    // 6. Close modal when close button is clicked
    closeBtn.addEventListener("click", closeModal);

    // 7. Close modal if user clicks outside the modal content
    modal.addEventListener("click", (e) => {
        if(e.target === modal){
            closeModal();
        }
    });
});