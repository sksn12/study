import React from "react";
import Navbar from "../navbar";
import renderer from "react-test-renderer";

describe("navbar test", () => {
  it("renders", () => {
    const component = renderer.create(<Navbar totalCount={4} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
