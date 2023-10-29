import { LoginFooterContainer, SignupRedirect } from "../Login.styles";

const LoginFooter = () => {
  return (
    <LoginFooterContainer>
      <SignupRedirect to="/signup">
        Don't have an account? Create Account
      </SignupRedirect>
    </LoginFooterContainer>
  );
};

export default LoginFooter;
