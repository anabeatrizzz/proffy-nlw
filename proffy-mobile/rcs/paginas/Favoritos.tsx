import React from 'react';
import { View } from 'react-native';
import Cabecalho from '../componentes/Cabecalho.tsx';

// CSS
import estilos from './Favoritos';

function Favoritos(){
	return (
		<View style={estilos.container}>
			<Cabecalho titulo="Meus Proffys favoritos" />
		</View>
	)
}

export default Favoritos;