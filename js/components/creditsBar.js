class CreditsBar extends HTMLElement {
    async connectedCallback() {
        let user = await API_getUserByWebId(window.webId);
        this.innerHTML = `
<style>
.grid-credits {
    font-size: 12px;
}

.grid-credits > div:nth-child(odd) {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    color: #fff;
}

.grid-credits > div:nth-child(even) {
    margin-right: 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-weight: bold;
}

.grid-credits > div:nth-child(1) {
    background-color: #dd4b39;
    padding: 5px;
}

.grid-credits > div:nth-child(2) {
    background-color: #fff;
    color: #dd4b39;
    padding: 5px;
}

.grid-credits > div:nth-child(3) {
    background-color: #00acd6;
    padding: 5px;
}

.grid-credits > div:nth-child(4) {
    background-color: #fff;
    color: #00acd6;
    padding: 5px;
}

.grid-credits > div:nth-child(5) {
    background-color: #e08e0b;
    padding: 5px;
}

.grid-credits > div:nth-child(6) {
    background-color: #fff;
    color: #e08e0b;
    padding: 5px;
}

.grid-credits > div:nth-child(7) {
    background-color: #008d4c;
    padding: 5px;
}

.grid-credits > div:nth-child(8) {
    background-color: #fff;
    color: #008d4c;
    padding: 5px;
    margin-right: 0;
}
</style>
<div class="grid fixed-top">
            <div class="logo"><a href="#/"><b><span>D</span>EVOLUTION</b></a></div>
            <div class="top-right">
                <div class="grid-credits">
                    <div><b>SOCIAL</b> <small>CREDITS</small></div>
                    <div class="sc">
                        <div>${user.socialCredits}</div>
                    </div>
                    <div><b>HEALTH</b> <small>CREDITS</small></div>
                    <div class="hc">
                        <div>${user.healthCredits}</div>
                    </div>
                    <div><b>EDUCATION</b> <small>CREDITS</small></div>
                    <div class="ec">
                        <div>${user.educationCredits}</div>
                    </div>
                    <div><b>${user.defaultCurrency}</b></div>
                    <div class="rebate">
                        <div>${user.cryptoBal}</div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

customElements.define('credits-bar', CreditsBar);
