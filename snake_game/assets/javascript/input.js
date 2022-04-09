let inputdirection={x:0,y:0}
let lastinputdirection={x:0,y:0}
window.addEventListener('keydown',e=>{
    switch(e.key){
        case 'ArrowUp':
            if(lastinputdirection.y!==0)break
            inputdirection={x:0,y:-1}
            break
        case 'ArrowDown':
            if(lastinputdirection.y!==0)break
            inputdirection={x:0,y:1}
            break
        case 'ArrowLeft':
            if(lastinputdirection.x!==0)break
            inputdirection={x:-1,y:0}
            break
        case 'ArrowRight':
            if(lastinputdirection.x!==0)break
            inputdirection={x:1,y:0}
            break
    }
})
export function getinputdirection(){
    lastinputdirection=inputdirection

    return inputdirection
}