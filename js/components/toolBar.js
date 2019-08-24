class ToolBar extends HTMLElement {
   async connectedCallback() {
        
        let user = await API_getUserByWebId(window.webId);

        this.innerHTML = `
<style>
tool-bar {
    display: grid;
    text-align: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 5px 0;
    grid-template-columns: repeat(5, 1fr 1fr);
}

tool-bar > div {
    padding: 0px 5px;
    border-right: 1px solid #eee;
}

tool-bar > div:last-child {
    border-right: none;
}

tool-bar > div.red {
    color: #dd4b39;
    display: block;
    cursor: pointer;
}

tool-bar > div.blue {
    color: #00acd6;
    display: block;
    cursor: pointer;
}

/*tool-bar > div.yellow {
        color: #e08e0b;
    }*/


tool-bar input,
tool-bar select {
    border: 1px solid transparent;
    height: 21px;
    color: #848484;
}

tool-bar input {
    width: 40px;
}
tool-bar x-star-rating {
    font-size: 15px;
}

</style>

<div class="red"><i class="fa fa-thumbs-o-up"></i></div>
                    <div>90</div>
                        <div class="blue"><i class="fa fa-thumbs-o-down"></i></div>
                        <div>10</div>
                        <div class="red"><i class="fa fa-flag"></i></div>
                        <div>0</div>
                        <div><x-star-rating value="${user.profileScore}" number="5"></x-star-rating></div>
                        <div>
                            <span class="sfc">${user.defaultCurrency}</span>
                        </div>
                    <div><input type="number" placeholder="1"></div>
                <div class="red"><i class="fa fa-heart"></i></div>`;

        $(function () {
            $(document.body).on("click", '.fa-flag', function (e) {
                e.stopImmediatePropagation();
                flagPost($(this)); //this can be removed
            });

            function flagPost($this) {
                let elem = $this.parent().parent().parent().find('.post-desc');
                if ($this.hasClass("blurred")) {
                    elem.css("filter", "blur(0px)");
                    $this.removeClass('blurred');
                } else {
                    ratePost($this);
                    elem.css("filter", "blur(4px)");
                    $this.addClass('blurred');
                }
            }

            function ratePost($this) {
                var elem = $this.parent().next();
                var count = elem.html();
                count++;
                elem.html(count);
            }
        });
    }
}

customElements.define('tool-bar', ToolBar);
