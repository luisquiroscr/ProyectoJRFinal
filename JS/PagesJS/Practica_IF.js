console.log(`Funcionando Archivo: Practica_IF`);

//Caso1

function verificarEdad() {
    let edad = document.getElementById('edad').value;
    let pais = document.getElementById('pais').value;

    console.log(edad)
    console.log(pais)

//IFELSE

    if (edad >= 18) {
        alert(`Eres mayor de edad en ${pais}`)
    } else {
        alert(`No eres mayor de edad`)
    }
}
//FinCaso1

//Caso2 Par o Impar

function verificarParImpar() {
    let numero3 = document.getElementById('numero3').value;
    let numeroconvertido = parseInt(numero3)

    //Se pone triple === para que verifique si los dos son numericos
    if (numeroconvertido % 2 === 0) {
         document.getElementById("mensajeParImpar").innerText = `El número ${numeroconvertido} es par`
    } else {
        document.getElementById("mensajeParImpar").innerText = `El número ${numeroconvertido}  no es par`
    }

    console.log(numeroconvertido)
}
//FIN Caso2 Par o Impar


//Caso3 Par o Impar

function evaluarNota() {
    let nota = document.getElementById('nota').value;
    let numeroconvertido = parseInt(nota)

    //Se pone triple === para que verifique si los dos son numericos
    if (numeroconvertido >= 90) {
         alert("Excelente Nota")
document.getElementById("mensajeNota").innerText = `El resultado es ${numeroconvertido}. Excelente Nota`


    } else if (numeroconvertido >= 70) {
        alert("Aprobado")
        document.getElementById("mensajeNota").innerText = `El resultado es ${numeroconvertido}. Aprobado`
    }

    else {

        alert("Reprobado")
        document.getElementById("mensajeNota").innerText = `El resultado es ${numeroconvertido}. Estas Reprobado.`

    }

    console.log(numeroconvertido)
}


//FIN Caso3 Par o Impar

//Caso4-A Descuento Tarea

//parse int Entero
//parseInt Float decimales
//monto * 0.9

function calcularDescuento() {

    let monto = document.getElementById('monto').value;
    let montoconvertido = parseFloat(monto)
    


    if (montoconvertido >= 100) {
        alert(`Usted obtiene un 10% de descuento. Felicidades!!`)
         document.getElementById("mensajeDescuento").innerText = `Su compra tiene un 10% de descuento. Usted cancela ${montoconvertido * 0.9 } `
    } 
    
    else {
        alert(`Compra sin descuento aplicable.`)
        document.getElementById("mensajeDescuento").innerText = `Su compra por ${montoconvertido} no posee descuento aplicable segun la promocion vigente.`
    }

    console.log(montoconvertido)
}

//Caso4-B Verificacion rapida de edad


function verificarMayorMenor() {
    let edad = document.getElementById('edadSimple').value;
   
    // Para obtener el año actual de forma dinámica se debe escribir lo siguiente
    let currentYear = new Date().getFullYear();    //Esto hace que cuando cambie el año, se recalcule la edad en función del año de nacimiento ingresado
    

      if (edad <= 2007) {
        alert(`Eres mayor de edad.`)
        document.getElementById("mensajeEdadSimple").innerText = `Eres meyor de edad. Tu edad es ${currentYear - edad}`
    }
    else {
alert(`Alerta, menor de edad.`)
        document.getElementById("mensajeEdadSimple").innerText = `Tu edad es: ${currentYear - edad}. Eres menor de edad. Por favor presentate con tu padre, madre o encargado legal.`

    }
}

//Fin Caso4-B Verificacion rapida de edad

//Como hacer para que en lugar de que 2007 sea fijo se pueda  dinamizar tambien 

// function verificarMayorMenor() {
//     // Suponemos que 'edad' es en realidad el año de nacimiento ingresado
//     let anioNacimiento = parseInt(document.getElementById('edadSimple').value, 10);
    
//     // Obtén el año actual de forma dinámica
//     let currentYear = new Date().getFullYear();
    
//     // Calcula el año límite para ser mayor de edad (18 años)
//     let umbral = currentYear - 18;
    
//     // Si el año de nacimiento es menor o igual que el umbral, es mayor de edad
//     if (anioNacimiento <= umbral) {
//         alert("Eres mayor de edad.");
//         document.getElementById("mensajeEdadSimple").innerText = `Eres mayor de edad. Tu edad es ${currentYear - anioNacimiento}`;
//     } else {
//         alert("Alerta, menor de edad.");
//         document.getElementById("mensajeEdadSimple").innerText = `Tu edad es ${currentYear - anioNacimiento}. Eres menor de edad. Por favor preséntate con tu padre, madre o encargado legal.`;
//     }
// }