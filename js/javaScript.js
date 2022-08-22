function cliente() {
    let nombre = document.querySelector("#name").value;
    let mesa = document.querySelector("#mesa").value;
    botonListar11.innerHTML = ("Bienvenido " + nombre + " Mesa N° " + mesa);
}

const botonListar11 = document.querySelector(".button11")
botonListar11.addEventListener("click", cliente)



function creoID() {
    return parseInt(Math.random() * 100000)
}

const bebida = ["COCA COLA", "AGUA", "SPRITE", "STELLA", "QUILMES", "VINO TORO", "ALMA MORA", "AGUA SABORIZADA"]
const bebidas = []

function listarBebida() {
    for (let bebida of bebidas) {
        console.table(bebida)
    }
}
class Bebida {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function agregarBebidas() {
    let id = creoID();
    let descripcion = prompt("Ingresa el nombre de la bebida:").toUpperCase();
    let importe = parseInt(prompt("Ingresa el importe:"));
    bebidas.push(new Bebida(id, descripcion, importe));
    console.table(bebidas);
}

function generadorAutomaticoBebida() {
    bebidas.push(new Bebida(01, "COCA COLA", 250))
    bebidas.push(new Bebida(02, "AGUA", 200))
    bebidas.push(new Bebida(03, "SPRITE", 250))
    bebidas.push(new Bebida(04, "STELLA", 500))
    bebidas.push(new Bebida(05, "QUILMES", 400))
    bebidas.push(new Bebida(06, "VINO TORO", 350))
    bebidas.push(new Bebida(07, "ALMA MORA", 600))
    bebidas.push(new Bebida(08, "AGUA SABORIZADA", 200))
    console.table(bebidas)
}


const comida = ["MILANESA", "HAMBURGUESA SIMPLE", "HAMBURGUESA COMPLETA", "SANGUCHE LOMITO", "RAVIOLES RICOTA", "ÑOQUIS", "SPAGUETTI", "PASTA CASERA CALABAZA"];
const comidas = []

function listarComida() {
    for (let comida of comidas) {
        console.table(comida)
    }
}
class Comida {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function generadorAutomaticoComida() {
    comidas.push(new Comida(09, "MILANESA", 1000))
    comidas.push(new Comida(10, "HAMBURGUESA SIMPLE", 800))
    comidas.push(new Comida(11, "HAMBURGUESA COMPLETA", 1000))
    comidas.push(new Comida(12, "SANGUCHE LOMITO", 1200))
    comidas.push(new Comida(13, "RAVIOLES RICOTA", 800))
    comidas.push(new Comida(14, "ÑOQUIS", 700))
    comidas.push(new Comida(15, "SPAGUETTI", 750))
    comidas.push(new Comida(16, "PASTA CASERA CALABAZA", 850))
    console.table(comidas)
}

function agregarComidas() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre de la comida:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    comidas.push(new Comida(id, descripcion, importe))
    console.table(comidas)
}


const postre = ["HELADO", "VOLCAN CHOCOLATE", "FONDEU QUESOS", "FLAN", "FLAN MIXTO", "BUDIN PAN", "ALMENDRADO", "SIN POSTRE"]
const postres = []

function listarPostre() {
    for (let postre of postres) {
        console.table(postre)
    }
}

class Postre {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function agregarPostres() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del postre:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    postres.push(new Postre(id, descripcion, importe))
    console.table(postres)
}

function generadorAutomaticoPostre() {
    postres.push(new Postre(17, "HELADO", 400))
    postres.push(new Postre(18, "VOLCAN CHOCOLATE", 500))
    postres.push(new Postre(19, "FONDEU QUESOS", 600))
    postres.push(new Postre(20, "FLAN", 450))
    postres.push(new Postre(21, "FLAN MIXTO", 550))
    postres.push(new Postre(22, "BUDIN PAN", 400))
    postres.push(new Postre(23, "ALMENDRADO", 450))
    postres.push(new Postre(24, "SIN POSTRE", 0))
    console.table(postres)
}

const salsa = ["BOLOGNESA", "PORTUGUESA", "FILETO", "BLANCA", "MIXTA", "CHAMPIGNONES", "MOLUSCOS", "SIN SALSA"]
const salsas = []

function listarSalsa() {
    for (let salsa of salsas) {
        console.table(salsa)
    }
}
class Salsa {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function generadorAutomaticoSalsa() {
    salsas.push(new Salsa(25, "BOLOGNESA", 500))
    salsas.push(new Salsa(26, "PORTUGUESA", 400))
    salsas.push(new Salsa(27, "FILETO", 300))
    salsas.push(new Salsa(28, "BLANCA", 300))
    salsas.push(new Salsa(29, "MIXTA", 400))
    salsas.push(new Salsa(30, "CHAMPIGNONES", 550))
    salsas.push(new Salsa(31, "MOLUSCOS", 600))
    salsas.push(new Salsa(32, "SIN SALSA", 0))
    console.table(salsas)
}

function agregarSalsas() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre de la salsa:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    salsas.push(new Salsa(id, descripcion, importe))
    console.table(salsas)
}


generadorAutomaticoBebida()
generadorAutomaticoComida()
generadorAutomaticoPostre()
generadorAutomaticoSalsa()

const resultado = [""]

function filtrarBebida() {
    let prod = prompt("ingresa producto que desea filtrar:").toUpperCase()
    const resultado = bebidas.filter(bebida => bebida.nombre.includes(prod))
    console.table(resultado)
}

function filtrarComida() {
    let prod = prompt("ingresa producto que desea filtrar:").toUpperCase()
    const resultado = comidas.filter(comida => comida.nombre.includes(prod))
    console.table(resultado)
}

function filtrarPostre() {
    let prod = prompt("ingresa producto que desea filtrar:").toUpperCase()
    const resultado = postres.filter(postre => postre.nombre.includes(prod))
    console.table(resultado)
}

function filtrarSalsa() {
    let prod = prompt("ingresa producto que desea filtrar: ").toUpperCase()
    const resultado = salsas.filter(salsa => salsa.nombre.includes(prod))
    console.table(resultado)
}

function listarBebidas() {
    for (let i = 0; i < bebidas.length; i++) {
        console.log(bebidas[i])
        botonListar1.innerHTML = bebida
    }
}

function listarComidas() {
    for (let i = 0; i < comidas.length; i++) {
        console.log(comidas[i])
        botonListar2.innerHTML = comida
    }
}

function listarPostres() {
    for (let i = 0; i < postres.length; i++) {
        console.log(postres[i])
        botonListar3.innerHTML = postre
    }
}

function listarSalsas() {
    for (let i = 0; i < salsas.length; i++) {
        console.log(salsas[i])
        botonListar4.innerHTML = salsa
    }
}

const botonListar1 = document.querySelector(".button1")
const botonListar2 = document.querySelector(".button2")
const botonListar3 = document.querySelector(".button3")
const botonListar4 = document.querySelector(".button4")

botonListar1.addEventListener("click", listarBebidas)
botonListar2.addEventListener("click", listarComidas)
botonListar3.addEventListener("click", listarPostres)
botonListar4.addEventListener("click", listarSalsas)

const botonBuscar = document.querySelector("button.button-outline-success")
botonBuscar.addEventListener("click", buscar)
const button122 = document.querySelector(".button122")

function buscar() {
    let prod = document.querySelector("#buscar").value.toUpperCase()
    const resultado = [
        bebidas.find(bebida => bebida.nombre.includes(prod)) ||
        comidas.find(comida => comida.nombre.includes(prod)) ||
        postres.find(postre => postre.nombre.includes(prod)) ||
        salsas.find(salsa => salsa.nombre.includes(prod))
    ]
    resultado.forEach((resultado) => {
        button122.innerHTML = `<div>
                                    <tr>
                                        <td>${resultado.nombre}</td>
                                        <td>$${resultado.importe}</td>
                                    </tr>
                                </div>`
    })

    console.table(resultado)
}


const containerDiv = document.querySelector(".containerDiv");
const containerDiv2 = document.querySelector(".containerDiv2");
const containerDiv3 = document.querySelector(".containerDiv3");
const containerDiv4 = document.querySelector(".containerDiv4");

crearCards();

function crearCards() {
    bebidas.forEach((prod) => {
        containerDiv.innerHTML += `
            <div class="Card">
            <p>${prod.id}</p>
            <p>${prod.nombre}</p>
            <p>$${prod.importe}</p>
            <button class="btnCarrito" id="btn-agregar${prod.id}">Agregar</button>
            </div>`;
    });

    comidas.forEach((prod) => {
        containerDiv2.innerHTML += `
            <div class="Card">
            <p>${prod.id}</p>
            <p>${prod.nombre}</p>
            <p>$${prod.importe}</p>
            <button class="btnCarrito" id="btn-agregar${prod.id}">Agregar</button>
            </div>`;
    });

    postres.forEach((prod) => {
        containerDiv3.innerHTML += `
            <div class="Card">
            <p>${prod.id}</p>
            <p>${prod.nombre}</p>
            <p>$${prod.importe}</p>
            <button class="btnCarrito" id="btn-agregar${prod.id}">Agregar</button>
            </div>`;
    });

    salsas.forEach((prod) => {
        containerDiv4.innerHTML += `
            <div class="Card">
            <p>${prod.id}</p>
            <p>${prod.nombre}</p>
            <p>$${prod.importe}</p>
            <button class="btnCarrito" id="btn-agregar${prod.id}">Agregar</button>
            </div>`;
    });
    agregarFuncionalidad()
}


const carritoDiv = document.querySelector(".carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function agregarFuncionalidad() {
    bebidas.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {
                console.log(prod);
                agregarAlCarrito(prod);
            });
    });
    comidas.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {
                console.log(prod);
                agregarAlCarrito(prod);
            });
    });
    postres.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {
                console.log(prod);
                agregarAlCarrito(prod);
            });
    });
    salsas.forEach((prod) => {
        document.querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {
                console.log(prod);
                agregarAlCarrito(prod);
            });
    });
}

function agregarAlCarrito(prod) {
    let existe = carrito.some((productoSome) => productoSome.id === prod.id);
    if (existe === false) {
        prod.cantidad = 1;
        carrito.push(prod);
    } else {
        let prodFind = carrito.find((productoFind) => productoFind.id === prod.id);
        prodFind.cantidad++;
    }
    console.log(carrito);
    renderizarCarrito();
}

function renderizarCarrito() {
    carritoDiv.innerHTML = "";
    carrito.forEach((prod) => {
        carritoDiv.innerHTML += `<div>
            <h4>${prod.nombre}</h4>
            <p>CANTIDAD: ${prod.cantidad}</p>
            <button class="btnCarrito" id="btn-borrar${prod.id}">Borrar</button>
            </div>`;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    borrarProducto();
}

function borrarProducto() {
    carrito.forEach((prod) => {
        document
            .querySelector(`#btn-borrar${prod.id}`)
            .addEventListener("click", () => {
                carrito = carrito.filter(
                    (productoFilter) => productoFilter.id !== prod.id
                );
                renderizarCarrito();
            });
    });
}

renderizarCarrito();