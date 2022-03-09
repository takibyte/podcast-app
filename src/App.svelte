<script>
import { display_visible, home_visible, episodes_visible, shows, url_index } from './lib/stores.js';
import Episodes from './lib/Episodes.svelte';
import Tabs from './lib/Tabs.svelte';
import Display from './lib/Display.svelte';
import Home from './lib/Home.svelte';
import json from './lib/data.json';
import { parse } from 'rss-to-json';
import { fade } from 'svelte/transition';

let promises = [];

promises[0] = parse('https://feeds.megaphone.fm/TPC2985326322')
    .then((rss) => {
        // console.log(JSON.stringify(rss, null, 3));
        return rss;
    });

promises[1] = parse('https://feeds.megaphone.fm/darknetdiaries')
    .then((rss) => {
        return rss;
    });

promises[2] = parse('https://feeds.megaphone.fm/darknetdiaries')
    .then((rss) => {
        return rss;
    });

promises[3] = parse('https://wakingup.libsyn.com/rss')
    .then((rss) => {
    return rss;
    });

console.log(promises, null, 3);

</script>

<h1>podapp</h1>

{#if $home_visible}
    <Home/>
{/if}

{#if $display_visible}
    <Display/>
{/if}


<div class="top_grid">
    {#if $episodes_visible}
        <div class="ep_grid" in:fade={{duration: 300}} out:fade={{duration: 500}}>
            {#await promises[0]}
            <span>loading...</span>
            {:then rss}
                {#each rss.items as pod}
                <svelte:component this={Episodes} 
                    pod_img={rss.image}
                    pod_episode={pod.title}
                    pod_name={rss.title}
                    pod_description={pod.content}
                    pod_mp3={pod.enclosures[0].url}
                />
                {/each}
            {/await}
        </div>
    {/if}

    <Tabs/>
</div>


<style>
h1 {
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    padding: 5px;
}

.top_grid {
    display: grid;
    width: auto;
    height: auto;
    grid-auto-flow: row;
}

.ep_grid {
    display: grid;
    width: auto;
    height: auto;
    grid-auto-flow: row;
    /* row-gap: 3px; */
}
</style>