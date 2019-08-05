/***** page routing with sammy.js *****/

function initializePageRouting() {

    function loadHomePage() {
        $('.sidebar ul li a.active').removeClass('active');
        $(".content").load("pages/home/index.html");
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
            $('.sidebar ul li a.active').removeClass('active');
            let page = `pages/${this.params['page']}.html`;
            $(".content").load(page, function () {
                $('.sidebar').find('a[href="#/' + page + '"]').addClass('active');
            });
            $(".breadcrumbs").hide();
        });
        this.get('#/:folder/:page', function () {
            $('.sidebar ul li a.active').removeClass('active');
            let folder = this.params['folder'];
            let page = this.params['page'];
            let pageUrl = `pages/${folder}/${page}.html`;
            let menuItem = `a[href="#/${folder}/${page}"]`;

            $(".content").load(pageUrl, function () {
                $('.sidebar').find('' + menuItem + '').addClass('active');
            });
            $(".breadcrumbs").hide();
        });
        this.get('#/:folder/:subfolder/:page', function () {
            $('.sidebar ul li a.active').removeClass('active');
            let folder = this.params['folder'];
            let subfolder = this.params['subfolder'];
            var page = this.params['page'];
            let pageUrl = `pages/${folder}/${subfolder}/${page}.html`;
            let menuItem = `a[href="#/${folder}/${page}"]`;
            $(".content").load(pageUrl, function () {
                $('.sidebar').find('' + menuItem + '').addClass('active');
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
