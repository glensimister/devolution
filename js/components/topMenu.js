class TopMenu extends HTMLElement {
    connectedCallback() {

        $(function () {
            $(document.body).on('click', 'top-menu ul li.has-dropdown > a', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).parent().siblings().find('.dropdown-content').hide();
                $(this).parent().find('.dropdown-content').fadeToggle('fast');
                close_dropdown(true);
            });

            function close_dropdown(is_dropdown_open) {
                $('body').click(function (e) {
                    e.stopImmediatePropagation();
                    if (is_dropdown_open) {
                        $('.dropdown-content').fadeOut('slow');
                    }
                });
            }

            $('.fa-info-circle').click(async function () {
                $('#info-box').dialog({
                    title: "Information",
                    draggable: true,
                    width: 700
                });

                let path = window.location.hash.substr(1).split("/");
                path = path[1];
                $("#info-box").load(`sampleData/${path}.html`, function (response, status, xhr) {
                    if (status == "error") {
                        $("#info-box").html("There is currently no documentation for this section.");
                    }
                });
            });
            /*
        $('.fa-sign-out').on("click", async function () {
            window.location.replace("login.html");
        }); */
        });

        this.innerHTML = `
<style>
.grid > div.top-right {
    background: #222d32;
    text-align: center;
}

.fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 500;
}

.top-margin {
    margin-top: 132px;
}

.grid > top-menu {
    padding: 10px 20px;
    position: relative;
    z-index: 100;
}

@media screen and (min-width: 800px) {

    /* if window is greater the 800px */
    .top-margin {
        margin-top: 47px;
    }
}

/******* top nav *******/


top-menu > div li .label {
    position: relative;
    top: -11px;
    right: 7px;
    color: #fff;
    border-radius: 3px;
    text-align: center;
    font-size: 9px;
    padding: 2px 3px;
    line-height: .9;
}

top-menu ul {
    text-align: right;
    line-height: 27px;
}

top-menu ul li {
    display: inline-block;
    margin-left: 10px;
    position: relative;
}

top-menu ul li a, top-menu ul li {
    color: #848484;
    cursor:pointer;
}

.dropdown-container {
    position: relative;
}

.dropdown-content {
    text-align: left;
    display: none;
    position: absolute;
    right: -20px;
    top: 37px;
    background-color: #fff;
    min-width: 340px;
    /*box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);*/
    padding: 10px;
    height: 290px;
    overflow: auto;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid #eee;
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
}

.dropdown-content .drop-down-header {
    font-weight: bold;
    color: #dd4b39;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    font-size: 12px;
    display: block;
}

.dropdown-content ul {
    text-align: left;
}

.dropdown-content ul li {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 0;
    width: 100%;
    line-height: 25px;
}

.dropdown-content ul li a {
    font-weight: bold;
    color: #008d4c;
}

.user-image-messages {
    float: left;
    width: 50px;
    height: 50px;
    border: 1px solid #848484;
    border-radius: 50%;
    margin-right: 10px;
}
</style>
<div class="grid-horizontal">
                    <search-bar></search-bar>
                    <div class="dropdown-container">
                        <ul>
                            <li class="has-dropdown"><a href="#"><i class="fa fa-refresh"></i><span class="label label-red">2</span></a>
                                <div class="dropdown-content">
                                    <a class="drop-down-header" href="#">VIEW UPDATES</a>
                                    <ul>
                                        <li><span>Design Changes<span class="pull-right"><b>20 July, 2018</b></span>
                                            <br />
                                            <button class="btn-small btn-green">REVIEW</button>&nbsp;
                                            <button class="btn-small btn-blue">UPDATE</button>&nbsp;
                                            <button class="btn-small btn-red">ROLLBACK</button>
                                            </span>
                                        </li>
                                        <li><span>New Search Feature<span class="pull-right"><b>20 July, 2018</b></span>
                                            <br />
                                            <button class="btn-small btn-green">REVIEW</button>&nbsp;
                                            <button class="btn-small btn-blue">UPDATE</button>&nbsp;
                                            <button class="btn-small btn-red">ROLLBACK</button>
                                            </span>
                                        </li>
                                        <li><span>Settings Update<span class="pull-right"><b>20 July, 2018</b></span>
                                            <br />
                                            <button class="btn-small btn-green">REVIEW</button>&nbsp;
                                            <button class="btn-small btn-blue">UPDATE</button>&nbsp;
                                            <button class="btn-small btn-red">ROLLBACK</button>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-dropdown"><a href="#"><i class="fa fa-list-alt"></i><span class="label label-green">12</span></a>
                                <div class="dropdown-content">
                                    <a class="drop-down-header" href="#/business/marketing">VIEW SURVEYS</a>
                                    <ul>
                                        <li><img src="img/avatar04.png" class="user-image-messages" alt="User Image">
                                            <span><a href="">Guest User</a><span class="pull-right"><b>20 July, 2018</b></span>
                                            <br /> Sed ut perspiciatis unde omnis...
                                            </span>
                                        </li>
                                        <li><img src="img/avatar2.png" class="user-image-messages" alt="User Image">
                                            <span><a href="">Guest User</a><span class="pull-right"><b>20 July, 2018</b></span>
                                            <br /> Sed ut perspiciatis unde omnis...
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-dropdown"><a href="#"><i class="fa fa-user"></i><span class="label label-yellow">2</span></a>
                                <div class="dropdown-content">
                                    <a class="drop-down-header" href="#/business/marketing">FRIEND REQUESTS</a>
                                    <ul>
                                        <li><img src="img/avatar.png" class="user-image-messages" alt="User Image">
                                            <span><a href="">Guest User</a><span class="pull-right"><b>20 July, 2018</b></span>
                                            <br /> Sed ut perspiciatis unde omnis...
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-dropdown"><a href="#"><i class="fa fa-envelope-o"></i><span class="label label-blue">6</span></a>
                                <div class="dropdown-content">
                                    <a class="drop-down-header" href="#/mailbox/mailbox">READ ALL MESSAGES</a>
                                    <ul>
                                        <li><img src="img/avatar.png" class="user-image-messages" alt="User Image">
                                            <span><a href="">Guest User</a><span class="pull-right"><b>20 July, 2018</b></span>
                                            <br /> Sed ut perspiciatis unde omnis...
                                            </span>
                                        </li>
                                        <li><img src="img/avatar04.png" class="user-image-messages" alt="User Image">
                                            <span><a href="">Guest User</a><span class="pull-right"><b>20 July, 2018</b></span>
                                            <br /> Sed ut perspiciatis unde omnis...
                                            </span>
                                        </li>
                                        <li><img src="img/avatar2.png" class="user-image-messages" alt="User Image">
                                            <span><a href="">Guest User</a><span class="pull-right"><b>20 July, 2018</b></span>
                                            <br /> Sed ut perspiciatis unde omnis...
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="has-dropdown"><a href="#"><i class="fa fa fa-bell-o"></i><span class="label label-red">10</span></a>
                                <div class="dropdown-content">
                                    <a class="drop-down-header" href="#/business/marketing">NOTIFICATIONS</a>
                                    <ul>
                                        <li><img src="img/avatar.png" class="user-image-messages" alt="User Image">
                                            <span><a href="">Guest User</a><span class="pull-right"><b>20 July, 2018</b></span>
                                            <br /> Sed ut perspiciatis unde omnis...
                                            </span>
                                        </li>
                                        <li><img src="img/avatar04.png" class="user-image-messages" alt="User Image">
                                            <span><a href="">Guest User</a><span class="pull-right"><b>20 July, 2018</b></span>
                                            <br /> Sed ut perspiciatis unde omnis...
                                            </span>
                                        </li>
                                        <li><img src="img/avatar2.png" class="user-image-messages" alt="User Image">
                                            <span><a href="">Guest User</a><span class="pull-right"><b>20 July, 2018</b></span>
                                            <br /> Sed ut perspiciatis unde omnis...
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><i class="fa fa-info-circle"></i></li>
                            <li><a href="#/settings/index"><i class="fa fa-gears"></i></a></li>
                            <li><i class="fa fa-sign-out"></i></li>
                        </ul>
                    </div>
                </div>
<div id="info-box" style="display:none">
</div>

`;
    }
}

customElements.define('top-menu', TopMenu);
