// Theme Toggle and RTL/LTR Support
// Smart Appliance Repair & Tech Support Network

(function() {
    'use strict';

    // Theme Management
    const ThemeManager = {
        STORAGE_KEY: 'tech-support-theme',
        RTL_KEY: 'tech-support-rtl',
        
        init() {
            this.loadTheme();
            this.loadRTL();
            this.setupEventListeners();
            this.applyTheme();
            this.applyRTL();
        },

        loadTheme() {
            const savedTheme = localStorage.getItem(this.STORAGE_KEY);
            if (savedTheme) {
                this.currentTheme = savedTheme;
            } else {
                // Check system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                this.currentTheme = prefersDark ? 'dark' : 'light';
            }
        },

        loadRTL() {
            const savedRTL = localStorage.getItem(this.RTL_KEY);
            this.isRTL = savedRTL === 'true';
        },

        setupEventListeners() {
            this.attachToggleListeners();
            
            // Listen for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem(this.STORAGE_KEY)) {
                    this.currentTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme();
                }
            });
        },

        attachToggleListeners() {
            // Remove existing listeners to prevent duplicates
            this.removeToggleListeners();

            // Theme Toggle
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                this.themeToggleHandler = () => this.toggleTheme();
                themeToggle.addEventListener('click', this.themeToggleHandler);
            }

            // RTL Toggle
            const rtlToggle = document.getElementById('rtl-toggle');
            if (rtlToggle) {
                this.rtlToggleHandler = () => this.toggleRTL();
                rtlToggle.addEventListener('click', this.rtlToggleHandler);
            }

            // Mobile Theme Toggle
            const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
            if (mobileThemeToggle) {
                this.mobileThemeToggleHandler = () => this.toggleTheme();
                mobileThemeToggle.addEventListener('click', this.mobileThemeToggleHandler);
            }

            // Mobile RTL Toggle
            const mobileRtlToggle = document.getElementById('mobile-rtl-toggle');
            if (mobileRtlToggle) {
                this.mobileRtlToggleHandler = () => this.toggleRTL();
                mobileRtlToggle.addEventListener('click', this.mobileRtlToggleHandler);
            }
        },

        removeToggleListeners() {
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle && this.themeToggleHandler) {
                themeToggle.removeEventListener('click', this.themeToggleHandler);
            }

            const rtlToggle = document.getElementById('rtl-toggle');
            if (rtlToggle && this.rtlToggleHandler) {
                rtlToggle.removeEventListener('click', this.rtlToggleHandler);
            }

            const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
            if (mobileThemeToggle && this.mobileThemeToggleHandler) {
                mobileThemeToggle.removeEventListener('click', this.mobileThemeToggleHandler);
            }

            const mobileRtlToggle = document.getElementById('mobile-rtl-toggle');
            if (mobileRtlToggle && this.mobileRtlToggleHandler) {
                mobileRtlToggle.removeEventListener('click', this.mobileRtlToggleHandler);
            }
        },

        toggleTheme() {
            this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem(this.STORAGE_KEY, this.currentTheme);
            this.applyTheme();
            this.updateThemeIcon();
        },

        toggleRTL() {
            this.isRTL = !this.isRTL;
            localStorage.setItem(this.RTL_KEY, this.isRTL);
            this.applyRTL();
            this.updateRTLIcon();
        },

        applyTheme() {
            const html = document.documentElement;
            const body = document.body;
            
            if (this.currentTheme === 'dark') {
                html.classList.add('dark');
                html.classList.remove('light');
                body.classList.add('dark');
                body.classList.remove('light');
            } else {
                html.classList.add('light');
                html.classList.remove('dark');
                body.classList.add('light');
                body.classList.remove('dark');
            }

            this.updateThemeIcon();
        },

        applyRTL() {
            const html = document.documentElement;
            
            if (this.isRTL) {
                html.setAttribute('dir', 'rtl');
                html.classList.add('rtl');
                html.classList.remove('ltr');
            } else {
                html.setAttribute('dir', 'ltr');
                html.classList.add('ltr');
                html.classList.remove('rtl');
            }

            this.updateRTLIcon();
        },

        updateThemeIcon() {
            const themeToggle = document.getElementById('theme-toggle');
            const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
            
            const iconPath = this.currentTheme === 'dark' 
                ? `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>`
                : `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>`;

            if (themeToggle) {
                const icon = themeToggle.querySelector('svg');
                if (icon) {
                    icon.innerHTML = iconPath;
                }
            }

            if (mobileThemeToggle) {
                const icon = mobileThemeToggle.querySelector('svg');
                if (icon) {
                    icon.innerHTML = iconPath;
                }
            }
        },

        updateRTLIcon() {
            const rtlToggle = document.getElementById('rtl-toggle');
            const mobileRtlToggle = document.getElementById('mobile-rtl-toggle');

            // Show the target mode on the button:
            // LTR view -> show "RTL", RTL view -> show "LTR".
            const nextModeLabel = this.isRTL ? 'LTR' : 'RTL';
            const iconPath = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${nextModeLabel}</text>`;

            if (rtlToggle) {
                const icon = rtlToggle.querySelector('svg');
                if (icon) {
                    icon.innerHTML = iconPath;
                }
                rtlToggle.setAttribute('aria-label', `Switch to ${nextModeLabel} mode`);
            }

            if (mobileRtlToggle) {
                const icon = mobileRtlToggle.querySelector('svg');
                if (icon) {
                    icon.innerHTML = iconPath;
                }
                mobileRtlToggle.setAttribute('aria-label', `Switch to ${nextModeLabel} mode`);
            }
        }
    };

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
    } else {
        ThemeManager.init();
    }

    // Export for external use
    window.ThemeManager = ThemeManager;
})();
