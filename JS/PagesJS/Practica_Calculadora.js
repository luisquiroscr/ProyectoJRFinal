// Inicio Commit 1 del Proyecto
console.log(`Funcionando Archivo: Practica_Calculadora`);

 function enviarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
console.log('Mostrar Nombre:',nombre);
console.log('Mostrar Edad:',edad);
alert(`Nombre: ${nombre} y Edad: ${edad}`)
}


function realizarSuma() {
    console.log("Funcionando realizarSuma")

    
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    
    
   //LS: Variable normal , LO: objeto, LA: Arreglo
   // Typescrip detecta si es in o decimal o cualquiero otra cosa mientras que JS detecta todo como texto 
   // parseInt reconoce numeros enteros, parsefloat detecta si es entero o decimal
    let Suma = parseInt(numero1) + parseInt(numero2);

    document.getElementById('resultado').innerText = Suma;
console.log(numero1);   //Se deben borrar o comentar pues es solo para nuestro uso, para verificar que todo est[e bien
console.log(numero2);
console.log(Suma)

}

//Fin del Commit 1 del Proyecto