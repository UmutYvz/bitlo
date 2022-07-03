import React, { FC, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import { StackHeaderProps, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { commonStyles } from '../../utils/CommonStyles';
import colors from '../../utils/colors';
import { images } from '../../utils/images';
import { menuItems } from '../../utils/menuConstants';

import ArrowLeft from '../../assets/icons/ArrowLeft';

import { AuthParams } from '../../navigator/NavigatorTypes';

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
    route: { params }
  } = navProps;

  const navigation: StackNavigationProp<AuthParams> = useNavigation();

  const [headerParams, setHeaderParams] = useState<headerParams>();

  useEffect(() => {
    setHeaderParams(params);
  }, [params]);

  const onPressLeftButon = () => {
    if (headerParams?.goBack) {
      navigation.goBack();
    }
  };

  const onPressProfile = () =>
    navigation.navigate('ProfileStack', {
      title: 'Profil',
      goBack: true,
      items: menuItems
    });

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
      <TouchableOpacity style={styles.rightContainer} onPress={onPressProfile}>
        {headerParams?.isLoggedIn && (
          <Image source={images.profile} style={styles.image} />
        )}
      </TouchableOpacity>
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
