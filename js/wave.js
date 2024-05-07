document.addEventListener("mousemove", function (e) {
  let ripple = document.createElement("div");
  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX - 50}px`;
  ripple.style.top = `${e.clientY - 50}px`;

  ripple.addEventListener("animationend", () => {
    ripple.parentElement.removeChild(ripple);
  });
});
