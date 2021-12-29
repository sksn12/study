const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client.js");

describe("ProductService Test", () => {
  const fetchItem = jest.fn(async () => [
    { item: "🎾", available: true },
    { item: "🎾", available: false },
  ]);
  // ProductClient에 fetchItems1을 mock 함수인 fetchItem로 대체
  ProductClient.mockImplementation(() => {
    return {
      fetchItems1: fetchItem,
    };
  });
  let productService;
  beforeEach(() => {
    productService = new ProductService();
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: "🎾", available: true }]);
  });

  it("test", async () => {
    const item = await productService.fetchAvailableItems();
    expect(fetchItem).toHaveBeenCalledTimes(1);
  });
});
