
let presupuesto = 0;
let gastos = [];
let idGasto = 0;


function listarGastos(){
    return gastos;
}

//Función que recibe un objeto gasto por parámetro y le asigna un id.
function anyadirGasto(gasto){
    
    //Agregar una propiedad 'id' al objeto gasto
    gasto.id = idGasto;
    idGasto++;

    //Se añade el objeto gasto al final del array de gastos.
    gastos.push(gasto);

}

function borrarGasto(){

}

function calcularTotalGastos(){

}

function calcularBalance(){

}


//Función que toma un número por parámetro y lo asigna a la variable global presupuesto.
function actualizarPresupuesto(numero) {
    if (numero >=0){
        presupuesto = numero;
        return presupuesto;
    }
           
    else{
        console.log("Número no valido")
        // Devuelve -1 para indicar un valor no válido
        return -1
        }
    }

//Función sin parámetros que devuelve un texto con el presupuesto
function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

// Función constructora para crear objetos de gasto con descripción, valor, fecha
//  y un número indeterminado de argumentos que se almacenan en el array etiquetas.
function CrearGasto(descripcion, valor, fecha, ...etiquetas) {

    // Comprobar si el valor introducido es un número no negativo
    if (valor >= 0) {
        this.valor = valor;
    } else {
        this.valor = 0;
    }
    
    // Asignar la descripción
    this.descripcion = descripcion;

    // Validar la fecha, si es correcta Date.parse devuelve un número valido que se evalua como true
    if (Date.parse(fecha)) {
        this.fecha = Date.parse(fecha);
    } else {
        this.fecha = Date.now(); // Fecha actual en formato timestamp
    }
        
    //Asignar array etiquetas, si no recibe el parámetro, lo inicia vacío.
    if(etiquetas === undefined)
        this.etiquetas = [];
    else
        this.etiquetas = etiquetas
    
    // Método para mostrar el gasto
    this.mostrarGasto = function () {
        return(`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`);
    }
    
    // Método para actualizar la descripción
    this.actualizarDescripcion = function (nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }
    
    // Método para actualizar el valor
    this.actualizarValor = function (nuevoValor) {
        // Comprobar si el nuevo valor es un número no negativo
        if (nuevoValor >= 0) {
            this.valor = nuevoValor;
        }
    }


}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos, 
    calcularBalance

}