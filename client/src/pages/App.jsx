import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import "./App.css";

import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer link={"https://github.com.br/SmzFz"}>@SmzFz</Footer>
    </div>
  );
};

export default App;
