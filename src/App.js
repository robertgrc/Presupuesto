import React, { useState } from 'react';
import Formulario from './components/Formulario';
import { Pregunta} from './components/Pregunta';


function App() {

  //definir useState para el presupuesto y el restante
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
// para dejar de mostrar el formulario de registro, en un principio es true 
  // const [mostrarpregunta, actualizarPregunta]= useState(true);

  return (
    <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">
         
            <Pregunta 
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              // actualizarPregunta={actualizarPregunta}
            />

            <div className="row">
               <div className="one-half column">
                 
                 <Formulario />

               </div>

               <div className="one-half column">
                 2
               </div>
            </div>

          </div>
        </header>
    </div>
  );
}

export default App;
