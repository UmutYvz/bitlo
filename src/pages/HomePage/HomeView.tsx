import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';

const HomeView: FC<any> = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text>HomeView</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeView;
