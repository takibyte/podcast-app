<script context="module">
import { parse } from 'rss-to-json';
import { shows } from './stores.js';

export let promises = [];

export function get_rss() {
  for (let i = 0; i < shows.length; i++) {
    promises[i] = parse(shows[i].url)
      .then((rss) => rss);
  }
}
get_rss();

</script>