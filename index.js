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
