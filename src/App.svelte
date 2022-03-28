<script>
import { display_visible, home_visible, episodes_visible } from './lib/stores.js';
import Episodes from './lib/Episodes.svelte';
import Tabs from './lib/Tabs.svelte';
import Display from './lib/Display.svelte';
import Home from './lib/Home.svelte';
import { fly } from 'svelte/transition';
import { get_rss } from './lib/get-rss.svelte';

</script>

{#if $home_visible}
    <Home/>
{/if}

{#if $display_visible}
    <Display/>
{/if}

{#if $episodes_visible}
    <div class="ep_grid" in:fly={{x: 500, duration: 500}}>
        <Episodes />
    </div>
{/if}

<Tabs/>


<style>
.ep_grid {
    display: grid;
    width: auto;
    height: auto;
    grid-auto-flow: row;
    position: relative;
    z-index: 1;
}
</style>