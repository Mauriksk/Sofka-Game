export class Interface {
    constructor(
        propiedadClickeada,
    ){
        this.propiedadClickeada = propiedadClickeada;
        
    }

    mostrarPregunta( text ){
        const tituloPregunta = document.getElementById('pregunta');
        tituloPregunta.innerText = text.pregunta;
    }

    mostrarNivel( text ){
        const nivelActual = document.getElementById('progreso');
        nivelActual.innerText = `Nivel ${text}`;
    }

    mostrarDinero( text ){
        const dineroActual = document.getElementById('dinero');
        dineroActual.innerText = `Dinero Ganado Acumulado: ${text}`;
    }

    mostrarOpciones( opciones, callback, callback2 ){
        const opcionesDePregunta = document.getElementById('botones-Dinamicos');

        opcionesDePregunta.innerHTML = ''

        for( let i = 0; i < opciones.opciones.length; i++ ){
            const button = document.createElement('button');
            button.innerText = opciones.opciones[i];

            button.addEventListener('click', ()=> console.log( opciones.respuesta ===  opciones.opciones[i]))
            
            button.addEventListener('click', ()=> callback(opciones.opciones[i] === opciones.respuesta ))

            button.addEventListener('click', ()=> callback2(opciones.opciones[i] != opciones.respuesta ))


            //Le agrego los bottones al div
            opcionesDePregunta.append(button);
        }
    }

    //Mandar dato del juego al hitorial
    mostrarHistorial( historialArray ){

        let nick = prompt('Felicidades cuál es tu nick?')

        let frase = `Jugador ${nick} Gano !! `

        historialArray.push(frase)

        localStorage.setItem( 'historial', JSON.stringify(historialArray) ) 
    }
    
    pintarHistorialDelLocalStorage( localData ){
        let data = localData;
        const historial = document.getElementById('resultados-historial');
        historial.innerHTML = ``;
        
        let result = data.filter((item,index)=>{
            return data.indexOf(item) === index;
        }) 

        result.map( (jugador)=> { 
            historial.innerHTML += `${jugador}<hr/>`;
        });
    }
}