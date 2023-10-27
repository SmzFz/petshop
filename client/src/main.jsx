// Importa as bibliotecas necessárias do React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App"; // Importa o componente App de ./pages/App
import "./index.css"; // Importa estilos do arquivo index.css
import { RecoilRoot } from "recoil"; // Importa o RecoilRoot para gerenciar estado global
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Importa o RouterProvider e a função createBrowserRouter do react-router-dom
import Produtos from "./routes/produtos/produtos"; // Importa o componente Produtos da pasta ./routes/produtos/produtos
import Servicos from "./routes/servicos/servicos"; // Importa o componente Servicos da pasta ./routes/servicos/servicos
import Localizacao from "./routes/localizacao/localizacao"; // Importa o componente Localizacao da pasta ./routes/localizacao/localizacao

import Home from "./routes/home/home"; // Importa o componente Home da pasta ./routes/home/home
import Infoc from "./routes/infoc/infoc"; // Importa o componente Infoc da pasta ./routes/infoc/infoc
import Infor from "./routes/infor/infor"; // Importa o componente Infor da pasta ./routes/infor/infor
import Infop from "./routes/infop/infop"; // Importa o componente Infop da pasta ./routes/infop/infop
import Infog from "./routes/infog/infog"; // Importa o componente Infog da pasta ./routes/infog/infog

// Cria as rotas para a aplicação usando createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Define o componente App como o elemento principal para a rota "/"
    errorElement: <Error />, // Define o componente Error como o elemento em caso de erro
    children: [
      { path: "/", element: <Home /> }, // Rota para o componente Home quando o caminho é "/"
      { path: "produtos", element: <Produtos /> }, // Rota para o componente Produtos quando o caminho é "/produtos"
      { path: "servicos", element: <Servicos /> }, // Rota para o componente Servicos quando o caminho é "/servicos"
      { path: "localizacao", element: <Localizacao /> }, // Rota para o componente Localizacao quando o caminho é "/localizacao"

      { path: "cachorro", element: <Infoc /> }, // Rota para o componente Infoc quando o caminho é "/cachorro"
      { path: "gato", element: <Infog /> }, // Rota para o componente Infog quando o caminho é "/gato"
      { path: "passa", element: <Infop /> }, // Rota para o componente Infop quando o caminho é "/passa"
      { path: "rato", element: <Infor /> }, // Rota para o componente Infor quando o caminho é "/rato"
    ],
  },
]);

// Renderiza a aplicação React no elemento com o id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Encapsula o RouterProvider com o router criado dentro do StrictMode para verificações adicionais durante o desenvolvimento */}
    <RouterProvider router={router} />
  </React.StrictMode>
);