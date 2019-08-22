class SideMenu extends HTMLElement {
    connectedCallback() {

        $(function () {
            $(document.body).on('click', 'a.toggle-menu', function (e) {
                $('side-menu ul:first-child').slideToggle('fast');
                e.stopImmediatePropagation();
            });
            $(document.body).on("click", 'side-menu ul li .treeview_a', function (e) {

                e.stopImmediatePropagation();
                $(this).toggleClass("open").next().slideToggle('fast');
                $(this).find('i').toggleClass('rotate-angle');

                /* There seems to be a small bug in this. Uncomment and test the menu...*/
                if ($(this).hasClass('open')) {
                    /*$('ul.treeview-menu').not($(this).next()).slideUp('fast');*/
                    var ulHeight = $(this).next()[0].scrollHeight;
                    $('side-menu').animate({
                        'top': '-' + ulHeight
                    }, 500);
                } else {
                    /*$('.sidebar').find('i').not($(this).find('i')).toggleClass('rotate-angle');*/
                    $('side-menu').animate({
                        'top': '0'
                    }, 500);
                }
            });
        });

        this.innerHTML = `
<style>
.grid > side-menu {
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    /*padding: 0 0 40px 0;*/
    padding: 0;
    /*overflow-y: auto;
    max-height: 400px;*/
    position: relative;
    top: 0;
    z-index: 0;
}
side-menu i.fa.fa-angle-left.pull-right {
    line-height: 31px;
    height: 31px;
}
.rotate-angle {
    transform: rotate(-90deg);
}
.sidebar-header {
    background-color: #fff;
    border-right: 1px solid #eee;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 12px;
    line-height: 27px;
    text-align: center;
    color: #c5c5c5;
    /* this is for when the menu slides up */
    position: relative;
    top: 0;
    z-index: 1;
}
side-menu ul {
    display: none;
}
.toggle-menu {
    border-radius: 3px;
    display: block;
    font-size: 20px;
    float: right;
    cursor: pointer;
}
@media screen and (min-width: 600px) {
    side-menu ul {
        display: block;
    }
    .toggle-menu {
        display: none;
    }
}
side-menu ul li a {
    border-bottom: 1px solid #eee;
    line-height: 30px;
    padding: 0 15px;
    display: block;
    text-decoration: none;
    color: #848484;
}
side-menu ul li .active,
side-menu ul li a:hover {
    color: #dd4b39;
    border-left: 3px solid #dd4b39;
}

side-menu ul.treeview-menu li span:nth-child(1):before {
    font-family: fontawesome;
    font-weight: normal;
    margin-right: 10px;
    content: "\f10c";
    color: #dd4b39;
}
side-menu ul.treeview-menu li a span:hover:nth-child(1):before {
    content: "\f111";
}
side-menu ul.treeview-menu li a:hover,
side-menu ul.treeview-menu li .active {
    color: #dd4b39;
    border-left: none;
}
side-menu ul.treeview-menu li a {
    border-bottom: none;
}
side-menu ul.treeview-menu li a span {
    display: block;
}
ul.treeview-menu {
    padding: 10px 0;
    /*background: #f9f9f9;*/
    box-shadow: inset 0px 11px 8px -10px #888, inset 0px -11px 8px -10px #CCC;
}

.treeview_a {
    cursor: pointer;
}
</style>
<div class="animated slideInDown">
                <ul>
                    <li><a href="#/"><span>Home</span></a></li>
                    <li><a href="#/legal/constitutionlocal"><span>Legal</span></a></li>
                    <li><a href="#/voting/index"><span>Voting</span></a></li>
                    <li><a href="#/publicservices/index"><span>Fund Public Services</span></a></li>
                    <!--<li><a href="#/wallet"><span>Wallet</span></a></li>-->
                    <li><a href="#/land/index"><span>Land</span></a></li>
                    <li><a href="#/housing/modularhousing"><span>Housing</span></a></li>
                    <li><a href="#/healthcare/healthcare"><span>Healthcare</span></a></li>
                    <li><a href="#/education/education"><span>Education</span></a></li>
                    <li><a href="#/business/index"><span>Business &amp; Employment</span></a></li>

                    <li class="treeview">
                        <a class="treeview_a">
                            <span>Extensions</span>
                            <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                        </a>
                        <ul class="treeview-menu" style="display: none;">
                            <li>
                                <a href="#/casino/index">
                                    <span>Casino</span>
                                </a>
                            </li>
                            <li>
                                <a href="#/news">
                                    <span>News</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Reports</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Dating</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Classified Ads</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Ride Share</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>`;

    }
}

customElements.define('side-menu', SideMenu);
