import mongoose, { Document, Schema } from 'mongoose';

// Define the ITask interface
export interface ITask extends Document {
  title: string;
  description: string;
  status: 'To Do' | 'On Progress' | 'Done';
  priority: 'Low' | 'High';
  deadline: string;
  assignedTo: string;
}

// Define the TaskSchema
const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: String, required: true },
  assignedTo: { type: String, required: true },
  status: { type: String, enum: ['To Do', 'On Progress', 'Done'], default: 'To Do' },
  priority: { type: String, enum: ['Low', 'High'], default: 'Low' },
});

// Create the Task model
export const Task = mongoose.model<ITask>('Task', TaskSchema);