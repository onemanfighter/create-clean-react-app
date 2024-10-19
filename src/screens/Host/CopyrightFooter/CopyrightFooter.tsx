import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { COPYRIGHT_FOOTER_VERTICAL_PADDING } from './constants';

const CopyrightFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <Box py={COPYRIGHT_FOOTER_VERTICAL_PADDING}>
      <Text textAlign={'center'}>
        {t('Footer.copyrightText', { year: currentYear })}
      </Text>
    </Box>
  );
};

export default CopyrightFooter;
