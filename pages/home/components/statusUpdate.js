import {addPost} from '../functions/addPost.js';
import {editPost} from '../functions/editPost.js';
import {deletePost} from '../functions/deletePost.js';

class StatusUpdate extends HTMLElement {
  connectedCallback() {
      
    addPost();  
    editPost();
    deletePost();
      
    this.innerHTML = `
<style>
.grid-status {
    display: grid;
    text-align: center;
    grid-template-columns: 2fr 1fr 1fr;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
}
.grid-status > div {
    box-sizing: border-box;
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
}
.grid-status > div:nth-child(1),
.grid-status > div:nth-child(2) {
    border-right: 1px solid #eee;
}
.grid-status select {
    border: none;
    height: 100%;
    width: 100%;
    color: #848484;
    font-size: 14px;
    padding:10px;
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
}
button.attachment,
button.post-update {
    border: none;
    height: 100%;
    width: 100%;
    padding: 5px 20px;
    background: none;
    text-align: center;
    cursor: pointer;
    font-family: 'OpenSans-Bold', sans-serif;
}
button.attachment {
    color: #00acd6;
}
button.post-update {
    color: #dd4b39;
}
status-update input {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #eee;
    padding: 20px;
    width: 100%;
    font-size: 16px;
    color: #848484;
}
status-update input:focus {
    outline: 0;
}
status-update .select2-container--default .select2-selection--multiple {
    border-radius: 0px;
    border: none;
    box-shadow: none;
    padding: 5px;
    width: 100%;
    font-size: 14px;
    color: #848484;
}
status-update .select2-container--default .select2-selection--multiple .select2-selection__choice {
    border-radius: 0;
}
.post-update button {
    display: block;
    line-height: 21px;
    width: 100%;
    border: none;
    background: none;
    text-align: center;
    color: #00acd6;
    cursor: pointer;
    font-family: 'OpenSans-Bold', sans-serif;
}
.post-update button:focus {
    outline: 0;
}
.grid-status-update-reminder {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    font-family: 'OpenSans-Bold', sans-serif;
}
.grid-status-update-reminder > div {
    padding: 5px;
    text-align: center;
}
.grid-status-update-reminder > div:nth-child(even) {
    cursor: pointer;
}
.grid-status-update-reminder > div:nth-child(odd) {
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
}
.grid-status-update-reminder > div:nth-child(1) {
    color: #e08e0b;
    border-right: 1px solid #eee;
}
.grid-status-update-reminder > div:nth-child(3) {
    color: #dd4b39;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
.grid-status-update-reminder > div:nth-child(5) {
    color: #008d4c;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
.grid-status-update-reminder > div:nth-child(7) {
    border-left: 1px solid #eee;
}
</style>
<input type="text" class="input-box" placeholder="What's on your mind, Glen?" />
                <div class="grid-status">
                    <div>
                        <select>
                            <option>Please select a category</option>
                            <option>Public anouncement</option>
                            <option>Idea</option>
                            <option>Devolution support</option>
                            <option>Close friends</option>
                            <option>Politics</option>
                            <option>News</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <button class="attachment">ATTACHMENT <i class="fa fa-fw fa-paperclip"></i></button>
                    </div>
                    <div>
                        <button class="post-update">POST <i class="fa fa-fw fa-chevron-circle-right"></i></button>
                    </div>
                </div>`;
  }
}
    
customElements.define('status-update', StatusUpdate);            



