import express = require('express');
import { getToDo, postToDo, deleteToDo, patchToDo } from '../controllers';
import { check } from 'express-validator';
export const router = express.Router();
const checkCriteria = [
  check('title')
    .isString()
    .isLength({ min: 3 }),
  check('description')
    .isString()
    .isLength({ min: 10 })
];
router.get('/todo', getToDo);
router.post('/todo', checkCriteria, postToDo);
router.delete('/todo/:id', deleteToDo);
router.patch('/todo/:id', checkCriteria, patchToDo);
