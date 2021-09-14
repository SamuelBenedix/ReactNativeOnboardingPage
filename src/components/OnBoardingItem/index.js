import React from 'react';
import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';

const OnBoardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container(width)}>
      <Image
        source={item.image}
        style={(styles.image, {width, resizeMode: 'contain'})}
        height={500}
      />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: width => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  }),
  image: {
    flex: 0.7,
    justifyContent: 'center',
    height: '20%',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  desc: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
