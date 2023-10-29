import {
  SignupHeader,
  SignupBody,
  LoginRedirect,
  LineBreak,
  SignupFooter,
  SignupError,
  AuthorizationHeader,
  AuthorizationSubmit,
  AuthorizationTextbox,
  SignupVerificationContainer,
  SignupHeaderTitle,
  SubmitContainer,
} from "../Signup.styles";

const SignupVerification = (props) => {
  return (
    <SignupVerificationContainer>
      <SignupHeader>
        <SignupHeaderTitle>Verify Account</SignupHeaderTitle>
      </SignupHeader>
      <SignupBody>
        <AuthorizationHeader>
          A 6 digit code has been sent to {props.email}. Enter it to get access
          to your account.
        </AuthorizationHeader>
        <AuthorizationTextbox onChange={(e) => props.setCode(e.target.value)} />
        <SignupError>{props.verificationError}</SignupError>
        <SubmitContainer>
          <AuthorizationSubmit onClick={props.handleSignup}>
            Submit
          </AuthorizationSubmit>
          <SignupError>{props.submitError}</SignupError>
        </SubmitContainer>
      </SignupBody>
      <LineBreak />

      <SignupFooter>
        <LoginRedirect onClick={props.handleSendCode}>
          Don't see it? Resend code
        </LoginRedirect>
      </SignupFooter>
    </SignupVerificationContainer>
  );
};

export default SignupVerification;
