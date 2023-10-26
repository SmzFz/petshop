import style from "./localizacao.module.css";

import popcorn from "../../assets/mapa.svg";
import Swal from "sweetalert2";

const Contact = () => {
  
  const handleClick = async () => {

    const resultado = await fetch("Comprado!");
    
    Swal.fire({
      background: '#9D70EB',
      color: '#E0E18A',
      title:"Problema relatado!",
      text:"Enviado, por favor aguarde nossa equipe😰",
      confirmButtonColor: 'red',
      icon: 'info',
      iconColor: 'red',
    })
  };


  return (
    <div className={style.container}>
      <h3>ENTRE EM CONTATO COM NOSSA EQUIPE!</h3>
      <div className={style.forms}>
        <div className={style.name}>
          <h4>NOME</h4>
          <input placeholder="Insira seu nome" type="Insira seu nome completo" />
        </div>
        <div className={style.email}>
          <h4>E-MAIL</h4>
          <input placeholder="Isira seu e-mail" type="Insira seu e-mail" />
        </div>
        <div className={style.problema}>
          <h4>INFORME SEU PROBLEMA</h4>
          <input placeholder="Máximo de 400 palaras" type="Máximo de 400 palavras" />
        </div>
        <div className={style.btn}>
          <button onClick={handleClick}>Enviar</button>
        </div>
      </div>
      <div>
        <img src={popcorn} alt="" />
      </div>
    </div>
  );
};

export default Contact;


