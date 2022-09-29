import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../../style/Button.style";
import DeleteModal from "../posts/crud/DeleteModal";

const editIcon = (
  <FontAwesomeIcon icon={faPenToSquare} size="3x" color="black" />
);
export const RenderPostsPaginate = React.forwardRef(({ post }, ref) => {
  const navigate = useNavigate();

  const postBody = (
    <div className="card " key={post.id} style={{ maxWidth: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">{post?.title}</h5>
        <p className="card-text">{post?.text}</p>
        <div className="d-flex">
          <Button onClick={() => navigate(`/form/${post.id}`)}>
            {editIcon}
          </Button>
          <DeleteModal postId={post.id} />
        </div>
      </div>
    </div>
  );

  const content = ref ? <div ref={ref}>{postBody}</div> : <div>{postBody}</div>;

  return content;
});

export default RenderPostsPaginate;
