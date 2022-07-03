import React, { PureComponent } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

import colors from '../../utils/colors';

export interface ILoadingProps {
  ref: any;
}

class LoadingView extends PureComponent<ILoadingProps, { visible: boolean }> {
  static ref: LoadingView;
  readonly state = { visible: false };

  show = () => {
    this.setState({ visible: true });
  };

  close = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    if (visible) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' color={colors.white} />
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoadingView;
