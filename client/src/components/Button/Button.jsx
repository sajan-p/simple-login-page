import styled from "styled-components";

const Button = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.button.primary};
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: ${(props) => props.theme.text.tertiary};
  cursor: pointer;
  display: inline-flex;

  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;

  &:hover {
    filter: brightness(115%);
  }
  &:active {
    filter: brightness(150%);
  }
`;

export const ButtonSecondary = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.button.secondary};
  border: 1px solid ${(props) => props.theme.button.secondary};

  &:hover {
    background-color: brightness(70%);
  }
  &:active {
    background-color: brightness(50%);
  }
`;

export default Button;
