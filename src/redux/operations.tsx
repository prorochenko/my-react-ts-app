import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://637939287419b414df8c2fc4.mockapi.io';

interface Task {
  id: number;
  completed: boolean;
}

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (e) {
    if (e instanceof Error && e.message) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue('An error occurred');
  }
});

export const addTask = createAsyncThunk('tasks/addTask', async (text, thunkAPI) => {
  try {
    const response = await axios.post('/tasks', { text });
    return response.data;
  } catch (e) {
    if (e instanceof Error && e.message) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue('An error occurred');
  }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (e) {
    if (e instanceof Error && e.message) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue('An error occurred');
  }
});

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task: Task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      if (e instanceof Error && e.message) {
        return thunkAPI.rejectWithValue(e.message);
      }
      return thunkAPI.rejectWithValue('An error occurred');
    }
  }
);
