const inputPrincipal = document.getElementById("inputPrincipal");
// const input = document.querySelector("input");
const botonAgregar = document.getElementById("botonAgregar");
const container = document.getElementById("container");
const ul = document.querySelector("ul");
const botonEditar = document.querySelector(".botonEditar");

const eliminar = document.getElementById("eliminar");

botonAgregar.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  crearInput(li, inputPrincipal.value);
  inputPrincipal.value = "";
  ul.appendChild(li);
  crearBtnEditar(li);  
  crearBtnEliminar(li, eliminar);
});

function crearInput(padre, contenido) {
  const input = document.createElement("input");
  input.classList.add("items");
  input.value = contenido;
  padre.appendChild(input);
}

function crearBtnEditar(padre) {
  const botonEditar = document.createElement("button");
  botonEditar.innerHTML = "<i class='fa-solid fa-newspaper'></i>";
  botonEditar.classList.add("boton");
  padre.appendChild(botonEditar);
}

function crearBtnEliminar(padre) {
  const botonEliminar = document.createElement("button");
  botonEliminar.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
  botonEliminar.classList.add("boton");
  padre.appendChild(botonEliminar);
  botonEliminar.className = "btnEliminar";

  botonEliminar.addEventListener("click", function (e) {
    // const item = e.target.parentElement;
    // console.log(item);
    // li.removeChild(item);
    padre.remove();
  });
}
