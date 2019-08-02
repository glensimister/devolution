class SlotMachine extends HTMLElement {
    async connectedCallback() {
        let user = await API_getUserByWebId(window.webId);

        this.innerHTML = `
<style>
div.roulette_container {
    background-color: #00acd6;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#00acd6+0,d1d1d1+50,00acd6+100 */
    background: rgb(0, 172, 214);
    /* Old browsers */
    background: -moz-linear-gradient(top, rgba(0, 172, 214, 1) 0%, rgba(209, 209, 209, 1) 50%, rgba(0, 172, 214, 1) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0, 172, 214, 1) 0%, rgba(209, 209, 209, 1) 50%, rgba(0, 172, 214, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0, 172, 214, 1) 0%, rgba(209, 209, 209, 1) 50%, rgba(0, 172, 214, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00acd6', endColorstr='#00acd6', GradientType=0);
    /* IE6-9 */
}
div.led-grid-small {
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    margin: 0 20px;
}
div.roulette_grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 20px;
}
div.roulette_grid > div {
    background: #fff;
    -webkit-box-shadow: inset 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: inset 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#d3d3d3+0,ffffff+50,d3d3d3+100 */
    background: rgb(211, 211, 211);
    /* Old browsers */
    background: -moz-linear-gradient(top, rgba(211, 211, 211, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(211, 211, 211, 1) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(211, 211, 211, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(211, 211, 211, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(211, 211, 211, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(211, 211, 211, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#d3d3d3', endColorstr='#d3d3d3', GradientType=0);
    /* IE6-9 */
}
div.roulette_grid img {
    margin: auto;
}
div.roulette_top {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 20px;
    margin: auto;
    background: #222d32;
    color: #dd4b39;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-left: 5px solid #00acd6;
    border-right: 5px solid #00acd6;
    border-top: 5px solid #00acd6;
    margin: 0;
    font-weight: 700;
    -webkit-box-shadow: inset 1px -10px 11px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 1px -10px 11px 1px rgba(0, 0, 0, 0.75);
    box-shadow: inset 1px -10px 11px 1px rgba(0, 0, 0, 0.75);
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#222d32+0,0d0d0d+46,010101+50,0a0a0a+53,4e4e4e+76,383838+87,222d32+100 */
    background: rgb(34, 45, 50);
    /* Old browsers */
    background: -moz-linear-gradient(-45deg, rgba(34, 45, 50, 1) 0%, rgba(13, 13, 13, 1) 46%, rgba(1, 1, 1, 1) 50%, rgba(10, 10, 10, 1) 53%, rgba(78, 78, 78, 1) 76%, rgba(56, 56, 56, 1) 87%, rgba(34, 45, 50, 1) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, rgba(34, 45, 50, 1) 0%, rgba(13, 13, 13, 1) 46%, rgba(1, 1, 1, 1) 50%, rgba(10, 10, 10, 1) 53%, rgba(78, 78, 78, 1) 76%, rgba(56, 56, 56, 1) 87%, rgba(34, 45, 50, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, rgba(34, 45, 50, 1) 0%, rgba(13, 13, 13, 1) 46%, rgba(1, 1, 1, 1) 50%, rgba(10, 10, 10, 1) 53%, rgba(78, 78, 78, 1) 76%, rgba(56, 56, 56, 1) 87%, rgba(34, 45, 50, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#222d32', endColorstr='#222d32', GradientType=1);
    /* IE6-9 fallback on horizontal gradient */
    /* IE6-9 */
}
div.roulette_top > div i {
    color: #dd4b39;
    font-size: 40px;
    margin-top: 10px;
}
.result {
    color: transparent;
    font-size: 40px;
    letter-spacing: 4px;
    font-weight: bold;
    grid-column: 4 / 6;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #dd4b39;
}
.win-color {
    color: #dd4b39;
}
.btn_container {
    width: 100%;
    border-left: 5px solid #00acd6;
    border-right: 5px solid #00acd6;
    border-bottom: 5px solid #00acd6;
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    font-size: 18px;
    -webkit-box-shadow: inset 1px 10px 11px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 1px 10px 11px 1px rgba(0, 0, 0, 0.75);
    box-shadow: inset 1px 10px 11px 1px rgba(0, 0, 0, 0.75);
    background: #222d32;
    color: #fff;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#222d32+0,0d0d0d+46,010101+50,0a0a0a+53,4e4e4e+76,383838+87,222d32+100 */
    background: rgb(34, 45, 50);
    /* Old browsers */
    background: -moz-linear-gradient(-45deg, rgba(34, 45, 50, 1) 0%, rgba(13, 13, 13, 1) 46%, rgba(1, 1, 1, 1) 50%, rgba(10, 10, 10, 1) 53%, rgba(78, 78, 78, 1) 76%, rgba(56, 56, 56, 1) 87%, rgba(34, 45, 50, 1) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, rgba(34, 45, 50, 1) 0%, rgba(13, 13, 13, 1) 46%, rgba(1, 1, 1, 1) 50%, rgba(10, 10, 10, 1) 53%, rgba(78, 78, 78, 1) 76%, rgba(56, 56, 56, 1) 87%, rgba(34, 45, 50, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, rgba(34, 45, 50, 1) 0%, rgba(13, 13, 13, 1) 46%, rgba(1, 1, 1, 1) 50%, rgba(10, 10, 10, 1) 53%, rgba(78, 78, 78, 1) 76%, rgba(56, 56, 56, 1) 87%, rgba(34, 45, 50, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#222d32', endColorstr='#222d32', GradientType=1);
    /* IE6-9 fallback on horizontal gradient */
    /* IE6-9 */
}
.roulette_bottom_grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    text-align: center;
    height: 90px;
    line-height: 50px;
    font-size: 18px;
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 5px solid #00acd6;
    border-right: 5px solid #00acd6;
    border-bottom: 5px solid #00acd6;
    -webkit-box-shadow: inset 1px 10px 11px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 1px 10px 11px 1px rgba(0, 0, 0, 0.75);
    box-shadow: inset 1px 10px 11px 1px rgba(0, 0, 0, 0.75);
    background: #222d32;
    color: #fff;
    background: rgb(34, 45, 50);
    background: -moz-linear-gradient(-45deg, rgba(34, 45, 50, 1) 0%, rgba(13, 13, 13, 1) 46%, rgba(1, 1, 1, 1) 50%, rgba(10, 10, 10, 1) 53%, rgba(78, 78, 78, 1) 76%, rgba(56, 56, 56, 1) 87%, rgba(34, 45, 50, 1) 100%);
    background: -webkit-linear-gradient(-45deg, rgba(34, 45, 50, 1) 0%, rgba(13, 13, 13, 1) 46%, rgba(1, 1, 1, 1) 50%, rgba(10, 10, 10, 1) 53%, rgba(78, 78, 78, 1) 76%, rgba(56, 56, 56, 1) 87%, rgba(34, 45, 50, 1) 100%);
    background: linear-gradient(135deg, rgba(34, 45, 50, 1) 0%, rgba(13, 13, 13, 1) 46%, rgba(1, 1, 1, 1) 50%, rgba(10, 10, 10, 1) 53%, rgba(78, 78, 78, 1) 76%, rgba(56, 56, 56, 1) 87%, rgba(34, 45, 50, 1) 100%);
}
.roulette_bottom_grid > div:nth-child(1) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #e08e0b;
}
.roulette_bottom_grid > div:nth-child(2) input {
    background: #fff;
    -webkit-box-shadow: inset 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: inset 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    color: #555;
    font-weight: 700;
    height:100%;
    width:100%;
    font-size: 18px;
    display: block;
    border:none;
    text-align: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.roulette_bottom_grid > div:nth-child(4) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #008d4c;
}
.roulette_bottom_grid > div:nth-child(5) {
    background: #fff;
    -webkit-box-shadow: inset 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: inset 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    color: #555;
    font-weight: 700;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.roulette_bottom_grid > div:nth-child(7) {
    background-color: #dd4b39;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
}
.roulette_bottom_grid > div:nth-child(8) {
    background-color: #00acd6;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
}
.btn_container .btn {
    font-weight: 700;
    color: #fff;
    font-size: 30px;
}
.btn_container span {
    padding: 0 10px;
    font-weight: 700;
    font-size: 30px;
}
.btn_container .form-control {
    display: inline-block;
    width: auto;
    height: 31px;
    font-weight: 700;
    font-size: 30px;
    /* this should be changed on all form elements to match buttons */
}
.led-yellow-small {
    margin: 13px auto;
    width: 10px;
    height: 10px;
    background-color: #FF0;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 12px;
    -webkit-animation: blinkYellow 1s infinite;
    -moz-animation: blinkYellow 1s infinite;
    -ms-animation: blinkYellow 1s infinite;
    -o-animation: blinkYellow 1s infinite;
    animation: blinkYellow 1s infinite;
}
.led-yellow {
    margin: 13px auto;
    width: 24px;
    height: 24px;
    background-color: #FF0;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 12px;
    -webkit-animation: blinkYellow 1s infinite;
    -moz-animation: blinkYellow 1s infinite;
    -ms-animation: blinkYellow 1s infinite;
    -o-animation: blinkYellow 1s infinite;
    animation: blinkYellow 1s infinite;
}
@-webkit-keyframes blinkYellow {
    from {
        background-color: #FF0;
    }
    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0;
    }
    to {
        background-color: #FF0;
    }
}
@-moz-keyframes blinkYellow {
    from {
        background-color: #FF0;
    }
    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0;
    }
    to {
        background-color: #FF0;
    }
}
@-ms-keyframes blinkYellow {
    from {
        background-color: #FF0;
    }
    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0;
    }
    to {
        background-color: #FF0;
    }
}
@-o-keyframes blinkYellow {
    from {
        background-color: #FF0;
    }
    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0;
    }
    to {
        background-color: #FF0;
    }
}
@keyframes blinkYellow {
    from {
        background-color: #FF0;
    }
    50% {
        background-color: #AA0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0;
    }
    to {
        background-color: #FF0;
    }
}

</style>
<audio id="coin">
    <source src="pages/casino/sounds/coin.mp3" type="audio/mpeg"> Your browser does not support the audio element.
</audio>
<audio id="spin">
    <source src="pages/casino/sounds/spin.mp3" type="audio/mpeg">
</audio>
<audio id="win">
    <source src="pages/casino/sounds/win.mp3" type="audio/mpeg"> </audio>
<audio id="lose">
    <source src="pages/casino/sounds/lose.mp3" type="audio/mpeg">
</audio>


<div class="roulette_top">
    <div>
        <div><i class="fa fa-fw fa-star-o"></i></div>
    </div>
    <div>
        <div><i class="fa fa-fw fa-star-o"></i></div>
    </div>

    <div>
        <div><i class="fa fa-fw fa-star-o"></i></div>
    </div>

    <div class="result">
        <div>PLAY NOW</div>
    </div>

    <div>
        <div><i class="fa fa-fw fa-star-o"></i></div>
    </div>

    <div>
        <div><i class="fa fa-fw fa-star-o"></i></div>
    </div>

    <div>
        <div><i class="fa fa-fw fa-star-o"></i></div>
    </div>

</div>

<div class="roulette_container">
    <div class="led-grid-small">
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
    </div>
    <div class="roulette_grid">
        <div class="roulette1" style="display:none;">
            <img src="pages/casino/img/roulette/star.png" />
            <img src="pages/casino/img/roulette/flower.png" />
            <img src="pages/casino/img/roulette/coin.png" />
            <img src="pages/casino/img/roulette/mshroom.png" />
            <img src="pages/casino/img/roulette/chomp.png" />
            <img src="pages/casino/img/roulette/random.png" />
        </div>
        <div class="roulette2" style="display:none;">
            <img src="pages/casino/img/roulette/star.png" />
            <img src="pages/casino/img/roulette/flower.png" />
            <img src="pages/casino/img/roulette/coin.png" />
            <img src="pages/casino/img/roulette/mshroom.png" />
            <img src="pages/casino/img/roulette/chomp.png" />
            <img src="pages/casino/img/roulette/random.png" />
        </div>
        <div class="roulette3" style="display:none;">
            <img src="pages/casino/img/roulette/star.png" />
            <img src="pages/casino/img/roulette/flower.png" />
            <img src="pages/casino/img/roulette/coin.png" />
            <img src="pages/casino/img/roulette/mshroom.png" />
            <img src="pages/casino/img/roulette/chomp.png" />
            <img src="pages/casino/img/roulette/random.png" />
        </div>
    </div>
    <div class="led-grid-small">
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
        <div>
            <div class="led-yellow-small"></div>
        </div>
    </div>
</div>
<div class="roulette_bottom_grid">
    <div>PRICE</div>
    <div><input type="text" value="100"></div>
    <div>
        <div class="led-yellow"></div>
    </div>
    <div>${user.defaultCurrency}</div>
    <div class="safeCoinBal"><div>${user.cryptoBal}</div></div>
    <div>
        <div class="led-yellow"></div>
    </div>
    <div class="start">SPIN</div>
    <div class="start cheat">CHEAT</div>
</div>`;

        var Roulette = function (options) {
            var defaultSettings = {
                maxPlayCount: null, // x >= 0 or null
                speed: 10, // x > 0
                stopImageNumber: null, // x >= 0 or null or -1
                rollCount: 3, // x >= 0
                duration: 3, //(x second)	
                stopCallback: function () {},
                startCallback: function () {},
                slowDownCallback: function () {}
            }
            var defaultProperty = {
                playCount: 0,
                $rouletteTarget: null,
                imageCount: null,
                $images: null,
                originalStopImageNumber: null,
                totalHeight: null,
                topPosition: 0,

                maxDistance: null,
                slowDownStartDistance: null,

                isRunUp: true,
                isSlowdown: false,
                isStop: false,

                distance: 0,
                runUpDistance: null,
                isIE: navigator.userAgent.toLowerCase().indexOf('msie') > -1 // TODO IE
            };
            var p = $.extend({}, defaultSettings, options, defaultProperty);

            var reset = function () {
                p.maxDistance = defaultProperty.maxDistance;
                p.slowDownStartDistance = defaultProperty.slowDownStartDistance;
                p.distance = defaultProperty.distance;
                p.isRunUp = defaultProperty.isRunUp;
                p.isSlowdown = defaultProperty.isSlowdown;
                p.isStop = defaultProperty.isStop;
                p.topPosition = defaultProperty.topPosition;
            }

            var slowDownSetup = function () {
                if (p.isSlowdown) {
                    return;
                }
                p.slowDownCallback();
                p.isSlowdown = true;
                p.slowDownStartDistance = p.distance;
                p.maxDistance = p.distance + (2 * p.totalHeight);
                p.maxDistance += p.imageHeight - p.topPosition % p.imageHeight;
                if (p.stopImageNumber != null) {
                    p.maxDistance += (p.totalHeight - (p.maxDistance % p.totalHeight) + (p.stopImageNumber * p.imageHeight)) % p.totalHeight;
                }
            }

            var roll = function () {
                var speed_ = p.speed;

                if (p.isRunUp) {
                    if (p.distance <= p.runUpDistance) {
                        var rate_ = ~~((p.distance / p.runUpDistance) * p.speed);
                        speed_ = rate_ + 1;
                    } else {
                        p.isRunUp = false;
                    }

                } else if (p.isSlowdown) {
                    var rate_ = ~~(((p.maxDistance - p.distance) / (p.maxDistance - p.slowDownStartDistance)) * (p.speed));
                    speed_ = rate_ + 1;
                }

                if (p.maxDistance && p.distance >= p.maxDistance) {
                    p.isStop = true;
                    reset();
                    p.stopCallback(p.$rouletteTarget.find('img').eq(p.stopImageNumber));
                    return;
                }
                p.distance += speed_;
                p.topPosition += speed_;
                if (p.topPosition >= p.totalHeight) {
                    p.topPosition = p.topPosition - p.totalHeight;
                }
                // TODO IE 
                if (p.isIE) {
                    p.$rouletteTarget.css('top', '-' + p.topPosition + 'px');
                } else {
                    // TODO more smooth roll
                    p.$rouletteTarget.css('transform', 'translate(0px, -' + p.topPosition + 'px)');
                }
                setTimeout(roll, 1);
            }

            var init = function ($roulette) {
                $roulette.css({
                    'overflow': 'hidden'
                });
                defaultProperty.originalStopImageNumber = p.stopImageNumber;
                if (!p.$images) {
                    p.$images = $roulette.find('img').remove();
                    p.imageCount = p.$images.length;
                    p.$images.eq(0).bind('load', function () {
                        p.imageHeight = $(this).height();
                        $roulette.css({
                            'height': (p.imageHeight + 'px')
                        });
                        p.totalHeight = p.imageCount * p.imageHeight;
                        p.runUpDistance = 2 * p.imageHeight;
                    }).each(function () {
                        if (this.complete || this.complete === undefined) {
                            var src = this.src;
                            // set BLANK image
                            this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                            this.src = src;
                        }
                    });
                }
                $roulette.find('div').remove();
                p.$images.css({
                    'display': 'block'
                });
                p.$rouletteTarget = $('<div>').css({
                    'position': 'relative',
                    'top': '0'
                }).attr('class', "roulette-inner");
                $roulette.append(p.$rouletteTarget);
                p.$rouletteTarget.append(p.$images);
                p.$rouletteTarget.append(p.$images.eq(0).clone());
                $roulette.show();
            }

            var start = function () {
                p.playCount++;
                if (p.maxPlayCount && p.playCount > p.maxPlayCount) {
                    return;
                }
                p.stopImageNumber = $.isNumeric(defaultProperty.originalStopImageNumber) && Number(defaultProperty.originalStopImageNumber) >= 0 ?
                    Number(defaultProperty.originalStopImageNumber) : Math.floor(Math.random() * p.imageCount);
                p.startCallback();
                roll();
                setTimeout(function () {
                    slowDownSetup();
                }, p.duration * 1000);
            }

            var stop = function (option) {
                if (!p.isSlowdown) {
                    if (option) {
                        var stopImageNumber = Number(option.stopImageNumber);
                        if (0 <= stopImageNumber && stopImageNumber <= (p.imageCount - 1)) {
                            p.stopImageNumber = option.stopImageNumber;
                        }
                    }
                    slowDownSetup();
                }
            }
            var option = function (options) {
                p = $.extend(p, options);
                p.speed = Number(p.speed);
                p.duration = Number(p.duration);
                p.duration = p.duration > 1 ? p.duration - 1 : 1;
                defaultProperty.originalStopImageNumber = options.stopImageNumber;
            }

            var ret = {
                start: start,
                stop: stop,
                init: init,
                option: option
            }
            return ret;
        }

        var pluginName = 'roulette';
        $.fn[pluginName] = function (method, options) {
            return this.each(function () {
                var self = $(this);
                var roulette = self.data('plugin_' + pluginName);

                if (roulette) {
                    if (roulette[method]) {
                        roulette[method](options);
                    } else {
                        console && console.error('Method ' + method + ' does not exist on jQuery.roulette');
                    }
                } else {
                    roulette = new Roulette(method);
                    roulette.init(self, method);
                    $(this).data('plugin_' + pluginName, roulette);
                }
            });
        }


        /////// end roulette


        let pubKey = user.pubKey;
        let init = $('.rebate div').html()
        $('.safeCoinBal').html(init);
        let imgNum1 = 0;
        let imgNum2 = 0;
        let imgNum3 = 0;
        let count = 1;
        let result = "";
        let isWinner = false;
        let payout = 0;
        let newSafeCoinBal;

        var coin = document.getElementById("coin");
        var spin = document.getElementById("spin");
        var win = document.getElementById("win");
        var lose = document.getElementById("lose");

        var option1 = {
            speed: 10,
            duration: 1,
            stopImageNumber: Math.floor((Math.random() * 6) + 1),
            startCallback: function () {
                spin.play();

            },
            slowDownCallback: function () {},
            stopCallback: function ($stopElm) {}
        }
        var option2 = {
            speed: 10,
            duration: 1,
            stopImageNumber: Math.floor((Math.random() * 6) + 1),
            startCallback: function () {},
            slowDownCallback: function () {},
            stopCallback: function ($stopElm) {}
        }
        var option3 = {
            speed: 10,
            duration: 1,
            stopImageNumber: Math.floor((Math.random() * 6) + 1),
            startCallback: function () {},
            slowDownCallback: function () {},
            stopCallback: function ($stopElm) {
                count++;
                if (count = 3) {
                    if (isWinner) {
                        win.play();
                        safe_sendTo(pubKey, payout, function (newBal) {
                            console.log(newBal);
                            $('.rebate div').addClass('animated win-color heartBeat').html(newBal);
                            $('.safeCoinBal div').addClass('animated win-color heartBeat').html(newBal);
                            $('.result div').addClass('animated win-color heartBeat').html(result);
                            $('.fa-star-o').addClass('animated rotateIn');
                            setTimeout(function () {
                                $('.rebate div').removeClass();
                                $('.safeCoinBal div').removeClass();
                                $('.result div').removeClass();
                            }, 2000);
                        })
                    } else {
                        lose.play();
                        distributeSocCredits(payout);
                    }
                }
            }
        }

        var rouletter1 = $('div.roulette1');
        var rouletter2 = $('div.roulette2');
        var rouletter3 = $('div.roulette3');

        rouletter1.roulette(option1);
        rouletter2.roulette(option2);
        rouletter3.roulette(option3);

        $('.start').click(function () {
            if ($(this).hasClass('cheat')) { // this is for testing only and will be removed
                imgNum1 = 1;
                imgNum2 = 1;
                imgNum3 = 1;
            } else {
                option1['duration'] = 1;
                imgNum1 = Math.floor((Math.random() * 6) + 1);
                option2['duration'] = 2;
                imgNum2 = Math.floor((Math.random() * 6) + 1);
                option3['duration'] = 3;
                imgNum3 = Math.floor((Math.random() * 6) + 1);

            }

            option1['stopImageNumber'] = imgNum1;
            option2['stopImageNumber'] = imgNum2;
            option3['stopImageNumber'] = imgNum3;

            rouletter1.roulette('option', option1);
            rouletter2.roulette('option', option2);
            rouletter3.roulette('option', option3);

            $('.sc div').removeClass();
            $('.result div').removeClass().html("SPINNING...");
            $('.fa-star-o').removeClass('animated rotateIn');
            let pricePerSpin = $('.roulette_bottom_grid > div:nth-child(2) input').val();

            if ((imgNum1 == imgNum2) && (imgNum1 == imgNum3)) {
                result = "JACKPOT!";
                isWinner = true;
                payout = pricePerSpin * 100;
            } else if (imgNum1 == imgNum2) {
                result = "YOU WIN!";
                isWinner = true;
                payout = pricePerSpin * 20;
            } else {
                result = "YOU LOSE!";
                isWinner = false;
                payout = pricePerSpin;
            }

            rouletter1.roulette('start');
            rouletter2.roulette('start');
            rouletter3.roulette('start');

        });

    }
}

customElements.define('slot-machine', SlotMachine);
