
document.getElementById("box").onmouseover = function(){
    // this.innerText = "on";
    document.getElementById("box").style.backgroundColor="blue";
}
document.getElementById("box").onmouseout = function(){
    document.getElementById("box").style.backgroundColor = "red";
    // this.innerText = "off";

}
