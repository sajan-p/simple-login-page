import {
  InputContainer,
  InputText,
  InputTextbox,
  InputSubmit,
} from "../../../components/Input/Input";
import {
  LoginBodyContainer,
  LoginError,
  SubmitContainer,
} from "../Login.styles";

const LoginBody = (props) => {
  return (
    <LoginBodyContainer>
      <InputContainer>
        <InputText>Email</InputText>
        <InputTextbox
          placeholder="Email address"
          onChange={(e) => props.setEmail(e.target.value)}
        ></InputTextbox>
      </InputContainer>
      <InputContainer>
        <InputText>Password</InputText>
        <InputTextbox
          placeholder="Password"
          onChange={(e) => props.setPassword(e.target.value)}
        ></InputTextbox>
        <LoginError>{props.errors.data}</LoginError>
      </InputContainer>

      <SubmitContainer>
        <InputSubmit onClick={props.handleSubmit}>Login to Name</InputSubmit>
        <LoginError>{props.errors.button}</LoginError>
      </SubmitContainer>
    </LoginBodyContainer>
  );
};

export default LoginBody;
