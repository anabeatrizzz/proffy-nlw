import React, { ReactNode } from 'react';
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
  // Essa propriedade opcional pode receber um componente do React
  direitaCabecalho?: ReactNode
}

const Cabecalho: React.FC<propsCabecalho> = ({ titulo, children, direitaCabecalho }) => {
  const { navigate } =  useNavigation();

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
      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>{titulo}</Text>
        {direitaCabecalho}
      </View>
      {children}
    </View>
  )
}

export default Cabecalho;