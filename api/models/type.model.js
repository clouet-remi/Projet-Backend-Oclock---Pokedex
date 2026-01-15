import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.client.js";

export class Type extends Model {}

Type.init({
    name: {
        type: DataTypes.TEXT, 
        allowNull: false, 
        unique: true
    }, 
    
    color: {
        type: DataTypes.STRING(7), 
        allowNull: false, 
        defaultValue: "#FFFFFF"
    }
}, {
    sequelize, 
    tableName: "type"
})