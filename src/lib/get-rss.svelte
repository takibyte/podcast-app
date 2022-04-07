<script context="module">
import { parse } from 'rss-to-json';
import { get } from 'svelte/store';
import { rss_list } from './stores.js';

export let promises;

console.log(get(rss_list));

export function get_rss() {
  promises = [];

  for (let i = 0; i < get(rss_list).length; i++) {
    promises[i] = parse(get(rss_list)[i])
      .then((rss) => rss)
      .catch((err) => err);
  }
}

// export async function get_rss() {
//   let list = get(rss_list);
//   promises = [];
  
//   promises = await fetch('/.netlify/functions/get-rss', {
//     method: 'POST',
//     body: JSON.stringify({ rss: list})
//   })
//     .then(response => response.json())
//     .then(data => data)
//     .catch((err) => err);

//     console.log(promises);
// }

</script>