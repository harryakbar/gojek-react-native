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

function ShortcutApps() {
  return (
    <View style={Styles.container}>
      <ShortcutButton title="GoRide" source={Images.goride} />
      <ShortcutButton title="GoCar" source={Images.gocar} />
      <ShortcutButton title="GoFood" source={Images.gofood} />
      <ShortcutButton title="GoShop" source={Images.goshop} />
      <ShortcutButton title="GoSend" source={Images.gosend} />
      <ShortcutButton title="GoMart" source={Images.gomart} />
      <ShortcutButton title="GoMed" source={Images.gomed} />
      <ShortcutButton title="Lainnya" source={Images.otherServices} />
    </View>
  );
}

export default ShortcutApps;

const ShortcutButton = ({
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
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  button: {
    width: '25%',
    marginBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 12,
  },
});
