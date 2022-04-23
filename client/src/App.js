import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { PrivateRoute } from "./components/PrivateRoute";

import axios from "axios";

function App() {
  const [loggedInUser, setLoggedInUser] = React.useState(null);

  React.useEffect(() => {
    const fetchIsLoggedIn = async () => {
      try {
        const res = await axios.get("http://localhost:5005/api/loggedin", {
          withCredentials: true,
        });

        setLoggedInUser(res.data);
      } catch (e) {
        setLoggedInUser(null);
      }
    };

    if (!loggedInUser) {
      fetchIsLoggedIn();
    }
  }, [loggedInUser]);

  return (
    <div className="App">
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />

      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={<Signup setLoggedInUser={setLoggedInUser} />}
          />
          <Route
            path="/login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          />

          <Route element={<PrivateRoute isAllowed={!!loggedInUser} />}>
            <Route
              path="/profile"
              element={<Profile loggedInUser={loggedInUser} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
