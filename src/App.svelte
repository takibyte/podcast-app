<script>
import { visible } from './lib/stores.js';
import Episodes from './lib/Episodes.svelte';
import Display from './lib/Display.svelte';
import json from './lib/data.json';
// import rss from './lib/rss-parse.js';


function toggle_visible() {
    $visible = !$visible;
}
</script>

<h1>podapp</h1>

{#if $visible}
    <Display/>
{/if}

<div class="top_grid">
    <div class="ep_grid">
        {#each json.podcast as ep}
            <svelte:component this={Episodes} 
            ep_img={ep.Image} 
            ep_name={ep.Name}
            ep_episode={ep.Episode} />
        {/each}
    </div>

    <div class="tabs">
        <span class="btn" on:click={toggle_visible}>⚀</span>
        <span class="btn">⚁</span>
        <span class="btn">⚂</span>
        <span class="btn">⚃</span>
    </div>
</div>

<style>
h1 {
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
    row-gap: 5px;
    padding: 5px;
}

.tabs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: black;
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 45px;
    position: fixed;
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