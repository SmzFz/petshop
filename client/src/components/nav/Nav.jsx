import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
const navigation = [
  {componente: "/", name:"home"},
  {componente: "/produtos", name:"produtos"},
  {componente: "/serviços", name:"serviços"},
  {componente: "/localização", name:"localização"},
  {componente: "/contato", name:"contato"},
]

const Nav = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" width={149} height={123} />
      <div className={styles.box}>
        <div className={styles.search}>
          <input type="text" placeholder="Pesquise na Little Pet" />
        </div>
        <div className={styles.navBar}>
          {navigation.map((item)=>(
   <Link key={item.name} to={item.componente}>{item.name}</Link> 
   ))}

        </div>
      </div>
    </div>
  );
};

export default Nav;
