class StubProductClient {
  async fetchItems() {
    return [
      { item: "🎾", available: true },
      { item: "🎾", available: false },
    ];
  }
}

module.exports = StubProductClient;
