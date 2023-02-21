import "./CurrentWeather.css";
import pic from "../../assets/01d.png";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">London</p>
          <p className="weather_description">Sunny</p>
        </div>
        <img src={pic} alt="weather" className="weather_icon" />
      </div>
      <div className="bottom">
        <p className="temp">18°</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
