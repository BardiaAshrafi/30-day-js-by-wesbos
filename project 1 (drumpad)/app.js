function playSound(e){
    let audio = document.querySelector(`audio[data-code="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-code="${e.keyCode}"]`);
    
    if(!audio) return;
    audio.currentTime = 0 ;
    audio.play();
    key.classList.add("playing");
}

function stopTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}



let keys = Array.from(document.querySelectorAll('.key'));

window.addEventListener("keydown", playSound);
keys.forEach(key=>key.addEventListener('transitionend', stopTransition));


