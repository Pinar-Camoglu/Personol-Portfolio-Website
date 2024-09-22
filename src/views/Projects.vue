<template>
  <div class="projects">
    <h1>My Projects</h1>
    <div class="project-cards">
      <div class="card" v-for="(project, index) in projects" :key="index">
        <h3>{{ project.name }}</h3>
        <p class="description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        { name: 'Airline Reservation System', description: 'I coded two synchronous and asynchronous airline reservation systems in Java.' },
        { name: 'Procurement Mobile Application', description: 'I developed a mobile application that provides product supply using Flutter.' },
        { name: 'Project Management System', description: 'I have developed a website where projects can be added. It indicates the status of the project with three star ratings.' },
        { name: 'Greengrocer Application', description: 'I am developed an application where people can buy fruits and vegetables.' },
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 40px;
  background: linear-gradient(to right, #ffefd5, #9b59b6);
  min-height: 100vh;
}

h1 {
  text-align: center;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px #4a235a;
}

.project-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
}

.card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

h3 {
  color: #6c3483;
  margin-bottom: 10px;
  font-family: 'Verdana', sans-serif;
  text-align: center;
  transition: color 0.3s ease;
}

.card:hover h3 {
  color: #bb8fce;
}

.description {
  color: #555;
  font-family: 'Verdana', sans-serif;
  margin-top: 20px;
  text-align: justify;
  display: none;
  transition: opacity 0.3s ease;
}

.card:hover .description {
  display: block;
  opacity: 1;
}

.card:hover h3 {
  margin-bottom: 30px;
}
</style>