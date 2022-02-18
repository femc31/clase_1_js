//mensajes por consola
console.log('mensaje enviado por consola');
console.warn('mensaje de alerta');
console.error('esto es un error como si fuera real');

//mensajes emergentes
alert('mensaje emergente informativo');
prompt('mensaje emergente para solicitar datos');
confirm('mensaje emergente para solicitar confirmacion');

//mensajes por el navegador
document.write('<h1>Muestra lo que desea por el navegador, por ejemplo: "esto es un titulo"</h1>');
/**de momento, el document es una variable especial */

//variables
//Espacio en memoria RAM para almacenar datos
//Se puede entender como: "es una caja que me permite guardar un único dato"

//creo una nueva rama con -> git branch primeraRama
//me cambio a esa rama con -> git checkout primeraRama

//declarar una variable: reservar un espacio en memoria para guardar datos.
//se declaran con var (por el momento, mas adelante del curso lo cambiaremos)
//el nombre de la variable se escribe con el estandar lowerCamelCase
var cadenaDeTexto = 'hola mundo!';
console.log(cadenaDeTexto);

//tipos de datos: 
//string -> cadena de caracteres, 
//number -> cualquier tipo de numero,
//null -> es una variable que viene nula (no es lo mismo que vacio)
//boolena -> tiene solo dos posibles respuestas TRUE o FALSE
//undefined -> es una variable indefinida (nunca se le ha asignado un valor)

//bajamente tipado: que dentro de una misma variable puedo guardar mas de un tipo de dato en distintos momentos.
var dato;
console.log('tipo de dato de la variable "dato": ' + typeof dato);
dato = 'Ahora es una cadena';
console.log('tipo de dato de la variable "dato": ' + typeof dato);
dato = 10;
console.log('tipo de dato de la variable "dato": ' + typeof dato);
dato = true;
console.log('tipo de dato de la variable "dato": ' + typeof dato);
dato = null;
console.log('tipo de dato de la variable "dato": ' + typeof dato);

//trato de datos segun su tipo
console.log(10+10); //numbers
console.log('10'+'10'); //string concatenado

//precausiones que debo tener con el bajo tipado
var numeroUno = prompt('ingresa primer numero');
var numeroDos = prompt('ingresa primer numero');
console.log(numeroUno + numeroDos);

//para poder sumar los datos del prompt, debo parsiar las variables
var numeroUnoString = prompt('ingresa primer numero');
var numeroDosString = prompt('ingresa primer numero');
var numeroUno = parseInt(numeroUnoString);
var numeroDos = parseInt(numeroDosString);

console.log('la suma de los numeros es: ' + (numeroUno + numeroDos));

//operadores
//aritmeticos: + - * / %
//comparacion: < > <= >= != == === !==
//caracteres: ?: || 