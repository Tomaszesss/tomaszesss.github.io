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

/* scripf to player */
document.addEventListener('DOMContentLoaded', function() {
var audio = document.getElementById('audioPlayer');
var playPauseBtn = document.getElementById('playPauseBtn');
var progressBar = document.getElementById('progressBar');
var progress = document.getElementById('progress');

// Funkcja odtwarzania/pauzy
function togglePlayPause() {
	if (audio.paused) {
		audio.play();
		playPauseBtn.textContent = 'Pauza'; // Zmiana tekstu na przycisku
	} else {
		audio.pause();
		playPauseBtn.textContent = 'Odtwórz'; // Zmiana tekstu na przycisku
	}
}

        // Aktualizacja paska postępu w trakcie odtwarzania
audio.ontimeupdate = function() {
	var percentage = (audio.currentTime / audio.duration) * 100;
	progress.style.width = percentage + '%';

// Jeśli utwór się zakończył, zresetuj przycisk
	if (audio.ended) {
		playPauseBtn.textContent = 'Odtwórz';
	}
};

// Przewijanie utworu po kliknięciu na pasek postępu
function seekAudio(event) {
var barWidth = progressBar.clientWidth;
var clickPosition = event.offsetX;
var seekTime = (clickPosition / barWidth) * audio.duration;
audio.currentTime = seekTime;
}

// Przykład dynamicznego ustawienia tytułu utworu
var trackTitle = document.getElementById('trackTitle');
trackTitle.textContent = "Nazwa Twojego Utworu.mp3"; // Zmieniamy tytuł


let audioContext;

function initializeAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

document.getElementById('playPauseBtn').addEventListener('click', function() {
    initializeAudioContext();
    togglePlayPause();
});


document.getElementById('playPauseBtn').addEventListener('click', function() {
    if (audio.paused) {
        audio.play().catch(function(error) {
            console.error('Odtwarzanie nie zostało dozwolone: ', error);
        });
    } else {
        audio.pause();
    }
});
};
