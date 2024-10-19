import { TitleBoxContainer } from '@components';

const LandingPage = () => {
  return (
    <TitleBoxContainer
      title={'Hourcoding | Tools'}
      icon="app"
      display="flex"
      flexDir="column"
      rowGap={10}
      height={'100vh'}
      paddingX={10}
    ></TitleBoxContainer>
  );
};

export default LandingPage;
