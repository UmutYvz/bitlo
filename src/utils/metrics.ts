import {Dimensions} from 'react-native';

const screen = Dimensions.get('window');
export const metrics = {
  screenWidth: screen.width,
  screenHeight: screen.height,
};
