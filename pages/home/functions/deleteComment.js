export function deleteComment() {
    $(document.body).on('click', '.delete-comment', async function (e) {
        e.stopImmediatePropagation();
        //let elemId = $(this).attr("data-type");
        console.log("comment deleted");
    });
}
