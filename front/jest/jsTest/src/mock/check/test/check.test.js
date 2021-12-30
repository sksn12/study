const check = require("../check");

describe("Check", () => {
  let onSuccess;
  let onFail;

  // jest에 mock함수를 만들어줌 why?
  onSuccess = jest.fn();
  onFail = jest.fn();

  it("sholud call onSucess When predicate is true ", () => {
    check(() => true, onSuccess, onFail);

    // onSuccess에 mock함수를 호출하면 길이가 1이 되야함
    expect(onSuccess.mock.calls.length).toBe(1);
    // 위에랑 같은 효과인데 더 직관적으로 나타내주는 api
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // onSuccess에 mock함수를 호출하면 그 값이 yes여야함
    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");

    expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });
});
