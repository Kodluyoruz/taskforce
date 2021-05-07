import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import Messages from './pages/Messages';
import colors from './styles/colors';

const Stack = createStackNavigator();

export default () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="MessagesScreen"
            component={Messages}
            options={{
              title: 'dertler',
              headerTintColor: colors.darkgreen,
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={colors.darkgreen}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
