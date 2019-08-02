class CourseDonation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="box">
            <div class="feedback-confirmation">
                <h3>Thank you for your feedback!</h3>
                <h4>You have received <span>20 IDX</span></h4>
                <p>This course has received <b>10,400 IDX</b> in donations so far.</p>
                <p>Please support the author by making a donation</p>
                <div style="width:400px; margin:auto;">
                    <div class="form-group">
                        <select class="form-control">
                            <option>Social Credits</option>
                            <option>Education Credits</option>
                            <option>C20 - Crypto20 (Index Fund)</option>
                            <option>BTC - Bitcoin</option>
                            <option>ETH - Ethereum</option>
                            <option>LTC - Litecoin</option>
                            <option>DASH - Dash</option>
                        </select>
                    </div>
                    <div class="grid-input-button">
                        <div>
                            <input type="text" class="form-control donate-input">
                        </div>
                        <div>
                            <button type="button" class="donate-sc">DONATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}
customElements.define('course-donation', CourseDonation);
