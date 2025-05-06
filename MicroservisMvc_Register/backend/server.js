const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/login",
  createProxyMiddleware({
    target: "http://localhost:5000",
    changeOrigin: true,
    pathRewrite: {
      "^/login": "/login",
    },
    logLevel: "debug",
  })
);

app.use(
  "/register",
  createProxyMiddleware({
    target: "http://localhost:7000",
    changeOrigin: true,
    logLevel: "debug",
  })
);

app.use(
  "/article",
  createProxyMiddleware({
    target: "http://localhost:6000",
    changeOrigin: true,
    logLevel: "debug",
  })
);

app.get("/", (req, res) => {
  res.send("Main Microservice API");
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000!");
});
