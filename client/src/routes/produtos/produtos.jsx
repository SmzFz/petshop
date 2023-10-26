import React from "react";
import styles from "./produtos.module.css";
import SaleCard from "../../components/saleCard/saleCard.jsx";

const Produtos = () => {
  return (
    <div className={styles.produtos}>
      <h1>Produtos</h1>
      <p>
        Atendemos todos os tipos de pets com as melhores marcas do mercado!
        Confira nossos produtos:
      </p>
      <div className={styles.container}>
        <SaleCard
          title={"/cachorro"}
          fullPrice={199.9}
          discount={40}
          onAdd={() =>
            handleAddProduct({
              name: "Cachorro",
              price: 199.99 - 199.99 * 0.4,
              img: "Cachorro",
            })
          }
        />
        <SaleCard
          title={"/gato"}
          fullPrice={199.9}
          discount={40}
          onAdd={() =>
            handleAddProduct({
              name: "Gato",
              price: 199.99 - 199.99 * 0.4,
              img: "Gato",
            })
          }
        />
        <SaleCard
          title={"/rato"}
          fullPrice={199.9}
          discount={40}
          onAdd={() =>
            handleAddProduct({
              name: "Rato",
              price: 199.99 - 199.99 * 0.4,
              img: "Rato",
            })
          }
        />
        <SaleCard
          title={"/passa"}
          fullPrice={199.9}
          discount={40}
          onAdd={() =>
            handleAddProduct({
              name: "Cachorro",
              price: 199.99 - 199.99 * 0.4,
              img: "Cachorro",
            })
          }
        />
      </div>
    </div>
  );
};

export default Produtos;
