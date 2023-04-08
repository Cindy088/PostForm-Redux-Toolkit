import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "first post", body: "first" },
  { id: 2, title: "second post", body: "second" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { title, body } = action.payload;
      const id = state.length + 1;
      state.push({ id, title, body });
    },
    deletePost: (state, action) => {
      const postID = action.payload;
      const res = state.filter((post) => post.id !== postID);
      console.log("res", res);
      return res;
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
