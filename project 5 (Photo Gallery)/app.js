const panels = document.querySelectorAll('.panel');

function panelOpen(){
    this.classList.toggle('open');
}
function panelActive(e){
    if (e.propertyName.includes('flex')) {
        // this.classList.toggle('active'); OR WE CAN WRITE :
        e.target.classList.toggle('active');
    }
}

panels.forEach(panel=>panel.addEventListener("click" , panelOpen))
panels.forEach(panel=>panel.addEventListener("transitionend" , panelActive))
