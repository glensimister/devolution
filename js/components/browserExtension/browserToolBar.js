/***** This wil be a browser extension ******/

class BrowserToolBar extends HTMLElement {
    connectedCallback() {
        /*const shadowRoot = this.attachShadow({
            mode: 'open'
        });*/
        this.innerHTML = `
<link rel="stylesheet" href="js/components/browserExtension/font-awesome.min.css">
<link rel="stylesheet" href="js/components/browserExtension/browserToolBar.css">
<link rel="stylesheet" href="js/components/browserExtension/jquery-ui.css">
<link rel="stylesheet" href="js/components/browserExtension/StarRating.css">
<script src="js/components/browserExtension/jquery-3.3.1.js"></script>
<script src="js/components/browserExtension/jquery-ui.js"></script>
<script src="js/components/browserExtension/StarRating.js"></script>

<div class="grid-browser-toolbar">
        <div><img src="js/components/browserExtension/images/avatar5.png" class="user-image-small" alt="User Image"></div>
        <div class="red"><i class="fa fa-thumbs-o-up"></i></div>
        <div>90</div>
        <div class="blue"><i class="fa fa-thumbs-o-down"></i></div>
        <div>10</div>
        <div class="red"><i class="fa fa-flag"></i></div>
        <div>0</div>
        <div class="yellow"><i class="fa fa-commenting"></i></div>
        <div>0</div>
        <div><x-star-rating value="3" number="5"></x-star-rating></div>
        <div><span class="safe">BTC</span></div>
        <div>100</div>
        <div><input type="number" placeholder="0.01"></div>
        <div class="red"><i class="fa fa-heart"></i></div>
    </div>

<div id="profileWidget">
<profile-widget></profile-widget>
</div>

<div id="commentsBox">
<status-update></status-update>
<display-posts></display-posts>
</div>`;

        $('.fa-commenting').on('click', function () {
            $('#commentsBox').dialog({
                title: "Comments",
                draggable: true,
                width: 700,
                maxHeight: 400,
                height: 400
            });
        });

        $('browser-tool-bar .user-image-small').on('click', function () {
            $('#profileWidget profile-widget').dialog({
                title: "Author",
                draggable: false,
                width: "300px"
            });
        });
    }
}

customElements.define('browser-tool-bar', BrowserToolBar);
