import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Note = db.define('notes', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true // for same table name in model
});

export default Note;