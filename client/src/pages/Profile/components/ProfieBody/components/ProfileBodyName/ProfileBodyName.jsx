import { useState } from "react";

import {
  DetailsGroup,
  DetailsHeader,
  DetailsTextbox,
  SplitDetails,
} from "../../ProfileBody.styles";

const ProfileBodyName = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  return (
    <div>
      <h3>Name</h3>
      <SplitDetails>
        <DetailsGroup>
          <DetailsHeader>First Name</DetailsHeader>
          <DetailsTextbox
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </DetailsGroup>
        <DetailsGroup>
          <DetailsHeader>Last Name</DetailsHeader>
          <DetailsTextbox
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </DetailsGroup>
      </SplitDetails>
    </div>
  );
};

export default ProfileBodyName;
