import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import Card from '../Components/Card';

export default function Brand({ match }) {

    const [list, setList] = useState([])

    useEffect(() => {

        const listarMarcas = api.post('api/Veiculos/requestVeiculos', {
            iD_Categoria: 1,
            iD_TipoVeiculo: 0,
            ordenacao: 1,
            paginaCorrente: 1,
            qtdItensPagina: 5000,
            qtdeTotalRegistros: 150,
            likeBuscaMarcaModelo: match.params.brand
        });
        listarMarcas.then(res => setList(res.data));
        console.log(list)
    });
    return (
        <>
            {
                list.map(car => (
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 align-center">
                                <Card vehicle={car} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
