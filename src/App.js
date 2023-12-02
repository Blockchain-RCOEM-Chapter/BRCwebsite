import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/NavigationBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Events from "./Components/Events/Events";
import LoadingSpinner from "./Components/Loading Spinner/LoadingSpinner";
import Team from "./Components/Team/Team";
function App() {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 3000);
  }, []);
  return (
    <>
      <Router>
        {!isLoaded && <LoadingSpinner />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
