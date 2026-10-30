
import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Resume from "./pages/Resume.tsx";
import Contact from "./pages/Contact.tsx";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  );
}

export default App;
