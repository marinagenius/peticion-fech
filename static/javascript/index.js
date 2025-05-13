import { datosUser, pintoDatos, recorrendoDatos } from "./funcions.js";

(async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();

  datosUser(data);
  pintoDatos(data);
  recorrendoDatos(data);
})();
