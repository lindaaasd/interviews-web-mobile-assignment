import { handleResponse, handleError, handleDeleteResponse } from "./apiUtils";

//const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const baseUrl = "https://localhost:3001/api/Posts";

export function getPosts() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getPostsPaginated(pageNum, options = {}) {
  return fetch(
    "https://localhost:3001/getAll?pageNum=" + pageNum + "&pageLength=6",
    options
  )
    .then(handleResponse)
    .catch(handleError);
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

export function savePost(post, id) {
  debugger;
  return fetch(baseUrl + (id ? "/" + id : ""), {
    method: id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(post),
  })
    .then(handleResponse)
    .catch(handleError);
}
