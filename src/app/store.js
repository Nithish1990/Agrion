import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
// import questionReducer from "../feature/questionSlice";

export default configureStore({
  reducer: {
    user: userReducer
    // question: questionReducer,
  },
});
