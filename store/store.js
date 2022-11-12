import {configureStore} from '@reduxjs/toolkit';
import articlesReducer from '../components/articlesSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;
