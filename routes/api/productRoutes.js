const router = require("express").Router();
const productController = require("../../controller/productController");

// Matches with "/api/products"
router.route("/").get(productController.allProducts);

// Matches with "/api/:id"
router.route("/:id").get(productController.getProductById);

module.exports = router;
