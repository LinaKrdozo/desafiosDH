//traductor condicional

let palabra= "puerta";

switch (palabra) {
    case "":
      console.log("Debe ingresar una palabra");
      break;
    case "perro":
        console.log("dog");
      break;
    case "gato":
        console.log("cat");
      break;
    case "puerta":
        console.log("door");
      break;
    case "ventana":
        console.log("window");
      break;
    case "mesa":
        console.log("table");
      break;
    default:
      console.log("La palabra ingresada es incorrecta");
  }