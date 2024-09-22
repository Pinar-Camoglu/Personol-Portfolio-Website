<template>
  <div class="about-container">
    <div class="about-card">
      <h1>About Me</h1>
      <p>Hello. I am studying computer engineering at Ondokuz Mayıs University. I have completed my third year. I have a GPA of <span class="highlight">2.97</span>.</p>
      <p>I am proficient in <span class="highlight">Java, Ruby, C/C++, Dart</span> languages. I have done mobile application projects with Flutter. I took part in simple...</p>
      <p>After graduating from school, I aim to work in a company that will contribute to me and improve myself further.</p>
      <a href="#contact" class="contact-button">Contact Me</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #ffefd5	, #9b59b6	); /* Arka planda gradyan geçiş */
  padding: 20px;
}

.about-card {
  background-color: #e6e6fa;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 600px;
  text-align: center;
  transition: transform 0.3s ease;
}

.about-card:hover {
  transform: translateY(-10px);
}

.about-card h1 {
  font-size: 2.8em;
  color: #333;
  margin-bottom: 25px;
  background: -webkit-linear-gradient(#800080, #9370db); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Gradyan başlık için */
}

.about-card p {
  font-size: 1.2em;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
}

.highlight {
  color: #9370db;
  font-weight: bold;
}

.contact-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #800080;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #9370db;
}
</style>