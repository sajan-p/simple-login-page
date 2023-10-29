import axios from "axios";

const sendCode = async (inputs, setErrors, callback) => {
  try {
    const { data } = await axios.post("http://localhost:6969/auth/send-code", {
      email: inputs.email,
      password: inputs.password,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
    });

    if (data.errors.length) {
      let errors = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        button: "",
        code: "",
      };

      data.errors.forEach((err) => {
        if (err.type === "password") errors.password = err.msg;
        else if (err.type === "email") errors.email = err.msg;
        else if (err.type === "firstName") errors.firstName = err.msg;
        else if (err.type === "lastName") errors.lastName = err.msg;
      });

      setErrors(errors);
      return;
    }

    callback();
  } catch (error) {
    let errors = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      button: error.response.statusText,
      code: "",
    };

    setErrors(errors);
  }
};

export default sendCode;
