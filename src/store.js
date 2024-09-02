import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/rootReducer'; // Ensure this path is correct

const store = configureStore({
  reducer: rootReducer,
  // By default, `redux-thunk` is included in the middleware, so you don't need to add it manually
});

export default store;
