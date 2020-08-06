'use strict'
const left_button = document.querySelector('.button_left');
const right_button = document.querySelector('.button_right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider_element');
let images_array = Array.from (images);
let clickable = true;
let active = null;
function moveTo(forward){
    if(clickable){
        clickable = false;
        active = document.querySelector('.active');
        if(forward){
            let newActiveIndex = (images_array.indexOf(active)+1+images_array.length)%images_array.length;
            let newActive = images_array[newActiveIndex];
            active.classList.remove('active');
            active.classList.add('slideOutLeft');
            newActive.classList.add('active');
            newActive.classList.add('slideInLeft');
        } else {
            let newActiveIndex = (images_array.indexOf(active)-1+images_array.length)%images_array.length;
            let newActive = images_array[newActiveIndex];
            active.classList.add('slideOutRight');
            newActive.classList.add('active');
            newActive.classList.add('slideInRight');
        }
    
    
    }
}
images_array.forEach(slide =>{
    slide.addEventListener('transitionend', ()=>{
        if(slide === active && !clickable){
            clickable = true;
            slide.className = 'slider_element';
        }
    })
})

slider.addEventListener('click', (e)=>{
 switch(e.target){
     case left_button:
         moveTo(false);
         break;
     case right_button:
         moveTo(true);
         break;    
 }
})