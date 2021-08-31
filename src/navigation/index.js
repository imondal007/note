import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/home';
import Details from '../screens/details';
import Search from '../screens/search';
import AddNote from '../screens/create';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="Details"
      component={Details}
      initialParams={{ name: 'Demo', description: 'Hello' }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const ApplicationTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Main') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'ios-search-circle' : 'ios-search-outline';
        } else if (route.name === 'AddNote') {
          iconName = focused ? 'ios-add-circle' : 'ios-add-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen
      name="Main"
      component={MainStack}
      options={{ headerShown: false }}
    />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="AddNote" component={AddNote} />
  </Tab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <ApplicationTabs />
    </NavigationContainer>
  );
};

export default Navigation;
