let greet = document.querySelector(".greet-message");
let msg = "Jay Shree Krishna 🙏";

window.addEventListener("load", ()=> {
    let i = 0;
    speak("Hareyy Krishna");
    let temp = setInterval(()=> {
        greet.textContent += msg[i++];
        if(i >= msg.length) clearInterval(temp);
    },50); // Change the text every second
})

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

document.querySelector("#textSearch").setAttribute("autocomplete","off");   

document.querySelector("#btnSearch").addEventListener("click",()=> {
    // alert("aapna vi number ni outgoing seva bandh thae gae chhe");
    let prompt = document.querySelector("#textSearch").value;
    let URL = `https://www.google.com/search?q=${prompt}`;
    window.location.href = URL;
});

window.addEventListener("keypress",(e)=> {
    if(e.key === "Enter") {
        document.querySelector("#btnSearch").click();
    }
   
});