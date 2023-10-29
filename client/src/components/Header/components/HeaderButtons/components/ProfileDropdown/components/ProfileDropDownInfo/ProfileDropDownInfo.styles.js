import styled from "styled-components";
import ProfilePicture from "../../../../../../../../components/ProfilePicture/ProfilePicture";

export const ProfileDropDownInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ProfileDropDownPicture = styled(ProfilePicture).attrs(() => ({
  width: 50,
  rounded: true,
}))`
  height: 10px;
`;
export const ProfileDropDownInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ProfileDropDownInfoUsername = styled.h3`
  font-weight: 800;
`;
export const ProfileDropDownInfoEmail = styled.p``;
