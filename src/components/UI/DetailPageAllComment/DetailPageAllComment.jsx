import React from "react";
import { CardBody, CardFooter, CardHeader, CardTitle } from "react-bootstrap";
import styles from "./DetailPageAllComment.module.css";
import SocailMediaIcons from "../SocialMediaIcons/SocialMediaIcons.jsx";
const DetailPageComment = ({ allComments }) => {
  console.log(allComments.subComment);
  return (
    <>
      {allComments.map((value, index) => {
        return (
          <div className="w-100 m-auto mt-2 mx-3" key={value.id}>
            <CardHeader>
              <CardTitle>
                <img src={value.image} className={styles.formImage} />
                <p className={`${styles.username} d-inline-block`}>
                  {value.name}
                </p>
              </CardTitle>
              <CardBody className="my-1 mx-3 text-bold">
                <p className="mb-3 mx-3">{value.description}</p>
                <div>
                  <SocailMediaIcons id={value.id} />
                </div>
              </CardBody>
              <CardFooter></CardFooter>
            </CardHeader>
          </div>
        );
      })}
    </>
  );
};

export default DetailPageComment;
