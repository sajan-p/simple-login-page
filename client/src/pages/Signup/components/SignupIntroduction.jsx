import { Link } from "react-router-dom";

import {
  SignupIntroductionContainer,
  IntroductionLogo,
  BrandDetail,
} from "../Signup.styles";

const SignupIntroduction = () => {
  return (
    <SignupIntroductionContainer>
      <Link to="/">
        <IntroductionLogo src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png" />
      </Link>
      <BrandDetail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus
        odio eu orci sodales semper. Duis imperdiet sed erat quis dignissim.
        Nulla at tincidunt lectus. Integer quis consectetur lacus. Cras
        efficitur ac quam ut consectetur. Pellentesque purus massa, consequat
        quis consectetur eget, pharetra eu risus.
      </BrandDetail>
    </SignupIntroductionContainer>
  );
};

export default SignupIntroduction;
