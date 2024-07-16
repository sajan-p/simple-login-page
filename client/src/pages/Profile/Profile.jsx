import { useContext } from "react";
import { ProfileContainer } from "./Profile.styles";
import { ProfileProvider } from "./ProfileContext";
import ProfileBody from "./components/ProfieBody/ProfileBody";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";

const Profile = () => {
  return (
    <ProfileProvider>
      <ProfileContainer>
        <ProfileHeader />
        <ProfileBody />
      </ProfileContainer>
    </ProfileProvider>
  );
};

export default Profile;
