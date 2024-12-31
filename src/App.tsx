import { Route, Routes } from "react-router-dom";
import {
  CaptainHomePage,
  CaptainLogin,
  CaptainSignup,
  StartPage,
  UserHomePage,
  UserLogin,
  UserSignup,
} from "./pages";
import {
  UserProtectWrapper,
  UserLogout,
  CaptainProtectWrapper,
  CaptainLogout,
} from "./components/molecules";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/user/signup" element={<UserSignup />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/captain/signup" element={<CaptainSignup />} />
      <Route path="/captain/login" element={<CaptainLogin />} />
      <Route
        path="/user/home"
        element={
          <UserProtectWrapper>
            <UserHomePage />
          </UserProtectWrapper>
        }
      />
      <Route
        path="/captain/home"
        element={
          <CaptainProtectWrapper>
            <CaptainHomePage />
          </CaptainProtectWrapper>
        }
      />

      <Route
        path="/user/logout"
        element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }
      />

      <Route
        path="/captain/logout"
        element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        }
      />
    </Routes>
  );
};

export default App;
