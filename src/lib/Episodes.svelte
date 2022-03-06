<script>
import { visible, icon, name, episode, description } from './stores.js';
export let pod_img;
export let pod_name;
export let pod_episode;
export let pod_description;

function toggle_visible() {
    $visible = !$visible;
}

function display_ep() {
    $icon =  pod_img;
    $name = pod_name;
    $episode = pod_episode;
    $description = pod_description;
    toggle_visible()
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
    border-bottom: 1px solid white;
}

.episode:hover {
    opacity: 0.8;
    cursor: pointer;
}

.ep_txt {
    display: flex;
    flex-flow: column wrap;
    padding: 5px;
}

img {
    max-width: 60px;
    border-radius: 10px;
    padding: 5px;
}

span {
    font-size: .9rem;
    width: 100%;
}

.name {
    font-size: .8rem;
    font-weight: 300;
}
</style>