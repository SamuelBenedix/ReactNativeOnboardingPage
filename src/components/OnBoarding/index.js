import React, {useState, useRef} from 'react';
import {FlatList, StyleSheet, View, Animated} from 'react-native';
import NextButton from '../NextButton';
import OnBoardingItem from '../OnBoardingItem';
import Paginator from '../Paginator';
import slides from './slides';

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnBoardingItem item={item} />}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton percentage={(currentIndex + 1) * (100 / slides.length)} />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
