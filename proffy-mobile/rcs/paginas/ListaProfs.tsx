import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import Cabecalho from '../componentes/Cabecalho.tsx';
import ProfItem, { Prof } from '../componentes/ProfItem.tsx';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../servicos/api.ts';
import AsyncStorage from '@react-native-community/async-storage';

// Imagens
import { Feather } from '@expo/vector-icons';

// CSS
import estilos from './ListaProfs';

const estiloScrollView = {
  paddingHorizontal: 16,
  paddingBottom: 16
}

function ListaProfs(){
  const [profs, setProfs] = useState([]);
  const [filtroVisivel, setFiltroVisivel] = useState(false);
  const [materia, setMateria] = useState('');
  const [diaDaSemana, setDiaDaSemana] = useState('');
  const [hora, setHora] = useState('');
  const [favoritos, setFavoritos] = useState<number[]>([]);

  function carregarFavoritos(){
    AsyncStorage.getItem('favoritos').then(resposta => {
      if(resposta){
        // Professores favoritados
        const profsFavoritos = JSON.parse(resposta);
        
        // Ids dos professores favoritados
        const idsProfsFavoritos = profsFavoritos.map((profs: Prof) => {
          return profs.cd_usuario
        })
        setFavoritos(idsProfsFavoritos)
      }
    })
  }
  
  function handleAlternarVisivel(){
    setFiltroVisivel(!filtroVisivel)
  }

  async function handleSubmit(){
    carregarFavoritos();
    const resposta = await api.get('aulas', {
      params: {
        materia,
        dia_semana: diaDaSemana,
        horario: hora
      }
    })
    setFiltroVisivel(false);
    setProfs(resposta.data);
  }

  return (
    <View style={estilos.container}>
      <Cabecalho titulo="Proffys disponíveis" direitaCabecalho={(
          <BorderlessButton onPress={handleAlternarVisivel}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        )}>
        { filtroVisivel &&
          (
            <View style={estilos.formPesquisa}>
            <Text style={estilos.rotulo}>Matéria</Text>
            <TextInput
              style={estilos.input} placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc" value={materia}
              onChangeText={text => setMateria(text)}
            />
            
            <View style={estilos.grupoInput}>
              <View style={estilos.blocoInput}>
                <Text style={estilos.rotulo}>Dia da semana</Text>
                <TextInput
                  style={estilos.input} placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc" value={diaDaSemana}
                  onChangeText={text => setDiaDaSemana(text)}
                />

              </View>
              <View style={estilos.blocoInput}>
                <Text style={estilos.rotulo}>Horário</Text>
                <TextInput
                  style={estilos.input} placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc" value={hora}
                  onChangeText={text => setHora(text)}
                />
              </View>
            </View>
            <RectButton onPress={handleSubmit} style={estilos.botaoEnviar}>
              <Text style={estilos.textoBotaoEnviar}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </Cabecalho>
      <ScrollView style={estilos.listaProfs} contentContainerStyle={estiloScrollView}>
        {profs.map((prof: Prof) => {
          return (
            <ProfItem
              key={prof.cd_usuario} prof={prof}
              favoritado={favoritos.includes(prof.cd_usuario)}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default ListaProfs;