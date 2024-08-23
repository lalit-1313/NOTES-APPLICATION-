import { Sequelize } from "sequelize";

const db = new Sequelize(
    "notes_app_db", // database name
    "root", // username
    "L7374@lkc", // password
    {
        host : '127.0.0.1',
        dialect : 'mysql'
    }

);

export default db;