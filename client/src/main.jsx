import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./pages/App";
import './index.css'
import { RecoilRoot } from "recoil";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Produtos from './routes/produtos/produtos';
import Serviços from './routes/serviços/serviços';
import Localização from './routes/localização/localização';
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
      { path: "serviços", element: <Serviços /> },
      { path: "localização", element: <Localização /> },
      { path: "contato", element: <Contato/> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

