//import { createReducer } from '@reduxjs/toolkit';
//import {
//  addTask,
//  deleteTask,
//  toggleCompleted,
//  setStatusFilter,
//} from './actions';
//перенос в слайс и файл редьюсер не нужен
//const tasksInitialState = [
//  { id: 0, text: 'Learn HTML and CSS', completed: true },
//  { id: 1, text: 'Get good at JavaScript', completed: true },
//  { id: 2, text: 'Master React', completed: false },
//  { id: 3, text: 'Discover Redux', completed: false },
//  { id: 4, text: 'Build amazing apps', completed: false },
//];

//const filtersInitialState = {
//  status: 'all',
//};
//код оновлення стану в редюсері
//export const tasksReducer = createReducer(tasksInitialState, {
//  [addTask]: (state, action) => {
//    state.push(action.payload);
//  },
//  [deleteTask]: (state, action) => {
//    const index = state.findIndex(task => task.id === action.payload);
//    state.splice(index, 1);
//  },
//  [toggleCompleted]: (state, action) => {
//    for (const task of state) {
//      if (task.id === action.payload) {
//        task.completed = !task.completed;
//      }
//    }
//  },
//});
//
//export const filtersReducer = createReducer(filtersInitialState, {
//  [setStatusFilter]: (state, action) => {
//    state.status = action.payload;
//  },
//});
//
//redux old
//import { combineReducers } from 'redux';

//export const tasksReducer = (state = tasksInitialState, action) => {
//  switch (action.type) {
//    case 'tasks/addTask':
//      return {
//        ...state,
//        tasks: [...state.tasks, action.payload],
//      };
//    case 'tasks/deleteTask':
//      return {
//        ...state,
//        tasks: state.tasks.filter(task => task.id !== action.payload),
//      };
//    case 'tasks/toggleCompleted':
//      return {
//        ...state,
//        tasks: state.tasks.map(task => {
//          if (task.id === action.payload) {
//            return {
//              ...task,
//              completed: !task.completed,
//            };
//          }
//          return task;
//        }),
//      };
//    default:
//      return state;
//  }
//};

//export const filtersReducer = (state = filtersInitialState, action) => {
//  switch (action.type) {
//    case 'filters/setStatusFilter':
//      return {
//        ...state,
//        filters: {
//          ...state.filters,
//          status: action.payload,
//        },
//      };
//    default:
//      return state;
//  }
//};

//export const rootReducer = combineReducers({
//  tasks: tasksReducer,
//  filters: filtersReducer,
//});
