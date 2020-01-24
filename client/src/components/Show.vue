


<template>
	<div id="app">
  <div>
	<p style="padding-top:200px">{{sessions.name}}</p>
	<p>{{sessions.teacher}}</p>
  <p>{{sessions.description}}</p>
  <p>{{sessions.time}}</p>
  <span>
    <p style="display:inline">Email: </p>
    <input type="text" id="email_input">
  </span>
  <br/>
  <br/>
  <button v-on:click="reserve">Reserve</button>
  <p>{{confirmation_message}}</p>
	</div>
  </div>
</template>

<script>
export default {
	data: function() {
		return {
      sessions: [],
      confirmation_message: ""
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
        this.confirmation_message = "We apologize but this class is already full."
      } else {
        this.confirmation_message = "An error occured."
      }

    });
    }
  }
}
</script>

<style scoped>

#app {
  
  margin-top: -16px;

}

p {
  color: white;
}

</style>