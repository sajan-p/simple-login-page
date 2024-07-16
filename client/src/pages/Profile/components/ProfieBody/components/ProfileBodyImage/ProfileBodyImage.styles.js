import styled from "styled-components";
import Button, {
  ButtonSecondary,
} from "../../../../../../components/Button/Button";

export const PictureProfileContainer = styled.form`
  display: flex;
  gap: 20px;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;

export const PictureContainer = styled.div`
  position: relative;
`;

export const PictureRemove = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -3px;
  right: -3px;
  background-color: rgba(256, 256, 256, 0.8);
  color: #8b0000;
  border: 1px solid #8b0000;
  border-radius: 50px;
  cursor: pointer;
`;

export const Picture = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const PictureButtons = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

export const PictureUpload = styled.input`
  display: none;
`;

export const PictureSubmit = styled(ButtonSecondary)`
  font-size: 0.7rem;
  min-height: 35px;

  margin-right: 5px;
`;

export const PictureUploadLabel = styled(Button)`
  font-size: 0.7rem;
  min-height: 35px;

  margin-right: 5px;
`;
