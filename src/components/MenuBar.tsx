import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Images from '../assets';

function MenuBar() {
  const Menu = (title: string, image: ImageSourcePropType) => (
    <TouchableOpacity style={Styles.button}>
      <Image source={image} style={Styles.image} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={Styles.container}>
      {Menu('Beranda', Images.menuHome)}
      {Menu('Pesanan', Images.menuOrders)}
      {Menu('Chat', Images.menuChat)}
      {Menu('Inbox', Images.menuInbox)}
      {Menu('Akun Saya', Images.menuAccount)}
    </View>
  );
}

export default MenuBar;

const Styles = StyleSheet.create({
  container: {
    padding: 12,
    borderTopWidth: 1,
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
    marginBottom: 6,
  },
});
