import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

/*
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => {
  console.error(`There was an error: ${err.message}`);
});
*/

const PORT = 3000;
const server = express();

server.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true // <-- REQUIRED backend setting
  })
);

server.use(bodyParser.json());

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
