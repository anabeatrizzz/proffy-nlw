import React from 'react';
import logoImg from '../assets/images/logo.svg';
import pIcon from '../assets/images/icons/back.svg';
import { Link } from 'react-router-dom';
import './Cabecalho.css';

/* Propriedades do componente Cabecalho */
interface propsCabecalho {
  /* Obrigatória */
  titulo: string,
  /* Opcional */
  descricao?: string
}

/*
  - Os dois & são usados quando uma condição ternaria não precisa da parte do else
  Componente funcional com propriedades listadas em propsCabecalho
*/
const Cabecalho: React.FC<propsCabecalho> = (props) => {
  return (
    <header className="cabecalho-da-pagina">
      <div className="conteiner-barra-topo">
        <Link to="/">
          <img src={pIcon} alt="Voltar a pagina inicial" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>
      <div className="conteudo-cabecalho">
        <strong>{props.titulo}</strong>
        {props.descricao && <p>{props.descricao}</p>}

        {props.children}
      </div>
    </header>
  )
}

export default Cabecalho;