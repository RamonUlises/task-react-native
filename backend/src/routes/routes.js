import { Router } from "express";
import {
  saveTask,
  getTask,
  getTaskCount,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: tareas
 *  description: Punto de conexion de tareas
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Esto obtiene todas las tareas agregadas
 *      tags: [tareas]
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Esto te da el número total de tareas agregadas
 *      tags: [tareas]
 */
router.get("/tasks/count", getTaskCount);

/**
 * @swagger
 * /tasks/:id:
 *  get:
 *      summary: Esto te muestra la información de una tarea en especifico
 *      tags: [tareas]
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Esto crea una nueva tarea
 *      tags: [tareas]
 */
router.post("/tasks", saveTask);

/**
 * @swagger
 * /tasks/:id:
 *  delete:
 *      summary: Esto elimina una tarea en especifico
 *      tags: [tareas]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks/:id:
 *  put:
 *      summary: Esto actualiza una tarea en especifico
 *      tags: [tareas]
 */
router.put("/tasks/:id", updateTask);

export default router;
