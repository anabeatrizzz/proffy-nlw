<p align="center">
  <img width="50%" src="https://github.com/PedroBoni/Proffy/raw/master/logoGit.svg" alt="Icon-Imersao-Alura"/>
</p>

# Índice
* [O que aprendi? :thinking:](#o-que-aprendi-thinking)
* [Configurações padrões :wrench:](#configurações-padrões-wrench)

Este é meu segundo projeto com React e React Native, o primeiro com TypeScript e...
# [O que aprendi? :thinking:](#índice)
- **proffy-mobile**
	- No React Native não usamos tags `HTML` como no ReactJS. Como alternativa, usamos componentes já criados do pacote `react-native`.
	- O componente `View` pode ser comparado com a tag `div` do `HTML`.
	- Usamos `StyleSheet` do pacote `react-native` para a estilização. A grande maioria dos comandos `css` estão disponíveis.
	- Se a tela do dispositivo móvel necessitar de uma imagem maior, o React Native lidará com isso procurando a imagem ideal na pasta `images`.
	- `StatusBar` é a barra localizada no topo do dispositivo móvel.
	- Se escreve `<Componente />` quando o Componente não tem conteúdo, do contrário escreve-se `<Componente></Componente>`.
	- Conceito de estado: Se o usuário tiver a possibilidade de mudar algo, esse algo precisa estar em um estado.

- **proffy-web**
	- Cada página da aplicação é uma rota, ou seja, um `Route`.
	- Propriedades seriam como um `type="submit"` em uma tag `button`, só que passamos elas em componentes.
	- Os dois `&` são usados quando uma condição ternaria não precisa da parte do `else`.
	- `...rest` representa o resto dos atributos do `input`.
	- Deve-se indicar o `./` para que não se confunda com um pacote instalado com `npm`.

- **servidor**
	- Rota: `http://localhost:3333/usuarios`
	- Recurso: `usuarios`
	- `app.get('/recurso', função executada quando a rota é acessada) `
	- Alguns métodos `HTTP`
		- `GET`: Para buscar e listar informações.
		- `POST`: Para criar informações novas.
		- `PUT`: Para atualizar informações existentes.
		- `DELETE`: Para apagar informações.
	- Parâmetros da requisição:
		- `body`: Onde estão os dados para a criação ou atualização de um registro
			- Exemplo:
      ```javascript
        app.post('/recurso', (request, response) => {
          console.log(request.body)
        });
      ```
		- `route`: Indica qual recurso atualizar ou deletar
			- Exemplo: Dois pontos depois de `/` para indicar parâmetro
      ```javascript
        app.delete('/recurso/:id', (request, response) => {
          console.log(request.params)
        });
      ```
		- `query`: Para paginação, filtros, ordenação
			- Exemplo:
      ```javascript
        app.get('/recurso', (request, response) => {
          console.log(request.query)
        });
      ```
	- `Migrations` controlam a versão do banco de dados. Dentro delas descrevemos o que queremos fazer no banco (criar tabelas e colunas novas, deletar campo, alterar o tipo da coluna, etc).
	- Parâmetros da função `post()`
		- `request`: Usado para obter informações sobre a requisição (dados que vem do front-end).
		- `response`: Resposta que o back-end retorna para o front-end.

# [Configurações padrões :wrench:](#índice)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
