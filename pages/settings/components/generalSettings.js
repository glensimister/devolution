class GeneralSettings extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="form-group">
    <h4>Default Currency</h4>
    <p>The default currency is used for any rebates, lottery winnings, etc.</p>
    <select class="form-control default-currency">
        <option value="BTC">BTC - Bitcoin</option>
        <option value="C20">C20 - Crypto20 (Index Fund)</option>
        <option value="ETH">ETH - Ethereum</option>
        <option value="LTC">LTC - Litecoin</option>
        <option value="DASH">DASH - Dash</option>
    </select>
</div>
<div class="form-group">
    <label>SafeCoin Public Key</label>
    <input type="text" class="form-control safeCoinPubKey">
</div>
<div class="form-group">
    <button type="submit" class="btn btn-blue">UPDATE</button>
</div>

<div class="form-group">
    <label class="clearfix">
        <input type="checkbox"> I want to receive direct marketing messages
    </label>
</div>
<div class="form-group">
    <button type="submit" class="btn btn-red">DELETE YOUR ACCOUNT</button>
</div>
<div class="form-group">
    <label>Update Address</label>
    <label>Country</label>
    <input type="text" class="form-control" placeholder="United kingdom">
</div>
<div class="form-group">
    <label>Post/Zip code</label>
    <input type="text" class="form-control" placeholder="TQ10 9AB">
</div>
<div class="form-group">
    <button type="submit" class="btn btn-blue">UPDATE</button>
</div>

<div class="form-group">
    <label>URL to receive updates</label>
    <input type="text" class="form-control" placeholder="https://trustedupdates.com">
</div>
<div class="form-group">
    <button type="submit" class="btn btn-blue">UPDATE</button>
</div>
`;

        $(".default-currency").change(async function () {
            var selectedVal = $(".default-currency option:selected").val();
            gun.get('users').get('defaultCurrency').put(selectedVal);
        });

    }
}
customElements.define('general-settings', GeneralSettings);
