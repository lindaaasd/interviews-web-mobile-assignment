import React from "react";
import { useNavigate } from "react-router-dom";
import { selectPostById } from "../../redux/selectors/postSelector";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../../style/Button.style";
import DeleteModal from "../posts/crud/DeleteModal";

export const RenderPosts = ({ postId }) => {
  const post = useSelector(selectPostById)(postId);
  const navigate = useNavigate();

  const editIcon = (
    <FontAwesomeIcon icon={faPenToSquare} size="3x" color="black" />
  );

  return (
    <div className="card " key={post.id} style={{ maxWidth: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">{post?.title}</h5>
        <p className="card-text">{post?.text}</p>
        {/* <Link to={`/posts/${post?.id}`} className="card-link">
          Read more
        </Link> */}
        <div className="d-flex">
          <Button onClick={() => navigate(`/form/${post.id}`)}>
            {editIcon}
          </Button>
          <DeleteModal postId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default RenderPosts;
