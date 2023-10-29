import { useLocation, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/user";
import HeaderBrand from "./components/HeaderBrand/HeaderBrand";
import { HeaderContainer } from "./Header.styles";
import HeaderButtons from "./components/HeaderButtons/HeaderButtons";
import HeaderNav from "./components/HeaderNav/HeaderNav";

const Header = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];
  const [user, setUser] = useContext(UserContext);
  const [showUserMenu, setShowUserMenu] = useState(true);

  useEffect(() => {
    setShowUserMenu(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser({ data: null, loading: false, erro: false });
  };

  const handleShowMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <HeaderContainer>
      <HeaderBrand />
      <HeaderNav />
      <HeaderButtons
        user={user}
        handleShowMenu={handleShowMenu}
        showUserMenu={showUserMenu}
        handleLogout={handleLogout}
      />
    </HeaderContainer>
  );
};

export default Header;
