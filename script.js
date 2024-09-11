function loadContent(language) {
	document.querySelector('.language-selection').style.display = 'none';
	document.querySelector('.wlanguage-selection').style.display = 'none';            

if (language === 'pl') {
	document.getElementById('content-pl').style.display = 'block';
	} else if (language === 'en') {
	document.getElementById('content-en').style.display = 'block';
	}
}