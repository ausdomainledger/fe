<template>
  <div class="hello">
    <input type="text" v-model="qs" placeholder="Enter your query, e.g. %admin%.gov.au and press Enter" class="qs" @keyup.enter="search" @input="reset">

    <div class="domains" v-if="this.items.length > 0">
      <div class="domain" v-for="d in items" v-bind:key="d.id">
        <div class="link">
          <a :href="'https://' + d.domain" target="_blank" rel="noreferrer noopener" :title="d.domain">{{ d.domain }}</a>
          <small>({{ d.etld || 'is an eTLD' }})</small>
        </div>
        <div class="dates">
          <p><label>Most Recently Seen:</label> <abbr :title="new Date(d.last_seen * 1000)">{{ time(d.last_seen * 1000) }}</abbr></p>
          <p><label>First Seen:</label> <abbr :title="new Date(d.first_seen * 1000)">{{ time(d.first_seen * 1000) }}</abbr></p>
        </div>
      </div>
    </div>
    <scroller ref="scroller" @infinite="infiniteHandler" class="scroller">
      <span slot="no-more">
        <span v-if="q && q.indexOf('%') === -1">
          No more results. You may find more results with 
          <router-link :to="{ name: 'Hello', query: { q: '%' + q + '%' } }" 
          title="Searching with wildcards will give you more results.">%{{ q }}%</router-link>.
        </span>
        <span v-else-if="q">
          No more results.
        </span>
      </span>
    </scroller>
    <div v-if="stats && this.items.length === 0" class="stats">
      Indexed {{ stats.domains.toLocaleString() }} names so far <br><small>(comprising of {{ stats.etlds.toLocaleString() }} eTLD+1s)</small>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios'
import qs from 'qs'
import timeago from 'timeago.js'

export default {
  name: 'HelloWorld',
  metaInfo: {
    title: 'Search',
    meta: [
      {
        name: 'description', content: 'View and search for .au domains for free in our .au domain and subdomain list'
      }
    ]
  },
  components: {
    'scroller': InfiniteLoading
  },
  props: ['q'],
  data () {
    return {
      items: [],
      lastTime: null,
      lastId: null,
      limit: 50,
      stats: null
    }
  },
  methods: {
    search: function () {
      this.reset()
      this.$router.push({ name: 'Hello', query: { q: this.qs } })
      this.$refs.scroller.$emit('$InfiniteLoading:reset')
    },
    reset: function () {
      this.items = []
      this.lastTime = null
      this.lastId = null
    },
    query: function () {
      if (this.qs === undefined || this.qs === null || this.qs.length < 3) {
        return Promise.resolve('done')
      }
      return axios.get('https://api.ausdomainledger.net/api/v1/query?' +
        qs.stringify({ query: this.qs, limit: this.limit, from_time: this.lastTime, last_id: this.lastId }))
      .then((data) => {
        // API response contains sorted (last_seen DESC) array of domains
        let res = data.data.results

        // If we got no results, then we are definitely done
        if (res === null || res.length === 0) {
          return Promise.resolve('done')
        }

        // Subtract any items that are already in our list
        let filtered = res.filter(f => this.items.some(i => f.domain === i.domain) === false)
        // If the remainder is empty, then we are done and not adding anything
        if (filtered.length === 0) {
          return Promise.resolve('done')
        }

        // Add the unique remainder
        this.items.push.apply(this.items, filtered)

        let oldestSeen = this.items[this.items.length - 1].first_seen
        this.lastId = filtered.every(e => e.first_seen === oldestSeen) ? data.data.last : null
        this.lastTime = oldestSeen

        return Promise.resolve(res.length < this.limit ? 'done' : null)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
    },
    time: function (t) {
      return timeago().format(t)
    },
    infiniteHandler: function ($state) {
      this.query().then((r) => {
        if (r === 'done') {
          $state.complete()
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .then(() => {
        $state.loaded()
      })
    }
  },
  created: function () {
    this.qs = this.q || null
    axios.get('https://api.ausdomainledger.net/api/v1/stats')
    .then((data) => {
      this.stats = data.data
    })
  },
  watch: {
    q: function () {
      this.qs = this.q || null
      this.reset()
      if (this.qs !== null) {
        this.search()
      }
    }
  }
}
</script>

<style scoped>
.qs {
  display: block;
  width: 100%;
  margin: 0 auto;
  border: none;
  background: #008751;
  color: white;
  font-size: 1.5em;
  padding: 1em;
  box-sizing: border-box;
}
.scroller a {
  color: #008751;
}
.copy {
  width: 80%;
  margin: 0 auto;
  color: #333;
}
.scroller, .domains {
  width: 100%;
  margin: 1em 0;
  background: white;
}
.domains {
  border-top: 1px solid #008751;
}
.domain {
  display: block;
  box-sizing: border-box;
  width: 100%;
  color: black;
  padding: 2em 0;
  padding-left: 1em;
  background: whitesmoke;
  border-bottom: 1px solid #008751;
  clear: both;
  overflow-x: auto;
}
.domain .link a {
  font-size: 2em;
  color: #369;
}
.domain small {
  float: right;
  margin-right: 2em;
  margin-top: 1em;
}
.dates label {
  font-weight: bold;
  color: #666;
  width: 200px;
  display: inline-block;
}
abbr {
  cursor: pointer;
}
.stats {
  font-size: 2em;
  text-align: center;
  color: #666;
  margin: 5em 0;
}
*::-webkit-input-placeholder {
    color: white;
    opacity: 0.8;
}
*:-moz-placeholder {
    color: white;
    opacity: 0.8;
}
*::-moz-placeholder {
    color: white;
    opacity: 0.8;
}
*:-ms-input-placeholder {
    color: white;
    opacity: 0.8;
}
</style>
