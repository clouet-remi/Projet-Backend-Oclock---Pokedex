import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.client.js";

export class Vote extends Model { }

Vote.init({
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    sequelize,
    tableName: "vote"
})