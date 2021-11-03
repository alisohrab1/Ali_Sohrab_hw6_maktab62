const black = document.getElementById("black");
const red = document.getElementById("red");
const body = document.getElementsByTagName("body")[0];
const circle = document.getElementById("circle");
const clrBlack = document.getElementById("clrBlack");
const clrRed = document.getElementById("clrRed");
const inside1 = document.getElementById("inside1");
const inside2 = document.getElementById("inside2");
const hidden = document.getElementById("hidden");
window.addEventListener("mousemove", function (e) {
  // console.log(`x: ${e.clientX}`);
  // console.log(`y: ${e.clientY}`);
  (circle.style.left = e.clientX + 20 + "px"),
    (circle.style.top = e.clientY + 35 + "px");
  document.getElementById(
    "mouseCo"
  ).textContent = `(x: ${e.clientX} , y: ${e.clientY}) `;
  document.getElementById("circleCo").textContent = `(x: ${
    e.clientX + 20
  } , y: ${e.clientY + 35}) `;
  
});

clrBlack.addEventListener("mouseover", function (e) {
  circle.style.backgroundColor = "red";
  // hidden.textContent = "RED CIRCLE: ";

  
});
clrBlack.addEventListener("mousemove", function (e) {
  inside1.textContent = `RED CIRCLE:(x: ${e.clientX - 80 } , y: ${e.clientY - 165}) `
  
})
clrBlack.addEventListener("mouseout", function () {
  circle.style.backgroundColor = "skyblue";
  inside1.textContent = "";
  
});

clrRed.addEventListener("mouseover", function () {
  circle.style.backgroundColor = "black";
  // hidden.textContent = "BLACK CIRCLE: ";
  
});
clrRed.addEventListener("mousemove", function (e) {
  inside1.textContent = `BLACK CIRCLE:(x: ${e.clientX - 380 } , y: ${e.clientY - 165}) `;
  
})
clrRed.addEventListener("mouseout", function () {
  circle.style.backgroundColor = "skyblue";
  inside1.textContent = "";
  
});

