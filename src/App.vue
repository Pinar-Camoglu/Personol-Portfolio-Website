<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  background-color: #8e44ad; /* Mor arka plan rengi */
  padding: 10px;
}

nav a {
  color: white; /* Metin rengini beyaz yap */
  margin: 0 15px;
  text-decoration: none;
}

nav a:hover {
  color: #e0e0e0; /* Hover etkisiyle rengi biraz aç */
  text-decoration: underline;
}

/* Media Queries for Responsive Design */

/* Mobile devices (small screens) */
@media only screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 10px;
  }

  .app-title {
    font-size: 28px;
  }

  .city-input {
    width: 100%;
  }

  .fetch-button {
    width: 100%;
    margin-top: 10px;
  }

  .weather-details {
    flex-direction: column;
    align-items: center;
  }

  .weather-icon {
    width: 100px;
    height: 100px;
  }

  .weather-text {
    text-align: center;
  }
}

/* Tablets (medium screens) */
@media only screen and (min-width: 601px) and (max-width: 900px) {
  .container {
    padding: 15px;
  }

  .app-title {
    font-size: 32px;
  }

  .city-input {
    width: 90%;
  }

  .fetch-button {
    width: auto;
    margin-top: 10px;
  }

  .weather-details {
    flex-direction: row;
    justify-content: center;
  }

  .weather-icon {
    width: 110px;
    height: 110px;
  }
}
</style>
