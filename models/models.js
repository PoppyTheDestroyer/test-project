const index = require("./models");
const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("item", {
    itemName: {
      type: DataTypes.STRING,
      required: true
    },
    itemQuant: {
      type: DataTypes.INTEGER,
      required: true
    },
    measureUnit: {
      type: DataTypes.STRING,
      required: true
    },
    estPrice: {
      type: DataTypes.DECIMAL,
      required: true
    }
  });
  return Item;
};
