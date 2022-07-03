import React, { FC } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import CoinCard, { CoinType } from '../../components/CoinCard';

import { generateRandomColor } from '../../methods/randomColorGenerator';

interface IHomeViewProps {
  coins: any;
  onPressCoinDetail: (query: string) => void;
}

const HomeView: FC<IHomeViewProps> = ({ coins, onPressCoinDetail }) => {
  const coinArrLenght = coins?.length;
  const colors = generateRandomColor(coinArrLenght);

  const renderCoins = ({ item, index }: { item: CoinType; index: number }) => {
    return (
      <CoinCard
        disabled={false}
        coin={item}
        color={colors[index]}
        onPress={() => onPressCoinDetail(item.marketCode)}
      />
    );
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
  container: {
    flex: 1
  }
});
export default HomeView;
