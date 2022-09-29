import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import React, { useState } from "react";
import Button from "../../../style/Button.style";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { deletePosts } from "../../../redux/actions/postActions";

const trashIcon = <FontAwesomeIcon icon={faTrash} size="3x" color="black" />;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

const DeleteModal = ({ postId }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    debugger;
    dispatch(deletePosts(postId))
      .then(() => {
        handleClose();
        toast.success("Post deleted.");
        console.log("sono qui");
        navigate("/posts", { replace: true });
      })
      .catch((error) => {
        toast.error("Delete failed" + error.message, { autoClose: false });
      });
  };

  return (
    <section>
      <Button variant="text" onClick={handleOpen}>
        {trashIcon}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you stand by your deletion, brother?
          </Typography>
          <div className="row justify-content-center mt-3">
            <div className="col-6 d-flex justify-content-center">
              <button className="btn btn-success" onClick={handleClose}>
                No
              </button>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <button className="btn btn-danger" onClick={handleDelete}>
                Yes
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default DeleteModal;
