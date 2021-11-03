
document.getElementById("button1").addEventListener("click", e => {
    document.getElementById("text2").innerText = document.getElementById("text1").innerText + document.getElementById("text2").innerText + document.getElementById("text3").innerText + document.getElementById("text2").innerText ;
})


document.getElementById("button2").addEventListener("click", e => {
    document.getElementById("text2").innerText = document.getElementById("text3").innerText + document.getElementById("text2").innerText ;
})