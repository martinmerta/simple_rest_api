import { Response, Request, NextFunction } from 'express';
import { Task } from '../models/Task';
import { getDb } from '../database/mongo';
import { ObjectId } from 'mongodb';
import { validationResult } from 'express-validator';
export const getToDo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await Task.getAlltasks();
    return res.status(200).json({ msg: tasks });
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};
export const postToDo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ msg: errors.array() });
  }
  const task = new Task(title, description);
  try {
    await task.save();
    return res.status(201).json({ msg: 'Post sucessfully created' });
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};
export const deleteToDo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.body.id;
  try {
    const db = await getDb();
    await db.collection('tasks').deleteOne({ _id: new ObjectId(`${_id}`) });
    return res.status(200).json({ msg: 'Post sucessfully deleted' });
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};
export const patchToDo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = req.params.id;
  const { title, description } = req.body;
  const db = getDb();
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ msg: errors.array() });
  }
  try {
    await db
      .collection('tasks')
      .findOneAndUpdate(
        { _id: new ObjectId(`${_id}`) },
        { $set: { title, description } }
      );
    return res.status(201).json({ msg: 'Post sucessfully changed' });
  } catch (err) {
    return res.status(400).json({ msg: err });
  }
};
