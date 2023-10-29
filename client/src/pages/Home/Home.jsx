import styled from "styled-components";

import Hero from "../../components/Hero/Hero";

const HomeContainer = styled.div`
  padding: 0 20%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
};

export default Home;
