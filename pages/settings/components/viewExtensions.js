class ViewExtensions extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<table class="table">
    <tbody>
        <tr>
            <th>
            </th>
            <th>Plugin</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <div class="checkbox">
                    <label>
                        <input type="checkbox">
                    </label>
                </div>
            </td>
            <td>Casino
                <br /><a href="#">Active</a> |
                <a href="#">Edit</a> |
                <a href="#">Delete</a></td>
            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
        </tr>
        <tr>
            <td>
                <div class="checkbox">
                    <label>
                        <input type="checkbox">
                    </label>
                </div>

            </td>
            <td>Modular Housing
                <br /><a href="#">Active</a> |
                <a href="#">Edit</a> |
                <a href="#">Delete</a></td>
            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
        </tr>
        <tr>
            <td>
                <div class="checkbox">
                    <label>
                        <input type="checkbox">
                    </label>
                </div>
            </td>
            <td>Dating
                <br /><a href="#">Active</a> |
                <a href="#">Edit</a> |
                <a href="#">Delete</a></td>
            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
        </tr>
        <tr>
            <td>
                <div class="checkbox">
                    <label>
                        <input type="checkbox">
                    </label>
                </div>
            </td>
            <td>Ride Share
                <br /><a href="#">Active</a> |
                <a href="#">Edit</a> |
                <a href="#">Delete</a>
                <br />
            </td>
            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
        </tr>
    </tbody>
</table>
`;
    }
}
customElements.define('view-extensions', ViewExtensions);