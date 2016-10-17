'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rank = sequelize.define('Rank', {
    Team: DataTypes.STRING,
    PassYardsPerGame: DataTypes.FLOAT,
    PassYardsPerGameRank: DataTypes.FLOAT,
    RushYardsPerGame: DataTypes.FLOAT,
    RushYardsPerGameRank: DataTypes.FLOAT,
    PointsPerGame: DataTypes.FLOAT,
    PointsPerGameRank: DataTypes.FLOAT,
    AveragePassRank: DataTypes.FLOAT,
    TruePassRank: DataTypes.FLOAT,
    AverageRushRank: DataTypes.FLOAT,
    TrueRushRank: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Rank.belongsTo(models.Player, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return Rank;
};
