import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./screens/Users/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
