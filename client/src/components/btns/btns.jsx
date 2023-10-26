import React from "react";
import styles from "./btns.module.css";
import { Link } from "react-router-dom";

const Btns = ({ link, children, ...props }) => {
  return (
    <Link to={link}>
      <div className={`${styles.button}`} {...props}>
        {children}
      </div>
    </Link>
  );
};

export default Btns;
