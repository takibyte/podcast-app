<script>
import { url_index, home_visible, episodes_visible, rss_list } from './stores';
import { promises, get_rss } from './get-rss.svelte';
import { fade, fly } from 'svelte/transition';

let new_rss = '';
let input_visible = false;

let shows_visible = true;

get_rss();

// console.log(promises);

function toggle_visible() {
    $episodes_visible = !$episodes_visible;
    $home_visible = !home_visible;
}

function display_episodes(index) {
    if (input_visible === false) {
        $url_index = index;
        toggle_visible();
    } else {
        console.log(index);
        $rss_list.splice(index, 1);
        $rss_list = $rss_list;
    }
}

function toggle_input() {
    input_visible = !input_visible;
    if (!shows_visible) {
        shows_visible = !shows_visible;
    }
}

function add_show() {
    $rss_list = [...$rss_list, new_rss];
    new_rss = "";
    console.log($rss_list)
    get_rss();
    toggle_input();
}

</script>

<div in:fly={{x: -500, duration: 500}}>
    <div class="heading">
        <div>
            <span style="float: left; padding-left: 10px;">podcasts</span>
            <span style="float: right; padding-right: 10px;" on:click={toggle_input}>{!input_visible ? '+' : '-'}</span>
        </div>
        {#if input_visible}
           
                <input type="text" placeholder="Search or paste rss link" bind:value={new_rss}
                in:fly={{y: -50, duration: 300}}
                on:keydown={event => event.key === 'Enter' && add_show()}
                on:click={() => {shows_visible = !shows_visible}}>
           
        {/if}
    </div>

    {#if shows_visible}
        <div class="shows" in:fade={{duration: 800}}>
            {#each promises as promise, index}
                {#await promise}
                    <!-- <span>loading content...</span> -->
                {:then show}
                    <img src={show.image} on:click={() => display_episodes(index)} in:fade={{duration: 400}}>
                {/await}
            {/each}
        </div>
    {/if}
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

.add-div {
    width: 100%;
}

input {
    padding: 10px;
    font-size: 1rem;
    /* width: 100%; */
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