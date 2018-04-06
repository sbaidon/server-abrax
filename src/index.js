import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import './models/Todo';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';

dotenv.config();

mongoose.connect(process.env.DATABASE);

mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => {
  console.error(`There was an error: ${err.message}`);
});

const PORT = 9090;
const server = express();

server.use(
  cors({
    origin: 'https://sbaidon.github.io/client-abrax/'
  })
);

server.use(bodyParser.json());

server.use('/api/v1', routes);

server.set('port', process.env.PORT || PORT);

const app = server.listen(server.get('port'), () => {
  console.log(`Server running on ${app.address().port}`);
});
