import * as Icon from "react-bootstrap-icons";
import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { Button, CardBody, CardHeader, CardTitle } from "react-bootstrap";
import styles from "./DetailPage.module.css";
import formImage from "../../assets/img1.jpg";
import SocailMediaIcons from "../UI/SocialMediaIcons/SocialMediaIcons.jsx";
import DetailPageAllComment from "../UI/DetailPageAllComment/DetailPageAllComment";
import DetailPageCommentCard from "../UI/DetailPageCommentCard/DetailPageCommentCard";
import { Detail_Page_Comment_Card } from "../../../detailPageCommentCardsData";

const DetailPage = () => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const storedItems = JSON.parse(localStorage.getItem("detail-card")) || [];
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    const allItems = [...storedItems, ...Detail_Page_Comment_Card];
    const uniqueItemsSet = new Set(
      allItems.map((value) => JSON.stringify(value))
    );
    const uniqueItemsArray = Array.from(uniqueItemsSet).map(JSON.parse);
    setAllComments(uniqueItemsArray);
  }, []);

  const allCommentsHandler = (newComment) => {
    setAllComments((prevAllComment) => {
      const newCommentList = [...prevAllComment, newComment];
      localStorage.setItem("detail-card", JSON.stringify(newCommentList));
      return newCommentList;
    });
  };

  const handleCommentOpen = () => {
    setIsCommentOpen(true);
  };

  return (
    <Card className="m-auto mt-5 col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
      <CardHeader>
        <CardTitle>
          <Icon.ArrowLeft src="/" size={28} className={styles.arrowLeft} />
          <img src={formImage} className={styles.formImage} />
          <p className="d-inline-block">username</p>
        </CardTitle>
        <CardBody className="my-1 mx-3 text-bold">
          <h5 className="mb-3">
            A culinary journey around the world in one dish! 🌍 From Italian
            pasta to Mexican hot sauce, explore the tastes and aromas of
            different cultures. Whether you're an experienced cook or a beginner
            in the kitchen, there's always something ,
          </h5>
          <div style={{ marginLeft: "-12px" }}>
            <SocailMediaIcons />
          </div>
          <Button
            className={`${styles.comment} bg-white text-black border-rounded border-black rounded-pill my-4`}
            onClick={handleCommentOpen}
          >
            <Icon.Plus size={27} /> Add a Comment
          </Button>
          {isCommentOpen && (
            <DetailPageCommentCard
              setIsCommentOpen={setIsCommentOpen}
              addHandle={allCommentsHandler}
            />
          )}
        </CardBody>
        <DetailPageAllComment allComments={allComments} />
      </CardHeader>
    </Card>
  );
};

export default DetailPage;
