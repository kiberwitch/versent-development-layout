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
