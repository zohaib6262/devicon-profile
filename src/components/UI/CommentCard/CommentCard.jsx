import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocailMediaIcons from "../SocialMediaIcons/SocialMediaIcons.jsx";
import styles from "./CommentCard.module.css";

const CommentCard = ({ availableComment, setIsOpenPage }) => {
  return (
    <>
      {availableComment.map((value, index) => (
        <Container
          className={`${styles.card} ${styles.commentUpperPart}  my-2 col-xxl-6 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xl-sm-12`}
          key={index}
          onClick={(e) => {
            setIsOpenPage(true);
          }}
        >
          <Row>
            <Col xs={3} md={3} lg={3} xl={3} xxl={3}>
              <img src={value.image} alt="" className={styles.img} />
              <p className={`${styles.date} fw-light mx-4`}>19/202/2024</p>
            </Col>
            <Col
              xs={9}
              md={9}
              lg={9}
              xl={9}
              xxl={9}
              className="mt-3"
              style={{ marginLeft: "-3rem" }}
            >
              <div className="d-flex ">
                <div>
                  <h5>{value.name}</h5>
                </div>
                <SocailMediaIcons />
              </div>
              <div className={styles.description}>
                <p>{value.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default CommentCard;
