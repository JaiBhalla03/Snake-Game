const gridsize=21

export function randomGridPostion(){
    return {
        x:Math.floor(Math.random()*gridsize+1),
        y:Math.floor(Math.random()*gridsize+1)
    }
}

export function outside(position){
    return(
        position.x<1 || position.x>gridsize || 
        position.y<1 || position.y>gridsize
    )
}