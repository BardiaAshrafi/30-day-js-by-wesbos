const secHand = document.querySelector('.sec-hand');
const minHand=document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function clock() {
    const date=new Date;

    const second=date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondDegree = (second*6);
    const minDegree = (minutes*6);
    const hourDegree=(hours*30);

    secHand.style.transform = `rotate(${secondDegree + 90}deg)`;
    minHand.style.transform = `rotate(${minDegree + 90}deg)`;
    hourHand.style.transform = `rotate(${hourDegree + 90}deg)`;
    
}



setInterval(clock,1000);
