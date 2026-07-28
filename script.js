// To'y sanog'i
const weddingDate = new Date("August 10, 2026 17:30:00").getTime();


const timer = setInterval(function(){

    const now = new Date().getTime();

    const distance = weddingDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    console.log(
        days + " kun " +
        hours + " soat " +
        minutes + " daqiqa " +
        seconds + " soniya"
    );


    if(distance < 0){
        clearInterval(timer);
        console.log("To'y kuni keldi!");
    }


},1000);


// Tugma animatsiyasi

const button = document.querySelector("button");

if(button){

    button.addEventListener("click",()=>{

        document.querySelector(".invitation")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}
