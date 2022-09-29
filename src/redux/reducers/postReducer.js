import { produce } from "immer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function postReducer(state = initialState.posts, action) {
  const posts = action.payload;

  return produce(state, (draft) => {
    switch (action.type) {
      case types.LOAD_POSTS_SUCCESS: {
        draft.splice(0, draft.length, ...posts);
        break;
      }
      case types.LOAD_POSTS_BY_ID_SUCCESS: {
        draft.filter((post) => post.id === posts.id);
        break;
      }
      case types.DELETE_POST_SUCCESS: {
        const postIndex = draft.findIndex((post) => post.id === posts) ?? -1;
        try {
          if (postIndex > -1) {
            draft.splice(postIndex, 1);
          }
        } catch (error) {
          alert(error.message);
        }
        break;
      }
      case types.CREATE_POST_SUCCESS: {
        debugger;
        draft.push(posts);
        break;
      }
      case types.UPDATE_POST_SUCCESS: {
        debugger;
        const postIndex = draft.findIndex((post) => post.id === posts) ?? -1;

        if (postIndex < 0) {
          draft.push(posts);
        } else {
          draft.splice(postIndex, 1, posts);
        }
        break;
      }
      default:
        return draft;
    }
  });
}
