<template>
  <div class="about">
    <h2>Download</h2>
    <p>You can download the full .au domain list for free below in compressed (gzip) CSV format.</p>
    <p>It contains:</p>
    <ul>
      <li>All .au domains (domain or subdomain)</li>
      <li>eTLD+1/effective TLD plus one label (e.g. mail.google.com is google.com, for google.com it is still google.com)</li>
      <li>First time this name was seen</li>
      <li>Last time this name was seen</li>
    </ul>
    <p>The list is updated <strong>nightly at 04:00</strong>.</p>
    <p class="download">Download: <a href="/au-domains-latest.csv.gz">au-domains-latest.csv.gz</a></p>
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
.download {
  font-size: 1.5em;
}
</style>
