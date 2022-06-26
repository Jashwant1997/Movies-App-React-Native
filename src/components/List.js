// Import Statments
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from './Card';
import PropTypes from 'prop-types';

//defining prop types
const propType = {
    title: PropTypes.string,
    content: PropTypes.array,
    navigation: PropTypes.object
}

// Creating a pure Component for List
class List extends React.PureComponent {
    render() {
        //Getting props from parent component
        const { navigation, title, content } = this.props;

        // Display data in our app
        return (
            <View style={styles.ScreenStyle}>
                <Text style={styles.TitleStyle}>{title}</Text>
                <FlatList
                    data={content}
                    renderItem={({ item }) => <Card navigation={navigation} movie={item} />}
                    horizontal={true}
                />
            </View>
        );
    }
}

//Styling data
const styles = StyleSheet.create({
    ScreenStyle: {
        marginTop: hp('2%')
    },
    TitleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
        marginBottom: hp('0.5%')
    },

});

//assigning proptype object to component proptype
List.propTypes = propType;

//exporting component
export default List;