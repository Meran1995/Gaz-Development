const aWork = () => {
	const TypeWriter = function (textElement, words, wait = 1000) {
		this.textElement = textElement;
		this.words = words;
		this.txt = "";
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
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;
			// next word
			this.wordIndex++;
			//pause
			typeSpeed = 300;
		}

		setTimeout(() => this.type(), typeSpeed);
	};
	// Init on DOM LOAD
	document.addEventListener("DOMContentLoaded", init);

	// init App
	function init() {
		const textElement = document.querySelector(".a-work");
		const words = JSON.parse(textElement.getAttribute("data-words"));
		const wait = textElement.getAttribute("data-wait");
		// init typeWriter
		new TypeWriter(textElement, words, wait);
	}
};


aWork();