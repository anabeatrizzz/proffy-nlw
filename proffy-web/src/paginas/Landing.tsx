/* Permite usarmos JSX */
import React, { useState, useEffect } from 'react';

/* Componente usado no lugar da tag a para não ocorrer o carregamento da pagina */
import { Link } from 'react-router-dom';

/* logoImg, landingImg, iconEstudo e etc passam a ser variaveis JS */
import logoImg from '../assets/images/logo.svg';
import landingImg from '../assets/images/landing.svg';
import iconEstudo from '../assets/images/icons/study.svg';
import iconMinistrarAulas from '../assets/images/icons/give-classes.svg';
import iconCoracaoRoxo from '../assets/images/icons/purple-heart.svg';
import api from '../servicos/api';

/* Deve-se indicar o ./ para que não se confunda com um pacote instalado com npm */
import './Landing.css';

function Landing() {
	const [conexoesTotais, setConexoesTotais] = useState(0);

	useEffect(() => {
		api.get('contatos').then(resposta => {
			/*
			O mesmo que escrever
			const total = resposta.data.total; */
			const { total } = resposta.data;
			setConexoesTotais(total);
		})
	}, [])
	
	return (
		<div id="pagina-inicio">
			<div className="container" id="conteudo-pagina-inicio">
				<div className="conteiner-logo">
					<img src={logoImg} alt="Imagem da logo Proffy" />
					<h2>Sua plataforma de estudos on-line.</h2>
				</div>
				<img className="imagem-destaque" src={landingImg} alt="Plataforma de estudos" />
				<div className="container-botoes">
					<Link to="/estude" className="estude">
						<img src={iconEstudo} alt="Icon de estudo" />
						Estudar
					</Link>
					<Link to="/ministrar-aulas" className="ministrar-aulas">
						<img src={iconMinistrarAulas} alt="Icon de ministrar aulas" />
						Ministrar Aulas
					</Link>
				</div>
				<span className="conexoes-totais">
					Total de {conexoesTotais} conexões já realizadas
					<img src={iconCoracaoRoxo} alt="Coração roxo" />
				</span>	
			</div>
		</div>
	)
}

export default Landing;