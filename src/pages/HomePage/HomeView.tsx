import { StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import CoinCard, { CoinType } from '../../components/CoinCard';
import { generateRandomColor } from '../../methods/randomColorGenerator';

interface IHomeViewProps {
  coins: any;
}

const HomeView: FC<IHomeViewProps> = ({ coins }) => {
  useEffect(() => {
    console.log('render');
  });

  const coinArrLenght = coins?.length;

  const colors = generateRandomColor(coinArrLenght);

  const renderCoins = ({ item, index }: { item: CoinType; index: number }) => {
    return <CoinCard coin={item} color={colors[index]} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={renderCoins}
        keyExtractor={(item: CoinType, index: number) => `coin_${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }
});
export default HomeView;
