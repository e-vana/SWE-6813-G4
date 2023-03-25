export function sanitizePassword(password: string): string {
  if (typeof password !== "string") {
    throw new Error("Invalid password type, must be string.");
  }
  if (password.match(/[^\w@!@#$%]/g)) {
    throw new Error(
      "Password contains an invalid character (!, @, #, $, %, are acceptable characters)."
    );
  }
  if (password.length < 8) {
    throw new Error(
      "Password does not meet the length requirements. (Minimum 8 chars)."
    );
  }
  return password;
}
