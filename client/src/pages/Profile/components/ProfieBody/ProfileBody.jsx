import {
  InputContainer,
  InputText,
  InputTextbox,
  InputSubmit,
} from "../../../../components/Input/Input";

const ProfileBody = (props) => {
  return (
    <div>
      <InputContainer>
        <InputText>Email</InputText>
        <InputTextbox placeholder="Email address"></InputTextbox>
      </InputContainer>

      <InputContainer>
        <InputText>Email</InputText>
        <InputTextbox placeholder="Email address"></InputTextbox>
      </InputContainer>
      <InputContainer>
        <InputText>Password</InputText>
        <InputTextbox placeholder="Password"></InputTextbox>
        <p>Errors</p>
      </InputContainer>

      <div>
        <InputSubmit onClick={props.handleSubmit}>Login to Name</InputSubmit>
        <p>Errors</p>
      </div>
    </div>
  );
};

export default ProfileBody;
