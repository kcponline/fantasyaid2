'use strict';
module.exports = function(sequelize, DataTypes) {
  var d_rank = sequelize.define('d_rank', {
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
      }
    }
  });
  return d_rank;
};
