import {
  createTodo,
  listTodos,
  updateTodo,
  deleteTodo,
  findTodoById,
} from "../repositories/todoRepository";

export const addTodo = async (title, description) => {
  return await createTodo(title, description);
};

export const getTodos = async (title) => {
  const response = await listTodos(title);

  if (response.statusCode === 200) {
    return {
      statusCode: response.statusCode,
      message: response.message,
      tasks: response.pageTodo.todos,
      pagination: {
        currentPage: response.pageTodo.pagination.currentPage,
        totalPages: response.pageTodo.pagination.totalPages,
        pageSize: response.pageTodo.pagination.pageSize,
        totalTasks: response.pageTodo.pagination.total,
      },
    };
  }

  throw new Error("Error al obtener los datos de la API");
};

export const modifyTodo = async (id, title, description) => {
  return await updateTodo(id, title, description);
};

export const removeTodo = async (id) => {
  return await deleteTodo(id);
};

export const findTodo = async (id) => {
  return await findTodoById(id);
};
