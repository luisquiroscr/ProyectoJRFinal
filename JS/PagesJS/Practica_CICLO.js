console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },  //array 0
    { nombre: "Ana", edad: 17, activo: false },  //array 1
    { nombre: "Carlos", edad: 30, activo: true }, //array 2
    { nombre: "Laura", edad: 16, activo: true }, //array 3
    { nombre: "Pedro", edad: 40, activo: false } //array 4
];

console.log(personas[4].nombre)

console.log(personas[1].nombre)

//bucles o ciclos

//Foreach

// se reemplaza la palabra array y se coloca el array propio
//element seria las posiciones o, 1, 2 y todas la as posiciones que tenga

personas.forEach(element => {
    console.log(element)
});

let Clientes = [
    { nombre: "Juan", edad: 25, activo: true },  //array 0
    { nombre: "Ana", edad: 17, activo: false },  //array 1
    { nombre: "Carlos", edad: 30, activo: true }, //array 2
    { nombre: "Laura", edad: 16, activo: true }, //array 3
    { nombre: "Pedro", edad: 40, activo: false } //array 4
];

Clientes.forEach(element => {
    if (element.activo == true){
        console.log(element.nombre,element.activo)
    }
    
});

//Cantidad de elementos que tiene un array
console.log(personas.length)

//Filtrar por una propiedad
let buscarnombre = personas.find(x =>x.nombre === "Ana")  //Esto solo sirve para arreglos

console.log(buscarnombre)


let buscaractivo = personas.find(x =>x.activo === true)  //Esto solo sirve para arreglos

console.log(buscaractivo)

function Filtrar() { 
    let valor = document.getElementById('sensitivo').value;
    console.log(valor)
}

//toUpperCase convierte a mayusculas de manera interna
//trim elimina espacios en blanco
function buscarDesdeInput() {
    let input1 = document.getElementById('buscarNombre').value.trim();
    let resultado = document.getElementById('resultadoBusqueda');
    
    //Busca en el arreglo
    let busqueda = personas.find(x=> x.nombre.toUpperCase() === input1.toUpperCase())

    //Aqui se indica si el resultado es verdadero o falso
    if (busqueda) {
        resultado.innerHTML = `La Persona ${busqueda.nombre} ha sido encontrada dentro de la base de datos.`
        
    }

    else {
        resultado.innerHTML = `Persona no encontrada en la base de datos.`
    }
}


//Crear la funcion del onclick
//Input id value //no tiene
//mostrr resultado iiner

function primeraPersonaActiva() {
    let resultado = document.getElementById('resultadoActivo');

    let busqueda = personas.find(x=> x.activo == true)
//Aqui le indicamos si el resultado es verdadero o falso

if (busqueda) {
    resultado.innerHTML = `Primera persona encontrada ${busqueda.nombre}`

}

else {
    resultado.innerHTML = `No se encontro ninguna persona que cumpla los criterio de la busqueda`
}
}

//Caso 6

function personasActivas() {
    let resultado = document.getElementById('listaActivos');

    personas.forEach(element => {
        if (element.activo ==true) {
resultado.innerHTML += `<li>nombre: ${element.nombre}</>`  //El += es para que no borre el anterior y mas bien vaya agregando elementos que cumplan con los criterios 
        }
        
    });
}

//  Inicio Entregable 3 de Proyecto Final

//Ejercicio 3 inicio
function primeraMayorDeEdad() {
    let resultado = document.getElementById('resultadoMayor');

    let busqueda = personas.find(x=> x.edad >= 18)


if (busqueda) {
    resultado.innerHTML = `Primera persona mayor de edad encontrada ${busqueda.nombre} cuya edad es ${busqueda.edad} años.`

}

}

// Fin Ejercicio 3

//Ejercicio 4 Inicio

function mostrarTodasLasPersonas() {
    let resultado = document.getElementById('listaPersonas');

    personas.forEach(element => {
       resultado.innerHTML += `<li> ${element.nombre}</>`  //El += es para que no borre el anterior y mas bien vaya agregando elementos que cumplan con los criterios 
        
        
    });
}

//Fin Ejercicio 4


//Ejercicio 5 Inicio

function mayoresDeEdad() {
    let resultado = document.getElementById('listaMayores');

    personas.forEach(element => {
        if (element.edad >= 18) {
resultado.innerHTML += `<li>${element.nombre} su edad es ${element.edad}</>`  //El += es para que no borre el anterior y mas bien vaya agregando elementos que cumplan con los criterios 
        }
        
    });
}

//Fin Ejercicio 5


//Fin Entregable 3 de Proyecto Final