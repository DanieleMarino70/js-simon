// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Qui trovate HTML e CSS ed alcuni esempi di stamattina (trovato l'easter egg?). cercate di analizzarli per capire come intervenire sul countdown.

const daysEl = document.getElementById("days");  
const hoursEl = document.getElementById("hours"); 
const minutesEl = document.getElementById("minutes"); 
const secondsEl = document.getElementById("seconds"); 

// CONTO ALLA ROVESCIA 

// DATA DI DOMANI - DATA DI OGGI = TEMPO NECESSARIO PER ARRIVARE A DATA DI DOMANI.

let totalMilliseconds = 0;
const future = setInterval(myFunction, 1000);

function myFunction(){
    const now = new Date();
    const tomorrow = new Date("February 6, 2023 09:30:00");
    console.log((tomorrow.getTime() - now.getTime()) / 1000);
    totalMilliseconds = ((tomorrow.getTime() - now.getTime()) / 1000);
    


    
    const seconds = parseInt(totalMilliseconds % 60);
    const minutes = parseInt((totalMilliseconds / 60) % 60);
    const hours = parseInt((totalMilliseconds / 60 / 60) % 24);
    const days = parseInt((totalMilliseconds / 60 / 60 / 24 ) % 365);

    
    secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
    daysEl.innerHTML = (days < 10) ? "0" + days : days;
}