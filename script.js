// Array of music data
const musicData = [
    {
        title: "Song 1",
        artist: "Artist 1",
        cover: "song1-cover.jpg", // Corrected file name
        audio: "song1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        cover: "song2-cover.jpg", // Corrected file name
        audio: "song2.mp3"
    },
    // Add more songs as needed
];

// Get the music list container.  Corrected ID to match HTML.
const musicList = document.getElementById('music-list');  // Corrected ID

musicData.forEach((music) => {
    const musicItem = document.createElement('div');
    musicItem.classList.add('music-item'); // Added class for styling

    const coverImg = document.createElement('img');
    coverImg.src = music.cover;
    coverImg.alt = music.title;

    const title = document.createElement('h3');
    title.textContent = music.title;

    const artist = document.createElement('p');
    artist.textContent = music.artist;

    const playButton = document.createElement('button');
    playButton.textContent = 'Play';

    // Event listener for the play button
    playButton.addEventListener('click', function() {
        const audio = new Audio(music.audio);
        audio.play();
    });

    musicItem.appendChild(coverImg);
    musicItem.appendChild(title);
    musicItem.appendChild(artist);
    musicItem.appendChild(playButton);

    musicList.appendChild(musicItem);
});
