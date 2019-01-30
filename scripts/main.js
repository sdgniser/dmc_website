let header = document.querySelector('#ttl');
let bg = document.querySelector('.backgroundimagehack');

function blurBg() {
	bg.classList.add('blurimage');
}

function unblurBg() {
	bg.classList.remove('blurimage');
}

header.addEventListener('mouseover', blurBg);
header.addEventListener('mouseout', unblurBg);
