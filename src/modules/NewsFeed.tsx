import React from 'react';
import {View, StyleSheet, Text, ImageSourcePropType} from 'react-native';
import NewsItem from '../components/NewsItem';
import Images from '../assets';

type News = {
  id: string;
  image_url: ImageSourcePropType;
  title: string;
  subtitle: string;
};

const Data = [
  {
    id: '1',
    image_url: Images.newsGofood,
    title: 'Masak #dirumahaja jadi banyak pilihannya',
    subtitle:
      'Masak di rumah jadi nggak itu-itu aja dengan menu siap masak di GoFood. Pesan menunya disini.',
  },
  {
    id: '12',
    image_url: Images.newsCovid,
    title: 'Pusat info COVID-19',
    subtitle:
      'Cari tahu status terkini COVID-19 dan info RS rujukan terdekat beserta kontaknya.',
  },
];

function NewsFeed() {
  const renderItem = (item: News) => (
    <NewsItem
      key={item.id}
      title={item.title}
      subtitle={item.subtitle}
      image={item.image_url}
    />
  );

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>News Feed</Text>
      {Data.map((item) => renderItem(item))}
    </View>
  );
}

export default NewsFeed;

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 12,
  },
  title: {
    fontWeight: '700',
    marginBottom: 12,
  },
});
