//Aca estoy importando las caracteristicas de las librerias mathjs y colors
const { simplify } = require("mathjs");
var colors = require('colors');

//Probando un log
console.log('Esta es mi tarea, con la cual utilice mathjs');

//Haciendo uso de mathjs
console.log('Expresiones simplificadas');
console.log(simplify('5+4/2').toString()); //Esto es igual a 7

//Haciendo uso de colors
console.log('Esta tare ha sido hecha por ' + 'Helton'.blue + ' Joan'.red + ' Lopez'.green + ' Martinez'.america);
// console.log('Este es un texto subrayado amarillo'.underline.bgYellow);

