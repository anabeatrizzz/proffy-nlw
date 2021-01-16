import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from "./paginas/Landing";
import ListaProfessores from "./paginas/ListaProfessores";
import FormularioProfessores from "./paginas/FormularioProfessores";

/*
  - Cada página da aplicação é uma rota, ou seja, um Route
  - Propriedades seriam como um type="submit" em uma tag button, só que passamos elas em componenetes
*/
function Rotas() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/estude" component={ListaProfessores} />
      <Route path="/ministrar-aulas" component={FormularioProfessores} />
    </BrowserRouter>
  )
}

export default Rotas;