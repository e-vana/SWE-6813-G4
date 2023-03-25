export function sanitizeEmail(email: string): string {
  if (typeof email !== "string") {
    throw new Error("Invalid email type, must be string.");
  }
  if (email.match(/[^\w@\.\s]/g)) {
    throw new Error("Email contains an invalid character.");
  }
  if (!email.includes("@") || !email.includes(".")) {
    throw new Error("Email improperly formatted.");
  }
  if (email.match(/\./g)!.length > 1) {
    throw new Error("Email improperly formatted.");
  }

  let split = email.split(".");
  if (split[0].length == 0 || split[1].length == 0) {
    throw new Error("Email improperly formatted.");
  }

  let trim = email.trim();
  let lowercase = trim.toLowerCase();
  let sanitized = lowercase;
  return sanitized;
}
