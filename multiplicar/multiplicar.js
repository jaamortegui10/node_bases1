/*Tipos de require*/
/* Instalar primero express */
//const fs = require('express')
//const fs = require('./fs'): Cuando yo mismo lo defino
const fs = require('fs')

let listarTabla = (base, limite=10) => {
	console.log('Listar Tabla: ')
	for(let i = 1; i <= limite; i++)
		console.log(`${base} * ${i} = ${base * i}`)

}

let crearArchivo =  (base) => {
	return new Promise( (resolve, reject) => {

		let data = '';
		for(let i = 1; i <=10; i++)
			data  += `\n${base} * ${i} = ${base * i}`;

		fs.writeFile(`./data/tabla_ ${base}.txt`, data, (err)=>{
			if (err) reject(err);
			else
				resolve(`tabla_${base}.txt`);
		});

	});
};

/*Agregamos al module.exports */
/* Aunque, en caso de que tenga varios archivos como este, no sería practico hacerlo de ese modo */
module.exports = {
	crearArchivo, 
	listarTabla
}

/*Hay más modos: 
 	*module.exports.nombreFuncion = function(){...}
 	¿Se podrá así?:
 		*module.exports.nombreFuncion = nombreFuncion
*/


