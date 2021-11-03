let result = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
    position: "Product Manager",
    city: "Hamedan",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
    position: "Server Admin",
    city: "Tehran",
  },
];

//creating the container div and the table
const body = document.getElementsByTagName("body")[0];
const div = document.createElement("div");
const tBody = document.createElement("tbody");
let table = document.createElement("table");

div.appendChild(table);
body.appendChild(div);
div.setAttribute("margin","auto");
// getting table headings
let headings = Object.keys(result[0]);
let headerRow = document.createElement("tr");
for (let text of headings) {
  let header = document.createElement("th");
  let headerTex = document.createTextNode(text);
  header.appendChild(headerTex);
  headerRow.appendChild(header);
  header.style.border = "1px solid black";
  header.style.textAlign = "center";
  header.style.padding = "5px";
  header.style.color = "white";
  header.style.backgroundColor = "rgb(40,35,35)";
}
table.appendChild(headerRow);

//tble data
table.appendChild(tBody);
for (let obj of result) {
  let dataRow = document.createElement("tr");

  Object.values(obj).forEach((val) => {
    let data = document.createElement("td");
    let dataText = document.createTextNode(val);
    data.appendChild(dataText);
    dataRow.appendChild(data);
    data.style.border = "1px solid black";
    data.style.textAlign = "center";
    data.style.padding = "5px";
    if(obj.uid % 2 === 0){
        data.style.backgroundColor = "rgb(160,160,160)";
    }
    // data.style.border = "1px solid black";
  });
  tBody.appendChild(dataRow);
}
//table data

//styles
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
let head = document.getElementsByTagName("th");
