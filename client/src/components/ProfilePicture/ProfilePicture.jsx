import { useContext } from "react";
import { UserContext } from "../../context/user";

const ProfilePicture = (props) => {
  const [user, setUser] = useContext(UserContext);
  const profilePicture = user.data.pfp;

  const imageStyle = props.rounded ? { borderRadius: "50%" } : {};

  return (
    <img
      src={`data:${user.data.pfp.contentType};base64,${user.data.pfp.data}`}
      width={props.width}
      style={imageStyle}
    />
  );
};

export default ProfilePicture;
