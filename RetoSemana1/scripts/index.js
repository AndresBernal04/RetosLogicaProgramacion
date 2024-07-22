/* RETO:
  Lista de nombres
  Escribe un programa que le pida al usuario 3 nombres, 
  los almacene en un arreglo de datos y luego los muestre, 
  si el nombre está repetido, no debe guardarlo.
*/

// Crear arreglo vacío para almacenar los nombres
let names = [];

// Función para solicitar nombres al usuario
function requestName(number) {
  let name = prompt("Ingresa el nombre" + number + ":");
  return name;
}

// Solicitar tres nombres al usuario
for (let i = 1; i <= 3; i++) {
  let name = requestName(i);


  // Verificar si el nombre está repetido
  if (names.includes(name)){
    alert ("El nombre " + name + " ya ha sido ingresado, por favor ingresa otro nombre");
    i--; // Para reducir el contador en uno
  } else{
    names.push(name); //Para agregar el nombre al arreglo
  }
}

// Mostrar los nombres almacenados en el arreglo
alert("Los nombres ingresados son: " + names.join (", ")) //Para darle un espacio entre cada "," y cada nombre
