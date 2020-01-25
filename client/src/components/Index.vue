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
          <p style="flex-grow:2">o</p>
          <p style="flex-grow:4">p</p>
          <p style="flex-grow:13">e</p>
          <p style="flex-grow:2">n</p>
        </div>

      </header>

      <section>
        <nav>

          <div class="Aligner-item">
          
            <li v-for="session in sessions" :key="session._id">
              <router-link :to="{ name: 'show', query: { id: session._id }}">
              {{session.teacher}}/
              {{session.name}}/
              {{session.time}}
              {{session.duration}} minutes
              <span v-if="session.reservation_limit <= session.reservation_count">
                SOLD OUT
              </span>
            </router-link>
            </li>

          </div>
          
        </nav>
        
        <article>
          <div class="Aligner-item">
            <img alt="Vue logo" src="./../assets/logo.png">
          </div>
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
    //http://localhost:3000/sessions
    fetch('/sessions')
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
.Aligner-item {
  max-width: 50%;
}
.header_container {
  width: 100%;
  display: flex;
    flex-direction: row;
  justify-content: space-between;

}

/* Style the header */
header {
  background-color: #000;
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
  background: #000;
  padding: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Style the list inside the menu 
nav ul {
  list-style-type: none;
  padding: 0;
}

/* Style the content */
article {
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 1;
  background-color: #000;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Style the footer */
footer {
  background-color: #000;
  text-align: center;
  color: white;
  display: flex;
  flex: 2;
}

</style>
