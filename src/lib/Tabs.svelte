<script>
import { display_visible, episodes_visible } from './stores.js';

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
    <span class="btn">⚀</span>
    <span class="btn" on:click={toggle_display}>⚁</span>
    <span class="btn">⚂</span>
    <span class="btn">⚃</span>
</div>

<style>
.tabs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #1e1f29;
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 45px;
    position: sticky;
    bottom: 0;
}

.btn {
    font-size: 2.5rem;
}

.btn:hover {
    opacity: 0.8;
    cursor: pointer;
}
</style>