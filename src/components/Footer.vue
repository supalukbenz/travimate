<template>
  <div class="footer">
    <div class="credit">
      <!-- <div>Supaluk Jaroensuk</div> -->
      <img src="../assets/github.svg" />
      <a href="https://github.com/supalukbenz">Supaluk Jaroensuk</a>
    </div>
    <div class="credit">
      <!-- <div>Napasai Sutthichutipong</div> -->
      <img src="../assets/github.svg" />
      <a href="https://github.com/booknap">Napasai Sutthichutipong</a>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  background: rgb(228, 228, 228);
  width: 100%;
  height: 5rem;
  flex-shrink: 0;
  position: relative;
  bottom: 0;
  width: 10;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4rem;
  font-size: 80%;
}

.credit {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

img {
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem 0 0.5rem;
}

a {
  color: black;
  text-decoration: none;
  transition: transform 0.2s;
}

a:hover {
  color: black;
  transform: scale(1.02);
  text-decoration: none;
}
</style>
