const inputPrincipal = document.getElementById("inputPrincipal");
const botonAgregar = document.getElementById("botonAgregar");
const container = document.getElementById("container");
const ul = document.querySelector("ul");
const botonEditar = document.querySelector(".botonEditar");

const eliminar = document.getElementById("eliminar");

botonAgregar.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  let input = crearInput(li, inputPrincipal.value);
  inputPrincipal.value = "";
  ul.appendChild(li);
  crearBtnEditar(li, input);
  crearBtnEliminar(li, eliminar);
});

function crearInput(padre, contenido) {
  input = document.createElement("input");
  input.classList.add("items");
  input.value = contenido;
  padre.appendChild(input);
  input.disabled = true;
  return input;
}

function crearBtnEditar(padre, input) {
  const botonEditar = document.createElement("button");
  botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
  botonEditar.classList.add("boton");
  padre.appendChild(botonEditar);
  botonEditar.className = "btnEditar";

  botonEditar.addEventListener("click", function () {
    console.log(input);
    if (input.disabled == true) {
      console.log(input.disabled);
      botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
      input.disabled = false;
    } else {
      botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
      input.disabled = true;
    }
  });

  return botonEditar;
}

function crearBtnEliminar(padre) {
  const botonEliminar = document.createElement("button");
  botonEliminar.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
  botonEliminar.classList.add("boton");
  padre.appendChild(botonEliminar);
  botonEliminar.className = "btnEliminar";

  botonEliminar.addEventListener("click", function (e) {
    padre.remove();
  });
  return botonEliminar;
}
