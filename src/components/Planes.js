import listaPlanes from '../helpers/listaPlanes';

export default function Planes() {
    return (
        <>
            <table className="table table-secondary table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Plan</th>
                        <th scope="col">Usuarios (max.)</th>
                        <th scope="col">Trabajadores (max.)</th>
                        <th scope="col">Valor UF</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPlanes.map((plan)=>(
                    <tr key={plan.id}>
                    <th scope="row">{plan.n}</th>
                    <td>{plan.u}</td>
                    <td>{plan.t}</td>
                    <td>{plan.v}</td>
                    </tr>
                    ))}
                 </tbody>
            </table>
        </>
    )
}
