import React from 'react';
import wppIcon from '../assets/images/icons/whatsapp.svg';
import api from '../servicos/api';
import './ItemProf.css';

export interface Prof {
  bio_usuario: string
  cd_usuario: number
  custo_aula: number
  foto_usuario: string
  materia_aula: string
  nome_usuario: string
  wpp_usuario: string
}

interface propsItemProf {
  prof: Prof;
}

/* Componente funcional com propriedades listadas em propsItemProf */
const ItemProf: React.FC<propsItemProf> = ({ prof }) => {
  const wpp = "https://wa.me/" + prof.wpp_usuario;
  function addNovoContato(){
    api.post('contatos', {
      id_usuario: prof.cd_usuario
    })
  }
  return (
    <article className="item-prof">
      <header>
        <img src={prof.foto_usuario} alt={prof.nome_usuario} />
        <div>
          <strong>{prof.nome_usuario}</strong>
          <span>{prof.materia_aula}</span>
        </div>
      </header>
      <p>{prof.bio_usuario}</p>
      <footer>
        <p>Preço/hora: <strong>R$ {prof.custo_aula},00</strong></p>
        <button type="button">
          <a onClick={addNovoContato} href={wpp} target="_blank" rel="noopener noreferrer">
            <img src={wppIcon} alt="WhatsApp" />
            Entrar em contato
          </a>
        </button>
      </footer>
    </article>
  )
}

export default ItemProf;