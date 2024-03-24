import React, { useState } from "react";
import styles from "./DetailPageCommentCard.module.css";
import { Button } from "react-bootstrap";
import formImage from "../../../assets/formImage.jpg";

const DetailPageCommentCard = ({ setIsCommentOpen, addHandle }) => {
  const [comment, setComment] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    if (comment.trim().length !== 0) {
      const obj = {
        id: Date.now(),
        image: formImage,
        name: "Abdul Wahab 18m ago",
        description: comment.trim(),
        subComment: [],
      };
      addHandle(obj);
      setIsCommentOpen(false);
    }

    setComment("");
  };

  return (
    <form
      className={`${styles.card} d-flex flex-row flex-wrap`}
      onSubmit={submitHandle}
    >
      <textarea
        type="text"
        className={`${styles.inputType} border-0 col-xxl-6 col-xl-6 col-lg-12 col-md-12  `}
        placeholder="Add a Comment"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <div className="mx-2">
        <Button
          className={`${styles.cancel} `}
          onClick={() => {
            setIsCommentOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button
          className={`${styles.addComment} mx-2 bg-primary`}
          type="submit"
        >
          Comment
        </Button>
      </div>
    </form>
  );
};

export default DetailPageCommentCard;
