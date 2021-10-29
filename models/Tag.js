const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

// {
//   tag_name: 'rock music',
// },

Tag.init(
  //defining columns
  {
    tag_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
