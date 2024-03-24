import React from "react";
import * as Icon from "react-bootstrap-icons";
import styles from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div
      className={`${styles.card} d-flex flex-wrap col-xxl-6 col-xl-9 col-lg-12 col-md-12 col-sm-12 `}
    >
      <Icon.Search className={styles.searchIcon} />
      <input type="text" className={`${styles.inputType} border-0`} />
    </div>
  );
};

export default SearchBar;
