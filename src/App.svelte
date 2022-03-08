<script>
import { display_visible, home_visible, episodes_visible, shows, url_index } from './lib/stores.js';
import Episodes from './lib/Episodes.svelte';
import Tabs from './lib/Tabs.svelte';
import Display from './lib/Display.svelte';
import Home from './lib/Home.svelte';
import json from './lib/data.json';
import { parse } from 'rss-to-json';
import { fade } from 'svelte/transition';

async function get_rss() {
    let res = await parse($shows[$url_index].url);
    let rss = await res;
//   console.log(JSON.stringify(rss, null, 3));
    return rss;
};


let promise;
$: (async() => promise = await get_rss())();


// function handle_message(event) {
//     $url_index= event.detail;
//     alert($url_index);
//     get_rss();
// }

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
            {#await promise then rss}
                {#each rss.items as pod}
                <svelte:component this={Episodes} 
                    pod_img={rss.image}
                    pod_episode={pod.title}
                    pod_name={rss.title}
                    pod_description={pod.content}
                    pod_mp3={pod.enclosures.url}
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