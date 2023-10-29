import { ProfileContainer } from "./Profile.styles";
import ProfileBody from "./components/ProfieBody/ProfileBody";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileHeader />
      <ProfileBody />
    </ProfileContainer>
  );
};

export default Profile;
