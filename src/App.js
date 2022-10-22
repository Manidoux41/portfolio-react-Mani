import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/a-propos" element={ <About /> }/>
        <Route path="/services" element={ <Services /> }/>
        <Route path="/contact" element={ <Contact /> }/>
      </Routes>
    </div>
  );
};

export default App;