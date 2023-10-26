import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./pages/App";
import './index.css'
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Produtos from './routes/produtos/produtos';
import Servicos from './routes/servicos/servicos';
import Localizacao from './routes/localizacao/localizacao';
import Contato from './routes/contato/contato';
import Home from './routes/home/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "produtos", element: <Produtos /> },
      { path: "servicos", element: <Servicos /> },
      { path: "localizacao", element: <Localizacao /> },
      { path: "contato", element: <Contato/> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

