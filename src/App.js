import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Club from "./pages/Club";
import Post from "./components/Post";
import GlobalStyle from "./styles/globalStyles";
import { UserContext } from "./context/Context";
import { useState } from "react";
import JoinedClubs from "./components/JoinedClubs";

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
          <Route path="/post" element={<Post />} />
          <Route path="/joinedclubs" element={<JoinedClubs />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
