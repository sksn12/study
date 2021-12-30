class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      // 별도의 클라이언트를 두는이유 : UserService내부에서 userClient코드를 사용하게 되면 서버와 통신하는 코드이기때문에 유닛테스트를 하기 매우 어려워짐
      //return fetch('http://example.com/login/id+password') //
      // .then((response) => response.json());
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;
