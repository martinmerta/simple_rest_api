import mongodb = require('mongodb');
import { Db } from 'mongodb';
const MongoClient = mongodb.MongoClient;
const url = `mongodb+srv://<username>:<password><databasename>-fqsbx.mongodb.net/admin?retryWrites=true&w=majority`;
let _db: Db;
export const mongoConnect = callback => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client: mongodb.MongoClient) => {
      _db = client.db('todotasks');
      callback();
    })
    .catch(err => {
      throw new Error(err);
    });
};
export const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
};
