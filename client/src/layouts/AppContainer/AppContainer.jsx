import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../context/user";
import LoadingBar from "../../components/LoadingBar/LoadingBar";

const AppContainer = ({ children }) => {
  const [user, setUser] = useContext(UserContext);

  return user.loading ? <LoadingBar /> : <>{children}</>;
};

export default AppContainer;
