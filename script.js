// =============================
// Happy Birthday Arihant
// script.js
// =============================

// Show Surprise Gift
function showGift() {
    const gift = document.getElementById("gift");

    gift.style.display = "block";

    gift.scrollIntoView({
        behavior: "smooth"
    });

    launchConfetti();
}

// Floating Balloons
function createBalloon() {

    const balloon = document.createElement("div");

    balloon.innerHTML = "🎈";

    balloon.style.position = "fixed";
    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.bottom = "-60px";
    balloon.style.fontSize = (30 + Math.random() * 20) + "px";
    balloon.style.pointerEvents = "none";
    balloon.style.zIndex = "9999";

    document.body.appendChild(balloon);

    let pos = -60;

    const move = setInterval(() => {

        pos += 2;

        balloon.style.bottom = pos + "px";

        if (pos > window.innerHeight + 100) {

            balloon.remove();

            clearInterval(move);

        }

    },20);

}

setInterval(createBalloon,700);

// Confetti Effect
function launchConfetti(){

    for(let i=0;i<150;i++){

        let confetti=document.createElement("div");

        confetti.innerHTML="🎊";

        confetti.style.position="fixed";
        confetti.style.left=Math.random()*window.innerWidth+"px";
        confetti.style.top="-20px";
        confetti.style.fontSize="20px";
        confetti.style.pointerEvents="none";

        document.body.appendChild(confetti);

        let topPos=-20;

        const fall=setInterval(()=>{

            topPos+=5;

            confetti.style.top=topPos+"px";

            if(topPos>window.innerHeight){

                confetti.remove();

                clearInterval(fall);

            }

        },20);

    }

}

// Welcome Message
window.onload=function(){

    setTimeout(()=>{

        alert("🎉 Happy 11th Birthday Arihant! 🎂\nHave an amazing day full of fun, cake, gifts and happiness!");

    },1000);

}


