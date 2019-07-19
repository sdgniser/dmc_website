let header = document.querySelector('#ttl');
let introTile = document.querySelector('#intro');
let bg = document.querySelector('.backgroundimagehack');
let fb = document.querySelector('#social .fb a');
let yt = document.querySelector('#social .yt a');
let ig = document.querySelector('#social .ig a');

function turnSocialOn() {
	fb.classList.add('on');
	yt.classList.add('on');
	ig.classList.add('on');
}

function turnSocialOff() {
	fb.classList.remove('on');
	yt.classList.remove('on');
	ig.classList.remove('on');
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

(function($){
  'use strict';
    $(window).on('load', function () {
        if ($(".pre-loader").length > 0)
        {
            $(".pre-loader").fadeOut("slow");
        }
    });
})(jQuery)


// let t = document.querySelector('.tiles');

// For changing BG on scroll
// jQuery(window).scroll(function() {
// 	var windowHeight = jQuery(window).height(); // distance to trigger
//     var scrolledFromtop = jQuery(window).scrollTop();
//     if (scrolledFromtop > windowHeight) {
// 		jQuery('body').addClass('scrolled1');
// 		// t.classList.add('scrolled10');
// 	}
// 	else {
//         jQuery('body').removeClass('scrolled1');
// 	}
	
// 	if (scrolledFromtop > 1.98*windowHeight) {
//         jQuery('body').addClass('scrolled2');
// 	}
// 	else {
//         jQuery('body').removeClass('scrolled2');
// 	}
	
// 	if (scrolledFromtop > 2.98*windowHeight) {
//         jQuery('body').addClass('scrolled3');
// 	}
// 	else {
//         jQuery('body').removeClass('scrolled3');
// 	}
// });

// For changing BG Image at set intervals
var urls = ['../images/backgrounds/webp/madam.webp', '../images/backgrounds/webp/apratim.webp', '../images/backgrounds/webp/satyam.webp', '../images/backgrounds/webp/jamal.webp'];

var count = 1;
// $('body').css('background-image', 'url("' + urls[0] + '")');
setInterval(function() {
  $('body').css('background-image', 'url("' + urls[count] + '")');
  $('.backgroundimagehack').css('background-image', 'url("' + urls[count] + '")');
  count++;
  count %= urls.length;
}, 4000);


// For smooth scrolling
$(function() {
	$.scrollify({
		section: ".tiles",
		sectionName: "hello",
		scrollSpeed: 100,
		easing: "easeOutExpo",
		touchScroll: true,
		setHeights: false,
		standardScrollElements: '.timeline',
		offset: -8
	});
  });

// PRELOADER - Wrap every letter in a span
$('.ml1 .letters').each(function(){
	$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	});

anime.timeline({loop: false})
.add({
	targets: '.ml1 .letter',
	scale: [0.3,1],
	opacity: [0,1],
	translateZ: 0,
	easing: "easeOutExpo",
	duration: 600,
	delay: function(el, i) {
	return 70 * (i+1)
	}
}).add({
	targets: '.ml1 .line',
	scaleX: [0,1],
	opacity: [0.5,1],
	easing: "easeOutExpo",
	duration: 700,
	offset: '-=875',
	delay: function(el, i, l) {
	return 80 * (l - i);
	}
}).add({
	targets: '.ml1',
	opacity: 0,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1000
});