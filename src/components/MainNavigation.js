// Import Statments
import React from "react";
import HomeScreen from '../screens/HomeScreen';
import MovieDetail from '../screens/MovieDetail';
import NavBar from './NavBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "../screens/SearchScreen";

// Creating stack navigator
const Stack = createNativeStackNavigator();

// Creating a pure Component
class MainNavigation extends React.PureComponent {
    render() {

        // Display data in our app
        return (
            <Stack.Navigator headerMode={'screen'}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        header: ({ navigation }) => <NavBar navigation={navigation} main={true} />
                    }
                    } />
                <Stack.Screen
                    name="Detail"
                    component={MovieDetail}
                    options={{
                        header: ({ navigation }) => <NavBar navigation={navigation} />
                    }} />
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        header: ({ navigation }) => <NavBar navigation={navigation} />
                    }} />
            </Stack.Navigator>
        );
    }
}

//exporting component
export default MainNavigation;