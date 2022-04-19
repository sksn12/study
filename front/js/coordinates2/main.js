const target = document.querySelector(".target");
const width_line = document.querySelector(".width_line");
const height_line = document.querySelector(".height_line");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x);
  console.log(y);
  width_line.style.top = `${y}px`;
  height_line.style.left = `${x}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
});
