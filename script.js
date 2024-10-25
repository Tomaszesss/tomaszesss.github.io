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

playPauseBtn.addEventListener('click', togglePlayPause);

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
});

// Upewniamy się, że DOM został załadowany
document.addEventListener('DOMContentLoaded', function() {
    
    // Pobieramy kontener z nazwą pliku w klasie
    var container = document.querySelector('#audioPlayerContainer');
    
    // Odczytujemy nazwę pliku z klasy
    var fileName = container.className;

    // Prefix ścieżki do pliku audio
    var filePathPrefix = 'https://tomaszesss.online/Audio/';  // np. ścieżka do folderu z muzyką

    // Pełna ścieżka do pliku audio
    var audioFilePath = filePathPrefix + fileName;

    // Tworzymy kontener dla odtwarzacza
    var playerContainer = document.createElement('div');
    playerContainer.id = 'playerContainer';

    // Tworzymy tytuł utworu
    var trackTitle = document.createElement('h1');
    trackTitle.id = 'trackTitle';
    trackTitle.textContent = fileName; // Wyświetla nazwę pliku jako tytuł
    playerContainer.appendChild(trackTitle);

    // Tworzymy element audio
    var audio = document.createElement('audio');
    audio.id = 'audioPlayer';
    var source = document.createElement('source');
    source.src = audioFilePath; // Dodajemy dynamicznie wygenerowaną ścieżkę
    source.type = 'audio/mpeg';
    audio.appendChild(source);
    playerContainer.appendChild(audio);

    // Tworzymy przycisk play/pause
    var playPauseBtn = document.createElement('button');
    playPauseBtn.id = 'playPauseBtn';
    playPauseBtn.textContent = 'Odtwórz'; // Tekst początkowy przycisku
    playerContainer.appendChild(playPauseBtn);

    // Tworzymy pasek postępu
    var progressBar = document.createElement('div');
    progressBar.id = 'progressBar';

    var progress = document.createElement('div');
    progress.id = 'progress';
    progressBar.appendChild(progress);
    playerContainer.appendChild(progressBar);

    // Dodajemy kontener odtwarzacza do body
    container.appendChild(playerContainer);

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

    // Obsługa kliknięcia przycisku play/pause
    playPauseBtn.addEventListener('click', togglePlayPause);

    // Aktualizacja paska postępu
    audio.ontimeupdate = function() {
        var percentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percentage + '%';

        // Zresetuj przycisk, gdy utwór się skończy
        if (audio.ended) {
            playPauseBtn.textContent = 'Odtwórz';
        }
    };

    // Obsługa kliknięcia na pasek postępu (przewijanie utworu)
    progressBar.addEventListener('click', function(event) {
        var barWidth = progressBar.clientWidth;
        var clickPosition = event.offsetX;
        var seekTime = (clickPosition / barWidth) * audio.duration;
        audio.currentTime = seekTime;
    });

});
