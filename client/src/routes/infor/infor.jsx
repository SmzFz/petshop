import SaleCard from "../../components/saleCard/saleCard"
import styles from "./infor.module.css"
import card from "../../assets/cart-outline.svg";

//importando e modificando informações do rato, com cards de compra sem configuração de compra


const Infor = () => {
  return (
    <div className={styles.salecard}>
            <SaleCard
          title={"rato"}
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
          title={"rato"}
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
          title={"rato"}
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
          title={"rato"}
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

export default Infor