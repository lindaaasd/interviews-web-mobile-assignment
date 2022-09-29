import * as types from "./actionTypes";
import * as postsApi from "../../api/postsApi";

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, payload: posts };
}

export function loadPostByIdSuccess(post) {
  return { type: types.LOAD_POSTS_BY_ID_SUCCESS, payload: post };
}

export function deletePostSuccess(postId) {
  return { type: types.DELETE_POST_SUCCESS, payload: postId };
}

export function updatePostSuccess(post) {
  return { type: types.UPDATE_POST_SUCCESS, payload: post };
}

export function createPostSuccess(post) {
  return { type: types.CREATE_POST_SUCCESS, payload: post };
}

export function loadPosts() {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      postsApi
        .getPosts()
        .then((posts) => {
          dispatch(loadPostsSuccess(posts));
          resolve();
        })
        .catch(reject);
    });
}

export function loadPostsById(postId) {
  return function (dispatch) {
    debugger;
    return postsApi
      .getPostsById(postId)
      .then((recoveredPost) => dispatch(loadPostByIdSuccess(recoveredPost)))
      .catch((error) => {
        throw error;
      });
  };
}

export function deletePosts(postId) {
  return function (dispatch) {
    debugger;
    return postsApi
      .deletePost(postId)
      .then(dispatch(deletePostSuccess(postId)))
      .catch((error) => {
        throw error;
      });
  };
}

export function savePost(post, id) {
  return function (dispatch) {
    return postsApi
      .savePost(post, id)
      .then((savedPost) => {
        post.id
          ? dispatch(updatePostSuccess(savedPost))
          : dispatch(createPostSuccess(savedPost));
      })
      .catch((error) => {
        throw error;
      });
  };
}
