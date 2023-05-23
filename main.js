//saludo inicial, variable para ingresar nombre de usuario mediante cuadro de navegador
let usuario = prompt('Ingrese su nombre'); 

//Ciclo para evaluar si la entrada de nombre es correcta
    while((usuario == '') || (usuario == ' ')){
        alert('Usuario no registrado');
        usuario = prompt('Ingrese su nombre')
    }

//dialogo que usa el nombre ingresado
alert('Bienvenido '+usuario); 

//var calcular compra, se deja en 0 para sumar a este el valor de los prod.
let total = 0; 
//var para cantidad de items
let definirCantidad = 0;

let iva = total;

let totalConIva = total;

// var para dialogo que habilita a ingresar o no a los prod.
let menuProducto = prompt('Ingrese a nuestro menú de productos (presione cualquier tecla o "0" para salir/finalizar)');

//ciclo para elegir en menu
while(menuProducto != '0'){
    let producto = prompt('1 - Sillon de un cuerpo $40000\n2 - Sillon de dos cuerpos $79000\n3 - Sillon de tres cuerpos $99000\n4 - Silla de escritorio $18000');
    
    //condicional para indicar el prod. elegido y sumar el valor al subtotal y total
    switch(producto){ 
        case '1': //definicion de las partes integrantes del condicional
            alert('Has sumado 1 sillon de un cuerpo al carrito por $40000');
            contarItems(1); //valor numerico que se suma en la funcion de de cantidad de items
            sumar(40000); //valor numerico que se suma en la funcion de total, y para calcular el iva
            break;
        case '2':
            alert('Has sumado 1 sillon de dos cuerpos al carrito por $79000');
            contarItems(1);
            sumar(79000);
            break;
        case '3':
            alert('Has sumado 1 sillon de tres cuerpos al carrito por $99000');
            contarItems(1);
            sumar(99000);
            break;
        case '4':
            alert('Has sumado 1 silla de escritorio al carrito por $18000');
            contarItems(1);
            sumar(18000);
            break;
        default:
            alert('Codigo Invalido');
            break;
    }
    
    //volver a ejecutar var de pregunta
    menuProducto = prompt('Ingrese a nuestro menú de productos (presione cualquier tecla o "0" para salir/finalizar)');
    
} 

//Booleano para que se ejecute el alert solo si hay alguna compra
if(total != 0){
    //mostrar por dialogo el total de la compra sin imnpuestos
    alert(usuario+', tu carrito tiene '+definirCantidad+' producto/s, y su monto total es de $'+total); 

    // Cuadro para mostrar impuesto iva y el monto final mas el impuesto.
    alert('El monto del impuesto iva es de $'+iva+', y el monto final a pagar con impuestos es de $'+totalConIva);
}else{ 
    //Si no hay interaccion de compraAugust, se muestra dialogo de despedida
    alert('Gracias por su visita');

}

// funcion para sumar cantidad de items/producto
function contarItems(items){ 
    definirCantidad = definirCantidad + items;
    console.log('En tu carrito hay '+definirCantidad+' producto/s');
}

//funcion para calcular sub y total
function sumar(precio){ 
    total = total + precio;
    console.log('En el carrito $'+total);
    iva = total * 0.21;
    console.log('Impuesto iva = $'+iva);
    totalConIva = total+iva;
}





    
