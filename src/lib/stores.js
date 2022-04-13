/* eslint-disable*/
import { writable } from 'svelte/store';
export let home_visible = writable(true);
export let display_visible = writable(false);
export let episodes_visible = writable(false);
export let icon = writable("");
export let name = writable("");
export let date = writable("");
export let episode = writable("");
export let description = writable("");
export let mp3_url = writable("");
export let url_index = writable(0);
export let rss_list = writable(JSON.parse(localStorage.getItem('rss_store')) || [
    { rss: "https://feeds.megaphone.fm/TPC2985326322", img: "https://megaphone.imgix.net/podcasts/0b605418-1719-11ec-b9f4-df72a2a81ee0/image/ede37b0b92f5799367ffaaa1f9d4a24fd1587f5037861fba41fdb34c330d98dc2869e629367941d87abacf6e8fbcfe51cd5e2e36f0d90c44b1cdfc1da6ec4059.jpeg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress"},
    { rss: "https://feeds.megaphone.fm/darknetdiaries", img: "https://megaphone.imgix.net/podcasts/29bed80a-d8cc-11e8-b199-aba552a0bbdf/image/uploads_2F1562951997273-pdd2keiryql-99f75240ab90a579e25720d85d3057b2_2Fdarknet-diaries-rss.jpg?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress"},
    { rss:"https://wakingup.libsyn.com/rss", img: "https://ssl-static.libsyn.com/p/assets/0/9/7/e/097e1e1107a7009a/MAKING_SENSE_MASTER.png"},
    { rss:"https://www.omnycontent.com/d/playlist/9b7dacdf-a925-4f95-84dc-ac46003451ff/d32c6294-eba5-4807-abed-acb8002fdc1c/457951e4-f7cd-44ce-a5ff-acb8002fdc26/podcast.rss", img: "https://www.omnycontent.com/d/playlist/9b7dacdf-a925-4f95-84dc-ac46003451ff/d32c6294-eba5-4807-abed-acb8002fdc1c/457951e4-f7cd-44ce-a5ff-acb8002fdc26/image.jpg?t=1611284058&amp;size=Large"},
    { rss:"https://feeds.simplecast.com/rZ0cYk12", img: "https://image.simplecastcdn.com/images/5d5362b9-2b0b-4f8e-9559-aa71e576cace/66b65167-19f0-4826-a060-a89ff832afda/3000x3000/yua-avatar-3000x3000-ted.jpg?aid=rss_feed"},
    { rss: "https://feeds.megaphone.fm/mofi", img: "https://megaphone.imgix.net/podcasts/91e75534-971e-11eb-ae5f-3b24dd1a1ba6/image/mofi-coverArt-2.png?ixlib=rails-2.1.2&amp;max-w=3000&amp;max-h=3000&amp;fit=crop&amp;auto=format,compress"}
]);

rss_list.subscribe((value) => localStorage.rss_store = JSON.stringify(value));
