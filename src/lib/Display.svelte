<script>
import { visible, icon, name, episode, description } from './stores.js';
import { fly } from 'svelte/transition';

function toggle_visible() {
    $visible = !$visible;
}

</script>


<div class="overlay" on:click={toggle_visible}
    in:fly="{{ y: 600, duration: 500 }}"
    out:fly="{{ y: 600, duration: 500 }}">

    <img src={$icon} alt="">
    <h1>{$episode}</h1>
    <span>{$name}</span>
    <img class="play" src="./play.png"/>
    <span class="description">{$description}</span>
</div>

<style>
.overlay {
    z-index: 3;
    background-color: black;
    position: fixed;
    bottom: 0;
    height: 100%;
    width: 100%;
    transition: height .5s;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
}

.description {
    font-size: .6rem;
    text-align: left;
    padding: 10px;
}

img {
    margin: 10px;
    width: 85vw;
    max-width: 300px;
    border-radius: 20px;
    padding: 10px;
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
    padding: 5px;
}

span {
    font-size: .8rem;
    padding-bottom: 5px;
}
</style>