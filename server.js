const express = require("express");
// const cors = require("cors");
const app = express();

// app.use(cors());

const hostname = "localhost";
const port = 3001;

const _products = [
  { id: 1, title: "iPad Pro", price: 500.01 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99 },
];

app.use(express.json());

app.use(express.static("./static"));
// 模拟商品数据
app.get("/products", (req, res) => {
  res.status(200).json(_products);
});
// 模拟支付
app.post("/checkout", (req, res) => {
  res.status(200).json({
    success: Math.random() > 0.5,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
