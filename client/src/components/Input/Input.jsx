import { styled } from "styled-components";
import Button from "../Button/Button";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
`;
export const InputText = styled.p`
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
`;
export const InputTextbox = styled.input`
  height: 1.5rem;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  border: 0.5px solid lightgray;

  &:focus-visible {
    outline: none;
    border: 0.5px solid gray;
    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
  }
`;

export const InputSubmit = styled(Button)`
  width: 100%;
  border-radius: 5px;
`;
