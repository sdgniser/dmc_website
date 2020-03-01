// BG Image Hack
let header = document.querySelector('#ttl');
let introTile = document.querySelector('#landing');
let bg = document.querySelector('.backgroundimagehack');
let fb = document.querySelector('#social .fb a');
let yt = document.querySelector('#social .yt a');
let ig = document.querySelector('#social .ig a');
let an = document.querySelector('#landing-links .about-niser a');
let cu = document.querySelector('#landing-links .contact-us a');

function turnSocialOn() {
	fb.classList.add('on');
	yt.classList.add('on');
	ig.classList.add('on');
	an.classList.add('on');
	cu.classList.add('on');
}

function turnSocialOff() {
	fb.classList.remove('on');
	yt.classList.remove('on');
	ig.classList.remove('on');
	an.classList.add('on');
	cu.classList.add('on');
}

function blurBg() {
	bg.classList.add('blurimage');
}

function unblurBg() {
	bg.classList.remove('blurimage');
}

header.addEventListener('mouseover', function() {
	blurBg();
	turnSocialOn();
});

header.addEventListener('mouseout', function() {
	unblurBg();
	turnSocialOff()
});

fb.addEventListener('mouseover', blurBg);
fb.addEventListener('mouseout', unblurBg);

yt.addEventListener('mouseover', blurBg);
yt.addEventListener('mouseout', unblurBg);

ig.addEventListener('mouseover', blurBg);
ig.addEventListener('mouseout', unblurBg);

an.addEventListener('mouseover', blurBg);
an.addEventListener('mouseout', unblurBg);

cu.addEventListener('mouseover', blurBg);
cu.addEventListener('mouseout', unblurBg);

const gallery_image_resizer = function() {
	let images = document.querySelectorAll('.gallery-pics');
	for (let i = 0; i < images.length; i++)
		if (i % 2) {
			if (screen.width == 1024 && screen.height == 768) // iPads in Landscape
				images[i].style.minHeight = '62vh';
			else
				images[i].style.minHeight = '56vh';

			images[i].style.zIndex = '2';
			images[i].style.boxShadow = '0 9px 6px -6px black';
		}
}

gallery_image_resizer();

var myFullPage = new fullpage('#fullpage', {
	scrollingSpeed: 800,
	verticalCentered: false,
	recordHistory: false,
	sectionSelector: '.fp-section',
	anchors: ['firstTile', 'secondTile', 'thirdTile', 'fourthTile', 'fifthTile', 'lastTile'],
	menu: '#nav-list',
	animateAnchor: true,
});

var activeSec = fullpage_api.getActiveSection();
console.log(activeSec);