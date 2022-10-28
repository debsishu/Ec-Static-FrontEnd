import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Club from "./pages/Club";
import GlobalStyle from "./styles/globalStyles";
import { UserContext } from "./context/Context";
import { useState } from "react";
import UploadFileTemp from "./pages/UploadFileTemp";

function App() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const value = { username, setUsername, name, setName };

  return (
    <UserContext.Provider value={value}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/club" element={<Club />} />
          <Route path="/upload" element={<UploadFileTemp />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
