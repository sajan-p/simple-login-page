import { useContext, useEffect, useState } from "react";
import {
  Picture,
  PictureButtons,
  PictureContainer,
  PictureRemove,
  PictureUpload,
  PictureUploadLabel,
  PictureSubmit,
  PictureProfileContainer,
} from "./ProfileBodyImage.styles";
import { UserContext } from "../../../../../../context/user";
import { RxCross1 } from "react-icons/rx";
import { isValidImage } from "./utils/isValidImage";
import axios from "axios";

const ProfileBodyImage = () => {
  const [picture, setPicture] = useState();
  const [user, setUser] = useContext(UserContext);

  const savePicture = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", picture);

    if (
      picture ===
      "https://s.gravatar.com/avatar/1d3b36dd72493368071ebb88e969479c?d=mm"
    ) {
      const { data } = await axios.post(
        "http://localhost:6969/auth/remove-pfp",
        {}
      );

      console.log(data);
      return;
    }

    const { data } = await axios.post(
      "http://localhost:6969/auth/update-pfp",
      formData,
      {}
    );

    console.log(data);
  };

  const renderPicture = () => {
    if (picture instanceof Blob) {
      return URL.createObjectURL(picture);
    } else {
      return picture;
    }
  };

  const uploadPicture = (image) => {
    if (isValidImage(image)) {
      setPicture(image);
    }
  };

  const removePicture = (e) => {
    e.preventDefault();
    setPicture(
      "https://s.gravatar.com/avatar/1d3b36dd72493368071ebb88e969479c?d=mm"
    );
  };

  useEffect(() => {
    // setPicture(user.data.pfp);

    const base64String = user.data.pfp.data;
    // Extract the Base64 content
    const base64Content = base64String.split(";base64,").pop();
    // Convert Base64 to binary data
    const binaryData = atob(base64Content);
    // Create a Uint8Array from the binary data
    const arrayBuffer = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      arrayBuffer[i] = binaryData.charCodeAt(i);
    }
    // Create a Blob from the Uint8Array
    const blob = new Blob([arrayBuffer], { type: "image/png" });
    console.log(blob); // Now you have a Blob object
    setPicture(blob);
  }, []);

  return (
    <div>
      <h3>Profile Picture</h3>
      <PictureProfileContainer onSubmit={savePicture}>
        <PictureContainer>
          <PictureRemove onClick={removePicture}>
            <RxCross1 />
          </PictureRemove>
          <Picture width="50px" src={renderPicture()} />
        </PictureContainer>
        <PictureButtons>
          <PictureUpload
            as="input"
            type="file"
            accept="image/*"
            id="upload"
            onChange={({ target: { files } }) => uploadPicture(files[0])}
          />
          <PictureUploadLabel as="label" htmlFor="upload">
            Upload Photo
          </PictureUploadLabel>
          <PictureSubmit onClick={savePicture}>Save Photo</PictureSubmit>
        </PictureButtons>
      </PictureProfileContainer>{" "}
    </div>
  );
};

export default ProfileBodyImage;
