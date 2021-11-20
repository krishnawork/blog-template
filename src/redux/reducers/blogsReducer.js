import { ActionTypes } from "../constants/action-types";
const intialState = {
  blogs: [
    {
      imageUrl:
        "https://lirp.cdn-website.com/918b7739/dms3rep/multi/opt/Treatment_woman-2880w.jpg",
      title: "TREATMENTS",
      description:
        "We treat every customer with the very best service and care. All our hairstylists are seasoned professionals who use the very best products to ensure that your hairstyle suits your style. Our professionals are beauty connoisseurs who travel to the the world to share knowledge and gain inspiration. We treat every customer with the very best service and care. All our hairstylists are seasoned professionals who use the very best products to ensure that your hairstyle suits your style. Our professionals are beauty connoisseurs who travel to the the world to share knowledge and gain inspiration. We treat every customer with the very best service and care. All our hairstylists are seasoned professionals who use the very best products to ensure that your hairstyle suits your style. Our professionals are beauty connoisseurs who travel to the the world to share knowledge and gain inspiration.",
    },
  ],
};

export const blogReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BLOG:
      return { ...state, blog: payload };
    case ActionTypes.ADD_BLOG:
      state.blogs.unshift(payload);
      return state;
    default:
      return state;
  }
};

export const selectedBlogReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_BLOG:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_BLOG:
      return {};
    default:
      return state;
  }
};
