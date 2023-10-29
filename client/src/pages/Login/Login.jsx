import { useNavigate } from "react-router-dom";
import { LoginContainer, LineBreak } from "./Login.styles";

import LoginHeader from "./components/LoginHeader";
import LoginBody from "./components/LoginBody";
import LoginFooter from "./components/LoginFooter";

import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/user";
import login from "./utils/login";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    data: "",
    button: "",
  });

  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    login(inputs, errors, setErrors, (data) => {
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
    <LoginContainer>
      <LoginHeader />
      <LoginBody
        setEmail={(email) => setInputs({ ...inputs, email })}
        setPassword={(password) => setInputs({ ...inputs, password })}
        errors={errors}
        handleSubmit={handleSubmit}
      />
      <LineBreak />
      <LoginFooter />
    </LoginContainer>
  );
};

export default Login;
