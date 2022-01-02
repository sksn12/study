let box = [1, 2, 3];

box = box.map((e) => {
  if (e === 1) {
    return 3;
  }
  return e;
});
console.log(box);
