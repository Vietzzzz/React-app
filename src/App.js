import "./App.css";
import Home from "./components/Home";
import Benefit from "./components/Benefit";
import Proficiencies from "./components/Proficiencies";
import Testimonial from "./components/Testimonial";
import Question from "./components/Question";
import BoxContact from "./components/BoxContact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home/> 
      <Benefit/>
      <Proficiencies/>
      <Testimonial/>
      <Question/>
      <BoxContact/>
      <Footer/>
    </div>
  );
}

export default App;
