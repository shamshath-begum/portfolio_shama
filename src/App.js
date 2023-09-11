import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";
import ProjectDisplay from "./pages/ProjectDisplay";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <div className="App"></div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;