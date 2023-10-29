import { HeaderNavContainer, HeaderNavElement } from "../../Header.styles";

const HeaderNav = () => {
  return (
    <HeaderNavContainer>
      <HeaderNavElement to="/about">About</HeaderNavElement>
      <HeaderNavElement to="/memberships">Memberships</HeaderNavElement>
      <HeaderNavElement to="/memberships">Somethingelse</HeaderNavElement>
    </HeaderNavContainer>
  );
};

export default HeaderNav;
