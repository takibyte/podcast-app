<script>
import { shows, url_index, home_visible, episodes_visible } from './stores';
import { fade, fly } from 'svelte/transition';

function toggle_visible() {
    $episodes_visible = !$episodes_visible;
    $home_visible = !home_visible;
}

function display_episodes(index) {
    $url_index = index;
    toggle_visible();
}

</script>

<div class="shows" in:fly={{x: -500, duration: 500}}>
    {#each shows as show, index}
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
    position: relative;
    z-index: 1;
    transition: width 0.5s;
    /* border-radius: 5px; */
    /* border-bottom: 1px solid #343648; */
}

@media (min-width: 700px) {
    .shows {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

@media (min-width: 1100px) {
    .shows {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
}

img {
    max-width: 100%;
}

img:hover {
    opacity: 0.8;
    cursor: pointer;
}
</style>