import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Note from "./Note";

describe(`Note component`, () => {
  const newDate = new Date(2018, 12, 15);

  const props = {
    id: "a",
    name: "test-class-name",
    modified: newDate.toISOString()
  };

  it("renders the Note given props", () => {
    const wrapper = shallow(<Note {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
