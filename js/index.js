$(document).ready(async function () {
    
    window.webId = "glensimister.github.com/profile";
    window.name = "Glen Simister";
    window.photo = "img/profilepic.jpg";

    await initializePageRouting();
    $('.select2').select2();

    let userExists = await gun.get('users').get('webId');
    if (userExists !== null) {
        API_createUser();
    }
});
