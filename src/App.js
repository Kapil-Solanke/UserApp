import { Route, Routes } from "react-router-dom";

import CreateTaskPage from "./pages/createTask";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/addemployee" element={<CreateTaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
