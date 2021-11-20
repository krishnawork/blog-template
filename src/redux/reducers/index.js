import { combineReducers } from "redux";
import { blogReducer, selectedBlogReducer } from "./blogsReducer";
const reducers = combineReducers({
  allBlogs: blogReducer,
  blog: selectedBlogReducer,
});
export default reducers;
