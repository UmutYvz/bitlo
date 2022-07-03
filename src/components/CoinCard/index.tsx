import React, { FC, memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ArrowDown from '../../assets/icons/ArrowDown';
import ArrowUp from '../../assets/icons/ArrowUp';

import staticTexts, { StaticTextType } from '../../staticTexts';

import colors from '../../utils/colors';
import { commonStyles } from '../../utils/CommonStyles';
import { fonts } from '../../utils/fonts';

const { card: $C }: StaticTextType = staticTexts;
interface ICoinCardProps {
  coin: CoinType;
  color: string;
  disabled: boolean;
  onPress: () => void;
}

const CoinCard: FC<ICoinCardProps> = ({ coin, color, disabled, onPress }) => {
  const checkValue = (changeAmout: number) => {
    if (changeAmout < 0) return true;
    return false;
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <View style={styles.leftSide}>
        <Text style={[styles.marketCodeText, { color }]}>
          {coin.marketCode}
        </Text>
      </View>
      <View style={styles.rightSide}>
        <Text style={[styles.currentQuote, styles.textAlignRight]}>
          {parseFloat(coin.currentQuote).toFixed(2)}
        </Text>
        <View style={styles.rightSide2}>
          <Text style={[styles.textAlignRight]}>
            {$C.HOUR}
            <Text
              style={[
                styles.textAlignRight,
                {
                  color: checkValue(parseInt(coin.change24h))
                    ? colors.decrease
                    : colors.growth
                }
              ]}
            >
              {parseFloat(coin.change24h).toFixed(2)}
            </Text>
          </Text>
          {checkValue(parseInt(coin.change24h)) ? (
            <ArrowDown size={24} fill={colors.decrease} />
          ) : (
            <ArrowUp size={24} fill={colors.growth} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: colors.transparentDark,
    borderRadius: 4,
    backgroundColor: colors.white,
    ...commonStyles.shadowx2
  },
  leftSide: {},
  rightSide: {},
  rightSide2: { flexDirection: 'row', alignItems: 'center' },
  currentQuote: {
    textAlign: 'right',
    fontWeight: 'bold'
  },
  textAlignRight: {
    textAlign: 'right'
  },
  marketCodeText: {
    fontSize: 18,
    fontFamily: fonts.monoBoldItalic
  }
});

export default memo(CoinCard);

export type CoinType = {
  change24h: string;
  change24hPercent: string;
  currentQuote: string;
  highestQuote24h: string;
  lowestQuote24h: string;
  marketCode: string;
  volume24h: string;
  weightedAverage24h: string;
};
