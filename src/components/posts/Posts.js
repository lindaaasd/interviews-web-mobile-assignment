import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderPosts from "../common/RenderPosts";
import { selectAllPosts } from "../../redux/selectors/postSelector";
import { loadPosts } from "../../redux/actions/postActions";
import Button from "../../style/Button.style";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <section className="container">
      <Button variant="text" onClick={() => navigate(`/form`)}>
        Add new chili
      </Button>
      <div className="row justify-content-center align-items-center gy-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-12 col-md-3 m-5 d-flex h-100 justify-content-center"
          >
            <RenderPosts postId={post.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
