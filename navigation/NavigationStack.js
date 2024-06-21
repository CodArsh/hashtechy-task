import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import AddTask from '../screens/AddTask';
import EditTask from '../screens/EditTask';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const [isLoading, setIsLoading] = useState(true);

  // initially 1 second for splash screen
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddTask"
              component={AddTask}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EditTask"
              component={EditTask}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
