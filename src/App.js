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
import { Toaster } from "react-hot-toast";
import Post from "./components/Post";
import JoinedClubs from "./components/JoinedClubs";
import PopularClubs from "./components/PopularClubs";

function App() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const value = {
    username,
    setUsername,
    name,
    setName,
    profileImage,
    setProfileImage,
  };

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Toaster
          position="bottom-center"
          reverseOrder={true}
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #2D2D2D",
              backgroundColor: "#1E1E1E",
              color: "white",
            },
          }}
        />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/club" element={<Club />} />
          <Route path="/upload" element={<UploadFileTemp />} />
          <Route path="/post" element={<Post />} />
          <Route path="/joinedclubs" element={<JoinedClubs />} />
          <Route path="/popularclubs" element={<PopularClubs />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
