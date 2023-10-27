import React from 'react'
import SaleCard from "../../components/saleCard/saleCard"
import card from "../../assets/cart-outline.svg";

const Infop = () => {
  return (
    <div>
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