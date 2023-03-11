import styled from 'styled-components';

import Contact from './Contact';
import Hero from './Hero';
import Skills from './Skills';
import WhoAmI from './WhoAmI';

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <WhoAmI />
      <Skills />
      <Contact />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  height: 90vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;
