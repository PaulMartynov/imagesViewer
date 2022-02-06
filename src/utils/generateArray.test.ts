import { generateNumbers } from "./generateArray";

describe("testing generateNumbers function", () => {
  test("its a function", () => {
    expect(generateNumbers).toBeInstanceOf(Function);
  });
  test("generate numbers", () => {
    const numbers = generateNumbers();
    expect(numbers).toHaveLength(101);
    expect(numbers[0]).toBe(0);
    expect(numbers[numbers.length - 1]).toBe(100);
  });
});
