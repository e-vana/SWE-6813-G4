export function sanitizePassword(password: string): string {
  if (typeof password !== "string") {
    throw {message: "Invalid password type, must be string."}
  }
  if (password.match(/[^\w@!@#$%]/g)) {
    throw {message: "Password contains an invalid character (!, @, #, $, %, are acceptable characters)."}

  }
  if (password.length < 8) {
    throw {message: "Password does not meet the length requirements. (Minimum 8 chars)."}
  }
  return password;
}
