import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    allPost: [],
  },
  reducers: {
    getAllPost: (state, action) => {
      state.allPost = [action.payload];
    },
    createAPost: (state, action) => {
      state.allPost.push(action.payload);
    },
  },
});

// export const getAllpost = () => async (dispatch) => {
//   /*
//   axios
//     .get('API', parametre....)
//     .then ((res) => {
//       dispatch(getAllPost(res.data))
//     })
//     .catch(error)
//   */
// }

// export const createAPost = (newPost) => (dispatch) => {
//   dispatch(createAPost(newPost))
// }

export const postsData = (state) => state.post
export default postSlice.reducer;
