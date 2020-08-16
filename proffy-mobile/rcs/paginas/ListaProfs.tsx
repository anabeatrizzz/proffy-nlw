import React from 'react';
import { View } from 'react-native';
import Cabecalho from '../componentes/Cabecalho.tsx';

// CSS
import estilos from './ListaProfs';

function ListaProfs(){
	return (
		<View style={estilos.container}>
			<Cabecalho titulo="Proffys disponíveis" />
		</View>
	)
}

export default ListaProfs;