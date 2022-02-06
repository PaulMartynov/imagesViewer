import { parseOptions } from "./jsonplaceholder";

describe("testing parseOptions function", () => {
  test("its a function", () => {
    expect(parseOptions).toBeInstanceOf(Function);
  });
  test("parse options", () => {
    expect(parseOptions({ "1": 1, "2": 2 })).toStrictEqual("?1=1&2=2");
  });
  test("parse options with undefined", () => {
    expect(parseOptions(undefined)).toStrictEqual("");
  });
  test("parse options empty keys", () => {
    expect(parseOptions({})).toStrictEqual("");
  });
});
