<script>
import { visible, icon, name, episode } from './stores.js';
export let ep_img;
export let ep_name;
export let ep_episode;

function toggle_visible() {
    $visible = !$visible;
}

function display_ep() {
    $icon =  ep_img;
    $name = ep_name;
    $episode = ep_episode;
    toggle_visible()
}
</script>

<div class="episode" on:click={display_ep}>
    <div class="ep_img"><img src={ep_img}></div>
    <div class="ep_txt">
        <span>{ep_name}</span>
        <p>{ep_episode}</p>
    </div>
</div>

<style>
.episode {
    display: grid;
    grid-area: "img text";
    grid-template-columns: 60px auto;
    background-color: #343648;
    width: 100%;
    height: 60px;
    border-radius: 10px;
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
    max-width: 50px;
    border-radius: 10px;
    padding: 5px;
}

p {
    font-size: .6rem;
}

span {
    font-size: .8rem;
}
</style>