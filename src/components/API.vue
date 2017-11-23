<template>
  <div class="about">
    <h2>API</h2>
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
dt {
  font-style:  italic;
  font-weight: bold;
}
</style>
