import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  articles: [
    {
      id: 1,
      title: 'Default Article',
      description: 'This is the default article provided in this app',
    },
  ],
};

let lastId = 1;

const articlesSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push({
        id: ++lastId,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    removeArticle: (state, action) => {
      state.articles = state.articles.filter(
        article => article.id !== action.payload.id,
      );
    },
  },
});

export default articlesSlice.reducer;
export const {addArticle, removeArticle} = articlesSlice.actions;
