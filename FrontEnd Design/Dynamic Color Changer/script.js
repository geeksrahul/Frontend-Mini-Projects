let btnList = document.querySelectorAll("button");
let body = document.querySelector("body");

btnList.forEach((btn)=>{
    btn.style.backgroundColor = btn.id;
    btn.addEventListener("click", (event)=>{
        body.style.backgroundColor = event.target.id;
    });
});
