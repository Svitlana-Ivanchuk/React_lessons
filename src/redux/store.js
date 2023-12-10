import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './tasks/tasksSlice';
import { authReducer } from './auth/authSlice';
import { filtersReducer } from './tasks/filtersSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    tasks: tasksReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

//redux
//import { createStore } from 'redux';
//import { devToolsEnhancer } from '@redux-devtools/extension';
//import { rootReducer } from './reducer';
//import { filtersReducer, tasksReducer } from './reducer';

//const enhancer = devToolsEnhancer();

//export const store = createStore(rootReducer, enhancer);
