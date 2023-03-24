let stars1 = document.getElementByTd('stars');
let moon2 = document.getElementByTd('moon');
let mountains3 = document.getElementByTd('mountains3');
let mountains4 = document.getElementByTd('mountains4');
let river5 = document.getElementByTd('river');
let boat6 = document.getElementByTd('boat');
let Ranou = document.querySelector('.Ranou');
window.onscroll = function(){
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value + 'px';
}