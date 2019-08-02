class courseBuilderIntro extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h3>Course Builder</h3>
        <p>Videos must be no less than 1:50 and no more than 2:10 in length</p>
        <div class="form-group">
            <label for="exampleInputEmail1">Course Title</label>
            <input type="text" class="form-control" placeholder="Website Development">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Course Description</label>
            <input type="text" class="form-control" placeholder="This course provides an introduction to website development using HTML, CSS and Javascript.">
        </div>
        <div class="form-group">
            <label for="">Course Photo</label>
            <input type="file" name="pic" accept="img/*">
        </div>
        <div class="form-group">
            <label>Select A Category</label>
            <select class="form-control select2" name="categories[]" multiple="multiple" data-placeholder="Select a category" style="width: 100%;">
                <option>Economics</option>
                <option>Politics</option>
                <option>Technology</option>
                <option>Computing</option>
                <option>Engineering</option>
                <option>Philosophy</option>
                <option>Agriculture</option>
                <option>Architecture</option>
            </select>
        </div>`;
        $('.select2').select2();
    }
}

customElements.define('course-builder-intro', courseBuilderIntro);