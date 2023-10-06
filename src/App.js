// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import NavBar from "./components/NavBar";
// import Education from "./pages/Education";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import "./App.css";
// import ProjectDisplay from "./pages/ProjectDisplay";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <>
//       {/* <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/education" element={<Education />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/project/:id" element={<ProjectDisplay />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//       </div> */}
//     </>
//   );
// }

// export default App;


import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Education from "./components/Education";

function App() {
  let [loading, setLoading] = useState(false)


  useEffect(() => {

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <>
      {
        loading ?
          <div className="loader-app">
            <span className="loader"></span>
          </div>
          :
          <div className="home">
            < Navigation />
            <Home />
            <About />
            <Skill />
            <Projects />
            <Education/>
            <Contact />
          </div>
      }

    </>
  );
}

export default App;