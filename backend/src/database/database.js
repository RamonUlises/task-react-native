import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const connection = async () => {
  return await mysql.createConnection({
    host: process.env.LOCALHOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
};