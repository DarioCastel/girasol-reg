import React from "react";
import Row from "../Components/Row";
import './../Css/list.scss'

const List = () => {
  return (
    <>
      <div className="header">
        <button>
          Agregar Registro<span></span>
        </button>
      </div>
      <div className="content-dash">
        <section className="table-header">
          <h1>Registros</h1>
        </section>
        <section className="table-body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Parcela</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default List;