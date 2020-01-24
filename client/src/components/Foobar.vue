<template>
<html>

<head>
  <title>o-p-e-n</title>
  <!-- <link rel="stylesheet" href="/stylesheets/style.css"> -->
</head>

<body>


  <div id="app">

      <div class="wrapper">

      <header>
        <div class="header_container">
          <p>o</p>
          <p>p</p>
          <p>e</p>
          <p>n</p>
        </div>

      </header>

      <section>
        <nav>
          <li v-for="session in sessions" :key="session._id">
            <router-link :to="{ name: 'show', params: { id: session._id }}">
            {{session.teacher}}
            {{session.name}} 
            {{session.time}}
            {{session.duration}} minutes
          </router-link>
          </li>
        </nav>
        
        <article>
          <p>put the logo here</p>
        </article>
      </section>

      <footer>
        <div class="header_container">
          <p>BE PRESENT, TOGETHER</p>
          <p>FOLLOW ON INSTAGRAM</p>
          <p>OPEN ROLES</p>
          <p>SF, CA</p>
        </div>
      </footer>

      </div>

    
  </div>



</body>

</html>

</template>

<script>
export default {
	data: function() {
		return {sessions: []}
	},
  created () {
    fetch('http://localhost:3000/sessions')
      .then(response => response.json())
      .then(json => {
		this.sessions = json
      })
  }
}
</script>
