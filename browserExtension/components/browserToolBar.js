class BrowserToolBar extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `<div class="grid-browser-toolbar">
        <div><img src="images/avatar5.png" class="user-image-small" alt="User Image"></div>
        <div class="red"><i class="fa fa-thumbs-o-up"></i></div>
        <div>90</div>
        <div class="blue"><i class="fa fa-thumbs-o-down"></i></div>
        <div>10</div>
        <div class="red"><i class="fa fa-flag"></i></div>
        <div>0</div>
        <div class="yellow"><i class="fa fa-commenting"></i></div>
        <div>0</div>
        <div class="rateYoToolbar"></div>
        <div>
            <span class="safe">SFC</span>
        </div>
        <div>
            100
        </div>
        <div>
            <input type="number" placeholder="0.01">
        </div>
        <div class="red"><i class="fa fa-heart"></i></div>
    </div>`;
        $(".rateYoToolbar").rateYo({
            rating: 4,
            fullStar: true,
            starWidth: "20px",
            readOnly: true
        });
    }
}

customElements.define('browser-tool-bar', BrowserToolBar);
