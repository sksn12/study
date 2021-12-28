const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client.js");
describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    {
      item: "🎾",
      available: false,
    },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      // 키와 벨류 값이 같아서 하나로 처리가능
      //   fetchItems,
      fetchItems1: fetchItems,
    };
  });
  let productService;

  // 이런식으로 코드를 짜게 되면 생성한 객체인 productService에서 ProductClient객체를 생성해서 사용하기때문에
  // 하나의 모듈이나 클래스 단위로 짜야하는 유닛코드의 원칙에 벗어나게 됨 -> ProductService에서 생성해 사용하는 객체가 틀려도 테스트를 확인 할 수 없음!!
  beforeEach(() => {
    productService = new ProductService();
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });
});
