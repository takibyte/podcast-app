<script>
import { display_visible, home_visible, episodes_visible, url_index } from './lib/stores.js';
import Episodes from './lib/Episodes.svelte';
import Tabs from './lib/Tabs.svelte';
import Display from './lib/Display.svelte';
import Home from './lib/Home.svelte';
import { promises, get_rss } from './lib/rss-parse.js';
import { fade, fly } from 'svelte/transition';


get_rss();

// console.log(promises, null, 3);

</script>


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
    z-index: 1;
}
</style>