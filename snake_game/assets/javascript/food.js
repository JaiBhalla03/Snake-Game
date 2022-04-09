import {onsnake, expandsnake} from './snake.js'
import {randomGridPostion} from './grid.js'
let food=getrandomfood()
const expansionrate=1
export function update(){
    if(onsnake(food)){
        expandsnake(expansionrate)
        food=getrandomfood()
}
}

export function draw(gameboard){
    
        const foodelement = document.createElement("div")
        foodelement.style.gridRowStart=food.y
        foodelement.style.gridColumnStart=food.x
        foodelement.classList.add('food')
        gameboard.appendChild(foodelement)
}

function getrandomfood(){
    let newfoodpostion
    while(newfoodpostion==null || onsnake(newfoodpostion)){
        newfoodpostion=randomGridPostion()
    }
    return newfoodpostion
}