


<template>
	<div>
	<p>{{$route.params.id}}</p>
	<p>{{sessions.name}}</p>
  <span>
    email:
    <input type="text" id="email_input">
  </span>
  <br>
  <button v-on:click="reserve">Reserve</button>
  <p>{{confirmation_message}}</p>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
      sessions: [],
      confirmation_message: "confirmed"
    }
	},
  created () {
    fetch('http://localhost:3000/sessions/' + this.$route.params.id.toString() )
      .then(response => response.json())
      .then(json => {
		this.sessions = json
      })
  },
  methods: {
    reserve: function () {
      const data = {
      "email": document.getElementById('email_input').value,
      "session_id": this.$route.params.id
      };

    let dataString = JSON.stringify(data);

    fetch('http://localhost:3000/reservations', {
      method: 'POST',
      body: dataString,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      if (response.status == 201) {
        this.confirmation_message = "Your reservation was successfully completed! See ya soon!"
      } else if (response.status == 503) {
        this.confirmation_message = "We apologize but that class is already full."
      } else {
        this.confirmation_message = "An error occured."
      }

    });
    }
  }
}
</script>

<style scoped>
.wrapper, html, body {
    height: 100%;
    margin: 0;
}

p {
  color: green;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

}
</style>