/* InputHTMLAttributes contem todos os atributos que o input pode receber */
import React, {InputHTMLAttributes} from 'react';
import './Input.css';

interface propsInput extends InputHTMLAttributes<HTMLInputElement> {
	rotulo: string;
	nome: string;
}

/*
	- ...rest representa o resto dos atributos do input
	Componente funcional com propriedades listadas em propsInput
*/
const Input: React.FC<propsInput> = ({rotulo, nome, ...rest}) => {
	return (
		<div className="bloco-para-input">
			<label htmlFor={nome}>{rotulo}</label>
			<input type="text" id={nome} {...rest} />
		</div>
	)
}

export default Input;