import {
	debounce
} from "./utils";

function openMobileMenu (menu) {
	menu.classList.add('open', 'fade-in')
}

function closeMobileMenu (menu) {
	menu.classList.remove('open', 'fade-in');
}

export function mobileNav() {
	const burger = document.querySelector('.mobile-menu-burger');
	const mobileMenuContainer  = document.querySelector('.nav-wrapper');


	burger.addEventListener('click', () => {
		openMobileMenu(mobileMenuContainer);
	})

	mobileMenuContainer.addEventListener('click', (e) => {
		if (e.target === mobileMenuContainer ) {
			closeMobileMenu(mobileMenuContainer)
		}
	})

	window.addEventListener('resize', debounce(() => {
		if (window.innerWidth > 991) closeMobileMenu(mobileMenuContainer);
	}, 300))
}


