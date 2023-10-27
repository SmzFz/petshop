import React from "react";
import styles from "./btns.module.css";
import { Link } from "react-router-dom";

const Btns = ({ link, info, card, ...props }) => {
  return (
    <Link to={link}>
      <div className={`${styles.button}`} {...props}>
        {info ? info : <img src={card} alt="" />}
      </div>
    </Link>
  );
};

//configurações do botao

export default Btns;
