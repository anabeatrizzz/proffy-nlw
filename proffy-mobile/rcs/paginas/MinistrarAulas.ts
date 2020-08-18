import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8257E5',
		justifyContent: 'center',
		padding: 40
	},

	conteudo: {
		flex: 1,
		justifyContent: 'center',

	},

	titulo: {
		fontFamily: 'Archivo_700Bold',
		color: '#FFF',
		fontSize: 32,
		lineHeight: 37,
		maxWidth: 200
	},

	descricao: {
		marginTop: 24,
		color: '#d4c2ff',
		fontSize: 16,
		lineHeight: 26,
		fontFamily: 'Poppins_400Regular',
		maxWidth: 240
	},

	botaoOk: {
		marginVertical: 40,
		backgroundColor: '#04d361',
		height: 58,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8
	},

	textoBotaoOk: {
		color: '#FFF',
		fontSize: 16,
		fontFamily: 'Archivo_700Bold'
	}
})

export default estilos;