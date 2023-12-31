import React from 'react'
import styles from "./Box.module.css"


const Box = ({img, p}) => {
  return (
    <div className={styles.box}>
      <img src={img} alt="Caixa informativa" />
      <p>{p}</p>
    </div>
  )
}
//montando a caixa de informações sobre envio

export default Box

