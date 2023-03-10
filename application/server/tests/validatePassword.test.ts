import { validatePassword } from "../utility/validatePassword";

test("Calls validate password with a valid password", () => {
  expect(validatePassword("password123@")).toBe(true);
});
test("hrows if receives an invalid character", () => {
  expect(() => {
    validatePassword("password123@&&&");
  }).toThrowError();
});
