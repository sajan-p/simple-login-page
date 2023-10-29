import styled from "styled-components";
import { Link } from "react-router-dom";
import { InputContainer } from "../../components/Input/Input";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const LoginHeaderContainer = styled.div`
  margin-bottom: 1.2rem;
`;

export const LoginHeaderLogo = styled.img`
  text-align: center;
  width: 5rem;
  margin-bottom: 1rem;
`;
export const LoginHeaderText = styled.h2`
  text-align: center;
`;
export const LoginBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const LineBreak = styled.div`
  border: 0.1px solid rgba(0, 0, 0, 0.05);
  margin: 1.5rem 0;
  width: 20rem;
`;

export const LoginFooterContainer = styled.div``;
export const SignupRedirect = styled(Link)`
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

export const LoginError = styled.p`
  font-size: 0.8rem;
  color: red;
`;

export const SubmitContainer = styled.div`
  width: 100%;
`;
