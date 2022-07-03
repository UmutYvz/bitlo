import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { CoinDetailType, OrderType } from '../../redux/coins/reducer';

import staticTexts, { StaticTextType } from '../../staticTexts';

import colors from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const { coinDetail: $CD }: StaticTextType = staticTexts;

interface ICoinDetailViewProps {
  coinName: string;
  orders: boolean | Array<CoinDetailType>;
}

const CoinDetailView: FC<ICoinDetailViewProps> = ({ coinName, orders }) => {
  const {
    asks,
    bids,
    totals: { totalAsk, totalBid }
  }: any = orders;

  const splittedCoin = coinName.split('-');
  const renderBids = () => {
    let newOrder = [{ 0: $CD.PRICE, 1: $CD.AMOUNT, 2: $CD.SUM }, ...bids];
    return newOrder?.map((bid: OrderType, index: number) => {
      const orderItemStyle =
        index === 0 ? styles.orderItemTitle : styles.orderItem;

      return (
        <View key={`bid_${index}`} style={styles.orderContainer}>
          <View style={styles.total}>
            <Text style={[orderItemStyle, !!index && styles.bidPrice]}>
              {bid[0]}
            </Text>
          </View>
          <View style={styles.amount}>
            <Text style={orderItemStyle}>{bid[1]}</Text>
            {!index && (
              <Text
                style={[styles.orderItemTitle, styles.coinName]}
              >{`(${splittedCoin[0]})`}</Text>
            )}
          </View>
          <View style={styles.price}>
            <Text style={orderItemStyle}>
              {!index
                ? bid[2]
                : (parseFloat(bid[1]) * parseFloat(bid[0])).toFixed(2)}
              {!index && (
                <Text
                  style={[styles.orderItemTitle, styles.coinName]}
                >{`(${splittedCoin[1]})`}</Text>
              )}
            </Text>
          </View>
        </View>
      );
    });
  };
  const renderAsks = () => {
    let newOrder = [{ 0: $CD.PRICE, 1: $CD.AMOUNT, 2: $CD.SUM }, ...asks];
    return newOrder?.map((ask: OrderType, index: number) => {
      const orderItemStyle =
        index === 0 ? styles.orderItemTitle : styles.orderItem;

      return (
        <View key={`ask_${index}`} style={styles.orderContainer}>
          <View style={styles.total}>
            <Text style={[orderItemStyle, !!index && styles.askPrice]}>
              {ask[0]}
            </Text>
          </View>
          <View style={styles.amount}>
            <Text style={orderItemStyle}>{ask[1]}</Text>
            {!index && (
              <Text
                style={[styles.orderItemTitle, styles.coinName]}
              >{`(${splittedCoin[0]})`}</Text>
            )}
          </View>
          <View style={styles.price}>
            <Text style={orderItemStyle}>
              {index === 0
                ? ask[2]
                : (parseFloat(ask[1]) * parseFloat(ask[0])).toFixed(2)}
              {!index && (
                <Text
                  style={[styles.orderItemTitle, styles.coinName]}
                >{`(${splittedCoin[1]})`}</Text>
              )}
            </Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{`${coinName}${$CD.TITLE}`}</Text>
        <Text style={styles.totals}>
          {`${$CD.TOTAL_BIDS}`}
          {!!totalBid.length && (
            <Text
              style={styles.totalBidText}
            >{`${totalBid} ${splittedCoin[1]}`}</Text>
          )}
        </Text>
        <Text style={styles.totals}>
          {`${$CD.TOTAL_ASKS}`}
          {!!totalAsk.length && (
            <Text
              style={styles.totalAskText}
            >{`${totalAsk} ${splittedCoin[1]}`}</Text>
          )}
        </Text>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.bids}>
          <Text style={styles.bidText}>{$CD.BID}</Text>
          <View style={styles.horizontalLine} />
          {!!bids?.length && renderBids()}
        </View>
        <View style={styles.asks}>
          <Text style={styles.bidText}>{$CD.ASK}</Text>
          <View style={styles.horizontalLine} />
          {!!asks?.length && renderAsks()}
        </View>
      </ScrollView>
    </View>
  );
};

export default CoinDetailView;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  },
  title: {
    padding: 20
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  totalAskText: {
    fontFamily: fonts.monoRegular,
    color: colors.decrease
  },
  totals: {
    paddingTop: 6
  },
  totalBidText: {
    fontFamily: fonts.monoRegular,
    color: colors.growth
  },
  asks: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  bids: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  bidText: {
    alignSelf: 'center',
    fontSize: 20
  },
  orderItem: {
    fontFamily: fonts.monoRegular,
    fontSize: 11
  },
  orderItemTitle: {
    fontWeight: 'bold'
  },
  bidPrice: {
    color: colors.growth
  },
  askPrice: {
    color: colors.decrease
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090'
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#909090',
    paddingHorizontal: 12,
    marginVertical: 12
  },
  orderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    borderBottomColor: colors.gray
  },
  price: {
    flex: 1,
    alignItems: 'flex-end'
  },
  amount: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  total: {
    flex: 1
  },
  coinName: { fontSize: 11 }
});
