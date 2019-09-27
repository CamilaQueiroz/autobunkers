import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/api';



export default function MarcasList() {

    const [list, setList] = useState([])

    useEffect(() => {

        const listarMarcas = api.post('api/Combos/requestMarcasEmpresa', {
            iD_Empresa: 1007,
            idCategoria: 1,
            iD_EmpresaGrupo: 1007
        });
        listarMarcas.then(res => setList(res.data));
    });


    return (
        <>
            <div className="list-group">
                {
                    list.map(marca => (
                        <Link key={marca.iD_VeicMarca} to={`/${marca.descricao}`} className="list-group-item list-group-item-action list-group-item-light">{marca.descricao}</Link>
                    ))
                }

            </div>

        </>
    );
}
