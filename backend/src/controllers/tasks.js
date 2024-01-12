import { connection } from "../database/database";

export const getTasks = async (req, res) => {
    const dataBase = await connection();
    const [rows] = await dataBase.query("SELECT * FROM tasks");
    res.json(rows);
};

export const getTask = async (req, res) => {
    const dataBase = await connection();
    const [rows] = await dataBase.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
};

export const getTaskCount = async (req, res) => {
    const dataBase = await connection();
    const [rows] = await dataBase.query("SELECT COUNT(*) FROM tasks");
    res.json(rows[0]["COUNT(*)"]);
};

export const saveTask = async (req, res) => {
    const dataBase = await connection();
    const [result] = await dataBase.query("INSERT INTO tasks (title, description) VALUES ( ? , ? )", [req.body.title, req.body.description]);

    res.json({
        id: result.insertId,
        ...req.body
    });
};

export const updateTask = async (req, res) => {
    const dataBase = await connection();
    await dataBase.query("UPDATE tasks SET ? WHERE id = ?", [req.body, req.params.id]);
    res.sendStatus(204);
};

export const deleteTask = async (req, res) => {
    const dataBase = await connection();
    await dataBase.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);

    res.sendStatus(204);
};