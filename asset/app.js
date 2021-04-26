const aWork = () => {
	const TypeWriter = function (textElement, words, wait = 1000) {
		this.textElement = textElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	};

	// type Method
	TypeWriter.prototype.type = function () {
		//current index
		const current = this.wordIndex % this.words.length;
		// full text
		const fullTxt = this.words[current];
		// if deleted
		if (this.isDeleting) {
			//remove
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			//add
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// insert txt into Element
		this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

		// Type Speed
		let typeSpeed = 80;

		if (this.isDeleting) {
			typeSpeed /= 2;
		}

		// complite txt
		if (!this.isDeleting && this.txt === fullTxt) {
			//make pause
			typeSpeed = this.wait;
			//set to true
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			// next word
			this.wordIndex++;
			//pause
			typeSpeed = 300;
		}

		setTimeout(() => this.type(), typeSpeed);
	};
	// Init on DOM LOAD
	document.addEventListener('DOMContentLoaded', init);

	// init App
	function init() {
		const textElement = document.querySelector('.a-work');
		const words = JSON.parse(textElement.getAttribute('data-words'));
		const wait = textElement.getAttribute('data-wait');
		// init typeWriter
		new TypeWriter(textElement, words, wait);
	}
};

aWork();

const stickyNavbar = () => {
	const sticky = document.querySelector('.navbar');

	addClassHeader = () => {
		sticky.classList.add('sticky');
	};
	removeClassHeader = () => {
		sticky.classList.remove('sticky');
	};
	window.addEventListener('scroll', function () {
		let scrollDown = window.scrollY;
		if (scrollDown > 0) {
			addClassHeader();
		} else {
			removeClassHeader();
		}
	});
};

stickyNavbar();

const hamburgerToggle = () => {
	const burger = document.querySelector('.hamburger-btn');
	const menu = document.querySelector('.menu');
	const navLinks = document.querySelectorAll('.menu li');

	burger.addEventListener('click', () => {
		menu.classList.toggle('active');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.6
				}s`;
			}
		});

		burger.classList.toggle('rotate');
	});
};

hamburgerToggle();

const filter = () => {
	const tabs = document.querySelectorAll('.filterBtn li');
	const all = document.querySelectorAll('.all');
	const js = document.querySelectorAll('.js');
	const react = document.querySelectorAll('.project-content .react');
	const node = document.querySelectorAll('.project-content .node');
	const restApi = document.querySelectorAll('.project-content .rest-api');

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			tabs.forEach((tab) => {
				tab.classList.remove('active');
			});
			tab.classList.add('active');

			const tabAttr = tab.getAttribute('data-tabs');

			if (tabAttr === 'js') {
				js.forEach((javascript) => {
					javascript.style.display = 'block';
				});
			} else if (tabAttr === 'react') {
				react.forEach((r) => {
					r.style.display = 'block';
				});
			} else if (tabAttr === 'node') {
				node.forEach((nodejs) => {
					nodejs.style.display = 'block';
				});
			} else if (tabAttr === 'rest-api') {
				restApi.forEach((rapi) => {
					rapi.style.display = 'block';
				});
			} else
				all.forEach((item) => {
					item.style.display = 'block';
				});
				// all section need to fix it!!!
		});
	});
};

filter();

// const filterProjects = () => {
// 	let filterBtn = document.querySelector('#filterproject').children;
// 	let displayFilter = document.querySelector('#filteritems').children;

// 	for (let i = 0; i < filterBtn.length; i++) {
// 		filterBtn[i].onclick = function () {
// 			for (let x = 0; x < filterBtn.length; x++) {
// 				filterBtn[x].classList.remove('active');
// 			}
// 		};
// 		this.classList.add('active');
// 		const displayItems = this.getAttribute('data-filter');
// 		for (let z = 0; z < filterBtn.length; z++) {
// 			displayFilter[z].style.transform = 'scale(0)';
// 			setTimeout(() => {
// 				displayFilter[z].style.display = 'none';
// 			}, 500);

// 			if (
// 				displayFilter[z].getAttribute('data-category') == displayItems ||
// 				displayItems == 'all'
// 			) {
// 				displayFilter[z].style.transform = 'scale(1)';
// 				setTimeout(() => {
// 					displayFilter[z].style.display = 'block';
// 				}, 500);
// 			}
// 		}
// 	}
// };

// filterProjects();
