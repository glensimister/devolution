import {editPost} from '../functions/editPost.js';
import {deletePost} from '../functions/deletePost.js';
import {getDate} from '../../../js/api/getDate.js';
import {API_readSampleData} from '../../../js/api/profileData.js';

class DisplayPosts extends HTMLElement {
    async connectedCallback() {
        let html = "";
        let postType = "post-desc";
        let isComment = "";
        let sampleData = await API_readSampleData();
            for (let i = 0; i < (sampleData.posts.length); i++) {
                if (i > 0) {
                    postType = "comment";
                    isComment = `<i class="fa fa-reply"></i>`;
                }
                html += `<div class="post">
                    ${isComment}
                    <i class="fa fa-close delete-post"></i>
                    <i class="fa fa-pencil edit-post"></i>
                    <div class="post-body">
                    <img src="${sampleData.posts[i].photo}" class="user-image-medium" alt="User Image">
                    <span><a class="webId" >${sampleData.posts[i].author}</a><br /><span class="date">${sampleData.posts[i].postDate}</span></span>
                    <div class="${postType}">${sampleData.posts[i].body}</div></div>
                            <tool-bar></tool-bar>
                    <div class="post-comment">
                    </div>
                    <input type="text" class="post-comment-input" placeholder="Write a comment..." />
                </div>`;
                
            }
            editPost(); // these should be self-executing
            deletePost();

        this.innerHTML = `
<style>
.post,
.comment-box {
    position: relative;
}
.edit-post,
.edit-comment{
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
.fa-reply {
    position: absolute;
    top: 10px;
    right: 50px;
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

.post-body {
    padding: 20px;
}

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
.post-desc{margin-top: 10px;}
.comment {
    margin-top: 10px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #eee;
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
}
</style>

${html}`;

    }
}

customElements.define('display-posts', DisplayPosts);

/********* ported over from prev version *********

    if (posts.length == 0) {
        $('.post-feed').html("There are no posts to show");
    }

************************************************/
