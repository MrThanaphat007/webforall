const heartBtn = document.getElementById('heartBtn');
const photo = document.getElementById('photo');
const msgContent = document.getElementById('msgContent');
const title = document.getElementById('title');
const hintText = document.getElementById('hintText');

const bgm = document.getElementById('bgm');
const musicPlayer = document.getElementById('musicPlayer');
const muteBtn = document.getElementById('muteBtn');

const decoLeft = document.getElementById('decoLeft');
const decoRight = document.getElementById('decoRight');

heartBtn.addEventListener('click', () => {
    heartBtn.style.display = 'none';
    hintText.style.display = 'none';
    
    title.innerText = "To my beloved ✨";
    title.style.color = "#ff477e";
    
    photo.style.display = 'block';
    msgContent.style.display = 'block';
    
    if (decoLeft) decoLeft.style.display = 'block';
    if (decoRight) decoRight.style.display = 'block';
    
    if (bgm) {
        bgm.play().catch(error => {
            console.log("Audio play blocked:", error);
        });
    }
    
    if (musicPlayer) musicPlayer.style.display = 'flex';

    createFallingPetals();
});

if (muteBtn && bgm) {
    muteBtn.addEventListener('click', () => {
        if (bgm.muted) {
            bgm.muted = false;
            muteBtn.innerText = "🔊 Mute";
            muteBtn.style.background = "#ff477e";
        } else {
            bgm.muted = true;
            muteBtn.innerText = "🔇 Unmute";
            muteBtn.style.background = "#888";
        }
    });
}

function createFallingPetals() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.fontSize = (Math.random() * 20 + 15) + 'px';
            petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            document.body.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 5000);
        }, i * 100);
    }
}