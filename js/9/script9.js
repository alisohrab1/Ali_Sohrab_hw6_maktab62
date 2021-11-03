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
div.setAttribute("margin", "auto");
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
    if (obj.uid % 2 === 0) {
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

//**************************************************************************************************************************/

let h = table.getElementsByTagName("th");
// console.log(h);
//uid
function drawTable() {
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
      // if (obj.uid % 2 === 0) {
      //   data.style.backgroundColor = "rgb(160,160,160)";
      // }
      // data.style.border = "1px solid black";
    });
    tBody.appendChild(dataRow);
  }
  console.log("from draw");
  let arr = tBody.getElementsByTagName("tr");
  for (let i = 1; i < arr.length; i += 2) {
    arr[i].style.backgroundColor = "grey";
  }
}
function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const x = a.firstName.toUpperCase();
  const y = b.firstName.toUpperCase();

  let comparison = 0;
  if (x > y) {
    comparison = -1;
  } else if (x < y) {
    comparison = +1;
  }
  return comparison;
}
h[0].addEventListener("click", function () {
  sortTable();
});

function sortTable() {
  result = result.sort((a, b) => b.uid - a.uid);
  console.log(result);
  tBody.innerHTML = "";
  // table.appendChild(tBody);
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
      // data.style.border = "1px solid black";
    });
    tBody.appendChild(dataRow);
  }
}

//firstname
h[1].addEventListener("click", function () {
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const x = a.firstName.toUpperCase();
    const y = b.firstName.toUpperCase();

    let comparison = 0;
    if (x > y) {
      comparison = -1;
    } else if (x < y) {
      comparison = +1;
    }
    return comparison;
  }
  result = result.sort(compare);
  tBody.innerHTML = "";
  // table.appendChild(tBody);
  drawTable();
});

//lastname
h[2].addEventListener("click", function () {
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const x = a.lastName.toUpperCase();
    const y = b.lastName.toUpperCase();

    let comparison = 0;
    if (x > y) {
      comparison = -1;
    } else if (x < y) {
      comparison = +1;
    }
    return comparison;
  }
  result = result.sort(compare);
  tBody.innerHTML = "";
  // table.appendChild(tBody);
  drawTable();
});

//position
h[3].addEventListener("click", function () {
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const x = a.position.toUpperCase();
    const y = b.position.toUpperCase();

    let comparison = 0;
    if (x > y) {
      comparison = -1;
    } else if (x < y) {
      comparison = +1;
    }
    return comparison;
  }
  result = result.sort(compare);
  tBody.innerHTML = "";
  // table.appendChild(tBody);
  drawTable();
});

//city
h[4].addEventListener("click", function () {
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const x = a.city.toUpperCase();
    const y = b.city.toUpperCase();

    let comparison = 0;
    if (x > y) {
      comparison = -1;
    } else if (x < y) {
      comparison = +1;
    }
    return comparison;
  }
  result = result.sort(compare);
  tBody.innerHTML = "";
  // table.appendChild(tBody);
  drawTable();
});

//crud
let myRow = table.getElementsByTagName("tr");

//first row
let numberOfRows = tBody.getElementsByTagName("tr").length;
console.log(numberOfRows);
for (let i = 0; i <= numberOfRows; i++) {
  myRow[i].addEventListener("click", function () {
    // console.log(result[i - 1]);
    // console.log(this.getElementsByTagName("td")[0].innerText);
    // let identifier = this.getElementsByTagName("td")[0].innerText;
    let toBeUpdated = result[i - 1];

    updateForm(toBeUpdated);
  });
}

//create button
const button = document.createElement("button");
const buttonT = document.createTextNode("create new");
button.appendChild(buttonT);
body.appendChild(button);
button.style.marginTop = "10px";
button.addEventListener("click", function () {
  createForm();
  console.log("inside");
  console.log(result);
});

//creating
function createForm() {
  var br = document.createElement("br");
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("onsubmit", "event.preventDefault();create();");
  form.setAttribute("id", "createForm");
  //uid
  const uidF = document.createElement("input");
  uidF.setAttribute("type", "text");
  uidF.setAttribute("name", "Uid");
  uidF.setAttribute("placeholder", "Uid");
  uidF.setAttribute("id", "Uid");

  //first name
  const first = document.createElement("input");
  first.setAttribute("type", "text");
  first.setAttribute("name", "First name");
  first.setAttribute("placeholder", "First Name");
  first.setAttribute("id", "FirstName");
  //last name
  const last = document.createElement("input");
  last.setAttribute("type", "text");
  last.setAttribute("name", "Last name");
  last.setAttribute("placeholder", "Last Name");
  last.setAttribute("id", "LastName");
  //position
  const position = document.createElement("input");
  position.setAttribute("type", "text");
  position.setAttribute("name", "position");
  position.setAttribute("placeholder", "position");
  position.setAttribute("id", "position");
  //city
  const city = document.createElement("input");
  city.setAttribute("type", "text");
  city.setAttribute("name", "city");
  city.setAttribute("placeholder", "city");
  city.setAttribute("id", "city");

  //update button
  const updateB = document.createElement("input");
  updateB.setAttribute("type", "submit");
  updateB.setAttribute("value", "update");
  updateB.setAttribute("id", "update");

  // //delete button
  // const deleteB = document.createElement("input");
  // deleteB.setAttribute("type", "submit");
  // deleteB.setAttribute("value", "Delete");
  // deleteB.setAttribute("id", "Delete");
  // deleteB.style.marginLeft = "5px";

  //append everyting
  form.appendChild(uidF);
  form.appendChild(br.cloneNode());
  form.appendChild(first);
  form.appendChild(br.cloneNode());
  form.appendChild(last);
  form.appendChild(br.cloneNode());
  form.appendChild(position);
  form.appendChild(br.cloneNode());
  form.appendChild(city);
  form.appendChild(br.cloneNode());
  form.appendChild(updateB);
  // form.appendChild(deleteB);
  body.appendChild(form);
}

function create() {
  // console.log("Submitted");
  var newObject = readForm();
  //checking the new object
  console.log(newObject);
  if (isNaN(newObject.uid)) {
    alert("invalid uid");
    return;
  }
  if (
    !newObject.uid ||
    !newObject.position ||
    !newObject.city ||
    !newObject.firstName ||
    !newObject.lastName
  ) {
    alert("invalid input");
    return;
  }
  let targetPerson = result.find((el) => el.uid == newObject.uid);
  if (targetPerson) {
    alert("duplicate uid");
    return;
  }
  result.push(newObject);
  console.log(result);

  tBody.innerHTML = "";
  table.appendChild(tBody);
  drawTable();
  let form = document.getElementById("createForm");
  form.remove();
}

function readForm() {
  var formData = {};
  formData["uid"] = document.getElementById("Uid").value;
  formData["firstName"] = document.getElementById("FirstName").value;
  formData["lastName"] = document.getElementById("LastName").value;
  formData["position"] = document.getElementById("position").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

//update
function updateForm(obj) {
  console.log("inside");
  console.log(obj);
  // console.log(obj.uid);
  var br = document.createElement("br");
  let updateUid = obj.uid;
  let updateFirst = obj.firstName;
  let updateLast = obj.lastName;
  let updateCity = obj.city;
  let updatePosition = obj.position;

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("onsubmit", "event.preventDefault();updateList();");
  form.setAttribute("id", "updateForm");

  //uid
  const uidF = document.createElement("input");
  uidF.setAttribute("type", "text");
  uidF.setAttribute("name", "Uid");
  uidF.setAttribute("value", updateUid);
  uidF.setAttribute("id", "Uid");
  uidF.setAttribute("readonly", true);

  //first name
  const first = document.createElement("input");
  first.setAttribute("type", "text");
  first.setAttribute("name", "First name");
  first.setAttribute("value", updateFirst);
  first.setAttribute("id", "FirstName");
  //last name
  const last = document.createElement("input");
  last.setAttribute("type", "text");
  last.setAttribute("name", "Last name");
  last.setAttribute("value", updateLast);
  last.setAttribute("id", "LastName");
  //position
  const position = document.createElement("input");
  position.setAttribute("type", "text");
  position.setAttribute("name", "position");
  position.setAttribute("value", updatePosition);
  position.setAttribute("id", "position");
  //city
  const city = document.createElement("input");
  city.setAttribute("type", "text");
  city.setAttribute("name", "city");
  city.setAttribute("value", updateCity);
  city.setAttribute("id", "city");

  //update button
  const updateB = document.createElement("input");
  updateB.setAttribute("type", "submit");
  updateB.setAttribute("value", "update");
  updateB.setAttribute("id", "update");
  updateB.setAttribute("name", "update");

  //delete button
  const deleteB = document.createElement("input");
  deleteB.setAttribute("type", "submit");
  deleteB.setAttribute("value", "Delete");
  deleteB.setAttribute("id", "Delete");
  deleteB.setAttribute("name", "Delete");
  deleteB.style.marginLeft = "5px";
  deleteB.setAttribute("onclick", "event.preventDefault();delItem();");

  //append everyting
  form.appendChild(uidF);
  form.appendChild(br.cloneNode());
  form.appendChild(first);
  form.appendChild(br.cloneNode());
  form.appendChild(last);
  form.appendChild(br.cloneNode());
  form.appendChild(position);
  form.appendChild(br.cloneNode());
  form.appendChild(city);
  form.appendChild(br.cloneNode());
  form.appendChild(updateB);
  form.appendChild(deleteB);
  body.appendChild(form);
}

function updateList(obj) {
  console.log("hello from update");
  var newObject = readForm();
  console.log(newObject);
  for (let property in newObject) {
    if (newObject[property] === "") {
      alert("empty input");
    }
  }
  result = result.map((el) => {
    if (el.uid == newObject.uid) {
      return { ...el, ...newObject };
    }
    return el;
  });
  tBody.innerHTML = "";
  table.appendChild(tBody);
  drawTable();

  // console.log(newObject);
  //   let form = document.getElementById("updateForm");
  //   form.remove();
}

function delItem() {
  console.log("hello from delete");
  var newObject = readForm();
  result = result.filter((el) => el.uid != newObject.uid);
  console.log(result);
  tBody.innerHTML = "";
  table.appendChild(tBody);
  drawTable();
  //   let form = document.getElementById("updateForm");
  //   form.remove();
}
