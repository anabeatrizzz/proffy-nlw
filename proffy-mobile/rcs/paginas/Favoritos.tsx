import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Cabecalho from '../componentes/Cabecalho.tsx';
import ProfItem, { Prof } from '../componentes/ProfItem.tsx';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// CSS
import estilos from './Favoritos';

const estiloScrollView = {
	paddingHorizontal: 16,
	paddingBottom: 16
}

function Favoritos(){
	const [favoritos, setFavoritos] = useState([]);

	function carregarFavoritos(){
		AsyncStorage.getItem('favoritos').then(resposta => {
			if(resposta){
				// Professores favoritados
				const profsFavoritos = JSON.parse(resposta);
				setFavoritos(profsFavoritos)
			}
		})
	}
	useFocusEffect(() => {
		carregarFavoritos()
	})

	return (
		<View style={estilos.container}>
			<Cabecalho titulo="Meus Proffys favoritos" />
			<ScrollView style={estilos.listaProfs} contentContainerStyle={estiloScrollView}>
				{favoritos.map((prof: Prof) => {
					return (
						<ProfItem
							key={prof.cd_usuario}
							prof={prof}
							favoritado
						/>
					)
				})}
			</ScrollView>
		</View>
	)
}

export default Favoritos;