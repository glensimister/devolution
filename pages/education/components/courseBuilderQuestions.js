class CourseBuilderQuestions extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="form-group">
            <label for="exampleInputEmail1">Section Title</label>
            <input type="text" class="form-control" placeholder="HTML Basics">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Video URL</label>
            <input type="text" class="form-control" placeholder="http://www.youtube.com/video1">
        </div>
        <div class="form-group">
            <h3>Question 1</h3>
            <input type="text" class="form-control" placeholder="What does HTML stand for?">
            <div class="answers">
                <label>Answers</label>
                <p>NOTE: Put the correct answer first</p>
                <p>
                    <input type="text" class="form-control" placeholder="Hypertext Markup Language">
                </p>
                <p>
                    <input type="text" class="form-control" placeholder="Hypertext Model Language">
                </p>
                <p>
                    <input type="text" class="form-control" placeholder="Hyperactive Maniac Language">
                </p>
                <p>
                    <button class="btn btn-blue">ADD NEW</button>
                </p>
            </div>
        </div>
        <div class="form-group">
            <h3>Question 2</h3>
            <input type="text" class="form-control" placeholder="What tags would you use for paragraphs?">
            <div class="answers">
                <label>Answers</label>
                <p>NOTE: Put the correct answer first</p>
                <p>
                    <input type="text" class="form-control" placeholder="<p></p>">
                </p>
                <p>
                    <input type="text" class="form-control" placeholder="<b></b>">
                </p>
                <p>
                    <input type="text" class="form-control" placeholder="<a></a>">
                </p>
                <p>
                    <button class="btn btn-blue">ADD NEW</button>
                </p>
            </div>
        </div>
        <div class="form-group">
            <h3>Question 3</h3>
            <input type="text" class="form-control" placeholder="Which of the following is correct HTML syntax?">
            <div class="answers">
                <label for="exampleInputEmail1">Answers</label>
                <p>
                    <input type="text" class="form-control" placeholder="<body</body>">
                </p>
                <p>
                    <input type="text" class="form-control" placeholder="<body><body>">
                </p>
                <p>
                    <input type="text" class="form-control" placeholder="<body></body>">
                </p>
                <p>
                    <button class="btn btn-blue">ADD NEW</button>
                </p>
            </div>
        </div>`;
    }
}

customElements.define('course-builder-questions', CourseBuilderQuestions);