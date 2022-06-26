// Import Statments
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import PropTypes from 'prop-types';

//defining prop types
const propTypes = {
    errorText1: PropTypes.string,
    errorText2: PropTypes.string
};

//assigning default prop types
const defaultProps = {
    errorText1: 'Opps! Something went wrong...',
    errorText2: 'Make sure you are Online and Restart the app'
};

// Creating a pure Component for Error
class Error extends React.PureComponent {
    render() {
        //Getting props from parent component
        const { errorText1, errorText2 } = this.props;

        // Display data in our app
        return (
            <View style={styles.BackgroundStyle}>
                <View style={styles.containerStyle}>
                    <Text style={styles.TextStyle}>{errorText1}</Text>
                    <Text style={styles.TextStyle}>{errorText2}</Text>
                </View>
            </View>
        );
    }
}

//Styling data
const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('45%')
    },
    TextStyle: {
        fontSize: wp('4%'),
        color: '#AF0606',
        fontWeight: 'bold'
    },
    BackgroundStyle: {
        height: hp('100%')
    }
});

//assigning proptype object to component proptype
Error.propTypes = propTypes;

//assigning default proptype to component default proptype
Error.defaultProps = defaultProps;

//exporting component
export default Error;