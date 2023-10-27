import Btns from "../btns/btns";
import Button from "../forms/button/button";
import styles from "./saleCard.module.css";

//imports e configurando sale card com variaveis sobre informações do botão e tamanho de imagem
const SaleCard = ({ title, css, info, card }) => {
  return (
    <div className={styles.saleCard}>
      <img
        src={`/src/assets/products/${title}.png`}
        alt=""
        width={250}
        height={300}
      />
      <div className={styles.gato}>
        <Btns link={title} info={info} card={card}/>

    
      </div>
    </div>
  );
};

SaleCard.defaultProps = {
  title: "League Of Legends",
};

export default SaleCard;
