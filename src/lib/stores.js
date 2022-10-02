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
    { rss: "https://feeds.megaphone.fm/TPC2985326322", img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/00/1f/c6/001fc62b-968b-ed72-9bfa-b55ae1427c08/mza_11756451431296775500.jpeg/600x600bb.jpg"},
    { rss: "https://feeds.megaphone.fm/darknetdiaries", img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d9/e6/9c/d9e69cfc-4b65-c879-75d6-6624246f0ded/mza_12966154832216548918.jpg/600x600bb.jpg"},
    { rss: "https://lexfridman.com/feed/podcast/", img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/3e/e3/9c/3ee39c89-de08-47a6-7f3d-3849cef6d255/mza_16657851278549137484.png/600x600bb.jpg"},
    { rss: "https://feeds.feedburner.com/dancarlin/history?format=xml", img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/49/b7/eb/49b7eb32-8f08-6fac-aadb-2f002131fe5f/mza_15196161972010256532.jpg/600x600bb.jpg"},
    { rss: "https://feeds.simplecast.com/rZ0cYk12", img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/d4/7a/27/d47a272c-5edc-4369-b9d5-1c9fd5b18fb9/mza_4605905199208311645.jpg/600x600bb.jpg"},
    { rss: "https://feeds.megaphone.fm/mofi", img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/d7/11/f7/d711f722-8d83-b1f1-98a5-1bde48de7c61/mza_13392255056508917477.png/600x600bb.jpg"},
    { rss: "https://audioboom.com/channels/4954758.rss", img: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts115/v4/b9/ad/aa/b9adaa46-81fa-25d4-7919-a3840b884342/mza_12615842473890121135.jpg/600x600bb.jpg"},
    { rss: "https://rss.art19.com/tim-ferriss-show", img: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/1e/6c/a3/1e6ca389-8db6-f7e0-7883-1f84d446fb03/mza_1352041245047545601.jpeg/600x600bb.jpg"},
    { rss: "https://feeds.soundcloud.com/users/soundcloud:users:187841578/sounds.rss", img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/63/4c/80/634c80e4-fa0a-a657-be50-45d538f97127/mza_8607785371691123697.jpg/600x600bb.jpg"}
]);

rss_list.subscribe((value) => localStorage.rss_store = JSON.stringify(value));
