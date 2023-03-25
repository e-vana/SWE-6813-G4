import { sanitizeEmail } from "../utility/sanitizeEmail";

test("Calls validate email with a properly formatted email and returns true", () => {
  expect(sanitizeEmail("test@test.com")).toBe("test@test.com");
});
test("trims all white space", () => {
  expect(sanitizeEmail(" test@test.com ")).toBe("test@test.com");
});
test("Makes all characters lowercase", () => {
  expect(sanitizeEmail("TEST@test.com")).toBe("test@test.com");
});
test("Throws Error if no @", () => {
  expect(() => {
    sanitizeEmail("test.com");
  }).toThrowError();
});
test("Throws Error if no .", () => {
  expect(() => {
    sanitizeEmail("testcom");
  }).toThrowError();
});
test("Throws Error if no characters on either side of the .", () => {
  expect(() => {
    sanitizeEmail("test.");
  }).toThrowError();
  expect(() => {
    sanitizeEmail(".test");
  }).toThrowError();
});
test("Throws Error if too many .", () => {
  expect(() => {
    sanitizeEmail("test.com.com");
  }).toThrowError();
});
test("Throws Error if invalid character", () => {
  expect(() => {
    sanitizeEmail("!test@test.com");
  }).toThrowError();
});
