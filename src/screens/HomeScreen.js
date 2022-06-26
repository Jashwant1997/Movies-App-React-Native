// Import Statments
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import {
  getUpcomingMovies,
  getPopularMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentaries
} from '../services/services';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from "react-native-image-slider-box";
import List from '../components/List';
import Error from '../components/Error';

//Setting all get movies function in one promise
const getData = () => {
  return Promise.all([
    getUpcomingMovies(),
    getPopularMovies(),
    getPopularTv(),
    getFamilyMovies(),
    getDocumentaries()
  ]);
}

//Initializing Component
const HomeScreen = ({ navigation }) => {

  //Initialized State
  const [latestMovieImages, setLatestMovieImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [error, setError] = useState(false);
  const [Loaded, setLoaded] = useState(false);

  //Setting fetched data up to state
  useEffect(() => {
    getData().then(
      (
        [
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentariesData
        ]
      ) => {
        const movieImagesArray = [];
        upcomingMoviesData.forEach(movie => {
          movieImagesArray.push("https://image.tmdb.org/t/p/w500" + movie.poster_path);
        });

        setLatestMovieImages(movieImagesArray);
        setPopularMovies(popularMoviesData);
        setPopularTv(popularTvData);
        setFamilyMovies(familyMoviesData);
        setDocumentaries(documentariesData);
        setLoaded(true);
      })
      .catch(() => setError(true))
  }, []);

  //Displaying data in app
  return (
    <React.Fragment>
      <View style={styles.BackgroundStyle}>
        {error && <Error />}
        {Loaded && !error && (
          <ScrollView style={styles.HomeStyle}>
            {(latestMovieImages &&
              <View>
                <SliderBox
                  images={latestMovieImages}
                  sliderBoxHeight={hp('80%')}
                  dotStyle={styles.DotStyle}
                  autoplay={true}
                  circleLoop={true}
                />
              </View>)}
            <View>
              {popularMovies && <List navigation={navigation} title="Popular Movies" content={popularMovies} />}
              {popularTv && <List navigation={navigation} title="Popular TV Shows" content={popularTv} />}
              {familyMovies && <List navigation={navigation} title="Family Movies" content={familyMovies} />}
              {documentaries && <List navigation={navigation} title="Documentaries" content={documentaries} />}
            </View>
          </ScrollView>
        )}
        {!Loaded && !error && <ActivityIndicator size="large" style={styles.ActivityIndicatorStyle} />}
      </View>
    </React.Fragment>
  );
}

//Styling data
const styles = StyleSheet.create({
  DotStyle: {
    width: 0,
    height: 0,
    borderRadius: 0
  },
  ActivityIndicatorStyle: {
    marginTop: hp('70%')
  },
  BackgroundStyle: {
    backgroundColor: '#FFD66270',
    height: hp('100%')
  },
  HomeStyle:{
    marginBottom:hp('15%')
  }
});

//exporting component
export default HomeScreen;