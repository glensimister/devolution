export async function addPost(date, id, img, name) {
    $(document.body).on('click', 'button.post-update', async function (e) {
        e.stopImmediatePropagation();
        let costPerPost = 10; //10 is an arbitrary number. This will need to be based on the cost of a PUT request
        distributeSocCredits(costPerPost); 
        let post = $('.status-update input').val();
        const graphId = `${id}/posts`;
        let postId = `${graphId}/${Math.round( Math.random() * 100000 )}`;
        let obj = {
            postId: postId,
            date: date,
            img: img,
            name: name,
            post: post
        }
        console.log(obj);
        //displayPosts();
        $('.status-update input').val("");
    });
}
