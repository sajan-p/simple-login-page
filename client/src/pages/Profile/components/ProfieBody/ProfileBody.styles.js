import styled from "styled-components";
import Button, { ButtonSecondary } from "../../../../components/Button/Button";
import { InputTextbox, InputText } from "../../../../components/Input/Input";

export const Container = styled.div``;

export const DetailsContainer = styled.div``;

export const DetailsGroup = styled.div`
  margin-bottom: 2rem;
`;

export const DetailsHeader = styled(InputText)``;

export const DetailsTextbox = styled(InputTextbox)``;

export const SplitDetails = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Submit = styled(Button)`
  margin-right: 1rem;
`;
export const Delete = styled(Button)`
  background-color: #8b0000;
`;
