import { createSlice } from "@reduxjs/toolkit";

interface IUserPost {
  id_primary: number;
  body: string;
  id: number;
}

const initialState: Array<IUserPost> = [];

const userPost = createSlice({
  name: "userPost",
  initialState,
  reducers: {
    addPost(state, actions) {
      state.push(actions.payload);
    },
    finishLoading(state, actions) {
      return actions.payload;
    },
    deleteOnePost(state, actions) {
      console.log(state.length)
      let index: number = 0;
      for (let i = 0; i < state.length; i++) {
        if(state[i].id_primary === actions.payload)
        index = i
      }
      state.splice(index, 1);
    },
  },
});

export default userPost.reducer;
export const { addPost, finishLoading, deleteOnePost } = userPost.actions;
