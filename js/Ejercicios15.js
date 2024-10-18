let numero = prompt("Ingresa un numero: ")

if (isNaN (numero) || numero.trim()===""){
    console.log("Error, No es un numero.")
}else{
    console.log(numero + " Si es un numero")
}