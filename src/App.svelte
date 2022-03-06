<script>
import { visible } from './lib/stores.js';
import Episodes from './lib/Episodes.svelte';
import Display from './lib/Display.svelte';
import json from './lib/data.json';
import { parse } from 'rss-to-json';
import { fade } from 'svelte/transition';

async function get_rss() {
    const res = await parse(`https://feeds.megaphone.fm/TPC2985326322`);
    const rss = await res;
//   console.log(JSON.stringify(rss, null, 3));
    return rss;
};

let promise = get_rss();




function toggle_visible() {
    $visible = !$visible;
}
</script>

<h1>podapp</h1>

{#if $visible}
    <Display/>
{/if}

{#if !$visible}
    <div class="top_grid" in:fade={{duration: 300}} out:fade={{duration: 500}}>
        <div class="ep_grid">
            {#await promise then rss}
                {#each rss.items as pod}
                <svelte:component this={Episodes} 
                    pod_img={rss.image}
                    pod_episode={pod.title}
                    pod_name={rss.title}
                    pod_description={pod.description}
                />
                {/each}
            {/await}
        </div>

        <div class="tabs">
            <span class="btn" on:click={toggle_visible}>⚀</span>
            <span class="btn">⚁</span>
            <span class="btn">⚂</span>
            <span class="btn">⚃</span>
        </div>
    </div>
{/if}

<style>
h1 {
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    padding: 5px;
}

p {
    font-size: .6rem;
}

span {
    font-size: .8rem;
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

.tabs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #1e1f29;
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 45px;
    position: sticky;
    bottom: 0;
}

.btn {
    font-size: 2.5rem;
}

.btn:hover {
    opacity: 0.8;
    cursor: pointer;
}
</style>