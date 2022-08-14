<script>
import { icon, player_icon, name, player_name, date, player_date, episode, player_episode, description, player_description, mp3_url, player_mp3, player_height, display_visible, episodes_visible, player_visible } from './stores.js';
import { fly } from 'svelte/transition';

let player;

function play() {
    if ($player_mp3 !== $mp3_url) {
        $player_mp3 = $mp3_url;
    }
    $player_icon = $icon;
    $player_name = $name;
    $player_date = $date;
    $player_episode = $episode;
    $player_description = $description;

    $player_height = '100%';
    $player_visible = true;
    $display_visible = false;
    // player.play();
}

function back() {
    $display_visible = false;
    $episodes_visible = true;
    
}

</script>

{#if display_visible}
    <div class="overlay" in:fly="{{ x: -300, duration: 500 }}" autofocus>

        <div class="heading">
            <div>
                <span class="header" on:click={back}>↩</span>
                <!-- <span class="option">⋯</span> -->
            </div>
        </div>

        <img src={$icon} alt="">
        <h1>{$episode}</h1>
        <span class="date">{$date}</span>
        <!-- <span class="name">{$name}</span> -->
        <img class="play" src="./play.png" on:click={play}>

        <div class="description" contenteditable="false" 
        bind:innerHTML={$description}></div>

        <br><br><br>  

    </div>
{/if}

<style>
.overlay {
    z-index: 3;
    background-color: black;
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
}


/* .overlay::-webkit-scrollbar {
  display: none;
} */

.description {
    font-size: .9rem;
    text-align: left;
    width: 90vw;
    max-width: 450px;
    line-height: 1.5rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
}

img {
    width: 85vw;
    max-width: 450px;
    border-radius: 15px;
    padding: 5px;
    margin-top: 16px;
}

.play {
    width: 80px;
    /* padding: 10px; */
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
    /* padding-bottom: 10px; */
}

.date {
    /* padding-bottom: 10px; */
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
    width: 98vw;
    max-width: 450px;
    height: 40px;
}

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
    font-size: 2rem;
    cursor: pointer;
}

.option {
    float: right; 
    padding-right: 15px;
    font-size: 2.5rem;
    /* font-family: Helvetica; */
}

</style>