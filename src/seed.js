import faker from 'faker';
import mongoose from 'mongoose';
import './models/Todo';
import dotenv from 'dotenv';

const Todo = mongoose.model('Todo');

dotenv.config();

mongoose.connect(process.env.DATABASE);

mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => {
  console.error(`There was an error: ${err.message}`);
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function seed(amount) {
  await Promise.all(
    [...Array(amount)]
      .map(() => {
        const percentageCompleted = getRandomInt(80, 100) / 100;
        const time = getRandomInt(1800, 7200);
        const remainingTime = Math.trunc(time * percentageCompleted);
        return {
          name: `${faker.hacker.verb()} the ${faker.hacker.noun()}`,
          description: faker.hacker.phrase(),
          time,
          remainingTime,
          status: 'proceso'
        };
      })
      .map(todo => {
        return new Todo({ ...todo }).save();
      })
  );
  console.log('Completed Seeding');
}

seed(50);
