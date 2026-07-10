import crypto from "crypto";

export const generateShareToken = (): string => {
  return crypto.randomytes(32).toString("hex");
};
