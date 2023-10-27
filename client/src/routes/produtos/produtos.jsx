import React from "react";
import styles from "./produtos.module.css";
import SaleCard from "../../components/saleCard/saleCard.jsx";
import arrow from "../../assets/arrow-down-outline.svg"
import time from "../../assets/time-outline.svg"
import store from "../../assets/storefront-outline.svg"
import card from "../../assets/card-outline.svg"
import Box from "../../components/box/box";

//importando produtos e sale card

const Produtos = () => {
  return (
    <div className={styles.produtos}>
      <h1>Produtos</h1>
      <p>
        Atendemos todos os tipos de pets com as melhores marcas do mercado!
      </p>
      <p>

        Confira nossos produtos:
      </p>
      <div className={styles.container}>
        <SaleCard
          title={"/cachorro"}
          fullPrice={199.9}
          discount={40}
          info={"mais informações"}
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
          info={"mais informações"}
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
          info={"mais informações"}
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
          info={"mais informações"}
          onAdd={() =>
            handleAddProduct({
              name: "Cachorro",
              price: 199.99 - 199.99 * 0.4,
              img: "Cachorro",
            })
          }
        />
      </div>

      <div className={styles.box}>

      <Box img={arrow} p={"Entrega para Jaú inteiro"} />
        <Box img={time} p={"Receba em minutos"} />
        <Box img={card} p={"Até 10x sem juros"} />
        <Box img={store} p={"Retire ou troque na loja"} />
      </div>


    </div>
  );
  //importando box com emojis e texto escrito
};

export default Produtos;
