/* SelectHTMLAttributes contem todos os atributos que o select pode receber */
import React, {SelectHTMLAttributes} from 'react';
import './Select.css';

interface propsSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  rotulo: string;
  nome: string;
  /* Propriedade opcoes do tipo Array do tipo objeto */
  opcoes: Array<{
    valor: string;
    rotulo: string;
  }>;
}

/*
  - ...rest representa o resto dos atributos do Select
  Componente funcional com propriedades listadas em propsSelect
*/
const Select: React.FC<propsSelect> = ({rotulo, nome, opcoes, ...rest}) => {
  return (
    <div className="bloco-para-select">
      <label htmlFor={nome}>{rotulo}</label>
      <select value="" id={nome} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {opcoes.map(opcao => {
          return <option key={opcao.valor} value={opcao.valor}>{opcao.rotulo}</option>
        })}
      </select>
    </div>
  )
}

export default Select;