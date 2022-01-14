export class Pregunta {
    constructor( pregunta, opciones, respuesta ){
        this.pregunta = pregunta; 
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    resCorrecta( respSeleccionada ){
        return respSeleccionada === this.respuesta ;
    }
}




