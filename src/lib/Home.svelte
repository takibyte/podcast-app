<script>
import { url_index, home_visible, episodes_visible, rss_list } from './stores';
import { promises, get_rss } from './get-rss.svelte';
import { fade, fly } from 'svelte/transition';

let new_rss = '';
let input_visible = false;

let shows_visible = true;
let search_visible = false;
let search;

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
        input_visible = !input_visible;
        get_rss();

        console.log(promises);
        console.log($rss_list);
    }
}

function toggle_input() {
    input_visible = !input_visible;
    if (!shows_visible) {
        shows_visible = !shows_visible;
    }

    if (search_visible) {
        search_visible = false;
    }
}

function validate_url(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function new_show(val) {
    if (validate_url(val)) {
        $rss_list = [...$rss_list, new_rss];
        new_rss = "";
        console.log($rss_list);
        get_rss();
        toggle_input();
        console.log('valid url');
    } else {
        search = [];
        search = fetch(`https://itunes.apple.com/search?term=${val}&entity=podcast`)
            .then(response => response.json())
            .then(data => data);
        
        search_visible = true;

        console.log(search);
    }
}

function add_show(search_rss) {
    $rss_list = [...$rss_list, search_rss];
    get_rss();
    toggle_input();
    console.log($rss_list);
}

</script>

<div in:fly={{x: -500, duration: 500}}>
    <div class="heading">
        <div>
            <span style="float: left; padding-left: 10px;">podcasts</span>
            <span class="option">⋯</span>
            <span class="option" style="padding-right: 20px;" on:click={toggle_input}>{!input_visible ? '+' : '-'}</span>
            
        </div>
        {#if input_visible}
           
                <input type="text" placeholder="Search or paste rss link" bind:value={new_rss}
                in:fly={{y: -50, duration: 300}}
                on:keydown={event => event.key === 'Enter' && new_show(new_rss)}
                on:click={() => {shows_visible = false}}>
           
        {/if}
    </div>

    {#if shows_visible}
        {#key $rss_list}
        <div class="shows" in:fade={{duration: 800}}>
            {#each promises as promise, index}
                {#await promise}
                    <!-- <span>loading content...</span> -->
                {:then show}
                    <img src={show.image} on:click={() => display_episodes(index)} in:fade={{duration: 400}}>
                {/await}
            {/each}
        </div>
        {/key}
    {/if}

    {#if search_visible}
        <div class="search_grid">
            {#await search}
            <span>searching...</span>
            {:then results}
                {#each results.results as result}
                    <div class="search_result">
                        <div><img class="search_img" src={result.artworkUrl600}></div>
                        <div class="search_txt">
                            <span class="ep_span">{result.trackName}</span>
                            <span on:click={() => add_show(result.feedUrl)}>＋</span>
                        </div>
                    </div>
                {/each}  
            {/await}  
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

.search_grid {
    display: grid;
    grid-auto-flow: row;
    width: auto;
    height: auto;
}

.search_result {
    display: grid;
    grid-area: "img text";
    grid-template-columns: 70px auto;
    background-color: #000;
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #343648;
}

.search_img {
    max-width: 65px;
    border-radius: 10px;
    padding: 5px;
}

.search_txt {
    display: grid;
    grid-auto-flow: row;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
}

.option {
    float: right; 
    padding-right: 15px;
    font-size: 2.5rem;
    /* font-family: Helvetica; */
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