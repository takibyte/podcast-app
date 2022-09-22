<script>
import { display_visible, player_visible, player_height, episodes_visible, icon, name, date, episode, description, mp3_url, url_index, rss_list } from './stores.js';
import { promises, get_rss } from './get-rss.svelte';
import { fade } from 'svelte/transition';

let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

get_rss($url_index);


window.scrollTo(0, 0);

function display_ep(rss, pod) {
    $icon =  $rss_list[$url_index].img;
    $episode = pod.title;
    $date = display_date(pod.created);
    $name = rss.title;
    $description = pod.content;
    pod.enclosures.forEach(enclosure => {
        $mp3_url = enclosure.url;
    });

    $display_visible = true;
    $episodes_visible = false;
    // $display_height = '100%';
    // window.document.body.classList.toggle('no-scroll');
}

function display_date(pod_created) {
    let pod_date = new Date(pod_created);
    let format_date = `${days[pod_date.getDay()]} ${pod_date.getDate()}/${pod_date.getMonth()+1}/${pod_date.getFullYear()}`;
    return format_date;
}
</script>

<div class="heading">
    <div>
        <span class="header">episodes</span>
        <!-- <span class="option">⋯</span> -->
    </div>
</div>

{#await promises}
    <span>loading episodes...</span>
{:then rss}
    {#each rss.items as pod}
        <div class="episode" on:click={() => display_ep(rss, pod)} in:fade={{duration: 800}}>
            <div class="ep_img"><img src={$rss_list[$url_index].img}></div>
            <div class="ep_txt">
                <span class="ep-span">{pod.title}</span>
                <span class="date ep-span">{display_date(pod.created)}</span>
                <span class="name ep-span">{rss.title}</span>
            </div>
        </div>
    {/each}
{/await}

<style>
.heading {
    display: grid;
    font-weight: 300;
    font-size: 1.5rem;
    min-height: 50px;
    line-height: 48px;
    width: 100%;
    background-color: #1e1f29;
    position: relative;
    top: 0;
    z-index: 2;
}

.header {
    float: left; 
    padding-left: 10px;
}

.option {
    float: right; 
    padding-right: 15px;
    font-size: 2.5rem;
    /* font-family: Helvetica; */
}

.episode {
    display: grid;
    grid-area: "img text";
    grid-template-columns: 70px auto;
    background-color: #000;
    width: 100%;
    height: 75px;
    border-bottom: 1px solid #343648;
}

.episode:hover {
    opacity: 0.8;
    cursor: pointer;
}

.ep_txt {
    display: grid;
    grid-auto-flow: row;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
}

img {
    max-width: 65px;
    border-radius: 10px;
    padding: 5px;
}

.ep-span {
    font-size: 1.1rem;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.date {
    font-size: 0.9rem;
    font-weight: 300;
}

.name {
    font-size: .9rem;
    font-weight: 300;
}
</style>