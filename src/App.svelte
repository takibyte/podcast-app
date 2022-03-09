<script>
import { display_visible, home_visible, episodes_visible, shows, url_index } from './lib/stores.js';
import Episodes from './lib/Episodes.svelte';
import Tabs from './lib/Tabs.svelte';
import Display from './lib/Display.svelte';
import Home from './lib/Home.svelte';
import { promises, get_rss } from './lib/rss-parse.js';
import { fade, fly } from 'svelte/transition';

get_rss();

// console.log(promises, null, 3);

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
        <div class="ep_grid" in:fly={{x: 500, duration: 500}} out:fly={{x: 500, duration: 500}}>
            {#await promises[$url_index]}
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
</div>

<Tabs/>


<style>
h1 {
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    padding: 5px;
    background-color: #1e1f29;
    position: relative;
}

.top_grid {
    display: grid;
    width: auto;
    height: auto;
    min-height: 100vh;
    grid-auto-flow: row;
    background-color: #000;
}

.ep_grid {
    display: grid;
    width: auto;
    height: auto;
    grid-auto-flow: row;
    position: relative;
    z-index: 2;
}
</style>