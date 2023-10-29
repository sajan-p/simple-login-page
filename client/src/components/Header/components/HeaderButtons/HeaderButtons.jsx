import Button, { ButtonSecondary } from "../../../Button/Button";
import {
  HeaderButtonsContainer,
  ProfilePictureContainer,
  HeaderProfile,
  HeaderButtonsElement,
} from "../../Header.styles";
// import UserMenu from "../null";
import ProfilePicture from "../../../ProfilePicture/ProfilePicture";
import ProfileDropDown from "./components/ProfileDropdown/ProfileDropDown.jsx";

const HeaderButtons = (props) => {
  return (
    <HeaderButtonsContainer>
      {props.user.data ? (
        <HeaderProfile>
          <ProfilePictureContainer onClick={props.handleShowMenu}>
            <ProfilePicture width="30px" rounded={true} />
          </ProfilePictureContainer>

          {props.showUserMenu && (
            <ProfileDropDown handleLogout={props.handleLogout} />
          )}
        </HeaderProfile>
      ) : (
        <>
          <HeaderButtonsElement to="/login">
            <Button>Log in</Button>
          </HeaderButtonsElement>
          <HeaderButtonsElement to="/signup">
            <ButtonSecondary>Sign up</ButtonSecondary>
          </HeaderButtonsElement>
        </>
      )}
    </HeaderButtonsContainer>
  );
};

export default HeaderButtons;
