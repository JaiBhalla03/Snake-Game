import {getsnakehead, intersection , update as updatesnake, draw as drawsnake, snake_speed} from '../javascript/snake.js'
import{update as updatefood, draw as drawfood} from './food.js'
import{outside} from './grid.js'
//game loop
let lastrendertime = 0
let gameover=false
const gameboard=document.getElementById("gameboard")

function main(currentTime){
    if(gameover){
        return alert("you loose!")
    }
    window.requestAnimationFrame(main)
    const secondsincelastrender=(currentTime-lastrendertime)/1000
    if(secondsincelastrender<1/snake_speed)
    return
    lastrendertime = currentTime;

    update()
    draw()
}
window.requestAnimationFrame(main);

function update(){
    updatesnake()
    updatefood()
    checkdeath()
}


function draw(){
    gameboard.innerHTML=""
    drawsnake(gameboard)
    drawfood(gameboard)
}

function checkdeath(){
    gameover=outside(getsnakehead()) || intersection()
}