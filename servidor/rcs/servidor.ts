/* Mini-framework com alguns codigos prontos para ajudar no back-end */
import express from 'express';
import rotas from './rotas';

/* Permite que o front-end acesse o back-end. Duas aplicações em endereços diferentes */
import cors from 'cors';

const app = express();

app.use(cors());

/* Convertendo para json*/
app.use(express.json())

/*
	Rota: http://localhost:3333/usuarios
	Recurso: usuarios
	app.get('/recurso', função executada quando a rota é acessada)
*/

/*
	Alguns metodos HTTP
	GET: Para buscar e listar informações.
	POST: Para criar informações novas.
	PUT: Para atualizar informações existentes.
	DELETE: Para apagar informações.
*/

/*
	Parametros da requisição:
	- body: Onde estão os dados para a criação ou atualização de um registro
		- Exemplo:
		app.post('/recurso', (request, response) => {
			console.log(request.body)
		});
	- route: Indica qual recurso atualizar ou deletar
		- Exemplo:
		Dois pontos depois de / para indicar parametro
		app.delete('/recurso/:id', (request, response) => {
			console.log(request.params)
		});
	- query: Para paginação, filtros, ordenação
		- Exemplo:
		app.get('/recurso', (request, response) => {
			console.log(request.query)
		});
*/

/*
	Parametros da função
	request: Usado para obter informações sobre a requisição (dados que vem do front-end).
	response: Resposta que o back-end retorna para o front-end.

	app.post('/usuarios', (request, response) => {
	const usuarios = [
		{
			nome: 'Ana',
			idade: 18,
			corFavorita: 'Vermelho'
		},
		{
			nome: 'Justin',
			idade: 25,
			corFavorita: 'Roxo'
		}
	]
	return response.json(usuarios);
});
*/

app.use(rotas);

/* Ouvindo requisições HTTP na porta 3333 */
app.listen(3333);