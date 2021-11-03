//heading
const listDiv = document.createElement("div");
const heading = document.createElement("h1");
const h1Text = document.createTextNode("My Tasks");
const body = document.getElementsByTagName("body")[0];
const container = document.createElement("div");
body.appendChild(container);
heading.appendChild(h1Text);
heading.style.color = "red";
container.appendChild(heading);
container.style.width = "300px";
container.style.border = "2px solid black"
container.style.padding = "5px"
//list
const oList = document.createElement("OL");
const listItem1 = document.createElement("LI");
const listItem2 = document.createElement("LI");
const listItem3 = document.createElement("LI");
const listItem4 = document.createElement("LI");
const listItem5 = document.createElement("LI");
const text1 = document.createTextNode("user dasboard");
const text2 = document.createTextNode("admin dashboard");
const text3 = document.createTextNode("authentication");
const text4 = document.createTextNode("about page");
const text5 = document.createTextNode("contact page");
oList.setAttribute("type", "i");
//item1
listItem1.appendChild(text1);
oList.appendChild(listItem1);
//item2
listItem2.appendChild(text2);
oList.appendChild(listItem2);
//item3
listItem3.appendChild(text3);
oList.appendChild(listItem3);
//item4
listItem4.appendChild(text4);
oList.appendChild(listItem4);
//item5
listItem5.appendChild(text5);
oList.appendChild(listItem5);
container.appendChild(oList);
listItem5.style.textDecoration = "line-through";
//unordered list
const uList = document.createElement("UL");
const uList1 = document.createElement("LI");
const uList2 = document.createElement("LI");
const uList3 = document.createElement("LI");

const uText1 = document.createTextNode("login");
const uText2 = document.createTextNode("register");
const uText3 = document.createTextNode("logout");
listItem3.appendChild(uList);
//1
uList1.appendChild(uText1);
uList.appendChild(uList1);
//2
uList2.appendChild(uText2);
uList.appendChild(uList2);
uList2.style.textDecoration = "line-through";
// 3
uList3.appendChild(uText3);
uList.appendChild(uList3);

//form
const inputText = document.createElement("input");
const inputSub = document.createElement("input");
inputSub.setAttribute("type","submit");
inputSub.setAttribute("value","add task");
inputSub.style.marginLeft = "5px";
container.appendChild(inputText);
container.appendChild(inputSub);
