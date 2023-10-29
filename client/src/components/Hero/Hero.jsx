import styled from "styled-components";
import Button from "../Button/Button";
import { ButtonSecondary } from "./../Button/Button";
import { useContext } from "react";
import { UserContext } from "../../context/user";
import { Link } from "react-router-dom";

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const HeroDetails = styled.div``;
const HeroShowcase = styled.div``;

const HeroTitle = styled.h1``;
const HeroSubtitle = styled.p`
  margin-bottom: 2rem;
`;
const HeroButtons = styled.div``;

const Highlight = styled.span`
  color: ${(props) => props.theme.text.secondary};
`;

const Hero = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <HeroContainer>
      <HeroDetails>
        <HeroTitle>
          Lorem ipsum <Highlight>sit amet</Highlight>
        </HeroTitle>
        <HeroSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          mollis diam nunc, eu condimentum risus pretium non. In porttitor ac
          massa non tempor.
        </HeroSubtitle>
        <HeroButtons>
          {user.data ? (
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          )}
        </HeroButtons>
      </HeroDetails>
      <HeroShowcase></HeroShowcase>
    </HeroContainer>
  );
};

export default Hero;
