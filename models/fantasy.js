"use strict";

module.exports = function(sequelize, DataTypes) {
  var Fantasy = sequelize.define("Fantasy", {
    fantasy_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {

    underscored: true,

    freezeTableName: true,

    // define the table's name
    tableName: 'fantasys',

    classMethods: {
      associate: function(models) {
        Fantasy.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
      });
      }
    }
  });

  return Fantasy;
};
