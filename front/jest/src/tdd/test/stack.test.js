const Stack = require("../stack.js");

describe("StackTest", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
 
  it("Stack at Pop", () => {
    const preArrLen = stack.arr.length;
    if (preArrLen == 0) {
      expect(() => {
        stack.ArrPop();
      }).toThrow("Stack arr Empty");
    } else {
      stack.ArrPop();
      expect(stack.arr.length).toBe(preArrLen - 1);
    }
  });

  it("Stack in push", () => {
    const preArrLen = stack.arr.length;
    stack.ArrPush(2);
    expect(stack.arr.length).toBe(preArrLen + 1);
  });
});
