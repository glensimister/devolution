class GeneralSettings extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div class="form-group">
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

<!--
<div class="form-group">
    <label>URL to receive updates</label>
    <input type="text" class="form-control" placeholder="https://trustedupdates.com">
</div>
<div class="form-group">
    <button type="submit" class="btn btn-blue">UPDATE</button>
</div>

<div class="form-group">
    <h4>Default Currency</h4>
    <p>The default currency is used for any rebates, lottery winnings, etc.</p>
    <select class="form-control">
        <option>C20 - Crypto20 (Index Fund)</option>
        <option>BTC - Bitcoin</option>
        <option>ETH - Ethereum</option>
        <option>LTC - Litecoin</option>
        <option>DASH - Dash</option>
    </select>
</div>-->
`;
    }
}
customElements.define('general-settings', GeneralSettings);