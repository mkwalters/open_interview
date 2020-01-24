<template>
<!-- <html>

<head>
  <title>o-p-e-n</title>
  <link rel="stylesheet" href="/stylesheets/style.css">
</head>

<body>
 -->

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
          <img alt="Vue logo" src="./../assets/logo.png">
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

<!-- </body>

</html> -->

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


<style scoped>
body {
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}
.wrapper, html, body {
    height: 100%;
    margin: 0;
}
.wrapper {
    display: flex;
    flex-direction: column;

}

.header_container {
  width: 100%;
  display: flex;
    flex-direction: row;
  justify-content: space-between;

}

/* Style the header */
header {
  background-color: #666;
  text-align: center;
  font-size: 20px;
  color: white;
  display: flex;
  flex:2;
}

/* Container for flexboxes */
section {
  display: -webkit-flex;
  display: flex;
  flex:50;
}

/* Style the navigation menu */
nav {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: #ccc;
  padding: 20px;
  text-align: center
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

/* Style the content */
article {
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 1;
  background-color: #ccc;
  padding: 10px;
}

/* Style the footer */
footer {
  background-color: #777;
  text-align: center;
  color: white;
  display: flex;
  flex: 2;
}
</style>
