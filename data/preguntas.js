import { Pregunta } from '../models/Pregunta.js';
import { data } from './data.js';

const nivel1 = data[0];
const nivel2 = data[1];
const nivel3 = data[2];
const nivel4 = data[3];
const nivel5 = data[4];

//Filtro las preguntas por nivel y las exporto

export const preguntasNivel1 = nivel1.map( pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta) );

export const preguntasNivel2 = nivel2.map( pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta) );

export const preguntasNivel3 = nivel3.map( pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta) );

export const preguntasNivel4 = nivel4.map( pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta) );

export const preguntasNivel5 = nivel5.map( pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta) );

