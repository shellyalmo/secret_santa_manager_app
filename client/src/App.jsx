import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedLayout from "./components/layout/SharedLayout";
import { AdminHome, GameSettings, AdminCurrentGame } from "./pages/adminPages";
import { UserHome, UserCurrentGame } from "./pages/userPages";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/admin" element={<SharedLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="gamesettings" element={<GameSettings />} />
            <Route path="game/:id" element={<AdminCurrentGame />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
          <Route path="/user" element={<SharedLayout />}>
            <Route index element={<UserHome />} />
            <Route path="game/:id" element={<UserCurrentGame />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
