import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import AuthContext from "./store/Auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {!isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        {isLoggedIn && <Route path="/profile" element={<UserProfile />} />}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
