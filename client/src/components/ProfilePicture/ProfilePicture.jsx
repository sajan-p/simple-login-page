import { useContext } from "react";
import { UserContext } from "../../context/user";

const ProfilePicture = (props) => {
  const [user, setUser] = useContext(UserContext);
  const profilePicture = user.data.pfp;

  const imageStyle = props.rounded ? { borderRadius: "50%" } : {};

  return <img src={profilePicture} width={props.width} style={imageStyle} />;
};

export default ProfilePicture;
