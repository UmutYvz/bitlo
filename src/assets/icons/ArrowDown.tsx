import React from 'react';
import Svg, { Path } from 'react-native-svg';

import colors from '../../utils/colors';

const ArrowDown = ({
  size,
  fill = colors.black,
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
      <Path d='M320 384l61.8-61.8-93.5-98.2-107 106.7L32 128l149.3 128 107-112 130.9 140.8L480 224v160z' />
    </Svg>
  );
};
export default ArrowDown;
