import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import Experience from "./pages/Experience";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
         background:
    "linear-gradient(73deg, #BFDFF5 23%, #FAAFDB 61%, #CA6180 100%)",
      }}
    >
      <Navbar />
      <LandingPage />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;