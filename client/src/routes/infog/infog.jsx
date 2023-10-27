import React from "react";
import SaleCard from "../../components/saleCard/saleCard.jsx";
import card from "../../assets/cart-outline.svg";
import styles from "./infog.module.css"

//importando e modificando informações do gato, com cards de compra sem configuração de compra

const Infog = () => {
  return (
    <div className={styles.salecard}>
      <SaleCard
        title={"b"}
        fullPrice={199.9}
        discount={40}
        css={"gato"}
        info={"🛒"}
        onAdd={() =>
          handleAddProduct({
            name: "Rato",
            price: 199.99 - 199.99 * 0.4,
            img: "Rato",
          })
        }
      />
            <SaleCard
        title={"b"}
        fullPrice={199.9}
        discount={40}
        css={"gato"}
        info={"🛒"}
        onAdd={() =>
          handleAddProduct({
            name: "Rato",
            price: 199.99 - 199.99 * 0.4,
            img: "Rato",
          })
        }
      />
            <SaleCard
        title={"b"}
        fullPrice={199.9}
        discount={40}
        css={"gato"}
        info={"🛒"}
        onAdd={() =>
          handleAddProduct({
            name: "Rato",
            price: 199.99 - 199.99 * 0.4,
            img: "Rato",
          })
        }
      />
            <SaleCard
        title={"b"}
        fullPrice={199.9}
        discount={40}
        css={"gato"}
        info={"🛒"}
        onAdd={() =>
          handleAddProduct({
            name: "Rato",
            price: 199.99 - 199.99 * 0.4,
            img: "Rato",
          })
        }
      />

    </div>
  );
};

export default Infog;
