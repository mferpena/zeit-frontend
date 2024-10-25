import axios from "axios";

const BASE_URL = 'http://localhost:5157/api/Todo';

export const createTodo = async (title, description) => {
  const response = await axios.post(`${BASE_URL}`, {
    Title: title,
    Description: description,
  });
  return response.data;
};

export const listTodos = async (title) => {
  const response = await axios.get(`${BASE_URL}?title=${title}`);
  return response.data;
};

export const updateTodo = async (id, title, description) => {
  const response = await axios.put(`${BASE_URL}/${id}`, {
    title,
    description
  });
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export const findTodoById = async (id) => {
  const response = await axios.get(`${BASE_URL}?title=${id}`);
  return response.data;
};
