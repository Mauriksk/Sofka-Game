export class Encuesta {

    constructor( 
            preguntasNivel1,
            preguntasNivel2,
            preguntasNivel3,
            preguntasNivel4, 
            preguntasNivel5,
            nivel = 1,
            premio = 0,
            gameStatus = true,
            retiroBoton = false,
        )
        {
            this.preguntasNivel1 = preguntasNivel1;
            this.preguntasNivel2 = preguntasNivel2;
            this.preguntasNivel3 = preguntasNivel3;
            this.preguntasNivel4 = preguntasNivel4; 
            this.preguntasNivel5 = preguntasNivel5;
            this.nivel = nivel;
            this.premio = premio;
            this.gameStatus = gameStatus;
            this.retiroBoton = retiroBoton;
        }

    //Si la repuesta es correcta sube de nivel y sube premio, si es false pierde el juego
    selectRespuesta( respuesta ){
        if( respuesta === true  ){
            if(this.nivel < 5){
                this.nivel++;
                this.premio++;
            }else{
                this.gameStatus = false;
                this.nivel = 1;
            }
        }
    }

    selectRespuestaIncorrecta( respuesta ){
        if( respuesta === true  ){
            this.nivel = 1
            alert('Perdiste Itentalo de nuevo')
        }
    }
    
    preguntaPorNivel(nivel1, nivel2, nivel3, nivel4, nivel5){

        if( this.nivel === 1 ){
            return nivel1;
        }
        if( this.nivel === 2 ){
            return nivel2;
        }
        if( this.nivel === 3 ){
            return nivel3;
        }
        if( this.nivel === 4 ){
            return nivel4;
        }
        if( this.nivel === 5 ){
            return nivel5;
        }
    }

    //escoje de manera aleatoria la pregunta
    preguntaAlAzar(){
        return Math.round(Math.random()* 4 );
    }
}