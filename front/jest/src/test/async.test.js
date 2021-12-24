const fetchProduct = require("../async");

describe("async", () => {
  it("Error", () => {
    fetchProduct("error")
      .then()
      .catch((err) => {
        expect(err).toBe("network error");
      });
  });

  it("Success", async () => {
    await fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });
});
