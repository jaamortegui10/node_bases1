/*Usando yargs:*/
const base_y_limite_config = {
	base:{
		/*Que sea un valor obligatorio para introducir en el cmd
		cuando llamo al comando listar*/
		demand: true,
		//El alias: Para que pueda llamarlo así con una sola rallita: node app -b=value
		alias:'b'
	},
	limite:{
		alias: 'l',
		//Valor por defecto, en caso de que no lo envíen.
		default: 10
	}
}

const argv = require('yargs')
	.command('listar','Imprime en consola la tabla de multiplicar',{
		/* base:{
			//Que sea un valor obligatorio para introducir en el cmd
			//cuando llamo al comando listar
			demand: true,
			//El alias: Para que pueda llamarlo así con una sola rallita: node app -b=value
			alias:'b'
		},
		limite:{
			alias: 'l',
			//Valor por defecto, en caso de que no lo envíen.
			default: 10
		} */
		//Lo pongo así en vez de poner el objeto entero arriba
		base_y_limite_config
	})
	.command('crear', 'Genera un archivo con la tabla', 
		//Lo mismo que arriba
		base_y_limite_config
	)
	.argv;

module.exports = {
	argv
}