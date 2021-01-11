import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import api from '../servicos/api.ts';

// Componente que adapta o efeito do clique em botões dependendo do SO do celular
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

// Imagens
import iconFavorito from '../assets/images/icons/heart-outline.png';
import iconNaoFavorito from '../assets/images/icons/unfavorite.png';
import iconWpp from '../assets/images/icons/whatsapp.png';

// CSS
import estilos from './ProfItem.ts';

export interface Prof {
  bio_usuario: string
  cd_usuario: number
  custo_aula: number
  foto_usuario: string
  materia_aula: string
  nome_usuario: string
  wpp_usuario: string
}

interface propsProfItem {
  prof: Prof;
  favoritado: boolean;
}

const ProfItem: React.FC<propsProfItem> = ({ prof, favoritado }) => {
  const [estaFavoritado, setEstaFavoritado] = useState(favoritado);

  function handleVisitarWpp(){
    api.post('contatos', {
      id_usuario: prof.cd_usuario
    })
    
    Linking.openURL(`whatsapp://send?phone=${prof.wpp_usuario}`)
  }

  async function handleAlternarFavorito(){
    const favoritos = await AsyncStorage.getItem('favoritos');
    let arrayFavoritos = []
    if(favoritos){
      arrayFavoritos = JSON.parse(favoritos);
    }

    // Se o prof estiver nos favoritos
    if(estaFavoritado){
      // Remova-o
      const indiceFavorito = arrayFavoritos.findIndex((profItem: Prof) => {
        return profItem.cd_usuario === prof.cd_usuario
      })
      arrayFavoritos.splice(indiceFavorito, 1);
      setEstaFavoritado(false);

      // Se não,
    } else {
      // Adicione-o
      arrayFavoritos.push(prof)
      setEstaFavoritado(true)
    }
    await AsyncStorage.setItem('favoritos', JSON.stringify(arrayFavoritos))
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.perfil}>
        <Image style={estilos.foto} source={{uri: prof.foto_usuario}} />
        <View style={estilos.infosPerfil}>
          <Text style={estilos.nome}>{prof.nome_usuario}</Text>
          <Text style={estilos.materia}>{prof.materia_aula}</Text>
        </View>
      </View>
      <Text style={estilos.bio}>{prof.bio_usuario}</Text>
      <View style={estilos.rodape}>
        <Text style={estilos.preco}>
          Preço/hora {'   '}
          <Text style={estilos.valorPreco}>R$ {prof.custo_aula}</Text>
        </Text>
        <View style={estilos.containerBotao}>
          <RectButton
            onPress={handleAlternarFavorito}
            style={[
                estilos.botaoFavorito,
                estaFavoritado ? estilos.favoritado : {}
              ]}
          >
            { estaFavoritado ? <Image source={iconNaoFavorito} /> : <Image source={iconFavorito} /> }
            
          </RectButton>
          <RectButton onPress={handleVisitarWpp} style={estilos.botaoContato}>
            <Image source={iconWpp} />
            <Text style={estilos.textoBotaoContato}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default ProfItem;