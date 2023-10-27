import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
import "./footer.module.css"
import SocialLinks from "../social-links/social-links";
import logo from "../../assets/logo.svg";

const Footer = ({children, link}) => {
   return(
    <footer>
        <p>
          <a href="" src={logo}></a>
            Feito com <ion-icon name="heart" /> por {" "}
            <a href={link} target="_blank" rel="noopener noreferrer">{children}</a>
        

        </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com/SmzFz"}></SocialLinks>
        <SocialLinks icon={"logo-instagram"} href={"https://instagram.com/salmazo.f"}></SocialLinks>
        <SocialLinks icon={"logo-twitter"} href={"https://twitter.com/salmazofe"}></SocialLinks>
        <SocialLinks icon={"logo-linkedin"} href={"#"}></SocialLinks>
        <SocialLinks icon={"logo-facebook"} href={"#"}></SocialLinks>
    </footer>
   );
};

export default Footer;