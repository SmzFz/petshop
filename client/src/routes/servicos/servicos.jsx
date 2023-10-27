import React from "react";
import styles from "./servicos.module.css";
import Button from "../../components/forms/button/button";
import SaleCard from "../../components/saleCard/saleCard.jsx";
import banho from "../../assets/products/banho-e-tosa.png"
import pcr from "../../assets/products/parceirinha.png"
import vacina from "../../assets/products/vacina-cachorro.png"

const Serviços = () => {
  return (
    <div className={styles.servicos}>
      <div className={styles.servicinhos}>
        <h1>Serviços</h1>
      </div>
      <div className={styles.info}>
        <div>
        <img className={styles.img} src={banho} alt="logo" />
          <h2>Banho e Tosa</h2>
          <p>
            Nosso PetShop oferece serviço de Banho e Tosa para todos tipos de
            pet!
          </p>
          <Button>Agende sua visita!</Button>
        </div>
        <div>
        <img className={styles.img} src={vacina} alt="logo" />
          <h2>Vacinação</h2>
          <p>
            A vacinação em cães e gatos protegem o animal de estimação contra
            doenças. Mantenha a carteirinha de vacinação do seu pet em dia!
          </p>
          <Button>Agende sua visita!</Button>
        </div>

        <div>
        <img className={styles.img} src={pcr} alt="logo" />
          <h2>Clínicas Parceiras</h2>
          <p>
            A LittlePet trabalha em parceria com a renomada clínica VillagioVet.
            Procura acompanhamento médico de primeira?
          </p>
          <Button>Agende sua visita!</Button>
        </div>
      </div>
    </div>
  );
};

export default Serviços;
