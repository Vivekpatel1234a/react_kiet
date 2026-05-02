import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
};



const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push({ id: Date.now(), text: action.payload, completed: false });
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.todoList = state.todoList.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        }
    }
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;




