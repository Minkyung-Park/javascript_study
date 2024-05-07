// e(이벤트)를 받아야 한다
function showCoord(e) {
  let text = "좌표 : (" + e.clientX + ", " + e.clientY + ")";
  document.getElementById("show").innerHTML = text;
}
