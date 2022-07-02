import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeft = ({
  size,
  fill,
  ...props
}: {
  size: number;
  fill: string;
}): any => {
  return (
    <Svg height={size} width={size} viewBox='0 0 24 24' fill={fill} {...props}>
      <Path d='M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12z' />
    </Svg>
  );
};
export default ArrowLeft;
