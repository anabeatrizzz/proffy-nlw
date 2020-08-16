import React from 'react';
import './assets/estilos/globais.css';
import Rotas from './rotas';

/*
  ANOTAÇÕES:
  - .gitignore: Configurações do GitHub que indicam arquivos e pastas que não queremos no backup.
  - package.json: Contém informações do projeto como nome, versão e etc.
  - tsconfig.json: Configurações do TypeScript.
  - package-lock.json: Lista a versão das dependencias.
  - node_modules: Os códigos das dependencias instaladas.
  - {props.children} retorna o conteudo escrito dentro do componente.
  - Depois que criadas, as variaveis não são modificaveis
  - Conceito de estado: 
*/

function App() {
  return (
    <Rotas />
  );
}

export default App;
