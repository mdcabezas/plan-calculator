import { useState, useContext } from 'react';
import { Context } from '../context/ContextProvider';

export default function UserEmployee({company}) {
    
    const [total, setTotal ] = useContext(Context);

    const [usuario, setUsuario] = useState(0);
    const [trabajador, setTrabajador] = useState(0);


    const handleItem = (e) =>{
        const nme = e.target.name 
        const vlr = parseInt(e.target.value)

        nme === 'usuario' ? setUsuario(vlr) : setTrabajador(vlr)

        setTotal(total.map((tt)=>{
        if (tt.id === company) return {...tt, [nme]: vlr} 
        return tt
        }));
    }
   // }

    return (
        <>
            <div className="row g-3">
            
                <div className="col-3">
                    <div className="form-floating mb-3">
                        <h5>Empresa {company}</h5>
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-floating mb-3">
                        <input type="number" name="usuario" className="form-control" value={usuario} id="floatingInput" onChange={handleItem}/>
                        <label htmlFor="floatingInput">¿Cuánto usuarios?</label>
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-floating mb-3">
                        <input type="number" name="trabajador" className="form-control"value={trabajador} id="floatingInput" onChange={handleItem}/>
                        <label htmlFor="floatingInput">¿Cuántos trabajadores?</label>
                    </div>
                </div>
            </div>
        </>
    )
}


