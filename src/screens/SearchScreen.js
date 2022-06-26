// Import Statments
import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Text
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { searchMovieTv } from '../services/services';
import Card from "../components/Card";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Error from "../components/Error";

//Initializing Component
const SearchScreen = ({ navigation }) => {

    //Initialized State
    const [text, onChangeText] = useState("");
    const [searchResults, setSearchResults] = useState();
    const [error, setError] = useState(false);

    //on submit function for text input
    const onSubmit = (query) => {
        Promise.all([
            searchMovieTv(query, 'movie'),
            searchMovieTv(query, 'tv')
        ])
            .then(
                ([movie, tv]) => {
                    const data = [...movie, ...tv]
                    setSearchResults(data)
                }
            )
            .catch(
                () => { setError(true) }
            )
        onChangeText('');
    }

    //Displaying data in app
    return (
        <React.Fragment>
            <View style={styles.BackgroundStyle}>
                <SafeAreaView>
                    <View style={styles.Container}>
                        <View style={styles.InputStyle}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder="Search Movies and TV"
                            />
                        </View>
                        <TouchableOpacity
                            onPress={
                                () => { onSubmit(text) }
                            }>
                            <Icon
                                name="search-outline"
                                size={30}
                                color='#000'
                            />
                        </TouchableOpacity>
                    </View>
                    <View>

                        {/* Searched items results */}
                        {searchResults && searchResults.length > 0 && (
                            <View style={styles.ListContainerStyle}>
                                <FlatList
                                    data={searchResults}
                                    numColumns={4}
                                    renderItem={({ item }) => <Card navigation={navigation} movie={item} />}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        )}

                        {/* When searched but no results */}
                        {searchResults && searchResults.length == 0 && (
                            <View>
                                <Text style={styles.noMatchStyle}>No results matching your criteria.</Text>
                                <Text style={styles.noMatchStyle}>Try different keywords.</Text>
                            </View>
                        )}

                        {/* When nothing is searched */}
                        {!searchResults && !error && (
                            <View>
                                <Text style={styles.noMatchStyle}>Type something to start searching</Text>
                            </View>
                        )}

                        {/* Error */}
                        {error && <Error />}
                    </View>
                </SafeAreaView>
            </View>
        </React.Fragment>
    );
}

//Styling data
const styles = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 10,
        marginVertical: 30,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    InputStyle: {
        flex: 1
    },
    ListContainerStyle: {
        marginBottom: hp('40%'),
        alignItems: 'center'
    },
    noMatchStyle: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#000'
    },
    BackgroundStyle: {
        backgroundColor: '#FFD66270',
        height:hp('100%')
      }
});

//exporting component
export default SearchScreen;