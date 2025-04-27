function handle() {
    const suffix = this.dataset.suffix||"";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input=>input.addEventListener('mousemove' , handle));
inputs.forEach(input=>input.addEventListener('change' , handle));