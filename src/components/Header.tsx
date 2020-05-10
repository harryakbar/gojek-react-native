import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Images from '../assets';

function Header() {
  const {navigate} = useNavigation();
  return (
    <View style={Styles.container}>
      <TextInput style={Styles.input} placeholder="Cari layanan Gojek..." />
      <TouchableOpacity
        style={Styles.promo}
        onPress={() => navigate('Details', {text: 'Promo'})}>
        <Image source={Images.promo} style={Styles.image} />
        <Text>Promo</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const Styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  promo: {
    marginLeft: 4,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    flex: 1,
    padding: 8,
    marginRight: 12,
  },
});
