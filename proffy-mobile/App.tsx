import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import Stack from './rcs/rotas/Stack.tsx';

// Fontes
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

/*
  ANOTAÇÕES
  - No React Native não usamos tags HTML como no ReactJS. Como alternativa, usamos componentes já criados do pacote react-native.
  - O componente View pode ser comparado com a tag div do HTML.
  - Usamos StyleSheet do pacote react-native para a estilização. A grande maioria dos comandos css estão disponíveis.
  - Se a tela do dispositivo movel necessitar de uma imagem maior, o React Native lidará com isso procurando a imagem ideal na pasta images.
  - StatusBar é a barra localizada no topo do dispositivo movel.
  - Se escreve <Componente /> quando o Componente não tem conteudo, do contrario escreve-se <Componente></Componente>.
  - Conceito de estado: Se o usuario tiver a possibilidade de mudar algo, esse algo precisa estar em um estado.
*/

/*
  DESAFIOS:
  - Usar a biblioteca react-native-picker para o select no componente ListaProfs.
  - 01:26:31
*/

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  {/* Enquanto as fontes não estiverem carregadas, mostre AppLoading */}
  if(!fontsLoaded){
    return <AppLoading />
  } else {
    {/* Quando estiverem, mostre o nosso App */}
    return (
      <>
        <Stack />
        <StatusBar style="light" />
      </>
    );
  }
}