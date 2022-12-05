import { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        dispatch({ type: '[TODO] Add todo', payload: todo });
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: '[TODO] Delete todo', payload: id });
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: '[TODO] Toggle todo', payload: id });
    };

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
    };
};
