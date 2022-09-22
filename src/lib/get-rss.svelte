<script context="module">
import { parse } from 'rss-to-json';
import { get, writable } from 'svelte/store';
import { rss_list, url_index } from './stores.js';

export let promises;


// export function get_rss(index) {
//   let store_list = get(rss_list);
//   let list = store_list[index].rss;
//   // let rss = get(rss_list);

//   promises = [];

//   promises = parse(list)
//     .then((response) => response)
//     .then((data) => data)
//     .catch((err) => {
//       console.log(err);

//       promises = fetch('/.netlify/functions/get-rss', {
//         method: 'POST',
//         body: JSON.stringify({ rss: list })
//       })
//       .then(response => response.json())
//       .then(data => data)
//       .catch((err) => err);

//       console.log(promises);
//     });
// }

export function get_rss(index) {
  let store_list = get(rss_list);
  let list = store_list[index].rss;

  console.log(list);

  promises = [];

  promises = fetch('/.netlify/functions/get-rss', {
    method: 'POST',
    body: JSON.stringify({ rss: list })
  })
    .then(response => response.json())
    .then(data => data)
    .catch((err) => err);

    // console.log(promises);

}

//// old method

// export function get_rss() {
//   promises = [];

//   let rss = get(rss_list);

//   for (let i = 0; i < get(rss_list).length; i++) {
//     promises[i] = parse(rss[i].rss) 
//       .then((rss) => rss)
//       .catch((err) => err);
//   }
// }



</script>