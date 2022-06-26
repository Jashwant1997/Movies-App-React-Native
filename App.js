// Import Statments
import React from 'react'
import MainNavigation from './src/components/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';

//Initializing Component
const App = () => {
  
  //Displaying data in app  
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

//exporting component
export default App;