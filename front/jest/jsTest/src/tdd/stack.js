class Stack {
  constructor() {
    this.arr = [];
  }
  ArrPush(now_arr) {
    return this.arr.push(now_arr);
  }
  ArrPop() {
    if (this.arr.length == 0) {
      throw new Error("Stack arr Empty");
    } else {
      this.arr.pop();
    }
  }
}

module.exports = Stack;
