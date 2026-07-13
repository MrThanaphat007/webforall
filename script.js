const bgm = document.getElementById('bgm');
const musicPlayer = document.getElementById('musicPlayer');
const playBtn = document.getElementById('playBtn');
const muteBtn = document.getElementById('muteBtn');

function updatePlayButton() {
    if (!bgm || !playBtn) return;
    playBtn.innerText = bgm.paused ? '▶️ เล่นเพลง' : '⏸️ หยุดเพลง';
}

function updateMuteButton() {
    if (!bgm || !muteBtn) return;
    muteBtn.innerText = bgm.muted ? '🔇 ปิดเสียง' : '🔊 เปิดเสียง';
    muteBtn.style.background = bgm.muted ? '#888' : '#ff477e';
}

function setupMusicControls() {
    if (!bgm || !musicPlayer || !playBtn || !muteBtn) {
        return;
    }

    updatePlayButton();
    updateMuteButton();

    playBtn.addEventListener('click', () => {
        if (bgm.paused) {
            bgm.play().catch(error => {
                console.warn('Audio play blocked:', error);
            });
        } else {
            bgm.pause();
        }
        updatePlayButton();
    });

    muteBtn.addEventListener('click', () => {
        bgm.muted = !bgm.muted;
        updateMuteButton();
    });

    bgm.addEventListener('play', updatePlayButton);
    bgm.addEventListener('pause', updatePlayButton);
}

function showMusicPlayer() {
    if (musicPlayer) {
        musicPlayer.style.display = 'flex';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMusicControls);
} else {
    setupMusicControls();
}
