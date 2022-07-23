<template>
  <div id="search">
    <div v-show="no_results" :class="['no-results']">
      <font-awesome-icon :icon="['fab', 'spotify']" />
      <h3>No Results</h3>
      <p>Please type in a search query to get started...</p>
    </div>
    <div v-show="!no_results" :class="['results-grid']">
      <ul v-for="type in Object.keys(results)">
        <li class="type-title">
          {{ type }} ->
        </li>
        <li :class="{'loading': loading}" v-for="(item, index) in results[type].items" :style="itemStyles(item, type, index)">
          <a v-if="!loading" :href="item.external_urls.spotify" target="_blank">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  middleware: ['token'],
  computed: {
    ...mapGetters({
      results: 'app/results',
      loading: 'app/loading'
    }),
    no_results() {
      return (Object.keys(this.results).length === 0 || this.results.status > 399)
    }
  },
  methods: {
    itemStyles(item, type, index) {
      if (type === "tracks") {
        return { backgroundImage: `url('${item.album.images[0].url}')` }
      }
      if (item.images && item.images.length > 0) {
        return { backgroundImage: `url('${item.images[0].url}')` }
      } else {
        return { backgroundImage: `url('/placeholder.jpeg')` }
      }
    },
  }
}
</script>

<style lang="scss">
@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

div#search {
  width: 100%;
  height: 100%;
  div.no-results {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > svg {
      height: 80px;
      width: 80px;
      color: #1DB954;
    }
    > * {
      margin: 10px 0;
      color: white;
    }
    h3 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      color: #FFFFFF;
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
    }
    a.btn-green {
      width: 240px;
      height: 40px;
      background: #1DB954;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 38px;
      /* identical to box height */
      text-align: center;
      text-decoration: none;
    }
  }
}
.results-grid {
  padding: 80px;
}
.results-grid ul {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  height: 30vh;
  grid-column-gap: 1em;
  color: white;
  margin: 1em 0;
  list-style: none;
  justify-items: center;
  justify-content: center;
  align-items: center;
  li {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
    opacity: 1;
    transition: transform 1s;
    &:hover {
      transform: scale(1.05) rotate(1deg);
    }
    // &.loading {
    //   opacity: 0;
    // }
    a {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .25);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      font-weight: bold;
      text-decoration: none;
      transition: background 250ms ease-out;
      &:hover {
        background: rgba(0, 0, 0, .8);
      }
    }
  }
  li.type-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-decoration-line: underline;
    color: #FFFFFF;
    text-transform: capitalize;
  }
}
</style>