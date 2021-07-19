import { useState, useContext } from 'react';
import {Context} from '../context/ContextProvider';
import Total from './Total';
import UserEmployee from './UserEmployee';
import SameUser from './SameUser';

export default function PrincipalFrame() {

  const [company, setCompany] = useState('');
  const [companyUserEmployee, setcompanyUserEmployee] = useState([]);
  const [total, setTotal ] = useContext(Context);

  const handleInput = (e) => {
    const companySelected = e.target.value;
    
    const companyTotal = [];
    
    setCompany(companySelected);

    for (let i = 0; i < companySelected; i++) { companyTotal.push({id:i+1,usuario:0, trabajador:0}) }
    
    setcompanyUserEmployee(companyTotal);
    setTotal(companyTotal)
  }

  return (
    <>
      <div className="container"> {/* CONTAINER */}
        <div className="row g-3"> {/* ROW */}
          <div className="col"> {/* COL */}
            <label htmlFor="total-empresa" className="form-label">¿Cuántas empresas quiere enrolar?</label>
              
              <div className="input-group mb-3">
                <input type="number" className="form-control" id="total-empresa" value={company} onChange={handleInput} />
              </div>

          </div> {/* COL */}    
          </div> {/* ROW */}

            { companyUserEmployee.map((co, i) => ( <UserEmployee key ={i} company = {co.id}/> )) }       

           {company && <SameUser /> } 
          

      </div> {/* CONTAINER */}      
    </>
  );
}
