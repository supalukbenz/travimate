import axios from 'axios';

const api_key = '881c89dd443666aaa936f0367b046e92';
const excludes = 'minutely,hourly,alerts';
const lang = 'th';

async function getWeatherForecast(lat, lon) {
  const response = await axios.get(
    `onecall?lat=${lat}&lon=${lon}&exclude=${excludes}&appid=${api_key}&lang=${lang}`
  );
  return response.data;
}

export { getWeatherForecast };
