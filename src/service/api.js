import axios from "axios";
import * as CONFIG from "./config";
var options = {
  method: "GET",
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    q: CONFIG.LOCATION,
    appid: CONFIG.KEY,
    units: "metric",
  },
};

export const HTTP = axios.create(options);
// axios
//   .request(options)
//   .then(function(response) {
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });
