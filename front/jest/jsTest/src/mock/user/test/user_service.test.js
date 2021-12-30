const UserService = require("../user_service");
const UserClient = require("../user_client");

jest.mock("../user_client.js");

describe("test", () => {
  const login = jest.fn(async () => "success");

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;
  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("test", async () => {
    await userService.login("x", "x");
    expect(login.mock.calls.length).toBe(1);
  });
});
