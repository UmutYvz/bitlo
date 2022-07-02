import React, { FC, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import { commonStyles } from '../../utils/CommonStyles';

import colors from '../../utils/colors';

import { StackHeaderProps } from '@react-navigation/stack';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import { images } from '../../utils/images';

interface IHeaderProps {
  navProps: StackHeaderProps;
}
interface headerParams {
  goBack?: boolean;
  title?: string;
  isLoggedIn?: boolean;
}

const Header: FC<IHeaderProps> = ({ navProps }: IHeaderProps) => {
  const {
    route: { params },
    navigation
  } = navProps;

  const [headerParams, setHeaderParams] = useState<headerParams>();

  console.log(headerParams);
  useEffect(() => {
    setHeaderParams(params);
  }, [params]);

  const onPressLeftButon = () => {
    if (headerParams?.goBack) {
      navigation.goBack();
    }
  };

  console.log(headerParams, images);
  return (
    <SafeAreaView style={[styles.header, { ...commonStyles.shadow }]}>
      <TouchableOpacity style={styles.leftContainer} onPress={onPressLeftButon}>
        {headerParams?.goBack && <ArrowLeft size={24} fill={colors.black} />}
      </TouchableOpacity>
      {headerParams?.title && (
        <View style={styles.centerContainer}>
          <Text style={styles.title}>{headerParams.title}</Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        {headerParams?.isLoggedIn && (
          <Image source={images.profile} style={styles.image} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    height: 45,
    paddingHorizontal: 12,
    marginBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  centerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    zIndex: -1,
    backgroundColor: colors.transparent
  },
  rightContainer: {
    width: 36,
    height: 36,
    borderRadius: 12
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 12
  },
  title: {
    fontSize: 16
  }
});

export default Header;
