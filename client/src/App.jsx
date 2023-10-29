import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

// Styling
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

// Components
import Header from "./components/Header/Header";
import Footer from "./layouts/Footer/Footer";

// Pages
import Content from "./pages/Content/Content";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Memberships from "./pages/Memberships/Memberships";
import Profile from "./pages/Profile/Profile";

import AppContainer from "./layouts/AppContainer/AppContainer";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content" element={<Content />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/dashboard" element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/profile" element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
