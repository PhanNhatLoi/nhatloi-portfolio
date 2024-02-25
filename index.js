// config server file
require("dotenv").config();
const next = require("next");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const http = require("http");
const PORT = process.env.PORT || 3005;

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    return app.getRequestHandler()(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;

    console.log(`ready on port localhost:${PORT}`);
  });
});
