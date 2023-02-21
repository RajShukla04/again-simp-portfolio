import Navbar from "./Compo/Navbar/Navbar";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import Search from "./components/search/Search";
import "./App.css";
import Hero from "./Compo/Hero/Hero";
import About from "./Compo/About/About";
import Works from "./Compo/Works/Works";
import Contact from "./Compo/Contact/Contact";
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    //   {/*
    //   <div className="container">
    //   <Search onSearchChange={handleOnSearchChange}/>
    // <CurrentWeather />

    //</div>
    // */}
    <div className="container">
     {/* <Navbar /> */}
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
