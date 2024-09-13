const container = document.querySelector(".container");
const mousePointer = document.querySelector(".mouse-pointer");
let count=0 ;

container.addEventListener('mousemove', (event)=>{
    let x = event.clientX;
    let y = event.clientY;
    mousePointer.style.left = `${x}px`;
    mousePointer.style.top = `${y}px`;
})