import { useContext, useState, useEffect } from 'react';
import {Context} from '../context/ContextProvider';
import listaPlanes from '../helpers/listaPlanes';
import './total.css';

export default function Total() {

    const [total, ] = useContext(Context);
    const [uf, setUf] = useState(null)

    const date =  new Date().toLocaleDateString('es-CL', { year: 'numeric',month: 'numeric',day: 'numeric' } );

  useEffect(() => {
    fetch(`https://mindicador.cl/api/uf/${date}`)
    .then(response => response.json())
    .then(data => setUf(data.serie[0].valor))
  },[])

    const totalSumados = total.reduce((acc, item) =>{
        return {usuario: acc.usuario + item.usuario, trabajador: acc.trabajador + item.trabajador }
      },{usuario:0, trabajador:0})
    
    const seleccionados = listaPlanes.filter((plan) =>{
        if (totalSumados.usuario > 0 &&  totalSumados.usuario <= plan.u && totalSumados.trabajador > 0 && totalSumados.trabajador <= plan.t)
         {return true} else { return false}  
        })

    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 mb-3 align-items-center text-center">
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm text-center">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Total Neto</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{seleccionados[0]?.v} UF<small className="text-muted fw-light">/mes</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Plan {seleccionados[0]?.n}</li>
                            <li>Total pesos: $ {parseInt(seleccionados[0]?.v * uf).toLocaleString('es-CL')}</li>
                            <li>Valor UF: $ {uf.toLocaleString('es-CL')}</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Suscribirse</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
