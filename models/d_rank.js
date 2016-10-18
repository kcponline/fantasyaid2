'use strict';
module.exports = function(sequelize, DataTypes) {
    var D_Rank = sequelize.define("D_Rank", {
      team: DataTypes.STRING,
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
        underscored: true,

        freezeTableName: true,

        // define the table's name
        tableName: 'D_Rank',

        classMethods: {
            associate: function(models) {
                // associations can be defined here
                D_Rank.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return D_Rank;
};
