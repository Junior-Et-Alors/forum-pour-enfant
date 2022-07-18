import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './postSlice/postSlice';

export default configureStore({
  reducer: {
    post: postSlice,
  },
});
