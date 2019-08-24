class CourseResults extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="box">
            <div>
                <h1>Congratulations! You scored <span>100/100</span></h1>
                <h4>Please take a few minutes to review the course.</h4>
                <x-star-rating value="3" number="5"></x-star-rating>
                <div class="clearfix" style="width:400px; margin:auto;">
                    <label>Leave Feedback</label>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Review title..">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="3" placeholder="Review description.."></textarea>
                    </div>
                    <button type="submit" class="submit-feedback btn btn-blue">SUBMIT</button>
                </div>
            </div>
        </div>`;

        $('.submit-feedback').on('click', function (e) {
            e.stopImmediatePropagation();
            $('#tab12').prop('checked', true);
            transfer('.ec div', '.rebate div', '20');
        });

        function transfer(from, to, amount) {
            var fromVal = $(from).html();
            var toVal = $(to).html();
            var new_value = (parseInt(fromVal) - parseInt(amount));
            $(from).html(new_value.toFixed(0));
            new_value = (parseInt(toVal) + parseInt(amount));
            $(to).html(new_value).addClass('animated heartBeat');
        }
    }
}

customElements.define('course-results', CourseResults);
