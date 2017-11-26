<template>
  <div class="about">
    <h2>Download .au Domain List</h2>
    <p>You can download the full .au domain list for free below in compressed (gzip) CSV format.</p>
    <p>It contains:</p>
    <ul>
      <li>All of the .au domains that are present in our database (domain and subdomain)</li>
      <li>eTLD+1/effective TLD plus one label (e.g. www.ato.gov.au is ato.gov.au, for ato.gov.au is still ato.gov.au)</li>
      <li>First time this name was seen</li>
      <li>Last time this name was seen</li>
    </ul>
    <p>The download is updated <strong>nightly at 04:00 AEST</strong>.</p>
    <p class="download">Download: <a href="/au-domains-latest.csv.gz" title="Direct download to the .au domain list">au-domains-latest.csv.gz</a></p>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Download .au domain list',
    meta: [
      {
        name: 'description', content: 'Download the full list of .au domains for free'
      }
    ]
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
.download {
  font-size: 1.5em;
}
</style>
