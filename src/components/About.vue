<template>
  <div class="about">
    <h2>Purpose</h2>
    <p>
      This site is a project to make searching the .au ccTLD easier. In other words, it is a giant list of .au domains and subdomains.
    </p>
    <p>
      I was not too happy with the fact that it is quite difficult to get your hands on the .au zonefile. This service certainly isn't the equivalant of having your hands on that zonefile, but it does have a few notable differences:
    </p>
    <ul>
      <li>Lists subdomains where possible</li>
      <li>Is historical - shows past entries and when they were first/last seen</li>
      <li>Is free for all uses</li>
    </ul>
    <p>
      The primary sources for this index are:
    </p>
    <ul>
      <li>Certificate Transparency logs (hourly)</li>
      <li>Common Crawl URL Index (monthly)</li>
      <li>AusRegistry/auDA Drop List (multiple times an hour)</li>
      <li>(Coming Soon) Censys.io Raw Data</li>
    </ul>
    <p>
      Other sites certainly exist that to index this kind of data (like crt.sh, censys.io), but I have found them unusable when it comes to exploring the .au ccTLD. That's why this exists.</p>
    </p>
    <p>I applied for access to DNSDB to try get better completion, but unfortunately their licensing does not permit republishing unless I pay.</p>
    <h2>Some example queries to give you inspiration</h2>
    <ul>
      <li><router-link :to="{name: 'Hello', query: { q: '%.gov.au' } }">All .gov.au, newest at the top</router-link></li>
      <li><router-link :to="{name: 'Hello', query: { q: '%wordpress%' } }">.au Domains containing 'wordpress'</router-link></li>
      <li><router-link :to="{name: 'Hello', query: { q: '%owncloud%' } }">Various OwnCloud instances ...</router-link></li>
      <li><router-link :to="{name: 'Hello', query: { q: '%%%' } }">Latest names in .au ...</router-link></li>
    </ul>
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
