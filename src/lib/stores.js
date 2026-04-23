import { writable } from 'svelte/store';

export let home_visible = writable(true);
export let display_visible = writable(false);
export let player_visible = writable(false);
export let player_height = writable('0%');
export let episodes_visible = writable(false);
export let icon = writable("");
export let name = writable("");
export let date = writable("");
export let episode = writable("");
export let description = writable("");
export let player_icon = writable("");
export let player_name = writable("");
export let player_date = writable("");
export let player_episode = writable("");
export let player_description = writable("");
export let mp3_url = writable("");
export let player_mp3 = writable("");
export let url_index = writable(0);
export let rss_list = writable(JSON.parse(localStorage.getItem('rss_store')) || [
    { rss: "https://feeds.megaphone.fm/darknetdiaries", img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d9/e6/9c/d9e69cfc-4b65-c879-75d6-6624246f0ded/mza_12966154832216548918.jpg/600x600bb.jpg"},
    { rss: "https://feeds.simplecast.com/rZ0cYk12", img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/d4/7a/27/d47a272c-5edc-4369-b9d5-1c9fd5b18fb9/mza_4605905199208311645.jpg/600x600bb.jpg"}
]);

rss_list.subscribe((value) => localStorage.rss_store = JSON.stringify(value));
