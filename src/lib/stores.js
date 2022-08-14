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
    { rss: "https://wakingup.libsyn.com/rss", img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/5b/70/e7/5b70e7ed-6c28-654b-99b1-f243bff3dbe5/mza_8512518449833623366.png/600x600bb.jpg"},
    { rss: "https://www.omnycontent.com/d/playlist/9b7dacdf-a925-4f95-84dc-ac46003451ff/d32c6294-eba5-4807-abed-acb8002fdc1c/457951e4-f7cd-44ce-a5ff-acb8002fdc26/podcast.rss", img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/0d/e3/64/0de36419-064f-b794-533b-ddf73c034c83/mza_3973478835350573811.jpg/600x600bb.jpg"},
    { rss: "https://feeds.simplecast.com/rZ0cYk12", img: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/d4/7a/27/d47a272c-5edc-4369-b9d5-1c9fd5b18fb9/mza_4605905199208311645.jpg/600x600bb.jpg"},
    { rss: "https://feeds.megaphone.fm/mofi", img: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/d7/11/f7/d711f722-8d83-b1f1-98a5-1bde48de7c61/mza_13392255056508917477.png/600x600bb.jpg"}
]);

rss_list.subscribe((value) => localStorage.rss_store = JSON.stringify(value));
