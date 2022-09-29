import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPostById } from "../../redux/selectors/postSelector";
import Button from "../../style/Button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { loadPostsById } from "../../redux/actions/postActions";

const editIcon = (
  <FontAwesomeIcon icon={faPenToSquare} size="4x" color="black" />
);

const DetailPost = () => {
  const { id } = useParams();

  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector(selectPostById)(id);

  useEffect(() => {
    debugger;
    loadPostsHandler();
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadPostsHandler = useCallback(async () => {
    if (!loaded) {
      await dispatch(loadPostsById(id));
      setLoaded(true);
    }
  });

  useEffect(() => {
    loadPostsHandler();
  });

  return (
    <section className="container">
      <h2>
        Hello, {post?.title} - {post?.id}
      </h2>
      <p> {post?.body}</p>
      <div className="row">
        <Button onClick={() => navigate(`/form/${id}`)}>{editIcon}</Button>
      </div>
    </section>
  );
};

export default DetailPost;
