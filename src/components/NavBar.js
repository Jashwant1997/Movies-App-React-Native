// Import Statments
import React from "react";
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Image
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

//defining prop types
const propType = {
    main: PropTypes.bool
}

//assigning default prop types
const defaultProps = {
    main: false
}

// Creating a pure Component
class NavBar extends React.PureComponent {
    render() {

        //Getting props from parent component
        const { navigation, main } = this.props;

        // Display data in our app
        return (
            <View style={styles.BackgroundStyle}>
                <SafeAreaView>
                    {main ? (
                        <View style={styles.NavBarStyle} >
                            <Image
                                style={styles.LogoStyle}
                                source={require('../images/movies.png')}
                            />
                            <TouchableOpacity
                                onPress={
                                    () => { navigation.navigate('Search') }
                                }>
                                <Icon
                                    name="search-outline"
                                    size={40}
                                    color='#000'
                                />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            <TouchableOpacity
                                onPress={
                                    () => { navigation.goBack() }
                                }>
                                <Icon
                                    name="chevron-back"
                                    size={50}
                                    color='#000'
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                </SafeAreaView>
            </View>
        );
    }
}

//Styling data
const styles = StyleSheet.create({
    LogoStyle: {
        height: 40,
        width: 45
    },
    NavBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    BackgroundStyle:{
        backgroundColor: '#9CC3D588',
    }
});

//assigning proptype object to component proptype
NavBar.propTypes = propType;

//assigning default proptype to component default proptype
NavBar.defaultProps = defaultProps;

//exporting component
export default NavBar;