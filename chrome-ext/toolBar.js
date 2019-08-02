class ToolBar extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `<div>TESTING 123</div>`;
    }
}

customElements.define('tool-bar', ToolBar);
