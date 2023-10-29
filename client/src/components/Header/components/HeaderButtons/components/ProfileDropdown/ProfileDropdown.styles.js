import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ProfileDropDownContainer = styled.div`
  box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%),
    0 1.2px 3.6px 0 rgb(0 0 0 / 11%);
  padding: 2rem 1.5rem;
  position: absolute;
  top: 5rem;
  right: 20%;
  transform: translateX(27px);
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.4rem;
  z-index: 100;
`;

export const ProfileDropDownContainerTip = styled.div`
  position: absolute;

  border: 0.8em solid black;
  border-color: transparent transparent white white;
  transform-origin: 0 0;
  transform: rotate(135deg);
  box-shadow: -3px 3px 3px 0 rgb(0 0 0 / 6%);

  top: 0;
  right: 0;
`;

export const LineBreak = styled.div`
  border: 0.1px solid rgba(0, 0, 0, 0.05);
  margin: 1rem 0;
  width: 20rem;
`;

export const Username = styled.h4`
  color: ${(props) => props.theme.text.secondary};
`;
