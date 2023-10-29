import {
  SignupHeader,
  SignupHeaderTitle,
  SignupHeaderDescription,
  SignupBody,
  LoginRedirect,
  LineBreak,
  SignupFooter,
  SignupError,
  SplitInputContainer,
  DualContainer,
  SignupActionContainer,
  SubmitContainer,
} from "../Signup.styles";

import {
  InputContainer,
  InputText,
  InputTextbox,
  InputSubmit,
} from "../../../components/Input/Input";

const SignupAction = (props) => {
  return (
    <SignupActionContainer>
      <SignupHeader>
        <SignupHeaderTitle>Sign up today!</SignupHeaderTitle>
        <SignupHeaderDescription>
          No credit-card required.
        </SignupHeaderDescription>
      </SignupHeader>
      <SignupBody>
        <DualContainer>
          <SplitInputContainer>
            <InputText>First Name</InputText>
            <InputTextbox
              placeholder="John"
              onChange={(e) => props.setFirstName(e.target.value)}
            ></InputTextbox>
            <SignupError>{props.firstNameError}</SignupError>
          </SplitInputContainer>
          <SplitInputContainer>
            <InputText>Last Name</InputText>
            <InputTextbox
              placeholder="Doe"
              onChange={(e) => props.setLastName(e.target.value)}
            ></InputTextbox>
            <SignupError>{props.lastNameError}</SignupError>
          </SplitInputContainer>
        </DualContainer>
        <InputContainer>
          <InputText>Email</InputText>
          <InputTextbox
            placeholder="Email address"
            onChange={(e) => props.setEmail(e.target.value)}
          ></InputTextbox>
          <SignupError>{props.emailError}</SignupError>
        </InputContainer>
        <InputContainer>
          <InputText>Password</InputText>
          <InputTextbox
            placeholder="Password"
            onChange={(e) => props.setPassword(e.target.value)}
          ></InputTextbox>
          <SignupError>{props.passwordError}</SignupError>
        </InputContainer>
        <SubmitContainer>
          <InputSubmit onClick={props.handleSendCode}>
            Signup to Name
          </InputSubmit>
          <SignupError>{props.submitError}</SignupError>
        </SubmitContainer>
      </SignupBody>
      <LineBreak />

      <SignupFooter>
        <LoginRedirect to="/login">
          Already have an account? Login
        </LoginRedirect>
      </SignupFooter>
    </SignupActionContainer>
  );
};

export default SignupAction;
