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
    "https://feeds.megaphone.fm/TPC2985326322",
    "https://feeds.megaphone.fm/darknetdiaries",
    "https://wakingup.libsyn.com/rss",
    "https://www.omnycontent.com/d/playlist/9b7dacdf-a925-4f95-84dc-ac46003451ff/d32c6294-eba5-4807-abed-acb8002fdc1c/457951e4-f7cd-44ce-a5ff-acb8002fdc26/podcast.rss",
    "https://feeds.simplecast.com/rZ0cYk12",
    "https://feeds.megaphone.fm/mofi"
]);

rss_list.subscribe((value) => localStorage.rss_store = JSON.stringify(value));
