"use strict";

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface
            .createTable('d_rank', {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
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
            });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface
            .dropTable('d_rank');
    }
};
