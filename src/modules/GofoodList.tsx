import React, {Fragment} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import GofoodItem from '../components/GofoodItem';

const Data = [
  {
    id: '1',
    title: 'McDonald, Bogor',
    image_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png',
  },
  {
    id: '12',
    title: 'McDonald, Sarinah',
    image_url:
      'https://www.minews.id/wp-content/uploads/2020/05/Mcdonald-Sarinah-Tutup.jpg',
  },
  {
    id: '14',
    title: 'McDonald, Bogor',
    image_url:
      'https://www.minews.id/wp-content/uploads/2020/05/Mcdonald-Sarinah-Tutup.jpg',
  },
  {
    id: '143',
    title: 'McDonald, Bogor',
    image_url:
      'https://www.minews.id/wp-content/uploads/2020/05/Mcdonald-Sarinah-Tutup.jpg',
  },
  {
    id: '1434',
    title: 'McDonald, Bogor',
    image_url:
      'https://www.minews.id/wp-content/uploads/2020/05/Mcdonald-Sarinah-Tutup.jpg',
  },
];

function GofoodList({title}: {title: string}) {
  const Divider = <View style={{width: 14}} />;

  return (
    <View>
      <Text style={Styles.title}>{title}</Text>
      <ScrollView horizontal style={Styles.scrollView}>
        {Data.map((item) => (
          <Fragment key={item.id}>
            <GofoodItem title={item.title} image={item.image_url} />
            {Divider}
          </Fragment>
        ))}
        {Divider}
      </ScrollView>
    </View>
  );
}

export default GofoodList;

const Styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    marginStart: 12,
  },
  scrollView: {
    flexDirection: 'row',
    marginVertical: 14,
    paddingHorizontal: 12,
  },
});
