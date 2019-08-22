class CommentsPopup extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `<div id="commentsBox">
        <div id="comments">
            <input class="comments-box" type="text" placeholder="What's on your mind, Glen?">
            <div class="post">
                <img src="images/avatar5.png" class="user-image-medium" alt="User Image">
                <span><a href="">Alexander Pierce</a><br />20 July, 2018</span>
                <div class="post-desc">Here you can comment on anything, anywhere!</div>
                <div class="grid-toolbar">
                    <div class="red"><a href=""><i class="fa fa-thumbs-o-up margin-r-5"></i></a></div>
                    <div>90</div>
                    <div class="blue"><a href=""><i class="fa fa-thumbs-o-down margin-r-5"></i></a></div>
                    <div>10</div>
                    <div class="red"><a href=""><i class="fa fa-flag"></i></a></div>
                    <div>0</div>

                    <div class="rateYoComments">
                        <script>
                            $(".rateYoComments").rateYo({
                                rating: 4,
                                fullStar: true,
                                starWidth: "15px",
                                readOnly: true
                            });

                        </script>
                    </div>
                    <div>
                        <span class="safe">SFC</span>
                    </div>
                    <div>
                        <input type="number" placeholder="1">
                    </div>
                    <div class="red"><a href=""><i class="fa fa-heart"></i></a></div>
                </div>
            </div>

            <div class="post">
                <img src="images/avatar2.png" class="user-image-medium" alt="User Image">
                <span><a href="">Guest User</a><br />20 July, 2018</span>
                <div class="post-desc">And here is another test comment!</div>
                <div class="grid-toolbar">
                    <div class="red"><a href=""><i class="fa fa-thumbs-o-up margin-r-5"></i></a></div>
                    <div>90</div>
                    <div class="blue"><a href=""><i class="fa fa-thumbs-o-down margin-r-5"></i></a></div>
                    <div>10</div>
                    <div class="red"><a href=""><i class="fa fa-flag"></i></a></div>
                    <div>0</div>

                    <div class="rateYoComments">
                        <script>
                            $(".rateYoComments").rateYo({
                                rating: 4,
                                fullStar: true,
                                starWidth: "15px",
                                readOnly: true
                            });

                        </script>
                    </div>
                    <div>
                        <span class="safe">SFC</span>
                    </div>
                    <div>
                        <input type="number" placeholder="1">
                    </div>
                    <div class="red"><a href=""><i class="fa fa-heart"></i></a></div>
                </div>
            </div>
        </div>
    </div>`;

        $('.fa-commenting').on('click', function () {
            $('#commentsBox').dialog({
                title: "Comments",
                draggable: true,
                width: "auto"
            });
        });
    }
}

customElements.define('comments-popup', CommentsPopup);
