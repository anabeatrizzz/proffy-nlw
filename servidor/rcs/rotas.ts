import express from 'express';
import ControladorAula from './controladores/ControladorAula';
import ControladorContato from './controladores/ControladorContato';

/* Router() é o modulo de roteamento da lib express */
const rotas = express.Router();

const controladorAula = new ControladorAula();
const controladorContato = new ControladorContato();

/* Rota para criar aula, usuario e horario da aula */
rotas.post('/aulas', controladorAula.Criar);

/* Rota para listar aulas por materia, dia da semana e horario */
rotas.get('/aulas', controladorAula.Index);

/* Rota para criar dado sobre o aluno entrando em contato com o prof */
rotas.post('/contatos', controladorContato.Criar);

/* Rota para listar o numero de vezes que entraram em contato com o prof */
rotas.get('/contatos', controladorContato.Index);

export default rotas;