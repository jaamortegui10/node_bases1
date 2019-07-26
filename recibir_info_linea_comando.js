/*Tengo que tener cuidado con el orden en que pongo parámetros en cmd,
pues acá no se usan según nombre sino según orden */

const {crearArchivo} = require('./multiplicar/multiplicar')

let argv = process.argv;
console.log('Arg v: ',argv)
let parametro = argv[2]
let base = parametro.split('=')[1]

console.log('Base: ',base)

crearArchivo(base).then((archivo) =>{
	console.log(`Se ha creado un archivo: ${archivo}`);
})
.catch((err)=>{
	console.log('Ha ocurrido un error: ', err)
});