<template>
  <div class="main-card">
    <div class="date-container">
      <h1>Monday</h1>
      <h2>Nov 3, 2020</h2>
    </div>
    <div class="icon-container">
      <img src="../assets/sunny.png" class="icon" />
    </div>
    <div class="temp-container">
      <h2>day 25°C</h2>
      <h2>night 20°C</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-card {
  display: flex;
  flex-direction: row;
  width: 1000px;
  height: 200px;
  background-color: rgb(189, 189, 189);
  opacity: 0.5;
  border-radius: 10px;
  margin: 40px 0px 40px 0px;
  transition: transform .2s;
}

.main-card:hover {
  transform: scale(1.02);
}

.icon {
  height: 50%;
}

.date-container {
  width: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
}

h1 {
  display: inline-block;
  vertical-align: middle;
}

.icon-container {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: black; */
}

.temp-container {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: blue; */
}
</style>
