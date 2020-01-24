


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
	</div>
</template>

<script>
export default {
	data: function() {
		return {sessions: []}
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
      
    }
  }
}
</script>