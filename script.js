function loadContent(language) {
	document.querySelector('.divtop').style.display = 'none';
	document.querySelector('.divs').style.display = 'none';

if (language === 'pl') {
	document.getElementById('content-pl').style.display = 'block';
	} else if (language === 'en') {
	document.getElementById('content-en').style.display = 'block';
	}
}
function EN() {
	window.location.href = "https://tomaszesss.online/EN/home";
}