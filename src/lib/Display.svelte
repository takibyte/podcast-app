<script>
import { visible, icon, name, episode, description } from './stores.js';
import { fly } from 'svelte/transition';

function toggle_visible() {
    $visible = !$visible;
}

</script>


<div class="overlay"
    in:fly="{{ y: 600, duration: 500 }}"
    out:fly="{{ y: 600, duration: 500 }}">

    <div class="top">
        <span class="close" on:click={toggle_visible}>⌄</span>
    </div>
    <img src={$icon} alt="">
    <h1>{$episode}</h1>
    <span>{$name}</span>
    <img class="play" src="./play.png"/>
    <p class="description">{$description}</p>
</div>

<style>
.overlay {
    z-index: 3;
    background-color: black;
    position: fixed;
    bottom: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
}

.description {
    font-size: .9rem;
    text-align: left;
    width: 90vw;
    max-width: 700px;
    /* padding: 15px; */
    /* hyphens: auto; */
    line-height: 1.7rem;
}

img {
    width: 90vw;
    max-width: 300px;
    border-radius: 15px;
    padding: 5px;
}

.play {
    width: 80px;
    margin: 0;
    padding: 10px;
}

.play:hover {
    opacity: 0.8;
    cursor: pointer;
}

h1 {
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
    padding: 10px;
}

span {
    font-size: .8rem;
    padding-bottom: 10px;
}

.top {
    width: 100vw;
}

.close {
    font-size: 1.5rem;
    float: left;
    padding-left: 15px;
}

.close:hover {
    opacity: 0.8;
    cursor: pointer;
}
</style>