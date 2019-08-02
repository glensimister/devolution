class SearchBar extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
<style>
.grid-search {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin-bottom: 20px;
}

.grid-search select {
    padding: 5px 10px;
    height: 27px;
    width: 100%;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    border-right: 1px solid transparent;
    color: #eee;
    border-top-left-radius: 3px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 3px;
    color: #848484;
}

.grid-search input {
    color: #848484;
    border: 1px solid #eee;
    padding: 5px 10px;
    width: 100%;
}

.grid-search button {
    border: 1px solid transparent;
    border-top-right-radius: 3px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 3px;
    padding: 5px 10px;
}

@media screen and (min-width: 800px) {
    /* applies to window size above 800px */
    .grid-search {
        margin-bottom: 0px;
    }
}   
</style>
<div class="grid-search">
                        <div>
                            <select>
                                <option>All</option>
                                <option>Web</option>
                                <option>Users</option>
                                <option>Officials</option>
                                <option>Public Services</option>
                                <option>Connections</option>
                                <option>Mailbox</option>
                                <option>Ideas</option>
                                <option>Jobs</option>
                                <option>Business</option>
                                <option>Forum</option>
                                <option>Courses</option>
                                <option>Healthcare</option>
                                <option>Plugins</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" placeholder="Enter keywords">
                        </div>
                        <div>
                            <button type="submit" name="search" id="search-btn" class=""><i class="fa fa-search"></i></button>
                        </div>

                    </div>`;
    }
}

customElements.define('search-bar', SearchBar);                    


