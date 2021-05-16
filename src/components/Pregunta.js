import React, { useState } from 'react';
import Error from './Error';

export const Pregunta = ({guardarPresupuesto, guardarRestante}) => {

//definir el state
const[cantidad, guardarCantidad]= useState(0);

const [error, guardarError] = useState(false);

//funcion que lee el presupuesto
const definirPresupuesto = e => {
    //convertimos con parseInt a entero el valor que recogemos del input es siempre un valor string aunque pongamos type number nos devuelve un string
    //console.log(parseInt(e.target.value))
    guardarCantidad(parseInt(e.target.value, 10))
}
// submit para definir el presupuesto
const agregarPresupuesto = e => {
    // preventDefault al evento para que no envie el query string en la parte superior y tampoco recargue la pagina
    e.preventDefault();

   //validar
   //si es menor a 1 o si no es un numero. cambia el estado de guardarError a true
    if (cantidad < 1 || isNaN( cantidad )){
        guardarError(true);
        return;
    }

    //si pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    //una vez que pasamos la validacion para dejar de mostrar el formulario
    //actulizarPregunta(false);

}

    return (
        <>
           <h2>Coloca tu presupuesto</h2> 

           { error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

           <form
                onSubmit={agregarPresupuesto}
           >
               <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
               />

               <input
                    type="submit"
                    className="button-primary u-full-width"
                    value= "Definir presupuesto"
               />
           </form>
        </>
    )
}
