import { preguntasNivel1, preguntasNivel2, preguntasNivel3, preguntasNivel4, preguntasNivel5 } from './data/preguntas.js';
import { Encuesta } from './models/Encuesta.js'
import { Interface } from './models/Interface.js'


const renderPage = (encuesta, interfaceTitulo )=>{

    //Filtro la pregunta del nivel correspondiente
    let preguntasDelNivel = encuesta.preguntaPorNivel( preguntasNivel1, preguntasNivel2, preguntasNivel3, preguntasNivel4, preguntasNivel5 )
        
    //Elijo una pregunta del nivel correspondeinte al azar
    let preguntaSorteada = preguntasDelNivel[encuesta.preguntaAlAzar()];

    window.onload = function () {
        let datitos = JSON.parse( localStorage.getItem("historial"));
        interfaceTitulo.pintarHistorialDelLocalStorage( datitos )
    } 

    //Manda los datos contenedor donde se visualiza 
    
    if( encuesta.gameStatus === false ){
        interfaceTitulo.mostrarHistorial( historialArray );
        
        encuesta.gameStatus = true;
        let datitos = JSON.parse( localStorage.getItem("historial"));
        interfaceTitulo.pintarHistorialDelLocalStorage( datitos )
    } 

//Le paso el titulo de la pregunta sorteada
interfaceTitulo.mostrarPregunta(preguntaSorteada);
//Le paso el nivel actual
interfaceTitulo.mostrarNivel(encuesta.nivel);
//Le paso el dinero actual
interfaceTitulo.mostrarDinero(encuesta.premio * 1000);
//Le paso la pregunta sorteada a la Interface
interfaceTitulo.mostrarOpciones(preguntaSorteada, ( opcionElegida )=> {
    encuesta.selectRespuesta( opcionElegida )
    renderPage(encuesta, interfaceTitulo)
},
( opcionElegida )=> {
    encuesta.selectRespuestaIncorrecta( opcionElegida )
    renderPage(encuesta, interfaceTitulo)
},
);

}

function main(){

    const encuesta = new Encuesta(
        preguntasNivel1,
        preguntasNivel2,
        preguntasNivel3,
        preguntasNivel4,
        preguntasNivel5,
        );
    const interfaceTitulo = new Interface();

    renderPage(encuesta, interfaceTitulo)

}
let historialArray = [];

main();
