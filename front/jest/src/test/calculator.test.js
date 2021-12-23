const Calculator = require("../calculator");

//관련있는 테스트들을 묶어줌
// test라고 해도 되지만 it으로 calculator를 가르키는 3인칭으로 써도댐

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  // 계산기를 만들면 0으로 되야한다는 test
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });
  // 초기화
  it("clear", () => {
    cal.set(9);
    cal.clear(0);
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("subtract", () => {
    cal.set(4);
    cal.subtract(1);
    expect(cal.value).toBe(3);
  });

  it("multiply", () => {
    cal.set(1);
    cal.multiply(2);
    expect(cal.value).toBe(2);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
