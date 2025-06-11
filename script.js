function Obliczanie() {
    var waga = parseFloat(document.getElementById("masa").value);
    var wzrost = parseFloat(document.getElementById("wysokosc").value)/100;
    var BMI = waga/(wzrost*wzrost);
    var score;
    if(BMI>25){
        score = "Kostka brukowa pęka"
    } else if(BMI<18.5) {
        score = "Wiatr cię zdmuchnie"
    } else {
        score = "Spoko jest"
    };

    if(isNaN(waga) || waga < 40 || isNaN(wzrost) || wzrost < 0.7){
        alert("Podaj poprawne dane")
    } else{
        document.getElementById("wynik").innerHTML = "Twoje BMI: "+BMI.toFixed(1)+"<br/>stan: "+score;
    }
}

let isplaying = false;
let audio = new Audio("Audio/Miska.mp3");

function Pies() {
    if(!isplaying){
        audio.play();
        isplaying=true;

        setTimeout(()=> {
            isplaying=false;
        }, 6000);
    }
    
}
// Co tu zaglądasz🧐