import React from "react";

import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "e8a16cf3e04b48da54db2d22392ce2b1";

class App extends React.Component {

  gettingWeather = async () => {
    const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);

    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
      );
  }
}

export default App;