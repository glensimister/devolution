import {donateToService} from '../functions/donateToService.js';

class PublicService extends HTMLElement {
    async connectedCallback() {
        
        donateToService();

        let user = await API_getUserByWebId(window.webId);
        let percentage = (user.creditsReceived / 1000) * 100;

        this.innerHTML = `
<style>
.grid-3-col > public-service {
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

<div id="${user.pubKey}">
                <h3><a href="#/voting/html/profile?id=${user.pubKey}">${user.position}</a></h3>
                <ul class="funds-raised">
                    <li>
                        Official<b class="pull-right"><a href="#/voting/html/profile?id=${user.pubKey}">${window.name}</a></b>
                    </li>
                    <li>
                        Monthly target<b class="pull-right"><span class="monthlyTarget">2000</span> ${user.defaultCurrency}</b>
                    </li>
                    <li>
                        Raised so far<b class="pull-right"><span class="creditsReceived">${user.creditsReceived}</span> ${user.defaultCurrency}</b>
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
                    <div><input type="text" class="form-control donate-input"></div>
                    <div><button type="button" title="${user.pubKey}" id="${user.pubKey}" class="donate-sc">DONATE</button></div>
                </div>
            </div>`;

    }
}

customElements.define('public-service', PublicService);
