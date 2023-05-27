const BODY = document.body;
const scrollDownBtn = document.querySelector('#scroll-down-btn');
const secondSection = document.querySelector('#second-section');
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
}
function showHotels(){
    hotels.style.display = "block";
}
function showCars(){
    cars.style.display = "block";
}
