//en base a su perfil o responsabilidades

let perfil= "ADMINISTRADOR2";

switch (perfil) {
    case "":
      console.log("Debe especificar el perfil del usuario.");
      break;
    case "administrador":
    case "ADMINISTRADOR":
    case "Administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema.");
      break;
    case "asistente":
    case "ASISTENTE":
    case "Asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.");
      break;
    case "invitado":
    case "INVITADO":
    case "Invitado":
        console.log("Usted sólo tiene permisos de consultar datos. ");
      break;
    default:
      console.log("Debe especificar un perfil válido.");
  }