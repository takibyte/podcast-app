<script>
import { display_visible, episodes_visible, icon, name, episode, description, mp3 } from './stores.js';
export let pod_img;
export let pod_name;
export let pod_episode;
export let pod_description;
export let pod_mp3;

function toggle_visible() {
    $display_visible = !$display_visible;
    $episodes_visible = !$episodes_visible;
}

function display_ep() {
    $icon =  pod_img;
    $name = pod_name;
    $episode = pod_episode;
    $description = pod_description;
    $mp3 = pod_mp3;
    toggle_visible();
}
</script>

<div class="episode" on:click={display_ep}>
    <div class="ep_img"><img src={pod_img}></div>
    <div class="ep_txt">
        <span>{pod_episode}</span>
        <span class="name">{pod_name}</span>
    </div>
</div>

<style>
.episode {
    display: grid;
    grid-area: "img text";
    grid-template-columns: 65px auto;
    background-color: #000;
    width: 100%;
    height: 70px;
    /* border-radius: 5px; */
    border-bottom: 1px solid #343648;
}

.episode:hover {
    opacity: 0.8;
    cursor: pointer;
}

.ep_txt {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;
}

img {
    max-width: 60px;
    border-radius: 10px;
    padding: 5px;
}

span {
    font-size: 1rem;
    width: 100%;
    padding-top: 2px;
}

.name {
    font-size: .8rem;
    font-weight: 300;
    padding-bottom: 8px;
}
</style>