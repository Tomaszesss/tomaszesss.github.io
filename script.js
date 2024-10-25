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

// Upewniamy się, że DOM został załadowany
document.addEventListener('DOMContentLoaded', function() {
    
    // Pobieramy kontener z nazwą pliku w klasie
    var container = document.querySelector('#audioPlayerContainer');
    
    // Odczytujemy nazwę pliku z klasy
    var fileName = container.className;

    // Prefix ścieżki do pliku audio
    var filePathPrefix = 'https://tomaszesss.online/Audio/';  // ścieżka do folderu z muzyką

    // Pełna ścieżka do pliku audio
    var audioFilePath = filePathPrefix + fileName;

    // Tworzymy kontener dla odtwarzacza
    var playerContainer = document.createElement('div');
    playerContainer.id = 'playerContainer';

    // Tworzymy tytuł utworu
    var trackTitle = document.createElement('h1');
    trackTitle.id = 'trackTitle';
	
	// Usuwamy '.mp3' z nazwy pliku przed wyświetleniem
	var titleWithoutExtension = fileName.replace('.mp3', '');
	
	// Ustawiamy tytuł utworu bez rozszerzenia
	trackTitle.textContent = titleWithoutExtension;
	
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
