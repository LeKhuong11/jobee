import { configureStore } from '@reduxjs/toolkit';
import helloReducer from '@context/hello/helloSlice';
import counterReducer from '@context/counter/counterSlice';


export const store = configureStore({
  reducer: {
    hello: helloReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;