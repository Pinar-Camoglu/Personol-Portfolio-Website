<template>
  <div class="homeView">
    <header class="header">
      <img src="@/assets/software-developer.png" alt="Hacker Image" />
      <h1>Welcome to my Portfolio</h1>
    </header>
    <p class="intro-text">Explore my projects and learn more about me!</p>

    <div class="links">
      <div class="link">
        <a href="https://github.com/Pinar-Camoglu?tab=repositories" target="_blank">
          <img src="@/assets/github.png" alt="Github Logo" />
        </a>
        <p class="details-text">
          You can visit my GitHub account to see detailed information and codes about the projects I have developed.
        </p>
      </div>

      <div class="link">
        <a href="https://www.linkedin.com/in/p%C4%B1nar-c-7a737a7a" target="_blank">
          <img src="@/assets/linkedin.png" alt="LinkedIn Logo" />
        </a>
        <p class="details-text">
          You can find detailed information about my knowledge and training on my LinkedIn account.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.homeView {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(to right, #ffefd5, #9b59b6);
  color: #ffffff;
  min-height: 100vh;
}

.header {
  text-align: center;
}

.header img {
  width: 150px;
  margin-bottom: 20px;
}

h1 {
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px #4a235a;
}

.intro-text {
  font-family: 'Verdana', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 40px;
  text-align: center;
  max-width: 600px;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  max-width: 800px;
}

.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.link img {
  width: 100px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.link img:hover {
  transform: scale(1.1);
}

.details-text {
  font-family: 'Verdana', sans-serif;
  font-size: 1rem;
  color: #ddd;
  max-width: 300px;
}

</style>