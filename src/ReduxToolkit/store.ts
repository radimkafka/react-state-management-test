import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
