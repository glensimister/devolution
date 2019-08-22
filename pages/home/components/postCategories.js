class PostCategories extends HTMLElement {
  connectedCallback() {      
    this.innerHTML = `
<style>
post-categories select {
    border: 1px solid #eee;
    border-radius: 4px;
    height: 100%;
    margin-bottom:20px;
    width: 100%;
    color: #848484;
    font-size: 14px;
    padding:10px;
    -webkit-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    -moz-box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
    box-shadow: inset 0px 0px 33px -1px rgba(238, 238, 238, 0.47);
}

post-categories .select2-container--default .select2-selection--multiple {
    border-radius: 0px;
    border: none;
    box-shadow: none;
    padding: 5px;
    width: 100%;
    font-size: 14px;
    color: #848484;
}

post-categories .select2-container--default .select2-selection--multiple .select2-selection__choice {
    border-radius: 0;
}
</style>

                        <select>
                            <option>-- All Categories --</option>
                            <option>Anouncements</option>
                            <option>Ideas</option>
                            <option>Devolution</option>
                            <option>Close friends</option>
                            <option>Politics</option>
                            <option>News</option>
                            <option>Other</option>
                        </select>`;
  }
}
    
customElements.define('post-categories', PostCategories);          



