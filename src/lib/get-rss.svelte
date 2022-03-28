<script context="module">
import { parse } from 'rss-to-json';
import { get } from 'svelte/store';
import { rss_list } from './stores.js';

export let promises = [];
// export let show_promise = [];

console.log(get(rss_list));

export function get_rss() {
  for (let i = 0; i < get(rss_list).length; i++) {
    promises[i] = parse(get(rss_list)[i])
      .then((rss) => rss)
      .catch((err) => err);
  }
}

// export function get_show() {
//   for (let i = 0; i < get(rss_list).length; i++) {
//     show_promise[i] = parse(get(rss_list)[i])
//       .then((rss) => rss);
//   }
//   get_rss();
//   console.log(show_promise)
// }

</script>