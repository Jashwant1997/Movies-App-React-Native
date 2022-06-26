// Import Statments
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

//assigning a constant for image placeholder
const imagePlaceHolder = require('../images/placeholder.png')

//defining prop types
const propType = {
    movie: PropTypes.object,
    navigation: PropTypes.object
}

// Creating a pure Component for List
class Card extends React.PureComponent {
    render() {
        //Getting props from parent component
        const { navigation, movie } = this.props;

        // Display data in our app
        return (
            <TouchableOpacity 
            onPress={() => navigation.navigate('Detail', { movieId: movie.id })} 
            style={styles.ImageContainer}>
                <Image
                    resizeMode='cover'
                    style={styles.ImageStyle}
                    source={movie.poster_path ?
                        { uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path }
                        : imagePlaceHolder
                    }
                />
                {!movie.poster_path && <Text style={styles.PlaceholderText}>{movie.title}</Text>}
            </TouchableOpacity>
        );
    }
}

//Styling data
const styles = StyleSheet.create({
    ImageContainer: {
        padding: 10
    },
    ImageStyle: {
        height: hp('20%'),
        width: wp('20%'),
        borderRadius: 10
    },
    PlaceholderText: {
        position: 'absolute',
        alignSelf: 'center',
        textAlign: 'center',
        width: wp('19%'),
        height: hp('5%'),
        color: '#000000',
        top: hp('3%')
    }
});

//assigning proptype object to component proptype
Card.propTypes = propType;

//exporting component
export default Card;