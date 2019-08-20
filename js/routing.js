/***** page routing with sammy.js *****/

function initializePageRouting() {

    function loadHomePage() {
        $('side-menu ul li a.active').removeClass('active');
        $(".content").load("pages/home/index.html", function(){
            $('side-menu').find('a[href="#/"]').addClass('active');
        });
        $(".breadcrumbs").hide();
    }

    function splitPageString(page) {
        let res = page.split("-");
        if (res[1])
            return res[0] + " " + res[1];
        else return page;
    }

    var app = $.sammy(function () {
        this.get('#/', function () {
            loadHomePage()
        });
        this.get('/index.html', function () {
            loadHomePage()
        });
        this.get('/', function () {
            loadHomePage()
        });
        this.get('#/:page', function () {
            $('side-menu ul li a.active').removeClass('active');
            let page = `pages/${this.params['page']}.html`;
            $(".content").load(page, function () {
                $('side-menu').find('a[href="#/' + page + '"]').addClass('active');
            });
            $(".breadcrumbs").hide();
        });
        this.get('#/:folder/:page', function () {
            $('side-menu ul li a.active').removeClass('active');
            let folder = this.params['folder'];
            let page = this.params['page'];
            let pageUrl = `pages/${folder}/${page}.html`;
            let menuItem = `a[href="#/${folder}/${page}"]`;

            $(".content").load(pageUrl, function () {
                $('side-menu').find('' + menuItem + '').addClass('active');
            });
            $(".breadcrumbs").hide();
        });
        this.get('#/:folder/:subfolder/:page', function () {
            $('side-menu ul li a.active').removeClass('active');
            let folder = this.params['folder'];
            let subfolder = this.params['subfolder'];
            var page = this.params['page'];
            let pageUrl = `pages/${folder}/${subfolder}/${page}.html`;
            let menuItem = `a[href="#/${folder}/${page}"]`;
            $(".content").load(pageUrl, function () {
                $('side-menu').find('' + menuItem + '').addClass('active');
            });

            //breadcrumbs
            let backButton = `<div class="back" onclick="history.back()"><i class="fa fa-caret-left"></i><span>Back</span>|<span>${splitPageString(page)}</span></div>`;
            $(".breadcrumbs").show();
            $(".breadcrumbs").html(backButton);
        });
    });

    $(function () {
        app.run()
    });
}
