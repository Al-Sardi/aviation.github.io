const BODY = document.body;
const scrollDownBtn = document.querySelector('#book-now-btn');
const secondSection = document.querySelector('#second-section');
const progressBar = document.getElementById('progress-bar');
const bookBtn = document.querySelector('#book');
const flightsLi = document.getElementById('flights-li');
const hotelsLi = document.getElementById('hotels-li');
const carsLi = document.getElementById('cars-li');
const flights = document.getElementById('flights');
const hotels = document.getElementById('hotels');
const cars = document.getElementById('cars');
const detailsBtn = document.querySelector('#detailsBtn');
const detailsDiv = document.getElementById('detailsDiv');

detailsBtn.addEventListener("click", toggleDetails);
flightsLi.addEventListener("click", showFlights);
hotelsLi.addEventListener("click", showHotels);
carsLi.addEventListener("click", showCars);
scrollDownBtn.addEventListener("click", scrollDown);
bookBtn.addEventListener("click", bookFlight);

function scrollDown(){
    secondSection.scrollIntoView();
}
function bookFlight(){
    alert('Your Flight was booked Succesfully!');
}
function showFlights(){
    flights.style.display = "block";
    hotels.style.display = "none";
    cars.style.display = "none";
}
function showHotels(){
    hotels.style.display = "block";
    flights.style.display = "none";
    cars.style.display = "none";
}
function showCars(){
    cars.style.display = "block";
    flights.style.display = "none";
    hotels.style.display = "none";
}

window.addEventListener("scroll", () => {
    let heightPR = document.body.scrollHeight - window.innerHeight;
    let scrollPositionPR = document.documentElement.scrollTop;
    let widthPR = (scrollPositionPR / heightPR)*100;
    progressBar.style.width = `${widthPR}%`;
});

let detailsCt = 1;
function toggleDetails(){
    if (detailsCt === 1){
        detailsDiv.style.display = "block";
        detailsDiv.style.transitionDuration = "1s ease";
        detailsCt++;
    }
    else{
        detailsDiv.style.display = "none";
        detailsCt--;
    }
    
}

const decN = document.getElementById('decN');
const incN = document.getElementById('incN');
const displayN = document.getElementById('displayN');
let displayedN = 1;

decN.addEventListener("click", decreaseNum);
incN.addEventListener("click", increaseNum);

function decreaseNum(){
    if (displayedN === 1){
        alert("min. 1 Adult required!");
    }
    else{
        displayedN--;
        displayN.innerText = `${displayedN}`;
    }
}

function increaseNum(){
    displayedN++;
    displayN.innerText = `${displayedN}`;
}


const decNN = document.getElementById('decNN');
const incNN = document.getElementById('incNN');
const displayNN = document.getElementById('displayNN');
let displayedNN = 1;

decNN.addEventListener("click", decreaseNNum);
incNN.addEventListener("click", increaseNNum);

function decreaseNNum(){
    if (displayedNN === 0){
        alert("0");
    }
    else{
        displayedNN--;
        displayNN.innerText = `${displayedNN}`;
    }
}

function increaseNNum(){
    displayedNN++;
    displayNN.innerText = `${displayedNN}`;
}

const decNNN = document.getElementById('decNNN');
const incNNN = document.getElementById('incNNN');
const displayNNN = document.getElementById('displayNNN');
let displayedNNN = 1;

decNNN.addEventListener("click", decreaseNNNum);
incNNN.addEventListener("click", increaseNNNum);

function decreaseNNNum(){
    if (displayedNNN === 0){
        alert("0");
    }
    else{
        displayedNNN--;
        displayNNN.innerText = `${displayedNNN}`;
    }
}

function increaseNNNum(){
    displayedNNN++;
    displayNNN.innerText = `${displayedNNN}`;
}


let saveDetails = document.querySelector('#saveDetails');

saveDetails.addEventListener("click", saveTheDetails);
function saveTheDetails(){
    detailsBtn.innerText = `${displayedN} adults, ${displayedNN} children, ${displayedNNN} babys`;
    detailsDiv.style.display = "none";
}