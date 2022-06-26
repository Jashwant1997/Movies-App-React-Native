// Import Statments
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-controls';

//Initializing Component
const Video = ({ onClose }) => {

  //Displaying data in app
  return (
    <VideoPlayer
      VideoStyle={styles.VideoStyle}
      onBack={() => onClose()}
      onEnd={() => onClose()}
      fullscreenOrientation="all"
      source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
    />
  );
};

//Styling data
const styles = StyleSheet.create({
  VideoStyle: {
    height: hp('100%'),
    width: wp('100%')
  }
})

//exporting component
export default Video;
