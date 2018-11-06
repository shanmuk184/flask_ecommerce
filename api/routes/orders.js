const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "you got to orders api"
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "you made a post request to orders api"
  });
});

router.get("/:id", (req, res, next) => {
  res.status(200).json({
    message: `you requested a product with id ${req.params.id} from orders api`
  });
});

router.patch("/:id", (req, res, next) => {
  res.status(200).json({
    message: `updated the product with id ${req.params.id} from orders api`
  });
});

router.delete("/:id", (req, res, next) => {
  res.status(200).json({
    message: `deleted product with id ${req.params.id}`
  });
});

module.exports = router;
