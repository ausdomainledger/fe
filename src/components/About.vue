<template>
  <div class="about">
    <h2>Purpose</h2>
    <p>
      This site is a quick Saturday project to try and make searching for names within in the .au ccTLD a bit easier.
    </p>
    <p>
      I personally am not too happy with the fact that it is quite difficult to get your hands on the .au zonefile. This service certainly isn't the equivalant of having your hands on that zonefile, but it does have a few notable differences:
    </p>
    <ul>
      <li>Because the primary data source is 
        <a target="_blank" rel="noopener noreferrer" href="https://certificate-transparency.org">Certificate Transparency</a> logs, It will list subdomains of zones, not just the zone itself.</li>
      <li>... also because of the above, it is more likely to list domains that are in real use.</li>
      <li>... but will not cover domains that do not have SSL certificates issued</li>
      <li>... and can have some delay when it comes to finding new domains. In fact, the site is still doing its initial index.</li>
    </ul>
    <p>
    It's also true that other sites already exist to index CT logs (like crt.sh), but I have found them unusable when it comes to exploring the .au ccTLD. That's why this exists.</p>
    </p>
    <p>I have also applied for access to DNSDB to try get better completion.</p>
    <p>By the way, the API is not at all restricted apart from some rate limits that you shouldn't hit. If you can figure out the network requests, feel free.</p>
    <h2>Some example queries to give you inspiration</h2>
    <ul>
      <li><router-link :to="{name: 'Hello', query: { q: '%.gov.au' } }">All .gov.au, newest at the top</router-link></li>
      <li><router-link :to="{name: 'Hello', query: { q: '%wordpress%' } }">.au Domains containing 'wordpress'</router-link></li>
      <li><router-link :to="{name: 'Hello', query: { q: '%owncloud%' } }">Various OwnCloud instances ...</router-link></li>
      <li><router-link :to="{name: 'Hello', query: { q: '%%%' } }">Latest names in .au ...</router-link></li>
    </ul>
    <h2>Technical/Source Code</h2>
    <p>
      This application is basically just one Go process crawling a bunch of CT logs (to be specific, the Chromium CT log list) into a Postgres database, and one Go web server acting as the query API server. 
    </p>
    <p>You can <a href="https://ausdomainledger.net/ausdomainledger-src.tar.gz">look at the source of the two single-file programs</a> but it's probably a better idea to rewrite it. There is no licence provided here anyway.</p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.about {
  background: white;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  line-height: 1.5em;
}
a {
  color: #369;
}
</style>
