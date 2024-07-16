import axios from "axios";
import { createContext, useContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    newPassword: "",
    oldPassword: "",
    picture: "",
    changedPicture: false,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs.picture);
    const formData = new FormData();
    formData.append("image", inputs.picture);
    formData.append("firstName", inputs.firstName);
    formData.append("lastName", inputs.lastName);
    formData.append("newPassword", inputs.newPassword);
    formData.append("oldPassword", inputs.oldPassword);
    formData.append("changedPicture", inputs.changedPicture);
    console.log(formData);

    const { data } = await axios.post(
      "http://localhost:6969/auth/update",
      formData
    );

    console.log(data);
  };

  return (
    <ProfileContext.Provider value={{ inputs, setInputs, onSubmit }}>
      {children}
    </ProfileContext.Provider>
  );
};
