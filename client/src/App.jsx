import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedLayout from "./components/layout/SharedLayout";
import { GameSettings, AdminCurrentGame } from "./pages/adminPages";
import { UserHome, UserCurrentGame } from "./pages/userPages";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin" element={<SharedLayout />}>
            <Route path="gamesettings" element={<GameSettings />} />
            <Route path="game/:id" element={<AdminCurrentGame />} />
          </Route>
          <Route path="/user" element={<SharedLayout />}>
            <Route index element={<UserHome />} />
            <Route path="game/:id" element={<UserCurrentGame />} />
          </Route>
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
