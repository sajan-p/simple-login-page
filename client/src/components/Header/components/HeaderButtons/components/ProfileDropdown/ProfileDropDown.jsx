import { BiSolidDashboard } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GiExitDoor } from "react-icons/gi";
import {
  UserItem,
  ProfileDropDownContainer,
  Username,
  ProfileDropDownContainerTip,
  LineBreak,
} from "./ProfileDropdown.styles";
import { UserContext } from "../../../../../../context/user";
import { useContext } from "react";
import ProfileDropDownInfo from "./components/ProfileDropDownInfo/ProfileDropDownInfo";
import ProfileDropDownNav from "./components/ProfileDropDownNav/ProfileDropDownNav";
const ProfileDropDown = (props) => {
  const [user, setUser] = useContext(UserContext);

  return (
    <ProfileDropDownContainer>
      <ProfileDropDownContainerTip />
      <ProfileDropDownInfo />
      <LineBreak />
      <ProfileDropDownNav handleLogout={props.handleLogout} />
    </ProfileDropDownContainer>
  );
};

export default ProfileDropDown;
