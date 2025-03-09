// Array of music data
const musicData = [
    {
        title: "Song 1",
        artist: "Artist 1",
        cover: "song1 - cover.jpg",
        audio: "song1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        cover: "song2 - cover.jpg",
        audio: "song2.mp3"
    },
    // Add more songs as needed
];

const musicList = document.getElementById('music - list');

musicData.forEach((music) => {
    const musicItem = document.createElement('div');
    musicItem.classList.add('music - item');

    const coverImg = document.createElement('img');
    coverImg.src = music.cover;
    coverImg.alt = music.title;

    const title = document.createElement('h3');
    title.textContent = music.title;

    const artist = document.createElement('p');
    artist.textContent = music.artist;

    const playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.addEventListener('click', function () {
        const audio = new Audio(music.audio);
        audio.play();
    });

    musicItem.appendChild(coverImg);
    musicItem.appendChild(title);
    musicItem.appendChild(artist);
    musicItem.appendChild(playButton);

    musicList.appendChild(musicItem);
});
