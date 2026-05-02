import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer';
//export { addTodo, deleteTodo, toggleTodo } from './action';

export const store = configureStore({
    reducer:{
        todo: todoReducer
    }
});