import crypto from "crypto";

export const generateShareToken = (): string => {
  return crypto.randomBytes(32).toString("hex");
};
