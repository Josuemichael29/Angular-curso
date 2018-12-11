"use strict";
//'use strict'
///////////////////////////////////////////    CLASE 1 - COSAS GENERALES    ///////////////////////////////////////////
/*
//USAR LET EN VEZ DE VAR PARA TENER UN MEJOR CONTROL DEL SCOPE
//LAS CONSTANTES DEBEN DE SER INICIALIZADAS CUANDO SON DECLARADAS
//LAS CONSTANTES FUNCIONAN COMO LETS, ES DECIR, DENTRO DE UN CICLO, FUNCION PUEDEN TOMAR VALORES DISTINTOS.

let nombre:string = "Josue";
let numero:number = 123;
let booleano:boolean = true;

let hoy:Date = new Date();

let cualquiera:any; //Para almacenar cualquier tipo de datos

cualquiera = 123;
cualquiera = "hola";

let spiderman = {    //Los objetos solo se pueden modificar los datos que contienene sus atributos
    nombre: "Peter",
    edad: 20
}
*/
///////////////////////////////////////////    CLASE 2 - TEMPLATES LITERALES    ///////////////////////////////////////////
/*
let nombre:string = "Josue";
let apellido:string = "Banda";
let edad:number = 21;

var texto = `Hola, ${nombre} ${apellido} (${edad}).`; //Dentro de las llaves se puede cualquier tipo de codigo de javascript

console.log(texto);
*/
/*
///////////////////////////////////////////    CLASE 3 - PARÁMETROS    ///////////////////////////////////////////
//LOS PARAMETROS OBLIGATORIOS DEBEN DE IR AL INICIO SIEMPRE
function activar(quien:string){    //Funcion con parametros obligatorios
    let mensaje:string;
    mensaje = `${quien} activó la batiseñal`;
    console.log(mensaje);
}

function activar_def(quien:string, objeto:string = "batiseñal"){
    let mensaje:string;
    mensaje = `${quien} activó la ${objeto}`;
    console.log(mensaje);
}

function activar_opc(quien:string,
                    objeto:string = "batiseñal",
                    lugar?:string){
    let mensaje:string;
    if(lugar){
        mensaje = `${quien} activó la ${objeto} en ${lugar}`;
    } else{
        mensaje = `${quien} activó la ${objeto}`;
    }
    console.log(mensaje);
}

//activar("Panchito");
//activar_def("Panchito");
activar_opc("Panchito", "batiseñal", "rectoría");

*/
/*
///////////////////////////////////////////    CLASE 4 - FUNCIÓN FLECHA    ///////////////////////////////////////////
//EL THIS NO ES AFECTADO CUANDO SE USA EN FUNCIONES DE FLECHA
let miFuncion = function (a:any){
    return a;
}

let miFuncionF = (a:any) => a; //la primera parte es el parametro

let miFuncion2 = function(a:number, b:number){
    return a+b;
}

let miFuncion2F = (a:number, b:number) => a+b;

let miFuncion3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

let hulk = {
    nombre: "Bruce",
    smash() {
        setTimeout(()=> console.log(this.nombre + " smash!!!"), 1500);
    }
}

hulk.smash();

//console.log(miFuncion2(1,2));
//console.log(miFuncion2F(1,2));
*/
/*
///////////////////////////////////////////    CLASE 4 - DESTRUCTURACIÓN DE OBJETOS    ///////////////////////////////////////////

let avenger = {
  nombre: "Steve",
  clave: "Capitan America",
  poder: "Droga"
};

let {nombre, clave, poder} = avenger;

//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;

console.log(nombre, clave, poder);


let avengers:string[] = ["Thor", "Steve", "Tony"];

//let [thor, capi, ironman] = avengers;
let [, , ironman] = avengers;

console.log(ironman);

*/
/*
///////////////////////////////////////////    CLASE 4 - PROMESAS EN ES6    ///////////////////////////////////////////
let prom1 = new Promise(function(resolve, reject){
    setTimeout(() => {
       console.log("Promesa terminada");
       
       //Termina bien
       resolve();

       //Termina mal
       //reject();

    }, 1500);
});

console.log("Paso 1");

prom1.then( function(){
    console.log("Ejecutarme cuando termine bien!");
} ,
function(){
    console.log("Ejecutarme cuando termine mal!");
})

console.log("Paso 2");
*/
/*
///////////////////////////////////////////    CLASE 5 - INTERFACES    ///////////////////////////////////////////
interface xMen {
    nombre:string,
    poder:string
}

function enviarMision(xmen:xMen) {
    console.log("Enviando a: " + xmen.nombre);
}


let wolverine:xMen = {
    nombre: "Wolverine",
    poder: "Regeneración"
};

enviarMision(wolverine);
*/
/*
///////////////////////////////////////////    CLASE 6 - CLASES    ///////////////////////////////////////////
class Avenger {
    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre:string, equipo:string, nombreReal:string, puedePelear:boolean, peleasGanadas:number){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}

let antman:Avenger = new Avenger("antman", "cap", "Nose", true, 2);

console.log(antman);
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///////////////////////////////////////////    CLASE 7 - DECORADORES    ///////////////////////////////////////////
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
