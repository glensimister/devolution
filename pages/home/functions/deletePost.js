export function deletePost() {
    $(document.body).on('click', '.delete-post', async function () {
        let elemId = $(this).attr("data-type");
        console.log("post deleted");
    });
}
