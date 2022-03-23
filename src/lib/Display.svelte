<script>
import { display_visible, episodes_visible, icon, name, date, episode, description, mp3_url, home_visible } from './stores.js';
import { fly } from 'svelte/transition';

function toggle_display() {
    if ($display_visible && !$home_visible) {
        $episodes_visible = !$episodes_visible;
        $display_visible = !$display_visible;
    } else {
        $display_visible = !$display_visible;
    }
}

</script>


<div class="overlay"
    in:fly="{{ y: 600, duration: 500 }}"
    out:fly="{{ y: 600, duration: 500 }}">

    <div class="top">
        <span class="close" on:click={toggle_display}>⌄</span>
    </div>
    <img src={$icon} alt="">
    <h1>{$episode}</h1>
    <span class="date">{$date}</span>
    <span class="name">{$name}</span>
    <div>
        <audio controls>
            <source src={$mp3_url} type="audio/mpeg">
            <track kind="captions" />
        </audio>
    </div>
    <!-- <img class="play" src="./play.png"/> -->

    <div class="description" contenteditable="false" 
    bind:innerHTML={$description}></div>
    
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
    max-width: 500px;
    line-height: 1.5rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    /* hyphens: auto; */
}

img {
    width: 90vw;
    max-width: 500px;
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
    font-size: 1rem;
    padding-bottom: 10px;
}

.name {
    padding-bottom: 20px;
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

audio {
    width: 90vw;
    max-width: 500px;
}

</style>