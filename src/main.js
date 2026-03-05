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
