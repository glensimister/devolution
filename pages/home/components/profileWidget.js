import {
    API_readProfile
}
from '../../../js/api/profileData.js';

class ProfileWidget extends HTMLElement {

    async connectedCallback() {

        //let profile = await API_readProfile();

         /*const shadowRoot = this.attachShadow({
            mode: 'open'
        });*/
        
        this.innerHTML = `
<style>
profile-widget {
    text-align: center;
    padding: 20px;
    margin-bottom:20px;
    border-radius: 3px;
    border: 1px solid #eee;
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
}
profile-widget h4#fullName {
    text-transform: capitalize;
}

profile-widget ul {
    text-align: left;
    margin-bottom: 20px;
}
profile-widget ul li {
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
profile-widget x-star-rating {
    font-size: 28px;
    margin-bottom: 10px;
}
</style>

            <x-star-rating value="3" number="5"></x-star-rating>
            <h4 id="fullName">Glen Simister</h4>
            <div class="profile-pic">
                <!-- the image needs to be cropped and centered -->
                <img src="img/user1-128x128.jpg" class="user-image-large animated rotateIn" alt="User Image">
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
    }

}

customElements.define('profile-widget', ProfileWidget);
