import SaleCard from "../../components/saleCard/saleCard"
import styles from "./infor.module.css"

const Infor = () => {
  return (
    <div className={styles.sale}>
            <SaleCard
          title={"/cachorro"}
          fullPrice={199.9}
          discount={40}
          css={gato}
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