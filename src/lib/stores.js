/* eslint-disable*/
import { writable } from 'svelte/store';

export let shows = [
    {
        name: "The Tim Dillon Show",
        img: "./tds.jpeg",
        url: "https://feeds.megaphone.fm/TPC2985326322"
    },
    {
        name: "Darknet Diaries",
        img: "./dd.jpeg",
        url: "https://feeds.megaphone.fm/darknetdiaries"
    },
    {
        name: "Lex Fridman Podcast",
        img: "./lfp.jpeg",
        url: "https://feeds.megaphone.fm/darknetdiaries"
    },
    {
        name: "Making Sense with Sam Harris",
        img: "ms.jpeg",
        url: "https://wakingup.libsyn.com/rss"
    },
    {
        name: "This Past Weekend",
        img: "tpw.jpeg",
        url: "https://www.omnycontent.com/d/playlist/9b7dacdf-a925-4f95-84dc-ac46003451ff/d32c6294-eba5-4807-abed-acb8002fdc1c/457951e4-f7cd-44ce-a5ff-acb8002fdc26/podcast.rss"
    },
    {
        name: "Your Undivided Attention",
        img: "yuda.jpeg",
        url: "https://feeds.simplecast.com/rZ0cYk12"
    },
    {
        name: "Modern Finance",
        img: "mf.avif",
        url: "https://feeds.megaphone.fm/mofi"
    }
]

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