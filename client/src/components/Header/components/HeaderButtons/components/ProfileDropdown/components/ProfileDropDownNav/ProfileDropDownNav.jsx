import {
  ProfileDropDownNavContainer,
  ProfileDropDownGroup,
  DropDownIcon,
  DropDownText,
} from "./ProfileDropDownNav.styles";
import { BsFillPersonFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const ProfileDropDownNav = (props) => {
  return (
    <ProfileDropDownNavContainer>
      <ProfileDropDownGroup>
        <DropDownIcon>
          <BsFillPersonFill size="1.7em" color="#1C3C5E" />
        </DropDownIcon>
        <DropDownText to="/profile">Profile</DropDownText>
      </ProfileDropDownGroup>

      <ProfileDropDownGroup>
        <DropDownIcon>
          <MdSpaceDashboard size="1.7rem" color="#1C3C5E" />
        </DropDownIcon>
        <DropDownText to="/dashboard">Dashboard</DropDownText>
      </ProfileDropDownGroup>

      <ProfileDropDownGroup>
        <DropDownIcon>
          <IoLogOut size="1.7rem" color="#1C3C5E" />
        </DropDownIcon>
        <DropDownText onClick={props.handleLogout}> Sign out</DropDownText>
      </ProfileDropDownGroup>
    </ProfileDropDownNavContainer>
  );
};

export default ProfileDropDownNav;
