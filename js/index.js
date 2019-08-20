$(document).ready(async function () {
    
    window.webId = "glensimister.github.com/profile";
    window.name = "Glen Simister";
    window.photo = "img/profilepic.jpg";

    await initializePageRouting();
    initializePlugins();

    let userExists = await gun.get('users').get('webId');
    if (userExists !== null) {
        API_createUser();
    }


    $('.fa-sign-out').on("click", async function () {
        window.location.replace("login.html");
    });


    function initializePlugins() {
        $(".rateYoLeft").rateYo({
            rating: 3.6,
            starWidth: "20px",
            readOnly: true
        });

        $(".rateYo").rateYo({
            rating: 3.6,
            starWidth: "20px",
            readOnly: true
        });

        $(".rateYoCourse").rateYo({
            rating: 0,
            fullStar: true,
            starWidth: "20px",
            readOnly: false
        });

        $(".rateYoToolbar").rateYo({
            rating: 4,
            fullStar: true,
            starWidth: "15px",
            readOnly: true
        });

        $('.select2').select2(); // move these to index.js
    }

});
