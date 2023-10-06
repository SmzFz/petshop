import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg"

const Nav = () => {
  return (
    <div className={styles.bar}>
        <div className={styles.logo}>
            <img src={logo} alt="logo Petshop" width={""} />


        </div>
        <input type="text" placeholder="Buscar" />
    </div>
  )
}

export default Nav;