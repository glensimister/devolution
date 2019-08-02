class HealthCredits extends HTMLElement {
    async connectedCallback() {

        let user = await API_getUserByWebId(window.webId);
        let percentage = (user.healthCredits / 1000) * 100;

        this.innerHTML = `
<style>
.grid-3-col > health-credits {
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 3px;
    text-align: center;
}
.funds-raised {
    width: 100%;
    text-align: left;
    border: 1px solid #eee;
}
.funds-raised li {
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
}
.funds-raised li:last-child {
    border-bottom: none;
}
.funds-raised span {
    color: #dd4b39;
}
</style>
<div id="${user.pubKey}-hc">
        <h3>Health Credits</h3>
        <ul class="funds-raised">
            <li>
                Official<b class="pull-right">N/A</b>
            </li>
            <li>
                Max Threshold<b class="pull-right"><span class="monthlyTarget">1000</span> ${user.defaultCurrency}</b>
            </li>
            <li>
                Current Balance<b class="pull-right"><span class="creditsReceived">${user.healthCredits}</span> ${user.defaultCurrency}</b>
            </li>
        </ul>
        <div class="progress-bar">
            <div style="width: ${percentage}%;">
            </div>
        </div>
        <select class="form-control">
            <option>Social Credits</option>
            <option>SafeCoin</option>
        </select>
        <br />
        <div class="grid-input-button">
            <div>
                <input type="text" class="form-control donate-input">
            </div>
            <div>
                <button type="button" title="${user.pubKey}-hc" class="topup-hc">DONATE</button>
            </div>
        </div>
    </div>`;
    }
}

customElements.define('health-credits', HealthCredits);
