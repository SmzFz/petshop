import React from 'react'
import SaleCard from "../../components/saleCard/saleCard"
import card from "../../assets/cart-outline.svg";
import styles from "./infop.module.css"


//importando e modificando informações do passaro, com cards de compra sem configuração de compra

const Infop = () => {
  return (
    <div className={styles.salecard}>
                    <SaleCard
          title={"passa"}
          fullPrice={199.9}
          discount={40}
          info={"🛒"}
          onAdd={() =>
            handleAddProduct({
              name: "Cachorro",
              price: 199.99 - 199.99 * 0.4,
              img: "Cachorro",
            })
          }
        />
                            <SaleCard
          title={"passa"}
          fullPrice={199.9}
          discount={40}
          info={"🛒"}
          onAdd={() =>
            handleAddProduct({
              name: "Cachorro",
              price: 199.99 - 199.99 * 0.4,
              img: "Cachorro",
            })
          }
        />
    
    <SaleCard
          title={"passa"}
          fullPrice={199.9}
          discount={40}
          info={"🛒"}
          onAdd={() =>
            handleAddProduct({
              name: "Cachorro",
              price: 199.99 - 199.99 * 0.4,
              img: "Cachorro",
            })
          }
        />
    
    <SaleCard
          title={"passa"}
          fullPrice={199.9}
          discount={40}
          info={"🛒"}
          onAdd={() =>
            handleAddProduct({
              name: "Cachorro",
              price: 199.99 - 199.99 * 0.4,
              img: "Cachorro",
            })
          }
        />
    
    
    </div>
  )
}

export default Infop