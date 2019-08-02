import {editPost} from 'pages/home/functions/editPost.js';
import {deletePost} from 'pages/home/functions/deletePost.js';
import {getDate} from 'js/api/getDate.js';

class DisplayPosts extends HTMLElement {
    connectedCallback() {
        
        editPost();
        deletePost();
        
        this.innerHTML = `
<style>
.post,
.comment-box {
    position: relative;
}
.edit-post,
.edit-comment {
    position: absolute;
    top: 10px;
    right: 30px;
}
.delete-post,
.delete-comment {
    position: absolute;
    top: 10px;
    right: 10px;
}
.post .fa-floppy-o {
    color: #dd4b39;
}
.post-update {
    grid-column: 7 / 9;
}
.post {
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 20px;
}
.post .post-comment-input {
    border: none;
    padding: 20px;
    width: 100%;
    color: #848484;
    line-height: 1.5;
    font-size: 14px;
}
.post .post-comment-input:focus {
    outline: 0;
}
.post-desc {
    margin-top: 10px;
}
.comment {
    margin-top: 10px;
    padding: 10px;
    border: 5px solid #eee;
    border-radius: 4px;
}
.post-body {
    padding: 20px;
}

/*
display-comments .post-body {
-webkit-box-shadow: inset 0px 9px 17px -16px rgba(0,0,0,1);
-moz-box-shadow: inset 0px 9px 17px -16px rgba(0,0,0,1);
box-shadow: inset 0px 9px 17px -16px rgba(0,0,0,1);
}
*/

.post span a:first-child {
    font-weight: bold;
    text-transform: capitalize;
}
.user-image-medium {
    float: left;
    width: 36px;
    height: 36px;
    border: 1px solid #848484;
    border-radius: 50%;
    margin-right: 10px;
}
</style>


                <div class="post">
                    <i class="fa fa-fw fa-close delete-post"></i>
                    <i class="fa fa-fw fa-pencil edit-post"></i>
                    <div class="post-body">
                    <img src="${window.photo.value}" class="user-image-medium" alt="User Image">
                    <span><a class="webId" >${window.fullName.value}</a><br /><span class="date">${getDate()}</span></span>
                    <div class="post-desc">${window.note.value}</div></div>
                            <tool-bar></tool-bar>
                    <display-comments></display-comments>
                    <div class="post-comment">
                    </div>
                    <input type="text" class="post-comment-input" placeholder="Write a comment..." />
                </div>`;

    }

}

customElements.define('display-posts', DisplayPosts);

/********* ported over from prev version *********

    if (posts.length == 0) {
        $('.post-feed').html("There are no posts to show");
    }

************************************************/



