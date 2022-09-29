import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { savePost } from "../../../redux/actions/postActions";
import { toast } from "react-toastify";
import CardTitle from "../../../style/CardTitle";
import Button from "../../../style/Button.style";

const PostForm = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [posts, setPosts] = useState();
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  function formIsValid() {
    const errors = {};
    const { title, body } = posts;

    if (!title) errors.title = "Title is required";
    if (!body) errors.body = "Body is required";

    setErrors(errors);
    //form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    debugger;
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    dispatch(savePost(posts))
      .then(() => {
        toast.success("Post saved.");
        navigate("/posts");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  function handleChange(event) {
    debugger;
    const { name, value } = event.target;
    setPosts((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  }

  return (
    <section className="container">
      <CardTitle fontSize="xx-large" textAlign="center" margin="10px">
        {id ? "Edit" : "Add new"} post
      </CardTitle>
      <div className="row justify-content-center mt-5">
        <div className="col-12 w-50">
          <form onSubmit={handleSave}>
            <div className="form-group">
              <input
                name="title"
                label="title"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter title"
                error={errors.title}
              />
            </div>
            <div className="form-group">
              <input
                name="body"
                label="body"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter body"
                error={errors.body}
              />
            </div>
            <Button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PostForm;
