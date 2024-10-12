import { createContext, useContext } from 'react';


export const TodoContext = createContext({
  todos: [
    {
      id: Date.now(),
      todo: 'My First Todo',
      completed: false,
    }
  ],
  addTodo: (todo) => { },
  editTodo: (id, todo) => { },
  removeTodo: (id) => { },
  toggleTodo: (id) => { },
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

