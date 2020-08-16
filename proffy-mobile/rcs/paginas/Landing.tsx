import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Componente que adapta o efeito do clique em botões dependendo do SO do celular
import { RectButton } from 'react-native-gesture-handler';

// Imagens
import landingImg from '../assets/images/landing.png';
import iconEstudar from '../assets/images/icons/study.png';
import iconMinistrarAulas from '../assets/images/icons/give-classes.png';
import iconCoracao from '../assets/images/icons/heart.png';

// CSS
import estilos from './Landing.ts';

function Landing(){
	const { navigate } = useNavigation();

	function handleVisitarMinistrarAulas(){
		navigate('MinistrarAulas')
	}

	function handleVisitarEstudar(){
		navigate('Estudar')
	}

	return (
		<View style={estilos.container}>
			<Image source={landingImg} style={estilos.banner} />
			<Text style={estilos.titulo}>
				Seja bem vindo(a), {'\n'}
				<Text style={estilos.tituloNegrito}>
					O que deseja fazer
				</Text>
			</Text>
			<View style={estilos.containerBotoes}>
				<RectButton onPress={handleVisitarEstudar} style={[estilos.botao, estilos.botaoPrimary]}>
						<Image source={iconEstudar} />
						<Text style={estilos.textoBotao}>Estudar</Text>
				</RectButton>
				
				<RectButton onPress={handleVisitarMinistrarAulas} style={[estilos.botao, estilos.botaoSecondary]}>
						<Image source={iconMinistrarAulas} />
						<Text style={estilos.textoBotao}>Ministrar aulas</Text>
				</RectButton>
			</View>
			<Text style={estilos.conexoesTotais}>
				Total de 10 conexões realizadas! {' '}
				<Image source={iconCoracao} />
			</Text>
		</View>
	)
}

export default Landing;