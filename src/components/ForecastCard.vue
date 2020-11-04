<template>
  <div class="shadow main-card bg-light">
    <div class="date-container">
      <div>{{ day }}</div>
      <div>{{ date }}</div>
    </div>
    <div class="icon-container">
      <img src="http://openweathermap.org/img/wn/02d.png" class="icon" />
      <div>{{ weather }}</div>
    </div>
    <div class="temp-container">
      <div class="day">
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
        <div>day {{ dayTemp }}°C</div>
      </div>
      <div class="night">
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
        <div>night {{ nightTemp }}°C</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['day', 'date', 'weather', 'dayTemp', 'nightTemp'],
};
</script>

<style>
.main-card {
  display: flex;
  flex-direction: row;
  /* width: 50vw; */
  height: 5vw;
  background-color: #707070;
  /* opacity: 0.5; */
  border-radius: 10px;
  margin: 15px 0px 15px 0px;
  transition: transform 0.2s;
  
}

.main-card:hover {
  transform: scale(1.02);
}

.icon {
  height: 30%;
}

h1 {
  display: inline-block;
  vertical-align: middle;
}

.date-container {
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-container {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.temp-container {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1%;
}

.day {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color:#E5DE44;
  border-radius: 10px 0px 0px 10px;
}

.night {
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
