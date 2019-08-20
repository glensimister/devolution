import {editComment} from '../functions/editComment.js';
import {deleteComment} from '../functions/deleteComment.js';
import {getDate} from '../../../js/api/getDate.js';

class DisplayComments extends HTMLElement {
    
   connectedCallback() {
        
        editComment();
        deleteComment();
       
        this.innerHTML = `
                    <div id="" class="comment-box">
                    <i data-type="" class="fa fa-fw fa-close delete-comment"></i>
                    <i data-type="" class="fa fa-fw fa-pencil edit-comment"></i>
                        <div class="post-body">
                            <img src="../img/profilePic.jpg" class="user-image-medium" alt="User Image">
                            <span><a href="">Glen Simister</a><br />${getDate()}</span>
                            <div class="comment">Looks good! What stack are you using?</div>
                        </div>
                    <tool-bar></tool-bar>
                    </div>`;
    }
}

customElements.define('display-comments', DisplayComments);
