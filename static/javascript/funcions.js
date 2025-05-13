export const datosUser = (data) => {
  console.log(
    "O dato que obteño é un array cun obxeto na posición 0:",
    data.results
  );
  console.log("Posiciónome dentro do array:", data.results[0]);
  console.log("Accedo a imaxe:", data.results[0].picture.large);
  console.log("Nome:", data.results[0].name.first);
  console.log("Email:", data.results[0].email);
  console.log("Usuario:", data.results[0].login.username);
  console.log("Número de teléfono:", data.results[0].cell);
  console.log("Idade:", data.results[0].dob.age);
  console.log("Dirección:", data.results[0].location.street);
  console.log("Cidade:", data.results[0].location.city);
  console.log("País:", data.results[0].location.country);
};

export const pintoDatos = (data) => {
  const user = data.results[0];

  let etiquetaDiv = document.createElement("div");
  etiquetaDiv.className = "estilo-div";

  let etiquetaImg = document.createElement("img");
  etiquetaImg.src = user.picture.large;
  etiquetaImg.className = "estilo-img";

  let etiquetaDivImg = document.createElement("div");
  etiquetaDivImg.append(etiquetaImg);
  etiquetaDiv.append(etiquetaDivImg);

  let etiquetaDivInfo = document.createElement("div");
  etiquetaDivInfo.className = "estilo-div-span";

  let datos = [
    `Nome: ${user.name.first} ${user.name.last}`,
    `Email: ${user.email}`,
    `Usuario: ${user.login.username}`,
    `Idade: ${user.dob.age} anos`,
    `Teléfono: ${user.cell}`,
    `Cidade: ${user.location.city}`,
    `País: ${user.location.country}`,
  ];

  datos.forEach((texto) => {
    let span = document.createElement("span");
    span.textContent = texto;
    etiquetaDivInfo.append(span);
  });

  etiquetaDiv.append(etiquetaDivInfo);
  document.body.append(etiquetaDiv);
};

export const recorrendoDatos = (data) => {
  console.log("Posiciónome dentro do array:", data.results[0]);

  for (const propiedade in data.results[0]) {
    console.log(`Propiedade ${propiedade}:`, data.results[0][propiedade]);
  }
};
