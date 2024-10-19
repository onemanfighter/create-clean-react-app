import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { CopyrightFooter } from './CopyrightFooter';

const Host = () => {
  return (
    <Box minH={'100vh'}>
      <Outlet />
      <CopyrightFooter />
    </Box>
  );
};

export default Host;
