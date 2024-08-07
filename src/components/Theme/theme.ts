import { ThemeConfig, extendBaseTheme } from '@chakra-ui/react';
import colors from './colors';
import { fontSize, fontWeight, lineHeight, zIndices } from './fonts';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

const themeData = {
  config: { ...config },
  colors: { ...colors },
  fontSizes: { ...fontSize },
  fontWeights: { ...fontWeight },
  lineHeights: { ...lineHeight },
  zIndices: { ...zIndices },
};

const theme = extendBaseTheme(themeData);

export default theme;
