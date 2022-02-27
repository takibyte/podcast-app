<script>

</script>

<div class="top_container">
    <h1>pode</h1>

    <!-- transitionable container, potential creatable component -->
    <div class="container_two">
        <div class="episode">
            <div class="ep_img"><img src="src/assets/tds.jpeg"></div>
            <div class="ep_txt">
                <span>284 - Prozac Play-Doh</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p>
            </div>
        </div>
        <div class="episode">
            <div class="ep_img"><img src="src/assets/tds.jpeg"></div>
            <div class="ep_txt">
                <span>284 - Prozac Play-Doh</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p>
            </div>
        </div>
        <div class="episode">
            <div class="ep_img"><img src="src/assets/tds.jpeg"></div>
            <div class="ep_txt">
                <span>284 - Prozac Play-Doh</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p>
            </div>
        </div>
        <div class="episode">
            <div class="ep_img"><img src="src/assets/tds.jpeg"></div>
            <div class="ep_txt">
                <span>284 - Prozac Play-Doh</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisic Lorem ipsum dolor sit amet consectetur adipisic adipisi</p>
            </div>
        </div>
    </div>

    <div class="player">
        <span class="btn" style="line-height: 42px;">▶︎</span>
    </div>
    <div class="tabs">
        <span class="btn">❖</span>
        <span class="btn">❖</span>
        <span class="btn">❖</span>
        <span class="btn">❖</span>
    </div>

</div>

<style>
    h1 {
        font-size: 1.5rem;
        text-align: center;
        margin: 0;
        padding: 5px;
    }

    p {
        font-size: .6rem;
    }

    span {
        font-size: .8rem;
    }

    .top_container {
        display: grid;
        width: auto;
        height: auto;
        grid-auto-flow: row;
    }

    .container_two {
        display: grid;
        width: auto;
        height: auto;
        grid-auto-flow: row;
        row-gap: 5px;
        padding: 5px;
    }

    .episode {
        display: grid;
        grid-area: "img text";
        grid-template-columns: 80px auto;
        background-color: #343648;
        width: 100%;
        height: 80px;
        border-radius: 10px;
    }

    .episode:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    .ep_txt {
        display: flex;
        flex-flow: column wrap;
        padding: 5px;
    }

    img {
        max-width: 70px;
        border-radius: 10px;
        padding: 5px;
    }

    .player {
        display: grid;
        grid-template-columns: 1fr;
        background-color: black;
        height: 50px;
        width: 100%;
        text-align: center;
        line-height: 50px;
        position: fixed;
        bottom: 50px;
        border-bottom: 1px solid white;
    }

    .tabs {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        background-color: black;
        height: 50px;
        width: 100%;
        text-align: center;
        line-height: 50px;
        position: fixed;
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