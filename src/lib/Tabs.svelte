<script>
import { display_visible, episodes_visible, home_visible, icon } from './stores.js';

function toggle_home() {
    if ($episodes_visible) {
        $episodes_visible = !$episodes_visible;
        $home_visible = !$home_visible;
    }
}

function toggle_episodes() {
    if ($home_visible) {
        $home_visible = !$home_visible;
        $episodes_visible = !$episodes_visible;
    } else if ($display_visible) {
        $episodes_visible = !$episodes_visible;
        $display_visible = !$display_visible;
    }
}

function toggle_display() {
    if ($episodes_visible) {
        $episodes_visible = !$episodes_visible;
        $display_visible = !$display_visible;
    } else {
        $display_visible = !$display_visible;
    }
}

</script>


<div class="tabs">
    <img src="./home.png" class="btn" on:click={toggle_home} />
    <img src="./display.png" class="btn" on:click={toggle_display} />
    <img src="./episodes.png" class="btn" on:click={toggle_episodes} />
    <!-- <span class="btn">⚃</span> -->
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
    /* line-height: 42px; */
    position: fixed;
    bottom: 0;
    z-index: 2;
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
</style>
