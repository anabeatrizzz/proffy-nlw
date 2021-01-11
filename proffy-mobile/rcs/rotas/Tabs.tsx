import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ListaProfs from '../paginas/ListaProfs.tsx';
import Favoritos from '../paginas/Favoritos.tsx';

const { Navigator, Screen } = createBottomTabNavigator();

const estiloTabBar = {
  style: {
    elevation: 0,
    shadowOpacity: 0,
    height: 64
  },

  tabStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconStyle: {
    flex: 0,
    width: 20,
    height: 20
  },

  labelStyle: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 13,
    marginLeft: 16
  },

  inactiveBackgroundColor: '#fafafc',
  activeBackgroundColor: '#ebebf5',
  inactiveTintColor: '#c1bccc',
  activeTintColor: '#32264d'
}

const opcoesTelaUm = {
  tabBarLabel: 'Proffys',
  tabBarIcon: ({ color, size, focused }) => {
    return (
      <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
    )
  }
}

const opcoesTelaDois = {
  tabBarLabel: 'Favoritos',
  tabBarIcon: ({ color, size, focused }) => {
    return (
      <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
    )
  }
}

function Tabs(){
  return (
    <Navigator tabBarOptions={estiloTabBar}>
      <Screen options={opcoesTelaUm} name="ListaProfs" component={ListaProfs} />
      <Screen options={opcoesTelaDois} name="Favoritos" component={Favoritos} />
    </Navigator>
  );
}

export default Tabs;