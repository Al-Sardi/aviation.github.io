const BODY = document.body;
const scrollDownBtn = document.querySelector('#scroll-down-btn');
const secondSection = document.querySelector('#second-section');

scrollDownBtn.addEventListener("click", scrollDown);

function scrollDown(){
    secondSection.scrollIntoView();
}