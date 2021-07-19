import { useState, useContext } from "react"
import {Context} from '../context/ContextProvider';
import Total from './Total'

export default function SameUser() {

    const [total,setTotal ] = useContext(Context);

    const [check, setCheck] = useState(false)


    const handleCheck = (e) =>setCheck(!check)

    return (
        <>
            <div className="form-check">
                <input 
                value={check}
                onChange={handleCheck}
                className="form-check-input" 
                type="checkbox" 
                id="CheckSameUser" />
                <label className="form-check-label" htmlFor="CheckSameUser">
                    Usuario es el mismo para todas las empresas enroladas
                </label>
            </div>

        <Total check= {check}/>

        </>
    )
}
