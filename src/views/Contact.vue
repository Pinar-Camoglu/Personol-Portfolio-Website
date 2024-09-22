<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form Data:', this.form);
      alert(`Message sent by ${this.form.name}`);
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 40px;
  background: linear-gradient(to right, #ffefd5, #9b59b6);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px #4a235a;
}

form {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  color: #6c3483;
  margin-bottom: 10px;
  font-family: 'Verdana', sans-serif;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Verdana', sans-serif;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #8e44ad;
  box-shadow: 0 0 5px rgba(142, 68, 173, 0.5);
}

textarea {
  resize: vertical;
  height: 100px;
}

button {
  background-color: #8e44ad;
  color: #ffffff;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  font-family: 'Verdana', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
}

button:hover {
  background-color: #9b59b6;
  transform: translateY(-3px);
}

button:active {
  transform: translateY(1px);
}
</style>