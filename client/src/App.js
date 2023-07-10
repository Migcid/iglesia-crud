
import './App.css';
import React from "react";
import Datepicker from './DatePicker.js'


function App() {
 
  return (
    <div className="App">
      <h1 className="titulo">Formulario</h1>
      
        <div className="form-control text-center">
          <div className='row'>
            <div className="col-1 col-sm-3 col-md-1 col-xl-1"> 
              <label> Nombre: <input type="text"/></label>
              <label> Apellido: <input type="text"/></label>
              <label> Correo Electronico:<input type="email" required/></label>
              <label> Ministerio:     
                <select>
                    <option value="1">Sonido</option>
                    <option value="2">Porteros</option>
                    <option value="3">Red de ninos</option>
                </select>
              </label>
              <label> Fecha de Servicio:<br></br> <Datepicker/>
              
              </label>

              <button className="btn btn-success col-3" type="submit">Agregar Servicio</button>
            </div>
          


            
      
          </div>
           
        
        
        </div>

       
    </div>

  );
}

export default App;
