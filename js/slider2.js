const player = document.querySelector(".section-customer__expreince-right-slider-player")
const playerItems = Array.from(document.querySelectorAll(".section-customer__expreince-right-slider-player-items"))
let isdragging = false
strPos = 0
currentTranslate = 0 
prevTranslate = 0
animationId = 0
currentIndex = 0
playerItems.forEach((slide,index) => {
    slide.addEventListener("mousedown",(e) => {
        e.preventDefault()
    })
    slide.children[0].children[0].children[0].addEventListener("dragstart",(e) => {
        e.preventDefault()
    })
    slide.children[0].children[0].children[1].addEventListener("mousedown",(e) => {
        e.preventDefault()
    })
    slide.children[0].children[1].children[0].addEventListener("dragstart",(e) => {
        e.preventDefault()
    })
    slide.children[1].addEventListener("mousedown",(e) => {
        e.preventDefault()
    })
    slide.children[2].children[0].children[0].addEventListener("mousedown",(e) => {
        e.preventDefault()
    })
    slide.children[2].children[0].children[1].addEventListener("mousedown",(e) => {
        e.preventDefault()
    })
    //touch events///
    slide.addEventListener("touchstart",touchStart(index))
    slide.addEventListener("touchend",touchEnd)
    slide.addEventListener("touchmove",touchMove)
    ///mouse events//
    slide.addEventListener("mousedown",touchStart(index))
    slide.addEventListener("mouseup",touchEnd)
    slide.addEventListener("mouseleave",touchEnd)
    slide.addEventListener("mousemove",touchMove)
})
player.oncontextmenu = function(event){
    event.preventDefault()
    event.stopPropagation()
    return false
}
function touchStart(index){
    return function(event){
        currentIndex = index
        strPos = getPositionX(event)
        prevTranslate = currentTranslate
        console.log(event)
        isdragging = true
        animationId = requestAnimationFrame(animation)
    }
}
function touchEnd(){
    isdragging = false
    cancelAnimationFrame(animationId)
    // const movedBy = currentTranslate - prevTranslate
    // if(movedBy < -100 && currentIndex < player.length - 1)
    // currentIndex += 1
    // if(movedBy > 100 && currentIndex > 0)currentIndex -= 1
    // setPostionByIndex()
}
function touchMove(event){
    if(isdragging){
        let currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - strPos
        console.log(currentTranslate)
    }
}
function getPositionX(event){
    return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
}

function animation(){
    setSliderPostion()
    if(isdragging) requestAnimationFrame(animation)
}
function setSliderPostion(){
    player.style.transform = `translateX(${currentTranslate}px)`
}
// function setPostionByIndex(){
//     currentTranslate = currentIndex * -window.innerWidth
//     prevTranslate = currentTranslate
//     setSliderPostion()
// }