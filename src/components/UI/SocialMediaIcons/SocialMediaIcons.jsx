import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import like from "../../../assets/like.png";
import dislike from "../../../assets/dislike.png";
import comment from "../../../assets/comment.png";
import shared from "../../../assets/shared.png";
import styles from "./SocialMediaIcons.module.css";
import DetailPageCommentCard from "../DetailPageCommentCard/DetailPageCommentCard";

const SocailMediaIcons = ({ id }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  return (
    <Container style={{ marginTop: "-0.4rem" }}>
      <Row className="d-flex align-items-center">
        <Col xs="auto" className="me-1 mx-1">
          <img src={like} alt="" style={{ width: "20px", height: "20px" }} />
          <p className="lh-1">12k</p>
        </Col>
        <Col xs="auto" className="me-1 mx-1">
          <img src={dislike} alt="" style={{ width: "20px", height: "20px" }} />
          <p className="lh-1">12k</p>
        </Col>
        <Col xs="auto" className="me-1 mx-1">
          <img
            src={comment}
            alt=""
            style={{ width: "20px", height: "20px" }}
            className={`${styles.comment}`}
            onClick={() => {
              setIsCommentOpen(!isCommentOpen);
            }}
          />
          <p className="lh-1">400</p>
        </Col>
        <Col xs="auto" className="me-1 mx-1 mb-4">
          <img src={shared} alt="" style={{ width: "20px", height: "20px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default SocailMediaIcons;
