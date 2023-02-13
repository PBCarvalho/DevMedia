import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../paginas/PaginaInicial';
import PaginaFrontEnd from '../paginas/PaginaFrontEnd';
import PaginaBackEnd from '../paginas/PaginaBackEnd';

//Sincronizar aplicação à uma URL
const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaInicial />} />
            <Route path='/front-end' element={<PaginaFrontEnd />} />
            <Route path='/back-end' element={<PaginaBackEnd />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;