import React from 'react'
import styles from "./home.module.css";
import imgs from "../../assets/products/petzin.png"

const Home = () => {
  return (
    <div className={styles.home}>
      
    <img className={styles.img} src={imgs} alt="logo" />
    </div>
    

  )
}

export default Home