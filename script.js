document.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
})

document.querySelector('.composer button').addEventListener('click', (event) => {
    let song = document.querySelector('#input').value;
    if (song) {
        let songArray = song.split('');

        playComposition(songArray);
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300)
    }
}

function playComposition(songArray) {

    let wait = 0;
    songArray.forEach(element => {
        setTimeout(() => {
            playSound(`key${element}`)
        }, wait);
        wait += 250;
    });
}