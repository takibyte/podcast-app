<script>
import { display_visible, player_visible, player_height, episodes_visible, home_visible, rss_list } from './stores.js';

function toggle_home() {
    $home_visible = true;
    $episodes_visible = false;
    $display_visible = false;
    $player_visible = false;
    $player_height = '0%'
    window.document.body.classList.toggle('no-scroll', $player_visible);
}

function toggle_episodes() {
    if ($rss_list.length > 0) {
        $home_visible = false;
        $episodes_visible = true;
        $display_visible = false;
        $player_visible = false;
        $player_height = '0%'
    }
    window.document.body.classList.toggle('no-scroll', $player_visible);
}

function toggle_player() {
        $player_visible = !$player_visible;
        if ($player_height === '0%') {
            $player_height = '100%';
        } else if ($player_height === '100%') {
            $player_height = '0%'
            if ($home_visible === false && $episodes_visible === false && $display_visible === false) {
                $display_visible = true;
            }
        }


        window.document.body.classList.toggle('no-scroll');
        // window.document.querySelectorAll('.overlay').width
}


// $: if ($display_visible) {
//     window.document.body.classList.toggle('no-scroll');
// }
</script>


<div class="tabs">
    <img src="./home.png" class="btn" on:click={toggle_home} />
    <img src={!$player_visible ? "./display.png" : "./display-down.png"} class="btn" on:click={toggle_player} />
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
