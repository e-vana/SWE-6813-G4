import { validateEmail } from "../utility/validateEmail";
validateEmail;

test("Calls validate email with a properly formatted email and returns true", () => {
  expect(validateEmail("test@test.com")).toBe("test@test.com");
});
test("trims all white space", () => {
  expect(validateEmail(" test@test.com ")).toBe("test@test.com");
});
test("Makes all characters lowercase", () => {
  expect(validateEmail("TEST@test.com")).toBe("test@test.com");
});
test("Throws Error if no @", () => {
  expect(() => {
    validateEmail("test.com");
  }).toThrowError();
});
test("Throws Error if no .", () => {
  expect(() => {
    validateEmail("testcom");
  }).toThrowError();
});
test("Throws Error if no characters on either side of the .", () => {
  expect(() => {
    validateEmail("test.");
  }).toThrowError();
  expect(() => {
    validateEmail(".test");
  }).toThrowError();
});
test("Throws Error if too many .", () => {
  expect(() => {
    validateEmail("test.com.com");
  }).toThrowError();
});
test("Throws Error if invalid character", () => {
  expect(() => {
    validateEmail("!test@test.com");
  }).toThrowError();
});
test("Validates if username contains an underscore", () => {
  expect(validateEmail("tEsT_TeSt@test.com")).toBe("test_test@test.com");
});
test("Validates if username is horrific", () => {
  expect(validateEmail(" tEsT_TeSt@test.com ")).toBe("test_test@test.com");
});
