<template>
  <div id="app">

    <div class="nav">
      <ul>
        <li class="title"> &#x1F1E6;&#x1F1FA;  ausdomainledger.net</li>
        <li><router-link :to="{name: 'Hello'}">Home</router-link></li>
        <li><router-link :to="{name: 'Hello', query: { q: '%%%' }}">Latest</router-link></li>
        <li><router-link :to="{name: 'About'}">About</router-link></li>
        <li><router-link :to="{name: 'API'}">API</router-link></li>
        <li><a href="https://github.com/ausdomainledger" target="_blank" rel="noopener noreferrer">Source Code</a></li>
      </ul>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import '../node_modules/normalize.css/normalize.css';
body {
  background: #FCD116;
}
#app {
  font-family: sans-serif;
}
.nav {
  border-top : 3px solid #008751;
  border-bottom: 3px solid #008751;
  background: #f2f2f2;
  padding: 0.25em 0;
  margin: 1em 0;
}
.nav ul {
  box-sizing: border-box;
}
.nav li {
  display: inline;
  list-style-type: none;
  margin-right: 4em;
}
.nav a {
  color: #333;
  transition: color 0.25s;
  text-decoration: none;
}
.nav a:hover {
  color: #008751;
}
.title {
  color: #008751;
  font-weight: bold;
}
</style>
