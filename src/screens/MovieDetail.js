// Import Statments
import React, { useState, useEffect } from 'react';
import { ScrollView, Image, StyleSheet, ActivityIndicator, Text, View, Modal, Pressable } from 'react-native';
import { getMovieDetail } from '../services/services'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import PlayButton from '../components/PlayButtton'
import dateFormat from "dateformat";
import Video from '../components/Video';

//assigning a constant for image placeholder
const imagePlaceHolder = require('../images/placeholder.png')

//Initializing Component
const MovieDetail = ({ route, navigation }) => {

    //getting movie id from the route component
    const movieId = route.params.movieId;

    //Initialized State
    const [Loaded, setLoaded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [movieData, setMovieData] = useState({});

    //Setting fetched data up to state
    useEffect(() => {
        getMovieDetail(movieId)
            .then(
                (movie => {
                    setMovieData(movie)
                    setLoaded(true)
                })
            )
            .catch(setLoaded(false))
    }, [movieId]);

    const videoShown = () => {
        setModalVisible(!modalVisible);
    }

    //Displaying data in app
    return (
        <React.Fragment>
            {Loaded && (
                <View>
                    <ScrollView style={styles.BackgroundStyle}>
                        <Image
                            resizeMode='cover'
                            style={styles.ImageStyle}
                            source={movieData.poster_path ?
                                { uri: "https://image.tmdb.org/t/p/w500" + movieData.poster_path }
                                : imagePlaceHolder
                            }
                        />
                        <View style={styles.PlayButtonStyle}>
                            <PlayButton handlePress={videoShown} />
                        </View>
                        <View>
                            <Text style={styles.TitleStyle}>{movieData.title}</Text>
                        </View>
                        <View>
                            {movieData.genres && (
                                <View style={styles.GenreStyle}>
                                    {movieData.genres.map(
                                        genre => <Text key={genre.id} style={styles.GenreNameStyle}>{genre.name}</Text>
                                    )}
                                </View>
                            )}
                        </View>
                        <View style={styles.StarRatingContainer}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={movieData.vote_average / 2}
                                starSize={wp('4.5%')}
                                fullStarColor='gold'
                                halfStarColor='gold'
                                emptyStarColor='gold'
                            />
                        </View>
                        <View>
                            <Text style={styles.OverviewStyle}>{movieData.overview}</Text>
                        </View>
                        <View>
                            <Text style={styles.ReleaseStyle}>
                                {'Release Date: ' + dateFormat(movieData.release_date, "mmmm dS, yyyy")}
                            </Text>
                        </View>
                    </ScrollView>
                    <Modal
                        style={styles.ModalStyle}
                        supportedOrientations={['portrait', 'landscape']}
                        animationType="slide"
                        visible={modalVisible}>
                        <Video onClose={videoShown} />
                    </Modal>
                </View>
            )}
            {!Loaded && <ActivityIndicator style={styles.ActivityIndicatorStyle} />}
        </React.Fragment>
    );
}

//Styling data
const styles = StyleSheet.create({
    ActivityIndicatorStyle: {
        marginTop: hp('45%')
    },
    ImageStyle: {
        height: hp('50%'),
        width: wp('100%'),
    },
    TitleStyle: {
        fontSize: wp('6%'),
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: hp('8%'),
        marginHorizontal: wp('1%')
    },
    GenreStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: wp('2%')
    },
    GenreNameStyle: {
        marginHorizontal: wp('2%'),
        marginTop: hp('2%'),
        color: '#000000',
        fontWeight: 'bold',
    },
    StarRatingContainer: {
        paddingHorizontal: wp('38%'),
        marginTop: hp('2%')
    },
    OverviewStyle: {
        marginVertical: hp('1.5%'),
        color: '#000000',
        fontSize: wp('4%'),
        marginHorizontal: wp('5%'),
        textAlign: 'center'
    },
    ReleaseStyle: {
        marginBottom: hp('3%'),
        color: '#000000',
        fontSize: wp('3.5%'),
        fontWeight: 'bold',
        textAlign: 'center'

    },
    PlayButtonStyle: {
        position: 'absolute',
        top: hp('43%'),
        right: wp('10%')
    },
    ModalStyle: {
        margin: 0
    },
    BackgroundStyle: {
        backgroundColor: '#FFD66270'
    },
});

//exporting component
export default MovieDetail;