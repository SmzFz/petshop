import styles from "./Nav.module.css";


const Nav = () => {
  return (
    <div className={styles.bar}>
        <div className={styles.logo}>
            <img src={logo} alt="logo Petshop" width={""} />
            LittlePet

        </div>
        <input type="text" placeholder="Buscar" />
    </div>
  )
}

export default Nav;