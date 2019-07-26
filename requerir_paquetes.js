/*Necesitamos importar: 
	el objeto module es un objeto global.
	*exports: los archivos que se estan exportando globalmente 
*/
//obviamos el .js al final
console.log('Modulo********************', module)
const multiplicar = require('./multiplicar/multiplicar')
//mejor destructuramos el objeto: 
const {crearArchivo} = require('./multiplicar/multiplicar')
console.log(module);
let base = 10;
crearArchivo(base)
.then(archivo => console.log(`Archivo creado: ${archivo}`))
.catch((err) => {
	console.log(err);
})

/*
let createArchivo = module.exports.children.Module.exports
console.log('Crear Archivo:\n',createArchivo)
*/
setTimeout(function(){
	console.log('Ahora, prueba +++++++++++')
	console.log(module.children[0].exports)
},1000);

/*Existe, también, un objeto llamado process */
setTimeout(function(){
	console.log('Process argv:  ', process.argv)
} ,1200)
