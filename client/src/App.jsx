import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedLayout from "./components/layout/SharedLayout";
import { Home, About } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="user/:id" element={} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
