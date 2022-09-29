import { handleResponse, handleError, handleDeleteResponse } from "./apiUtils";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export function getPosts() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getPostsById(postId) {
  return fetch(baseUrl + "/" + postId)
    .then(handleResponse)
    .catch(handleError);
}

export function deletePost(postId) {
  return fetch(baseUrl + "/" + postId, {
    method: "DELETE",
  })
    .then(handleDeleteResponse)
    .catch(handleError);
}

export function savePost(post) {
  debugger;
  return fetch(baseUrl + (post.id ? "/" + post.id : ""), {
    method: post.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(post),
  })
    .then(handleResponse)
    .catch(handleError);
}
