// script.js
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const lyricsDiv = document.getElementById('lyrics');
    const audio = document.getElementById('audio');
    const popup = document.getElementById('popup');
    const okButton = document.getElementById('oke');

    const lyrics = [
        { text: "Dengar Laraku", duration: 5400 },  
        { text: "Suara Hati Ini Memanggil Namamu", duration: 6000 },
        { text: "Karena Separuh Aku", duration: 5800 },
        { text: "Dirimu", duration: 5000 },
    ];

    let currentLine = 0;

    playButton.addEventListener('click', () => {
        playButton.classList.add('fade-out');
        setTimeout(() => {
            playButton.style.display = 'none';
        }, 500); 
        audio.play();
        setTimeout(displayLyrics, 1800); // Jeda 1,8 detik sebelum menampilkan lirik pertama
    });

    audio.addEventListener('ended', () => {
        popup.classList.add('fade-in');
    });

    okButton.addEventListener('click', () => {
        popup.classList.remove('fade-in');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 1000); // Sesuaikan dengan durasi animasi pudar
        lyricsDiv.innerHTML = '';
        currentLine = 0;
        playButton.style.display = 'block';
        setTimeout(() => {
            playButton.classList.remove('fade-out');
            playButton.style.opacity = 1;
        }, 10);
    });

    function displayLyrics() {
        if (currentLine < lyrics.length) {
            lyricsDiv.classList.remove('fade-in');
            setTimeout(() => {
                lyricsDiv.innerHTML = lyrics[currentLine].text;
                lyricsDiv.classList.add('fade-in');
                setTimeout(() => {
                    lyricsDiv.classList.remove('fade-in');
                    currentLine++;
                    displayLyrics();
                }, lyrics[currentLine].duration); 
            }, 900);
        }
    }
});
