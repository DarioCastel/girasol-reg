import React from 'react'
import TableRow from './TableRow'

const Table = () => {
  return (
    <table className="table">
        <thead>
            <tr>
                <td>Parcela</td>
                <td>Fecha</td>
                <td>Usuario</td>
                <td>Observacion</td>
                <td>Acción</td>
            </tr>
        </thead>
        <tbody>
            
                <TableRow/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
            
        </tbody>
    </table>
  )
}

export default Table