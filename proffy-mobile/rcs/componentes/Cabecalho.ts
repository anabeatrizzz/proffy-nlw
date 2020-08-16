import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
	container: {
		padding: 40,
		backgroundColor: '#8257e5'
	},

	barraTopo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},

	titulo: {
		fontFamily: 'Archivo_700Bold',
		color: '#FFF',
		fontSize: 24,
		lineHeight: 32,
		maxWidth: 160,
		marginVertical: 40
	}
})

export default estilos;