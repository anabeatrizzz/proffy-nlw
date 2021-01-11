import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Imagens
import fundoMinistrarAulas from '../assets/images/give-classes-background.png';

// Componente que adapta o efeito do clique em botões dependendo do SO do celular
import { RectButton } from 'react-native-gesture-handler';

// CSS
import estilos from './MinistrarAulas.ts';

function MinistrarAulas(){
  const { goBack } = useNavigation()

  function handleVoltar(){
    goBack();
  }

  return (
    <View style={estilos.container}>
      <ImageBackground resizeMode='contain' style={estilos.conteudo} source={fundoMinistrarAulas}>
        <Text style={estilos.titulo}>Deseja ser um Proffy?</Text>
        <Text style={estilos.descricao}>Para começar, você precisa se cadastrar em nossa plataforma web.</Text>
      </ImageBackground>
      <RectButton onPress={handleVoltar} style={estilos.botaoOk}>
        <Text style={estilos.textoBotaoOk}>Ok</Text>
      </RectButton>
    </View>
  )
}

export default MinistrarAulas;