export async function addComment(date, id, img, name) {
    $(document.body).on("keypress", '.post-comment-input', async function (e) {
        e.stopImmediatePropagation();
        let element = $(this);
        let elemId = element.parent().attr('id');
        let comment = $('#' + elemId + ' .post-comment-input').val();
        if (e.which == 13 && comment != '') {
            const graphId = `${id}/posts`;
            let postId = `${graphId}/${Math.round( Math.random() * 100000 )}`;
            distributeSocCredits(10); //10 is an arbitrary number. This will need to be based on the cost of a PUT request
            let obj = {
                postId: postId,
                img: img,
                name: name,
                post: comment,
                date: date
            }
            
            console.log(obj);
            
            //displayPosts();
        }
    });
}
