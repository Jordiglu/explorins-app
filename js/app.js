'use strict'
window.onload = function myFunction() {
    let userName = prompt('Please enter your name', '');
    if (userName) {
        document.getElementById('inputUserName').innerHTML = `¡Hola ${userName}!`;
    }
    // document.getElementById('orderInfo');

}
var products = [
    {
        Producto: 'Street art',
        Vendor: 'Bcn',
        Precio: '200'
    },
    {
        Producto: 'Bansky',
        Vendor: 'London',
        Precio: '150'
    },
    {
        Producto: 'Mona lisa',
        Vendor: 'Amsterdam',
        Precio: '25'
    },
];


