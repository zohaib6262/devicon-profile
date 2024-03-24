import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Form from "./components/Form/Form";
import CommentCard from "./components/UI/CommentCard/CommentCard";
import SearchBar from "./components/UI/SearchBar/SearchBar";
import { AVAILABLE_LIST } from "./data.js";
import DetailPage from "./components/DetailPage/DetailPage.jsx";

const App = () => {
  const storedItems = JSON.parse(localStorage.getItem("card")) || [];
  const [allCommentList, setallCommentList] = useState([]);
  const [isOpenPage, setIsOpenPage] = useState(false);

  useEffect(() => {
    const allItems = [...storedItems, ...AVAILABLE_LIST];
    const uniqueItemsSet = new Set(
      allItems.map((value) => JSON.stringify(value))
    );
    const uniqueItemsArray = Array.from(uniqueItemsSet).map(JSON.parse);
    setallCommentList(uniqueItemsArray);
  }, []);

  const handleComment = (newComment) => {
    setallCommentList((prevAllComment) => {
      const newCommentList = [...prevAllComment, newComment];
      localStorage.setItem("card", JSON.stringify(newCommentList));
      return newCommentList;
    });
  };
  return (
    <>
      {!isOpenPage && (
        <div className="pt-5 d-flex flex-column justify-content-center align-items-center container col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 ">
          <SearchBar />
          <h5 className={`${styles.title} text-uppercase pt-5 text-danger `}>
            Community popup
          </h5>
          <Form handleComment={handleComment} />
          <CommentCard
            availableComment={allCommentList}
            setIsOpenPage={setIsOpenPage}
          />
        </div>
      )}
      {isOpenPage && <DetailPage />}
    </>
  );
};

export default App;
