import axios from "axios";

const signup = async (inputs, errors, setErrors, callback) => {
  try {
    const { data } = await axios.post("http://localhost:6969/auth/signup", {
      email: inputs.email,
      password: inputs.password,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      code: inputs.code,
    });

    if (data.errors.length) {
      setErrors({ ...errors, code: data.errors[0].msg });
      return;
    }

    const userData = data.data;

    callback({ userData });
  } catch (error) {
    setErrors({ ...errors, button: error.response.statusText });
  }
};

export default signup;
