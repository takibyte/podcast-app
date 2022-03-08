<script>
import { createEventDispatcher } from 'svelte';
import json from './data.json';
import { shows, url_index, display_visible, home_visible, episodes_visible } from './stores';

// const dispatch = createEventDispatcher();

function toggle_visible() {
    $home_visible = !home_visible;
    $episodes_visible = !$episodes_visible;
}

function display_episodes(index) {
    $url_index = index;
    toggle_visible();
}

</script>

<div class="shows">
    {#each $shows as show, index}
        <img src={show.img} on:click={() => display_episodes(index)}>
    {/each}
</div>

<style>
.shows {
    display: grid;
    grid-area: "img text";
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #000;
    width: 100%;
    height: auto;
    /* border-radius: 5px; */
    /* border-bottom: 1px solid #343648; */
}

img {
    max-width: 100%;
}

img:hover {
    opacity: 0.8;
    cursor: pointer;
}
</style>