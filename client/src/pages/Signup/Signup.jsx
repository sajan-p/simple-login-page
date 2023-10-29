import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user";

import axios from "axios";

import SignupAction from "./components/SignupAction";
import SignupIntroduction from "./components/SignupIntroduction";
import SignupVerification from "./components/SignupVerification";

import { SignupContainer, SignupContent } from "./Signup.styles";

import sendCode from "./utils/send-code";
import signup from "./utils/signup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    button: "",
    code: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    button: "",
    code: "",
  });

  const [showVerification, setShowVerification] = useState(false);

  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const handleSendCode = () => {
    sendCode(inputs, setErrors, () => {
      setShowVerification(true);
    });
  };

  const handleSignup = () => {
    signup(inputs, errors, setErrors, ({ userData: data }) => {
      setUser({
        data: {
          id: data.user.id,
          email: data.user.email,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          pfp: data.user.pfp,
        },
        loading: false,
        error: null,
      });

      axios.defaults.headers.common["authorization"] = `Bearer ${data.token}`;

      localStorage.setItem("token", data.token);
      navigate("/");
    });
  };

  return (
    <SignupContainer>
      <SignupIntroduction />
      <SignupContent>
        {showVerification ? (
          <SignupVerification
            email={inputs.email}
            setCode={(code) => setInputs({ ...inputs, code })}
            verificationError={errors.code}
            submitError={errors.button}
            handleSignup={handleSignup}
            handleSendCode={handleSendCode}
          />
        ) : (
          <SignupAction
            setFirstName={(firstName) => setInputs({ ...inputs, firstName })}
            setLastName={(lastName) => setInputs({ ...inputs, lastName })}
            setEmail={(email) => setInputs({ ...inputs, email })}
            setPassword={(password) => setInputs({ ...inputs, password })}
            firstNameError={errors.firstName}
            lastNameError={errors.lastName}
            emailError={errors.email}
            passwordError={errors.password}
            submitError={errors.button}
            handleSendCode={handleSendCode}
          />
        )}
      </SignupContent>
    </SignupContainer>
  );
};

export default Signup;
