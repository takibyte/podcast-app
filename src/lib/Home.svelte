<script>
import { shows, url_index, home_visible, episodes_visible } from './stores';
import { fade, fly } from 'svelte/transition';

let new_rss = '';
let input_visible = false;

// function add_podcast() {
//     shows = [...shows, {name: }
// }

function toggle_visible() {
    $episodes_visible = !$episodes_visible;
    $home_visible = !home_visible;
}

function display_episodes(index) {
    $url_index = index;
    toggle_visible();
}

function toggle_input() {
    input_visible = !input_visible;
}

</script>
<div in:fly={{x: -500, duration: 500}}>
    <div class="heading">
        <div>
            <span style="float: left; padding-left: 10px;">podcasts</span>
            <span style="float: right; padding-right: 10px;" on:click={toggle_input}>{!input_visible ? '+' : '-'}</span>
        </div>
        {#if input_visible}
            <input type="text" placeholder="Add rss link" 
            in:fly={{y: -50, duration: 300}}
            out:fly={{y: -50, duration: 200}}>
        {/if}
    </div>

    <div class="shows" in:fade={{duration: 800}}>
        {#each shows as show, index}
            <img src={show.img} on:click={() => display_episodes(index)}>
        {/each}
    </div>
</div>

<style>
.shows {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #000;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    transition: width 0.5s;
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

.heading {
    display: grid;
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
    min-height: 50px;
    line-height: 50px;
    width: 100%;
    background-color: #1e1f29;
    position: relative;
    top: 0;
    z-index: 2;
}

input {
    padding: 10px;
    font-size: 1rem;
}

img {
    max-width: 100%;
}

img:hover {
    opacity: 0.8;
    cursor: pointer;
}

span {
    cursor: pointer;
}
</style>