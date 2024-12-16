let toggle = document.getElementById("toggle");
toggle.onclick = () => {
    if(document.body.style.backgroundColor === "white"){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
   toggle.textContent = "switch to light mode";
}
 else{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    toggle.textContent = "switch to dark mode";
}
}