class MultipleChoice extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="grid-2-col box">
            <div>
                <h3><b>Section 1:</b> HTML Basics</h3>
                <img src="img/youtube.jpg" style="width:100%;" />
            </div>
            <div>
                <h4>Questions</h4>
                <div class="form-group">
                    <label>What does HTML stand for?</label>
                    <select class="form-control">
                        <option>Hypertext Model Language</option>
                        <option>Hypertext Markup Language</option>
                        <option>Hyperactive Maniac Language</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>What tags would you use for paragraphs?</label>
                    <select class="form-control">
                        <option>&lt;b&gt;&lt;/b&gt;</option>
                        <option>&lt;p&gt;&lt;/p&gt;</option>
                        <option>&lt;a&gt;&lt;/a&gt;</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Which of the following is correct HTML syntax?</label>
                    <select class="form-control">
                        <option>&lt;body&lt;/body&gt;</option>
                        <option>&lt;body&gt;&lt;body&gt;</option>
                        <option>&lt;body&gt;&lt;/body&gt;</option>
                    </select>
                </div>
                <button class="btn btn-blue pull-right">NEXT</button>
            </div>
        </div>`;
    }
}

customElements.define('multiple-choice', MultipleChoice);
