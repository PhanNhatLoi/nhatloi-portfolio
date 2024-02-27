export const PORT = process.env.PORT || 3000;
export const originUrl =
  process.env.NODE_ENV === "production"
    ? process.env.VERCEL_URL
    : `http://localhost:${PORT}`;
