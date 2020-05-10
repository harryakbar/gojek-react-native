import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Images from '../assets';

function Gopay() {
  return (
    <View style={Styles.container}>
      <View style={Styles.balance}>
        <Text style={Styles.text}>GoPay</Text>
        <Text style={Styles.text}>Rp30.000</Text>
      </View>
      <View style={Styles.buttons}>
        <GoPayButton title="GoRide" source={Images.pay} />
        <GoPayButton title="GoCar" source={Images.paylater} />
        <GoPayButton title="GoFood" source={Images.topup} />
        <GoPayButton title="GoShop" source={Images.other} />
      </View>
    </View>
  );
}

export default Gopay;

const GoPayButton = ({
  source,
  title,
}: {
  source: ImageSourcePropType;
  title: string;
}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={Styles.button}
      onPress={() => navigate('Details', {text: title})}>
      <Image style={Styles.image} source={source} />
      <Text style={Styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  balance: {
    padding: 12,
    borderTopStartRadius: 9,
    borderTopEndRadius: 9,
    backgroundColor: '#114D96',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    padding: 12,
    backgroundColor: '#275cb2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomStartRadius: 9,
    borderBottomEndRadius: 9,
  },
  button: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  image: {
    width: 40,
    height: 40,
  },
});
