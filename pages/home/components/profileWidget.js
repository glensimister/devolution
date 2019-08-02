class ProfileWidget extends HTMLElement {
    async connectedCallback() {

        /****************** CSS STYLES ****************/

        let css = `
<style>
.profile-summary > div {
    text-align: center;
    padding: 20px;
    margin-bottom:20px;
    border-radius: 3px;
    border: 1px solid #eee;
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
}
.profile-summary h4#fullName {
    text-transform: capitalize;
}

.profile-summary ul {
    text-align: left;
    margin-bottom: 20px;
}
.profile-summary ul li {
    border-bottom: 1px solid #eee;
    line-height: 30px;
    display: block;
}
.user-image-large {
    width: 100px;
    height: 100px;
    display: block;
    margin: 20px auto;
    border: 2px solid #848484;
    border-radius: 50%;
}
</style>`;

        /****************** HTML ****************/

        this.innerHTML = `${css}
<div class="profile-summary"><div>
            <div class="rateYo"></div>
            <h4 id="fullName">${window.fullName.value}</h4>
            <div class="profile-pic">
                <!-- the image needs to be cropped and centered -->
                <img src="${window.photo.value}" class="user-image-large animated rotateIn" alt="User Image">
            </div>

            <ul>
                <!-- <li>
                Voting Weight<a class="pull-right voteWeight">1</a>
            </li>-->
                <li>
                    Education Score<a class="pull-right edScore">25</a>
                </li>
                <!--<li>
                Social Rating <a class="pull-right socialRating">3.6</a>
            </li>-->
                <li>
                    Connections <a class="pull-right connections">1,322</a>
                </li>
            </ul>
            <button class="btn btn-red connect">CONNECT</button>
        </div>
    </div>`;

        /*************** EVENT HANDLERS *******************/

        $(function () {
            $(document.body).on('click', '.connect, .disconnect', function (e) {
                e.stopImmediatePropagation();
                if ($(this).hasClass("disconnect")) {
                    $(this).text("CONNECT");
                    $(this).removeClass('disconnect');
                } else {
                    $(this).text("DISCONNECT");
                    $(this).addClass('disconnect');
                }
            });
        });

        /************ get users score from localstorage (gun.js) *****************/

        let user = await API_getUserByWebId(window.webId);

        $(".rateYo").rateYo({
            rating: user.profileScore,
            fullStar: true,
            starWidth: "20px",
            readOnly: true
        });

    }

}

customElements.define('profile-widget', ProfileWidget);
