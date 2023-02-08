import React from 'react'
import Table from '../components/Table';
import "./../css/home.scss";

const Home = () => {
  return (
    <>
        <div className="container-home">
            <div className="content">
                <div className="contButon"><button className='btn-agregar'>AGREGAR DATOS</button></div>
                <div className="contTable"><Table/></div>
            </div>
        </div>
    </>
  )
}

export default Home