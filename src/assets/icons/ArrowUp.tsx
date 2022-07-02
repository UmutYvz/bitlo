import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUp = ({
  size,
  fill,
  ...props
}: {
  size: number;
  fill: string;
}): any => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox='0 0 512 512'
      fill={fill}
      {...props}
    >
      <Path d='M320 128l61.8 61.8-93.5 98.2-107-106.7L32 384l149.3-128 107 112 130.9-140.8L480 288V128z' />
    </Svg>
  );
};
export default ArrowUp;
