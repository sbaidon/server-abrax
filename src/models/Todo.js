import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const todoSchema = new Schema({
  name: {
    type: String,
    required: 'You must provide a name'
  },
  description: {
    type: String,
    required: 'Please provide a description'
  },
  time: {
    type: Number
  },
  remainingTime: {
    type: Number
  },
  timeTaken: {
    type: Number
  },
  status: {
    type: String,
    required: 'You must set a status'
  }
});

export default mongoose.model('Todo', todoSchema);
