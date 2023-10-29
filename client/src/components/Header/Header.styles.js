import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  padding: 1rem 0;
  padding: 1rem 20%;
`;

export const HeaderBrandElement = styled(Link).attrs((props) => ({
  to: props.to,
}))`
  text-decoration: none;
`;

export const HeaderBrandImage = styled.img`
  width: 4rem;
`;

export const HeaderNavElement = styled(Link).attrs((props) => ({
  to: props.to,
}))`
  text-decoration: none;
  color: inherit;
`;

export const HeaderButtonsElement = styled(Link).attrs((props) => ({
  to: props.to,
}))`
  text-decoration: none;
`;

export const ProfilePictureContainer = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const HeaderProfile = styled.div``;

export const HeaderBrandContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  text-decoration: none;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 0.25rem;
  margin-top: auto;
  margin-bottom: auto;
`;

export const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: auto;
`;
