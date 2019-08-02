import {editComment} from 'pages/home/functions/editComment.js';
import {deleteComment} from 'pages/home/functions/deleteComment.js';
import {getDate} from 'js/api/getDate.js';

class DisplayComments extends HTMLElement {
    
   connectedCallback() {
        
        editComment();
        deleteComment();
       
        this.innerHTML = `
                    <div id="" class="comment-box">
                    <i data-type="" class="fa fa-fw fa-close delete-comment"></i>
                    <i data-type="" class="fa fa-fw fa-pencil edit-comment"></i>
                        <div class="post-body">
                            <img src="${window.photo.value}" class="user-image-medium" alt="User Image">
                            <span><a href="">${window.fullName.value}</a><br />${getDate()}</span>
                            <div class="comment">${window.note.value}</div>
                        </div>
                    <tool-bar></tool-bar>
                    </div>`;
    }
}

customElements.define('display-comments', DisplayComments);
