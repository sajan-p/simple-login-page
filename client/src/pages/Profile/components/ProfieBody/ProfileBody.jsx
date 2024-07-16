import PB, {
  Container,
  Delete,
  DetailsContainer,
  Submit,
} from "./ProfileBody.styles";
import { UserContext } from "../../../../context/user";
import { useContext, useEffect } from "react";
import { ProfileContext } from "./../../ProfileContext";
import ProfileBodyImage from "./components/ProfileBodyImage/ProfileBodyImage";
import ProfileBodyName from "./components/ProfileBodyName/ProfileBodyName";
import ProfileBodyPassword from "./components/ProfileBodyPassword/ProfileBodyPassword";

const ProfileBody = (props) => {
  return (
    <Container>
      <DetailsContainer>
        <ProfileBodyImage />
        <ProfileBodyName />
        <ProfileBodyPassword />
      </DetailsContainer>

      <Submit type="submit">Save Information</Submit>
      <Delete>Delete Account</Delete>
    </Container>
  );
};

export default ProfileBody;
