import { useState } from "react";
import styles from "./Form.module.css";
import formImage from "../../assets/formImage.jpg";
import { BsFillCursorFill } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";

const Form = ({ handleComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.random(),
      description: comment,
      image: formImage,
    };
    handleComment(obj);
    setComment("");
  };

  return (
    <Container
      className={`${styles.card} ${styles.commentUpperPart} my-5 col-xxl-6 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xl-xs-12`}
    >
      <Row>
        <Col xs={3} md={3} lg={3} xl={3} xxl={3}>
          <img src={formImage} alt="" className={styles.img} />
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
          <h5>username</h5>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.lowerPart} d-flex align-items-center`}>
              <input
                type="text"
                placeholder="What are you thinking about?"
                className={`${styles.inputData} border-0 `}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div className="btn">
                <BsFillCursorFill
                  size={25}
                  className={styles.btn}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
