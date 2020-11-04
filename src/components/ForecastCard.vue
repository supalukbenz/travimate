<template>
  <div class="main-card-container">
    <div class="shadow main-card bg-light py-1">
      <div class="date-container-forecast">
        <div class="day-name-card">
          {{ new Date(weatherInfo.dt * 1000).toLocaleDateString('th-TH', { weekday: 'long' }) }}
        </div>
        <div class="d-flex full-date">
          <div class="pr-1">{{ new Date(weatherInfo.dt * 1000).getDate() }}</div>
          <div class="pr-1">
            {{ new Date(weatherInfo.dt * 1000).toLocaleDateString('th-TH', { month: 'short' }) }}
          </div>
          <div>
            {{ new Date(weatherInfo.dt * 1000).toLocaleDateString('default', { year: 'numeric' }) }}
          </div>
        </div>
      </div>
      <div class="icon-forecast-container">
        <img :src="imgUrl(weatherInfo.weather[0].icon)" class="icon-forecast-card" />
        <div>{{ weatherInfo.weather[0].description }}</div>
      </div>
      <div class="temp-container">
        <div class="day-icon-forecast">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-brightness-high-fill"
            fill="#EF810E"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
            <path
              fill-rule="evenodd"
              d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
            />
          </svg>
          <div class="mt-1">{{ weatherInfo.temp.day }}°C</div>
        </div>
        <div class="night-icon-forecast">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-moon"
            fill="#fbecb8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
            />
          </svg>
          <div class="mt-1">{{ weatherInfo.temp.night }}°C</div>
        </div>
      </div>
    </div>
    <!-- <svg
      width="2em"
      height="2em"
      viewBox="0 0 16 16"
      class="bi bi-check2-circle"
      fill="#32CD32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
      />
      <path
        fill-rule="evenodd"
        d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
      />
    </svg> -->
  </div>
</template>

<script>
export default {
  props: ['weatherInfo'],
  methods: {
    imgUrl(icon) {
      return 'http://openweathermap.org/img/wn/' + icon + '.png';
    },
  },
};
</script>

<style>
.main-card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.full-date {
  font-size: 1rem;
}

.main-card {
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 4rem;
  background-color: #707070;
  /* opacity: 0.5; */
  border-radius: 10px;
  margin: 0.8rem 0;
  transition: transform 0.2s;
  margin-right: 1em;
}

.main-card:hover {
  transform: scale(1.02);
}

.icon-forecast-card {
  height: 100%;
}

h1 {
  display: inline-block;
  vertical-align: middle;
}

.day-name-card {
  font-weight: normal;
  font-size: 70%;
}

.date-container-forecast {
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 120%;
}

.icon-forecast-container {
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* font-weight: bold; */
  font-size: 100%;
}

.temp-container {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1%;
}

.day-icon-forecast {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: #e5de44;
  border-radius: 10px 0px 0px 10px;
}

.night-icon-forecast {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: #053752;
  border-radius: 0px 10px 10px 0px;
  color: white;
}
</style>
