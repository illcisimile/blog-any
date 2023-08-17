import { combineReducers, configureStore } from '@reduxjs/toolkit';

import blogReducer from './reducers/blogReducer';
import userReducer from './reducers/userReducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistedConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  blogs: blogReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistedConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
