const ProductService = require("../product_service.js");
const StubProductClient = require("./stub_product_client");

describe("test", () => {
  let productService;
  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("test", async () => {
    const item = await productService.fetchAvailableItems();
    expect(item).toEqual([{ item: "🎾", available: true }]);
  });
});
