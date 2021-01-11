import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40
  },
  
  banner: {
    width: '100%',
    resizeMode: 'contain'
  },
  
  titulo: {
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
    fontFamily: 'Poppins_400Regular'
  },
  
  tituloNegrito: {
    fontFamily: 'Poppins_600SemiBold'
  },
  
  containerBotoes: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  
  botao: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },
  
  botaoPrimary: {
    backgroundColor: '#9871f5'
  },
  
  botaoSecondary: {
    backgroundColor: '#04d361'
  },

  textoBotao: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20
  },

  conexoesTotais: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 250,
    marginTop: 40
  }
})

export default estilos;