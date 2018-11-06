const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "got to products route"
  });
});

router.post("/", (req, res, next) => {
  console.log(req);
  const products = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(200).json({
    product: products,
    message: "made a post request to products route"
  });
});

router.get("/:id", (req, res, next) => {
  res.status(200).json({
    id: req.params.id
  });
});
router.patch("/:id", (req, res, next) => {
  res.status(200).json({
    id: req.params.id,
    message: "updated product"
  });
});
router.delete("/:id", (req, res, next) => {
  res.status(200).json({
    id: req.params.id,
    message: "deleted product"
  });
});

module.exports = router;
