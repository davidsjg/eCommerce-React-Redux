const db = require("../models");

module.exports = {
  allProducts: function (req, res) {
    db.Product.find({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getProductById: function (req, res) {
    db.Product.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
