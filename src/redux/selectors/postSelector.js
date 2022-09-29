import { createSelector } from "reselect";

const slice = (state) => {
  return state?.posts;
};

export const selectAllPosts = createSelector([slice], (state) => {
  return state;
});

export const selectPostById = createSelector(
  slice,
  (state) => (id) => state.find((c) => id === c.id)
);
