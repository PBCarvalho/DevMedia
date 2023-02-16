import React from "react";
import { BrowserRouter, Router, Route } from 'react-router-dom';

import Home from "../paginas/Home";
import Sabores from "../paginas/Sabores";
import Sobre from "../paginas/Sobre";

const Rotas = () => (
    <BrowserRouter>
        <Router>
            <Route exact path="/" from={ <Home /> } />
            <Route path="./paginas/Sabores" from={ <Sabores /> } />
            <Route path=".paginas/Sobre" from={ <Sobre />} />
        </Router>
    </BrowserRouter>
);

export default Rotas;