class ProductClient {
  fetchItems1() {
    return fetch("http://example.com/login/id+password").then((response) =>
      response.json()
    );
  }
}

module.exports = ProductClient;
