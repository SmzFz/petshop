import Btns from "../btns/btns";
import Button from "../forms/button/button";
import styles from "./saleCard.module.css";
const SaleCard = ({title}) => {
  return (
    <div className={styles.saleCard}>
      <img
        src={`/src/assets/products/${title}.png`}
        alt=""
        width={250}
        height={300}
      />
      <div className={styles.info}>
        <Btns link={title}>mais info</Btns>
  
      </div>
    </div>
  );
};

SaleCard.defaultProps = {
  title: "League Of Legends",
};

export default SaleCard;
