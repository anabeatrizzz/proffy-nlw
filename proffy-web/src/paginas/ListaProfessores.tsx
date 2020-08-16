import React, { useState, FormEvent } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import ItemProf, { Prof } from '../componentes/ItemProf';
import Select from '../componentes/Select';
import Input from '../componentes/Input';
import api from '../servicos/api';
import './ListaProfessores.css';

function ListaProfessores() {
	const [profs, setProfs] = useState([]);
	const [materia, setMateria] = useState('');
	const [diaDaSemana, setDiaDaSemana] = useState('');
	const [hora, setHora] = useState('');

	async function handlePesquisaProfs(e: FormEvent){
		e.preventDefault();
		const resposta = await api.get('aulas', {
			params: {
				materia,
				dia_semana: diaDaSemana,
				horario: hora
			}
		})
		setProfs(resposta.data);
	}

	return (
		<div className="container" id="pagina-lista-professores">
			<Cabecalho titulo="Estes são os professores disponíveis:">
				<form id="pesquisar-professor" onSubmit={handlePesquisaProfs}>
					<Select
						nome="materia" rotulo="Matéria"
						opcoes={[
							{ valor: 'Artes', rotulo: 'Artes' },
							{ valor: 'engenharia da computação', rotulo: 'engenharia da computação' },
							{ valor: 'Inglês', rotulo: 'Inglês' }
						]}
						value={materia}
						onChange={
							(e) => { setMateria(e.target.value) }
						}
					/>
					<Select
						nome="dia-da-semana" rotulo="Dia da semana"
						opcoes={[
							{ valor: '0', rotulo: 'Domingo' },
							{ valor: '1', rotulo: 'Segunda-feira' },
							{ valor: '2', rotulo: 'Terça-feira' },
							{ valor: '3', rotulo: 'Quarta-feira' },
							{ valor: '4', rotulo: 'Quinta-feira' },
							{ valor: '5', rotulo: 'Sexta-feira' },
							{ valor: '6', rotulo: 'Sábado' }
						]}
						value={diaDaSemana}
						onChange={
							(e) => { setDiaDaSemana(e.target.value) }
						}
					/>
					<Input
						type="time" nome="hora"
						rotulo="Hora" value={hora}
						onChange={
							(e) => { setHora(e.target.value) }
						}
					/>
					<button type="submit"><span aria-label="pesquisa" role="img">🔍</span></button>
				</form>
			</Cabecalho>
			<main>
				{profs.map((prof: Prof) => {
					return <ItemProf key={prof.cd_usuario} prof={prof} />;
				})}
			</main>
		</div>
	)
}

export default ListaProfessores;