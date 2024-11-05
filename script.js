'use strict';

const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slide = document.querySelector('.slide');
const btn_left = document.querySelector('.left-btn');
const btn_right = document.querySelector('.right-btn'); 


const slideWidthWithGap = slide.clientWidth + 20;

btn_right.addEventListener('click', function() {
    slider.scrollLeft += slideWidthWithGap;
    console.log('btn clicked');
});

btn_left.addEventListener('click', function() {
    slider.scrollLeft -=slideWidthWithGap;
});