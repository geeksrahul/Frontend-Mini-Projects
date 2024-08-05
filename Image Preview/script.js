let file = document.getElementById("inputFile");
file.addEventListener("change", ()=>{
    document.getElementById("preview").src = URL.createObjectURL(file.files[0]);
});