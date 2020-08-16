import React from 'react';

// Importações que lidam com a navegação entre páginas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Páginas da aplicação
import Landing from '../paginas/Landing.tsx';
import MinistrarAulas from '../paginas/MinistrarAulas.tsx';

const { Navigator, Screen } = createStackNavigator();

function Stack(){
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name="Landing" component={Landing} />
				<Screen name="MinistrarAulas" component={MinistrarAulas} />
			</Navigator>
		</NavigationContainer>
	)
}

export default Stack;