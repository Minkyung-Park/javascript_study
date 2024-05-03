const elem = document.createElement("p");
const text = document.createTextNode("변경한 단락");

elem.appendChild(text);

const p1 = document.getElementById("p1");
document.getElementById("box").replaceChild(elem, p1);
