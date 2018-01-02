<template>
  <div class="about">
    <h2 id="purpose">Purpose</h2>
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
      <li>Censys.io Raw Data (occasional backfill)</li>
    </ul>
    <p>
      Other sites certainly exist that to index this kind of data (like crt.sh, censys.io), but I have found them unusable when it comes to exploring the .au ccTLD. That's why this exists.</p>
    </p>
    <p>The full source code to every component, including this website, are available on Github:</p>
    <p>
      <a href="https://github.com/ausdomainledger" target="_blank" rel="noopener noreferrer">github.com/ausdomainledger</a></p>     
    <strong>Some example queries to give you inspiration</strong>
    <ul>
      <li><router-link :to="{name: 'Hello', query: { q: '%.gov.au' } }">All .gov.au, newest at the top</router-link></li>
      <li><router-link :to="{name: 'Hello', query: { q: '%wordpress%' } }">.au Domains containing 'wordpress'</router-link></li>
      <li><router-link :to="{name: 'Hello', query: { q: '%owncloud%' } }">Various OwnCloud instances ...</router-link></li>
      <li><router-link :to="{name: 'Hello', query: { q: '%%%' } }">Latest names in .au ...</router-link></li>
    </ul>
    <h2 id="api">API</h2>
    <p>An API is available for any purposes. I will document it briefly here.</p>
    <h3>Query</h3>
    <p>The query endpoint is slightly complex due to the underlying schema. Refer to the source code of this front-end application
      for a reference implementation.
    </p>
    <p>
      <pre>GET <a href="https://api.ausdomainledger.net/api/v1/query">https://api.ausdomainledger.net/api/v1/query</a></pre>
      <dl>
        <dt>query</dt>
        <dd>URL-encoded string to search for. Works like "SQL LIKE". You may use "%" as a wildcard character.</dd>
        <dt>limit</dt>
        <dd>How many records to return. The server may return less records than requested based on server policy.</dd>
        <dt>from_time</dt>
        <dd>This is the main pagination mechanism. Use the lowest `first_seen` you saw in a previous result set for the next records.</dd>
        <dt>last_id</dt>
        <dd>If you receive a full result set with fully identical `first_seen` timestamps, you can use `last_id` as a secondary pagination key.
          This is based on the `id` and `last` fields in a result.
        </dd>
      </dl>
    </p>
    <h3>Statistics</h3>
    <p>A statistics endpoint is available which shows how many domains and eTLD+1s are indexed.</p>
    <p><pre>GET <a href="https://api.ausdomainledger.net/api/v1/stats">https://api.ausdomainledger.net/api/v1/stats</a></pre></p>   
    <h2>Research</h2>
    <p>
      <a href="https://ausdomainledger.net/cpanelhosts2017/">Australian cPanel Webhost Size Showdown</a> - A comparison of cPanel Shared Hosting Providers in Australia at the end of 2017
    </p>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
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
dt {
  font-weight: bold;
  font-family: monospace;
}
</style>
