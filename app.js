const argv = require('./config/yargs').argv;

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')

const argv2 = process.argv;

console.log(argv)
console.log(argv2)



console.log('Limite: ', argv.limite)

/* comandos individuales: se encuentran en argv,
en un arreglo llamado "_" */

let comando = argv._[0]

switch(comando){
	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;
	case 'crear':
		console.log('Comando crear.');
		crearArchivo(argv.base)
			.then( (archivo) =>{
				console.log(`Se ha creado el archivo: ${archivo}`)
			})
			.catch( (err)=>{
				console.log('Ha ocurrido un error creando el archivo: ', err)
			});
		break;
	default: 
		console.log('Comando no reconocido');

}