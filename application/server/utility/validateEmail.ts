export function validateEmail(username: string): string {
  if (typeof username !== "string") {
    throw new Error("Invalid username, must be string.");
  }
  if (username.match(/[^\w@\.\s]/g)) {
    throw new Error("Username contains an invalid character.");
  }
  if (!username.includes("@") || !username.includes(".")) {
    throw new Error("Username improperly formatted.");
  }
  if (username.match(/\./g)!.length > 1) {
    throw new Error("Username improperly formatted.");
  }

  let split = username.split(".");
  if (split[0].length == 0 || split[1].length == 0) {
    throw new Error("Username improperly formatted.");
  }

  let trim = username.trim();
  let lowercase = trim.toLowerCase();
  let sanitized = lowercase;
  return sanitized;
}
