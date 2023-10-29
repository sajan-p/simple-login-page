import { useContext } from "react";
import {
  ProfileDropDownInfoContainer,
  ProfileDropDownPicture,
  ProfileDropDownInfoText,
  ProfileDropDownInfoUsername,
  ProfileDropDownInfoEmail,
} from "./ProfileDropDownInfo.styles";
import { UserContext } from "../../../../../../../../context/user";

const ProfileDropDownInfo = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <ProfileDropDownInfoContainer>
      <ProfileDropDownPicture />
      <ProfileDropDownInfoText>
        <ProfileDropDownInfoUsername>
          {user.data.firstName} {user.data.lastName}
        </ProfileDropDownInfoUsername>
        <ProfileDropDownInfoEmail>{user.data.email}</ProfileDropDownInfoEmail>
      </ProfileDropDownInfoText>
    </ProfileDropDownInfoContainer>
  );
};

export default ProfileDropDownInfo;
