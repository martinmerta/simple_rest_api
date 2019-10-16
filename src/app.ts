import express = require('express');
import cors = require('cors');
import bodyParser = require('body-parser');
import { router } from './routes';
export const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/tasks', router);
