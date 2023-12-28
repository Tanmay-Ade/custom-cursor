let main = document.querySelector("#main");
let crsr = document.querySelector("#cursor");
let head = document.querySelector("#heading");

main.addEventListener("mousemove", function(det){
    crsr.style.left = det.x+"px";
    crsr.style.top = det.y+"px";
})

head.addEventListener("mousemove", function(){
    head.style.color = "seagreen";
})

head.addEventListener("mouseout", function(){
    head.style.color= "transparent";
})

