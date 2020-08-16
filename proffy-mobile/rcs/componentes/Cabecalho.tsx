import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// Imagens
import iconVoltar from '../assets/images/icons/back.png';
import logoImg from '../assets/images/logo.png';

// CSS
import estilos from './Cabecalho';

interface propsCabecalho {
	titulo: string;
}

const Cabecalho: React.FC<propsCabecalho> = ({ titulo }) => {
	const { navigate } =	useNavigation();

	function handleVoltar(){
		navigate('Landing')
	}

	return (
		<View style={estilos.container}>
			<View style={estilos.barraTopo}>
				<BorderlessButton onPress={handleVoltar}>
					<Image source={iconVoltar} resizeMode="contain" />
				</BorderlessButton>
				<Image source={logoImg} resizeMode="contain" />
			</View>
			<Text style={estilos.titulo}>{titulo}</Text>
		</View>
	)
}

export default Cabecalho;