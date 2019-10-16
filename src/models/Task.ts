import { getDb } from '../database/mongo';
export class Task {
  constructor(public title: string, public description: string) {}
  save() {
    const db = getDb();
   return db.collection('tasks').insertOne(this);
  }
  static getAlltasks() {
    const db = getDb();
    return db
      .collection('tasks')
      .find()
      .toArray();
  }
}
