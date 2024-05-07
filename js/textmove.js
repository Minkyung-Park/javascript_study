document.addEventListener("scroll", function () {
  const scrollAmount = window.scrollY; // 스크롤 양을 담아서 저장
  const textTop = document.getElementById("textTop");
  const textBottom = document.getElementById("textBottom");

  textTop.style.transform = `translateX(${scrollAmount * 0.5}px)`;
  textBottom.style.transform = `translateX(-${scrollAmount * 0.5}px)`;
});
