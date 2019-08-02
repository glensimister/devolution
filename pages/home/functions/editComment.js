export function editComment() {
    $(document.body).on('click', '.edit-comment', async function (e) {
        e.stopImmediatePropagation();
        let editable = $(this).parent().find('.comment');
        if ($(this).hasClass('fa-pencil')) {
            $(this).removeClass('fa-pencil').addClass('fa-floppy-o');
            editable.attr('contenteditable', 'true');
            editable.css({
                border: "1px solid #dd4b39",
                padding: "20px"
            });
        } else {
            $(this).removeClass('fa-floppy-o').addClass('fa-pencil');
            let elemId = $(this).attr("data-type");
            let post = editable.html();
            editable.css({
                border: "5px solid #eee",
                padding: "10px"
            });
        }
    });
}
