import { Center, styled } from 'styled-system/jsx';

function LoadingSection() {
  return (
    <Center p={5} aspectRatio={1} bgColor="background.01_white">
      <styled.div
        role="status"
        aria-label="로딩 중"
        w={10}
        h={10}
        rounded="full"
        borderWidth="3px"
        borderStyle="solid"
        borderColor="neutral.04_gray"
        borderTopColor="primary.01_primary"
        animation="spin"
      />
    </Center>
  );
}

export default LoadingSection;
