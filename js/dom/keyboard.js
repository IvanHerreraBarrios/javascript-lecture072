const d = document;
let x = 0, y = 0

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRecy(),
    limitsStage = $stage.getBoundingClientRecy()

    console.log(e.keyCode)
    console.log(e.key)

    //const move = (direction) => {}
    
    switch (e.keyCode) {
        case 37:
            //move("left")
            
            if(limitsBall.left > limitsStage.left) {
                x--
                e.preventDefault()
            }
            break;
        case 38:
            //move("up")
            if(limitsBall.top > limitsStage.top) {
                y--
                e.preventDefault()
            }
            break;
        case 39:
            //move("right")
            if(limitsBall.right < limitsStage.right) {
                x++
                e.preventDefault()
            }
            break;
        case 40:
            //move("down")
            e.preventDefault()
            if(limitsBall.bottom < limitsStage.bottom) {
                y++
                e.preventDefault()
            }
            break;
    
        default:
            break;
    }
    $ball.style.transform = ` translate(${x*10}px,${y*10}px)` 
}

export function shrotcuts (e){
    console.log(e)
    console.log(e.type)
    console.log(e.key)
    console.log(e.keyCode)
    console.log(ctrlKey)
    console.log(altKey)

    if(e.key === "a" && e.altKey){
        alert("KEY A and alt")
    }

    if(e.key === "c" && e.altKey){
        confirm("c A and alt")
    }

    if(e.key === "p" && e.altKey){
        prompt("p A and alt")
    }
}