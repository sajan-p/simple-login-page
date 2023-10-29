import { Link } from "react-router-dom";

import {
  LoginHeaderContainer,
  LoginHeaderLogo,
  LoginHeaderText,
} from "../Login.styles";

const LoginHeader = () => {
  return (
    <LoginHeaderContainer>
      <Link to="/">
        <LoginHeaderLogo src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png" />
      </Link>
      <LoginHeaderText>Log in</LoginHeaderText>
    </LoginHeaderContainer>
  );
};

export default LoginHeader;
