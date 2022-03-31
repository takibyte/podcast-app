<script>
import { display_visible, episodes_visible, home_visible } from './stores.js';

function toggle_home() {
    $home_visible = true;
    $episodes_visible = false;
    $display_visible = false;
    window.document.body.classList.toggle('no-scroll', $display_visible);
}

function toggle_episodes() {
    $home_visible = false;
    $episodes_visible = true;
    $display_visible = false;
    window.document.body.classList.toggle('no-scroll', $display_visible);
}

function toggle_display() {
        $display_visible = !$display_visible;
        window.document.body.classList.toggle('no-scroll');
}


// $: if ($display_visible) {
//     window.document.body.classList.toggle('no-scroll');
// }
</script>


<div class="tabs">
    <img src="./home.png" class="btn" on:click={toggle_home} />
    <img src="./display.png" class="btn" on:click={toggle_display} />
    <img src="./episodes.png" class="btn" on:click={toggle_episodes} />
</div>

<div class="under-tab"></div>

<style>
.tabs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #1e1f29;
    height: 50px;
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
    z-index: 3;
}

.under-tab {
    background-color: #000;
    opacity: 0;
    height: 50px;
    width: 100%;
    position: sticky;
    bottom: 0;
    z-index: 0;
}

.btn {
    font-size: 2.5rem;
    margin: auto;
}

.btn:hover {
    opacity: 0.8;
    cursor: pointer;
}

img {
    max-width: 25px;
}

:global(body.no-scroll) {
    overflow-y: hidden;
}
</style>
