<template>
  <div id="app-bg" class="p-1">
    <div v-if="weather" class="text-center text-white weather-card w-80 rounded-md m-auto p-4 mt-28 flex flex-col justify-center">
      <p class="mb-3">
        {{ date }}
      </p>
      <p class="">
        <span>{{ weather.name }}, </span>
        <span>{{ weather.sys.country }}</span>
      </p>
      <h1 class="pt-5 mb-10 flex flex-col">
        <span class="text-6xl">{{ weather.main.temp }}<sup>&deg;</sup></span>
        <span class="text-xl pt-2">{{ weather.weather[0].main }}</span>
      </h1>
      <div class="flex justify-between">
        <p>
          <span>Humidity: </span>
          <span>{{ weather.main.humidity }}%</span>
        </p>
        <p>
          <span>Wind: </span>
          <span>{{ weather.wind.speed }}km/h</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "./service/api";
import { PERIOD } from "./service/config";
import moment from "moment";
export default {
  data() {
    return {
      weather: null,
      date: moment().format("MMMM Do, hh:mm A"),
    };
  },
  created() {
    // HTTP.defaults.params.q = "Karachi";
    this.getWeather();
  },
  methods: {
    getWeather() {
      this.date = moment().format("MMMM Do, hh:mm A");
      HTTP.get().then((res) => {
        this.weather = res.data;
      });
      setInterval(() => {
        this.getWeather();
      }, PERIOD);
    },
  },
};
</script>
<style>
#app-bg {
  height: 100vh;
  background: url("./assets/sky.jpg");
  background-size: cover;
  /* background: linear-gradient(to top right, #059dcf, rgb(15, 166, 216) 0, #00d0ff); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.weather-card {
  background: rgba(15, 166, 216, 0.4);
  backdrop-filter: saturate(180%) blur(10px);
}
</style>
