import { ActionTypes } from "../constants/action-types";

export const setBlog = (blog) => {
    return {
      type: ActionTypes.SET_BLOG,
      payload: blog,
    };
  };

  export const AddBlog = (blog) => {
    return {
      type: ActionTypes.ADD_BLOG,
      payload: blog
    };
  };

  export const selectedBlog = (Blog) => {
    return {
      type: ActionTypes.SELECTED_BLOG,
      payload: Blog,
    };
  };
  export const removeSelectedBlog = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_BLOG,
    };
  };
  