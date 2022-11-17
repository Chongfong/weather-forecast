const apiKey = process.env.REACT_APP_OPENWEATHER_APIKEY;

const api = {
  hostname: 'http://api.openweathermap.org/',
  async getWeather(lat: number, lon: number) {
    return fetch(
      `${this.hostname}/data/2.5/forecast?lat=${lat.toString()}&lon=${lon.toString()}&appid=${apiKey}&units=metric`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    });
  },
  async getPosition(city: string) {
    return fetch(`${this.hostname}/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    });
  },
};

export default api;
