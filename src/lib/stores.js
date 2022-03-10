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
            url: "https://lexfridman.com/feed/podcast/"
        },
        {
            name: "Making Sense with Sam Harris",
            img: "ms.jpeg",
            url: "https://wakingup.libsyn.com/rss"
        }
]

export let home_visible = writable(true);
export let display_visible = writable(false);
export let episodes_visible = writable(false);
export let icon = writable("");
export let name = writable("");
export let episode = writable("");
export let description = writable("");
export let mp3_url = writable("");
export let url_index = writable(0);