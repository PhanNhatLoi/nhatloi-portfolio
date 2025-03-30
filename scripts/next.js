require("dotenv").config();
const next = require("next");
const http = require("http");
const PORT = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    // Handle API routes

    // Handle Next.js routes
    return app.getRequestHandler()(req, res);
  });
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on port:${PORT}`);
  });
});
