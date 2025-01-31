import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderPosts from "../common/RenderPosts";
import { selectAllPosts } from "../../redux/selectors/postSelector";
import { loadPosts } from "../../redux/actions/postActions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const addIcon = (
    <FontAwesomeIcon icon={faCirclePlus} size="3x" color="black" />
  );

  return (
    <section className="container">
      <button
        className="btn btn-white"
        variant="text"
        onClick={() => navigate(`/form`)}
      >
        {addIcon}
      </button>
      <div className="row justify-content-center align-items-center gy-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-12 col-md-3 m-5 d-flex h-100 justify-content-center"
          >
            <RenderPosts postId={post.id} key={post.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
