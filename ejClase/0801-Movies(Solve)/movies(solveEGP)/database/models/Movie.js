// const { DataTypes } = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("Movie", {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        title: {
            type: DataTypes.STRING(500)
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1).UNSIGNED
        },
        awards: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        release_date: {
            type: DataTypes.DATE
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        genre_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }
    }, {
        tableName: 'movies',
        timestamps: false,
    });
    return Movie;
}