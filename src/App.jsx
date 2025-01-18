import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Education from "./Components/Education";

function App() {
  return (
    <>
      <div className="bg-blue-50 px-5 py-5 md:px-10">
        <Navbar />
        <Home />
        <Education />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
