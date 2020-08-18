import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f7',
	},

	listaProfs: {
		marginTop: -40
	},

	formPesquisa: {
		marginBottom: 24
	},

	rotulo: {
		color: '#d4c2ff',
		fontFamily: 'Poppins_400Regular'
	},

	input: {
		height: 54,
		backgroundColor: '#FFF',
		borderRadius: 8,
		justifyContent: 'center',
		paddingHorizontal: 16,
		marginTop: 4,
		marginBottom: 16,
	},

	grupoInput: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	blocoInput: {
		width: '48%'
	},

	botaoEnviar: {
		backgroundColor: '#04d361',
		flexDirection: 'row',
		height: 56,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center'
	},

	textoBotaoEnviar: {
		color: '#FFF',
		fontFamily: 'Archivo_700Bold',
		fontSize: 16
	}
})

export default estilos;