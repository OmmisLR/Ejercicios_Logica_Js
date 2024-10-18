function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas y eliminar caracteres no alfanuméricos
    const palabraNormalizada = palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Invertir la palabra
    const palabraInvertida = palabraNormalizada.split('').reverse().join('');
    
    // Comparar la palabra normalizada con la invertida
    return palabraNormalizada === palabraInvertida;
}

// Ejemplo de uso
const palabraIngresada = prompt("Ingresa una palabra:");
if (esPalindromo(palabraIngresada)) {
    console.log("Es un palíndromo");
} else {
    console.log("No es un palíndromo");
}