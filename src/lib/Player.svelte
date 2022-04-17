<script>
import { player_icon, player_name, player_date, player_episode, player_description, mp3_url, player_mp3, player_height } from './stores.js';
import { fly } from 'svelte/transition';

let player;
    
</script>
    
    
<div class="overlay"
    in:fly="{{ y: 600, duration: 500 }}"
    out:fly="{{ y: 600, duration: 500 }}"
    style:height={$player_height}
    >

    <img src={$player_icon} alt="">
    <h1>{$player_episode}</h1>
    <span class="date">{$player_date}</span>
    <!-- <span class="name">{$name}</span> -->

    <div class="player">
        {#key $player_mp3}
        <audio controls bind:this={player}>
                <source src={$player_mp3} type="audio/mpeg">
                <track kind="captions" />
        </audio>
        {/key}
        
    </div>

    <!-- <div class="description" contenteditable="false" 
    bind:innerHTML={$player_description}></div> -->

    <br><br><br>  

</div>

<style>
.overlay {
    z-index: 3;
    background-color: black;
    position: fixed;
    bottom: 0;
    /* height: 100%; */
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    transition: height .5s;
}

.player {   
    width: 100%;
    bottom: 60px;
    position: absolute;
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
    /* hyphens: auto; */
}

img {
    width: 90vw;
    max-width: 450px;
    border-radius: 15px;
    padding: 5px;
    margin-top: 16px;
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
    max-width: 450px;
    height: 40px;
    margin-top: 20px;
}

</style>