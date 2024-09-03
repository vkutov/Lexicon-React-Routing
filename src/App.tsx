
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/stats";
import Settings from "./pages/settings";
import NoPage from "./pages/no-page";
import Oldhome from "./pages/old-home";



// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}>
           <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/stats" element={<Stats />} />
          <Route path="dashboard/settings" element={<Settings />} />
          <Route path="*" element={<NoPage />} />
          <Route path="old-home" element={<Oldhome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
