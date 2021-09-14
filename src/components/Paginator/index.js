import React from 'react';
import {StyleSheet, Animated, View, useWindowDimensions} from 'react-native';

const Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 10,
    backgroundColor: '#493d8a',
    marginHorizontal: 8,
  },
});
