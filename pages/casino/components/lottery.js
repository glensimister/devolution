class Lottery extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
<style>
/*** lottery ****/

ul.lottery-input {
    margin-bottom: 10px;
}
ul.lottery-input li {
    display: inline-block;
    margin-right: 10px;
}
ul.lottery-input li input {
    border: none;
    width: 40px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #00acd6;
    padding: 6px 12px;
    line-height: 1.42857143;
    color: #222d32;
}
.lottery-numbers td {
    text-align: center;
    /*vertical-align: middle;*/
}
.lottery-numbers ul li {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    text-align: center;
    line-height: 45px;
    display: inline-block;
    margin-right: 7px;
    font-size: 20px;
    background-color: #00c0ef;
    color: #fff;
}
ul li.bonus-ball {
    background-color: #dd4b39;
}
.buy-ticket {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.5;
}
</style>
<h3>Lottery</h3>
<div class="grid-2-col">
    <div>
        <p>Select your numbers:</p>
        <div class="lottery-ticket-numbers">
            <ul class="lottery-input">
                <li><button class="btn btn-red lucky-dip">LUCK DIP</button></li>
                <li><input type="text" class="number1" /></li>
                <li><input type="text" class="number2" /></li>
                <li><input type="text" class="number3" /></li>
                <li><input type="text" class="number4" /></li>
                <li><input type="text" class="number5" /></li>
                <li><input type="text" class="number6" /></li>
                <li><i class="fa fa-times"></i></li>
            </ul>
        </div>
        <button class="btn-small btn-blue add-new-numbers"><i class="fa fa-plus"></i> ADD NEW</button>
    </div>
    <div>
        <p>Total: £0.00 (0 IDX)</p>
        <div class="form-group">
            <select class="form-control">
                <option>C20 - Crypto20</option>
                <option>BTC - Bitcoin</option>
                <option>ETH - Ethereum</option>
                <option>LTC - Litecoin</option>
                <option>DASH - Dash</option>
                <option>Rebate</option>
            </select>
        </div>
        <div class="form-group">
            <input type="hidden" class="form-control" id="num-of-tickets" value="2" placeholder="2">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-blue buy-ticket">BUY</button>
        </div>
    </div>
</div>
<br />
<hr />

<h3>Results</h3>
<table class="table lottery-numbers">
    <!--replace all tables with css grid -->
    <tr>
        <th>Date</th>
        <th>Jackpot</th>
        <th>Numbers</th>
        <th>Bonus Ball</th>
    </tr>
    <tr>
        <td>Sat 23 Jun 2018</td>
        <td>21.200 IDX</td>
        <td>
            <ul>
                <li>01</li>
                <li>10</li>
                <li>15</li>
                <li>25</li>
                <li>31</li>
                <li>47</li>
            </ul>
        </td>
        <td>
            <ul>
                <li class="bonus-ball">05</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Sat 22 Jun 2018</td>
        <td>22.500 IDX</td>
        <td>
            <ul>
                <li>05</li>
                <li>13</li>
                <li>22</li>
                <li>11</li>
                <li>38</li>
                <li>41</li>
            </ul>
        </td>
        <td>
            <ul>
                <li class="bonus-ball">14</li>
            </ul>
        </td>
    </tr>
</table>`;

        $(document.body).on('click', '.buy-ticket', function (e) {
            e.stopImmediatePropagation();
            let ticketPrice = 100;
            let sc = $('.sc div').html();
            let new_sc = (parseFloat(sc) + ticketPrice);
            distributeSocCredits(new_sc);
        });

        $(document.body).on('click', '.lucky-dip', function (e) {
            e.stopImmediatePropagation();
            var $this;
            for (var i = 0; i < 7; i++) {
                $this = $(this).parent().siblings().find('.number' + [i]);
                $this.val(Math.floor((Math.random() * 9) + 1));
            }
        });

        $(document.body).on('click', '.add-new-numbers', function (e) {
            e.stopImmediatePropagation();
            var lotteryNumbers = `<ul class="lottery-input">
            <li><button class="btn btn-red lucky-dip">LUCK DIP</button></li>
            <li><input type="text" class="number1" /></li>
            <li><input type="text" class="number2" /></li>
            <li><input type="text" class="number3" /></li>
            <li><input type="text" class="number4" /></li>
            <li><input type="text" class="number5" /></li>
            <li><input type="text" class="number6" /></li>
            <li><i class="fa fa-times"></i></li>
        </ul>`;
            $('.lottery-ticket-numbers').append(lotteryNumbers);
        });

    }
}

customElements.define('lucky-lottery', Lottery);
