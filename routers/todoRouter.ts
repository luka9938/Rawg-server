import { Router } from "express";
import Todo from "../models/todo";

const todoRouter = Router();

todoRouter.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

todoRouter.post("/", async (req, res) => {
  const { title } = req.body;
  const todo = new Todo({
    title,
  });
  await todo.save();
  res.json(todo);
});

export default todoRouter;
