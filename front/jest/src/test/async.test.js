const fetchProduct = require("../async");

describe("async", () => {
  //   it("Error", () => {
  //     fetchProduct("error")
  //       .then()
  //       .catch((err) => {
  //         expect(err).toBe("network error");
  //       });
  //   });

  it("Success", () => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk1", price: 200 });
    });
  });
});
