
const input = document.getElementById("input");
const para = document.getElementById("para");
input.addEventListener("input", function(e) {
 para.innerText = e.target.value;
} )