import { TitleBoxContainer } from '@components';
import { ThemeIcon } from '@components';

const LandingPage = () => {
  return (
    <TitleBoxContainer
      title={'Template-boilerplate'}
      icon="app"
      display="flex"
      flexDir="column"
      rowGap={10}
      height={'100vh'}
      paddingX={10}
    >
      <ThemeIcon />
    </TitleBoxContainer>
  );
};

export default LandingPage;
