<script>
import { visible, icon, name, episode } from './stores.js';
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532 532">
        <path d="M266,0C119.3,0,0,119.3,0,266S119.3,532,266,532,532,412.7,532,266,412.7,0,266,0Zm85.7,279.4L226.3,362.8c-10.6,7.3-25.2-.6-25.2-13.4V182.6c0-12.9,14.6-20.7,25.2-13.4l125.4,83.4c9.5,6.1,9.5,20.7,0,26.8Z" 
        fill="#fff"/>
    </svg>
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
}

img {
    margin: 15px;
    width: 85%;
    border-radius: 20px;
    padding: 10px;
}

svg {
    width: 90px;
    margin: 30px;
}

svg:hover {
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
}
</style>