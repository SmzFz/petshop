import React from "react";
import styles from "./home.module.css";
import imgs from "../../assets/products/dogsImage.png";

const Home = () => {
  return (
    
      <img className={styles.img} src={imgs} alt="logo" />
  );
};

export default Home;
