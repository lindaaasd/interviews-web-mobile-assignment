/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useRef } from "react";
import Button from "../../style/Button.style";
import { useNavigate } from "react-router-dom";
import RenderPostsPaginate from "../common/RenderPostsPaginate";
import useInfinitePosts from "../../hooks/useInfinitePosts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
  const [pageNum, setPageNum] = useState(0);
  const navigate = useNavigate();
  const { isLoading, isError, error, results, hasNextPage } =
    useInfinitePosts(pageNum);

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isLoading) return;

      if (intObserver.current) {
        intObserver.current.disconnect();
      }
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("almost there!");
          setPageNum((prev) => prev + 1);
          console.log(pageNum);
        }
      });
      if (post) {
        intObserver.current.observe(post);
      }
    },
    [isLoading, hasNextPage]
  );

  const addIcon = (
    <FontAwesomeIcon icon={faCirclePlus} size="3x" color="black" />
  );

  if (isError)
    return <p style={{ textAlign: "center" }}> Error: {error.message} </p>;

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
        {results.map((post, i) => {
          if (results.length === i + 1) {
            return (
              <RenderPostsPaginate
                ref={lastPostRef}
                key={post.id}
                post={post}
              />
            );
          }
          return <RenderPostsPaginate key={post.id} post={post} />;
        })}
      </div>
    </section>
  );
};

export default Posts;
