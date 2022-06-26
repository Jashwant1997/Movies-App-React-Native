// Import Statments
import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

// Creating a pure Component for List
class PlayButton extends React.PureComponent {
    render() {

        //Getting props from parent component
        const { handlePress } = this.props

        // Display data in our app
        return (
            <View style={styles.PlayIconStyle}>
                <Pressable onPress={() => handlePress()}>
                    <Icon name='play' size={wp('15%')} color='white' />
                </Pressable>
            </View>
        );
    }
}

//Styling data
const styles = StyleSheet.create({
    PlayIconStyle: {
        backgroundColor: '#FF5733',
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: wp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 10,
    }
});

//exporting component
export default PlayButton;