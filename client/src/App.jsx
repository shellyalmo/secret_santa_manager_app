import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedLayout from "./components/layout/SharedLayout";
import { AdminHome, GameSettings } from "./pages/adminPages";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<SharedLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="gamesettings" element={<GameSettings />} />
            {/* <Route path="user/:id" element={} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
