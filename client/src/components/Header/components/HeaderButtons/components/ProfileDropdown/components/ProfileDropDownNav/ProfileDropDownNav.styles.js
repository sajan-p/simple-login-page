import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileDropDownNavContainer = styled.div``;
export const ProfileDropDownGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const DropDownIcon = styled.div``;
export const DropDownText = styled(Link)`
  color: ${(props) => props.theme.text.secondary};
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    filter: brightness(70%);
  }
  &:active {
    filter: brightness(50%);
  }
`;
