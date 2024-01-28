import { createReducer } from "@reduxjs/toolkit";
import { postsSet } from "./postsActions";
import { generatePosts } from "../../utils/generateMockData";

const initialState = generatePosts(30);

const postsReducer = createReducer(initialState, (builder) => {
  builder.addCase(postsSet, (state, action) => {
    return action.payload;
  });
});

export default postsReducer;
