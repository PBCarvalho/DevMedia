import React from 'react';
import Topo from '../../Componentes/Topo';
import Rodape from '../../Componentes/Rodape';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Topo />
            <Rodape />
        </div>
    );
}