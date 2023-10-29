import axios from "axios";

const login = async (inputs, errors, setErrors, callback) => {
  try {
    const { data } = await axios.post("http://localhost:6969/auth/login", {
      email: inputs.email,
      password: inputs.password,
    });

    if (data.errors.length) {
      setErrors({ button: "", data: data.errors[0].msg });
      return;
    }

    const userData = data.data;

    callback(userData);
  } catch (error) {
    setErrors({ data: "", button: error.response.statusText });
  }
};

export default login;
