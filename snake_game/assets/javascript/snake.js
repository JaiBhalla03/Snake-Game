import { getinputdirection } from "./input.js"

export const snake_speed=10
const snakebody=[{x:11, y:11}]
let newsegment=0
export function update(){
    addsegment()
    const inputdirection=getinputdirection()
    for(let i=snakebody.length-2;i>=0;i--){
        snakebody[i+1]={ ...snakebody[i] }//seperate object
    }
    snakebody[0].x+=inputdirection.x
    snakebody[0].y+=inputdirection.y
}

export function draw(gameboard){
    snakebody.forEach(segment =>{
        const snake_element=document.createElement('div')
        snake_element.style.gridRowStart=segment.y
        snake_element.style.gridColumnStart=segment.x
        snake_element.classList.add('snake')
        gameboard.appendChild(snake_element)
    })
}

export function expandsnake(amount){  
    newsegment+=amount
}

export function onsnake(position,{ignorehead=false}={}){
    return snakebody.some((segment,index)=>{
        if(ignorehead && index ===0) return false
        return equalpositions(segment,position)
    })
}

export function getsnakehead(){
    return snakebody[0]
}

export function intersection(){
    return onsnake(snakebody[0],{ignorehead:true})
}

function equalpositions(pos1,pos2){
    return pos1.x===pos2.x && pos1.y===pos2.y 
}

function addsegment(){
    for(let i=0;i<newsegment;i++){
        snakebody[snakebody.length]=snakebody.push({ ...snakebody[snakebody.lenght-1]})
    }
    newsegment=0    
}