/* InputHTMLAttributes contem todos os atributos que o input pode receber */
import React, {TextareaHTMLAttributes} from 'react';
import './Textarea.css';

interface propsTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	rotulo: string;
	nome: string;
}

/*
	- ...rest representa o resto dos atributos do Textarea
	Componente funcional com propriedades listadas em propsTextarea
*/
const Textarea: React.FC<propsTextarea> = ({rotulo, nome, ...rest}) => {
	return (
		<div className="bloco-para-textarea">
			<label htmlFor={nome}>{rotulo}</label>
			<textarea id={nome} {...rest} />
		</div>
	)
}

export default Textarea;