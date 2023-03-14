import { sanitizePassword } from "../utility/sanitizePassword";
test("Calls validate password with a valid password", () => {
  expect(sanitizePassword("password123@")).toBe("password123@");
});
test("Throws if receives an invalid character", () => {
  expect(() => {
    sanitizePassword("password123@&&&");
  }).toThrowError();
});
test("Throws if password length is < 8 characters", () => {
  expect(() => {
    sanitizePassword("pwasd");
  }).toThrowError();
});
