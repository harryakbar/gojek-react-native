import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Images from '../assets';

type Props = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

function NewsItem({title, subtitle, image}: Props) {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() => navigate('Details', {text: title})}>
      <View style={Styles.thumbContainer}>
        <Image
          defaultSource={Images.placeholder}
          style={Styles.image}
          source={image}
          resizeMode="cover"
        />
      </View>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.text}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

export default NewsItem;

const Styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    marginBottom: 24,

    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    paddingTop: 10,
    fontWeight: '700',
    padding: 10,
  },
  text: {
    paddingVertical: 10,
    padding: 10,
  },
  thumbContainer: {
    width: '100%',
    height: 210,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
});
