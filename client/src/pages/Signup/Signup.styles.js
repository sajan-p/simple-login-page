import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  InputContainer,
  InputSubmit,
  InputTextbox,
} from "../../components/Input/Input";

export const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const SignupIntroductionContainer = styled.div`
  background-color: #f1f1f1;
  padding: 4rem 4rem;
`;
export const IntroductionLogo = styled.img`
  width: 6rem;
`;
export const SignupContent = styled.div`
  padding: 4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const BrandDetail = styled.p`
  font-size: 0.8rem;
`;
export const SignupHeader = styled.div`
  margin-bottom: 2rem;
`;
export const SignupHeaderTitle = styled.h2`
  margin-bottom: 0.7rem;
`;
export const SignupHeaderDescription = styled.p`
  color: gray;
  font-size: 0.9rem;
`;
export const SignupBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LoginRedirect = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  color: ${(props) => props.theme.text.secondary};

  &:hover {
    filter: brightness(50%);
  }

  &:active {
    filter: brightness(0);
  }
`;

export const LineBreak = styled.div`
  border: 0.1px solid rgba(0, 0, 0, 0.05);
  margin: 1rem 0;
  width: 20rem;
`;

export const SignupError = styled.p`
  font-size: 0.8rem;
  color: red;
`;

export const SignupFooter = styled.div``;

export const DualContainer = styled(InputContainer)`
  display: flex;
  flex-direction: row;
  gap: 3.25rem;
`;

export const SplitInputContainer = styled(InputContainer)`
  width: 15rem;
`;

export const AuthorizationHeader = styled.p`
  font-size: 0.8rem;
`;

export const AuthorizationTextbox = styled(InputTextbox)`
  margin-bottom: -30px;
  width: 28rem;
`;

export const AuthorizationSubmit = styled(InputSubmit)`
  margin-top: 0px;
`;

export const SignupVerificationContainer = styled.div``;

export const SignupActionContainer = styled.div``;

export const SubmitContainer = styled.div``;
