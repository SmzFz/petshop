import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
const navigation = [
  {componente: "/", name:"Home"},
  {componente: "/produtos", name:"Produtos"},
  {componente: "/servicos", name:"Serviços"},
  {componente: "/localizacao", name:"Localização"},
  {componente: "/contato", name:"Contato"},
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
   <Link className={styles.navBars}key={item.name} to={item.componente}>{item.name}</Link> 
   ))}
   

        </div>
      </div>
    </div>
  );
};

export default Nav;
