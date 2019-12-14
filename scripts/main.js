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
			images[i].style.minHeight = '56vh';
			images[i].style.zIndex = '2';
			images[i].style.boxShadow = '0 9px 6px -6px black';
		}
}

gallery_image_resizer();

// From here: https://codepen.io/toddwebdev/pen/yExKoj
// const slider = document.querySelector('.gallery-slider');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });

// function disableScrollify(toggle){
// 	if(toggle){
// 		$.scrollify.destroy();
// 	} else {
// 		// For smooth scrolling
// 		var cnt = 1;
// 		$.scrollify({
// 			section: ".tiles",
// 			sectionName: "section-name",
// 			
// 			easing: "easeOutExpo",
// 			touchScroll: true,
// 			setHeights: false,
// 			// standardScrollElements: '.timeline', // Un-comment this to make .timeline scrollable - breaks Scrollify's scrolling though
// 			offset: -8,
// 			after: function() {
// 				var cols = ['#9bc0ff','#ff847e','#99dd9b','#f8c28d','#d4b89b'];
// 				// var urls = ['../images/backgrounds/madam.png', '../images/backgrounds/apratim.png', '../images/backgrounds/satyam.png', '../images/backgrounds/jamal.png'];
// 				$('#fshack').css('background-color', cols[cnt]);
// 				// $('#fshack').css('background-image', 'url("' + urls[cnt] + '")');
// 				// $('.backgroundimagehack').css('background-image', 'url("' + urls[cnt] + '")');
// 				cnt++;
// 				cnt %= cols.length;
// 			}
// 		});
// 	}
// }

// $.scrollify({
// 	section : ".scrollify-section",
// 	scrollSpeed: 2000,
// 	setHeights: false
// });

// To disable Scrollify on Phones/Tablets
// $(document).ready(function(){
// 	if($(window).width() < 1200){
// 		disableScrollify(true);
// 	} else {
// 		disableScrollify(false);
// 	}
// });
