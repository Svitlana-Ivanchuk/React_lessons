import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

//redux
//import { createStore } from 'redux';
//import { devToolsEnhancer } from '@redux-devtools/extension';
//import { rootReducer } from './reducer';
//import { filtersReducer, tasksReducer } from './reducer';

//const enhancer = devToolsEnhancer();

//export const store = createStore(rootReducer, enhancer);
