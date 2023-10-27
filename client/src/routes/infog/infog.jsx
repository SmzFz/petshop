import React from "react";
import SaleCard from "../../components/saleCard/saleCard.jsx";
import card from "../../assets/cart-outline.svg";

const Infog = () => {
  return (
    <div>
      <SaleCard
        title={"b"}
        fullPrice={199.9}
        discount={40}
        css={"gato"}
        card={card}
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
