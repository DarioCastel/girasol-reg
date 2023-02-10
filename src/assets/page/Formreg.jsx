import React from "react";
import "./../Css/formreg.scss";

const Formreg = () => {
  return (
    <>
      <div className="header">
        <button>
          Volver a Listado<span></span>
        </button>
      </div>
      <div className="content-dash">
        <section className="form-header">
          <h1>Formulario de Registro</h1>
        </section>
        <section className="form-body">
          <form>
            <div className="reg-details">
              <div className="input-box">
                <span className="details">Parcela:</span>
                <input type="text" placeholder="Ingrese la Parcela" required />
              </div>
              <div className="input-box">
                <span className="details">Altura:</span>
                <input type="text" placeholder="Ingrese la Altura" required />
              </div>
            </div><br />
            <span className="form-header">HOJAS</span>
            <div className="reg-details">
                
              <div className="input-box">
                <span className="details">Color:</span>
                <input type="text" placeholder="Ingrese el color" required />
              </div>
              <div className="input-box">
                <span className="details">Textura:</span>
                <input type="text" placeholder="Ingrese la Textura" required />
              </div>
              <div className="input-box">
                <span className="details">Borde:</span>
                <input type="text" placeholder="Ingrese el Borde" required />
              </div>
            </div>
            <div className="reg-details">
              <div className="input-box">
                <span className="details">Color Lig:</span>
                <input type="text" placeholder="Ingrese el color lig" required />
              </div>
              <div className="input-box">
                <span className="details">Floración:</span>
                <input type="text" placeholder="Ingrese la floración" required />
              </div>
            </div>
            <span className="form-header">SEMILLAS</span>
            <div className="reg-details">
              <div className="input-box">
                <span className="details">Color:</span>
                <input type="text" placeholder="Ingrese el color" required />
              </div>
              <div className="input-box">
                <span className="details">Estrías:</span>
                <input type="text" placeholder="Ingrese las estrías" required />
              </div>
            </div>
            <div className="reg-details">
              <div className="input-box">
                <span className="details">Observación:</span><br />
                <textarea name="textarea" rows="7"  placeholder="Ingrese una observación"></textarea>
              </div>
            </div>
            <div className="reg-details">
              <div className="input-box">
                <span className="details">Ingrese una Foto:</span><br />
                <input type='file' className="foto" />
              </div>
            </div>
           
                <div className="submit">
                    <input type="submit" value='CARGAR DATOS'/>
                </div>
              
          </form>
        </section>
      </div>
    </>
  );
};

export default Formreg;