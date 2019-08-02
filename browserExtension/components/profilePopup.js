class ProfilePopup extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `<div class="profile-summary">
        <div class="rateYo"></div>
        <h4 id="fullName">Bob Smith</h4>
        <div class="profile-pic">
            <!-- the image needs to be cropped and centered -->
            <img src="images/avatar5.png" class="user-image-large animated rotateIn" alt="User Image">
        </div>
        <p>Hi! My name is Bob. I am interested in this, that and the other.</p>
        <br />
        <p><button class="btn btn-red connect">CONNECT</button></p>
    </div>`;

        $('.user-image-small').on('click', function () {
            $('.profile-summary').dialog({
                title: "Author",
                draggable: false,
                width: "300px"
            });
            $(".rateYo").rateYo({
                rating: 3.6,
                fullStar: true,
                starWidth: "20px",
                readOnly: true
            });
        });
    }
}

customElements.define('profile-popup', ProfilePopup);
