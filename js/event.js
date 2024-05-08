const sel = document.getElementById("sz");
sel.addEventListener("change", function (e) {
  document.getElementById(
    "show"
  ).innerHTML = `선택한 사이즈는 ${e.target.value}입니다`;
});
