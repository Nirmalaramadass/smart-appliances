// Consistent Navbar Component
// Smart Appliance Repair & Tech Support Network

(function() {
    'use strict';

    const NavbarComponent = {
        init() {
            this.renderNavbar();
            this.setupMobileMenu();
            this.setupDropdownMenus();
            this.setupScrollEffect();
        },

        renderNavbar() {
            const path = window.location.pathname.split('/').pop();
            const minimalPages = ['login.html', 'register.html', 'user-dashboard.html', 'admin-dashboard.html'];
            let navbarHTML = '';

            const isHomePage = path === '' || path === 'index.html' || path === 'index2.html';
            const isDashboardPage = path === 'user-dashboard.html' || path === 'admin-dashboard.html';

            const navButtonBase = 'nav-link font-medium tracking-tight transition-colors whitespace-nowrap text-lg leading-none rounded-full px-3 py-2';
            const navButtonInactive = 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';
            const navButtonActive = 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20';
            const dropdownItemBase = 'block px-4 py-3 text-sm transition-colors';
            const dropdownItemInactive = 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
            const dropdownItemActive = 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium';
            const authButtonBase = 'inline-flex items-center justify-center font-semibold transition-all leading-none whitespace-nowrap';
            const desktopAuthButton = `${authButtonBase} w-[132px] px-6 py-3.5 text-base rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/20`;
            const mobileAuthButton = `${authButtonBase} px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-sm hover:shadow-lg hover:shadow-blue-500/20`;

            const homeButtonClasses = `${navButtonBase} ${isHomePage ? navButtonActive : navButtonInactive}`;
            const dashboardButtonClasses = `${navButtonBase} ${isDashboardPage ? navButtonActive : navButtonInactive}`;
            const servicesClasses = `${navButtonBase} ${path === 'services.html' ? navButtonActive : navButtonInactive}`;
            const diagnosticsClasses = `${navButtonBase} ${path === 'diagnostics.html' ? navButtonActive : navButtonInactive}`;
            const plansClasses = `${navButtonBase} ${path === 'plans.html' ? navButtonActive : navButtonInactive}`;
            const knowledgeBaseClasses = `${navButtonBase} ${path === 'knowledge-base.html' ? navButtonActive : navButtonInactive}`;
            const aboutClasses = `${navButtonBase} ${path === 'about.html' ? navButtonActive : navButtonInactive}`;
            const contactClasses = `${navButtonBase} ${path === 'contact.html' ? navButtonActive : navButtonInactive}`;

            const home1Classes = `${dropdownItemBase} ${path === 'index.html' ? dropdownItemActive : dropdownItemInactive}`;
            const home2Classes = `${dropdownItemBase} ${path === 'index2.html' ? dropdownItemActive : dropdownItemInactive}`;
            const userDashboardClasses = `${dropdownItemBase} ${path === 'user-dashboard.html' ? dropdownItemActive : dropdownItemInactive}`;
            const adminDashboardClasses = `${dropdownItemBase} ${path === 'admin-dashboard.html' ? dropdownItemActive : dropdownItemInactive}`;

            if (minimalPages.includes(path)) {
                navbarHTML = `
                <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-black/5 dark:border-white/10">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between h-[88px] py-2">
                            <a href="index.html" class="flex items-center gap-3.5">
                                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <span class="text-2xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">SmartFix Pro</span>
                            </a>
                            <div class="flex items-center gap-3">
                                <button id="theme-toggle" class="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
                                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                </button>

                                <button id="rtl-toggle" class="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle RTL">
                                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12H3m18 0l-6-6m6 6l-6 6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            `;
            } else {
                navbarHTML = `
                <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-black/5 dark:border-white/10">
                    <div class="w-full px-6 lg:px-8">
                        <div class="max-w-[1400px] mx-auto flex items-center justify-between h-[88px] py-2 flex-nowrap">
                            <!-- Logo -->
                            <div class="flex-shrink-0 mr-10">
                                <a href="index.html" class="flex items-center gap-3.5">
                                    <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <span class="text-2xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">SmartFix Pro</span>
                                </a>
                            </div>

                            <!-- Desktop Navigation -->
                            <div class="hidden md:flex items-center gap-7 flex-shrink-0 overflow-visible">
                                <div class="relative group py-3">
                                    <button type="button" class="${homeButtonClasses}" aria-haspopup="true" aria-expanded="false" data-dropdown-trigger="home-dropdown">Home</button>
                                    <div id="home-dropdown" data-dropdown-menu="home-dropdown" class="absolute left-0 top-full mt-1 w-44 bg-white dark:bg-gray-800 rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 opacity-0 invisible translate-y-1 transition-all pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto z-30 overflow-hidden">
                                        <a href="index.html" class="${home1Classes}">Home 1</a>
                                        <a href="index2.html" class="${home2Classes}">Home 2</a>
                                    </div>
                                </div>
                                <a href="services.html" class="${servicesClasses}">Services</a>
                                <a href="diagnostics.html" class="${diagnosticsClasses}">Diagnostics</a>
                                <a href="plans.html" class="${plansClasses}">Plans</a>
                                <a href="knowledge-base.html" class="${knowledgeBaseClasses}">Knowledge Base</a>
                                <a href="about.html" class="${aboutClasses}">About</a>
                                <a href="contact.html" class="${contactClasses}">Contact</a>
                                <div class="relative group py-3">
                                    <button type="button" class="${dashboardButtonClasses}" aria-haspopup="true" aria-expanded="false" data-dropdown-trigger="dashboard-dropdown">Dashboard</button>
                                    <div id="dashboard-dropdown" data-dropdown-menu="dashboard-dropdown" class="absolute left-0 top-full mt-1 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 opacity-0 invisible translate-y-1 transition-all pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto z-30 overflow-hidden">
                                        <a href="user-dashboard.html" class="${userDashboardClasses}">User Dashboard</a>
                                        <a href="admin-dashboard.html" class="${adminDashboardClasses}">Admin Dashboard</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Section -->
                            <div class="hidden md:flex items-center gap-4 flex-shrink-0 ml-auto">
                                <!-- Theme Toggle -->
                                <button id="theme-toggle" class="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
                                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                </button>

                                <!-- RTL Toggle -->
                                <button id="rtl-toggle" class="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle RTL">
                                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12H3m18 0l-6-6m6 6l-6 6"></path>
                                    </svg>
                                </button>

                                <!-- Auth Buttons -->
                                <a href="login.html" class="${desktopAuthButton}">Login</a>
                                <a href="register.html" class="${desktopAuthButton}">Get Started</a>
                            </div>

                            <!-- Mobile Menu Button -->
                            <div class="md:hidden">
                                <button id="mobile-menu-button" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Mobile Menu -->
                        <div id="mobile-menu" class="hidden md:hidden pb-4">
                            <div class="flex flex-col space-y-3">
                                <div class="pl-2">
                                    <button type="button" class="mobile-dropdown-toggle w-full flex items-center justify-between pr-4 font-medium text-gray-700 dark:text-gray-300" aria-expanded="false" aria-controls="mobile-home-dropdown" data-dropdown-trigger="mobile-home-dropdown">
                                        <span>Home</span>
                                        <svg class="mobile-dropdown-icon w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    <div id="mobile-home-dropdown" data-dropdown-menu="mobile-home-dropdown" class="hidden mt-2 pl-2">
                                        <a href="index.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home 1</a>
                                        <a href="index2.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home 2</a>
                                    </div>
                                </div>
                                <a href="services.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2">Services</a>
                                <a href="diagnostics.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2">Diagnostics</a>
                                <a href="plans.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2">Plans</a>
                                <a href="knowledge-base.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2">Knowledge Base</a>
                                <a href="about.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2">About</a>
                                <a href="contact.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2">Contact</a>
                                <div class="pl-2">
                                    <button type="button" class="mobile-dropdown-toggle w-full flex items-center justify-between pr-4 font-medium text-gray-700 dark:text-gray-300" aria-expanded="false" aria-controls="mobile-dashboard-dropdown" data-dropdown-trigger="mobile-dashboard-dropdown">
                                        <span>Dashboard</span>
                                        <svg class="mobile-dropdown-icon w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    <div id="mobile-dashboard-dropdown" data-dropdown-menu="mobile-dashboard-dropdown" class="hidden mt-2 pl-2">
                                        <a href="user-dashboard.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">User Dashboard</a>
                                        <a href="admin-dashboard.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Admin Dashboard</a>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                    <button id="mobile-theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                        </svg>
                                    </button>
                                    <button id="mobile-rtl-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12H3m18 0l-6-6m6 6l-6 6"></path>
                                        </svg>
                                    </button>
                                    <a href="login.html" class="${mobileAuthButton}">Login</a>
                                    <a href="register.html" class="${mobileAuthButton}">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            `;
            }

            // Insert navbar at the beginning of body
            document.body.insertAdjacentHTML('afterbegin', navbarHTML);
            
            // Re-attach theme toggle listeners after navbar injection
            if (window.ThemeManager) {
                window.ThemeManager.attachToggleListeners();
                window.ThemeManager.updateThemeIcon();
                window.ThemeManager.updateRTLIcon();
            }
        },

        setupMobileMenu() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileDropdownToggles = document.querySelectorAll('[data-dropdown-trigger^="mobile-"]');

            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', () => {
                    const isHidden = mobileMenu.classList.toggle('hidden');

                    if (isHidden) {
                        mobileDropdownToggles.forEach((toggle) => {
                            const menuId = toggle.getAttribute('data-dropdown-trigger');
                            const menu = menuId ? document.getElementById(menuId) : null;
                            const icon = toggle.querySelector('.mobile-dropdown-icon');

                            toggle.setAttribute('aria-expanded', 'false');
                            if (menu) {
                                menu.classList.add('hidden');
                            }
                            if (icon) {
                                icon.classList.remove('rotate-180');
                            }
                        });
                    }
                });
            }
        },

        setupDropdownMenus() {
            const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');

            dropdownTriggers.forEach((trigger) => {
                const menuId = trigger.getAttribute('data-dropdown-trigger');
                const menu = menuId ? document.getElementById(menuId) : null;

                if (!menu || !trigger.classList.contains('mobile-dropdown-toggle')) {
                    return;
                }

                trigger.addEventListener('click', (event) => {
                    event.preventDefault();

                    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
                    const nextExpanded = !isExpanded;
                    const icon = trigger.querySelector('.mobile-dropdown-icon');

                    trigger.setAttribute('aria-expanded', String(nextExpanded));
                    menu.classList.toggle('hidden', !nextExpanded);

                    if (icon) {
                        icon.classList.toggle('rotate-180', nextExpanded);
                    }
                });
            });
        },

        setupScrollEffect() {
            // Keep navbar colored by default; no transparency toggle on scroll.
            const navbar = document.getElementById('navbar');
            if (navbar) {
                navbar.classList.add('bg-white/95', 'dark:bg-gray-900/95', 'backdrop-blur-md', 'shadow-lg');
            }
        }
    };

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => NavbarComponent.init());
    } else {
        NavbarComponent.init();
    }

    // Export for external use
    window.NavbarComponent = NavbarComponent;
})();
