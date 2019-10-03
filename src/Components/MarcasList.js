import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/api';

export default function MarcasList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const listarMarcas = api.post('api/Combos/requestMarcasEmpresa', {
            iD_Empresa: 1007,
            idCategoria: 1,
            iD_EmpresaGrupo: 1007,
        })
    })


    return (
        <>
            <span className="list-marca-link">
                {
                    list.map(marca => (
                        <Link className="text-dark text-decoration-none p-2 float-left" key={marca.iD_VeicMarca} to={`/${marca.descricao}`}>{marca.descricao} <span className="badge badge-danger text-decoration-none">10</span></Link>
                    ))
                }
            </span>
        </>
    );
}