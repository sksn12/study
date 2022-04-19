const btn = document.querySelector(".btn");
const rabit = document.querySelector(".rabit");
const up_btn = document.querySelector(".up_btn");

btn.addEventListener("click", () => {
  window.scrollTo(
    rabit.getBoundingClientRect().x,
    rabit.getBoundingClientRect().y
  );
});

up_btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
