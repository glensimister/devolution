$(document).ready(async function () {
    const popupUri = 'popup.html';
    solid.auth.trackSession(async session => {
        if (session && session.webId) {
            window.webId = session.webId;

            /********* JS BEFORE COMPONENT HAS LOADED **************/

            window.FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
            window.VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
            window.store = $rdf.graph();
            window.fetcher = new $rdf.Fetcher(store);
            await fetcher.load(window.webId);
            window.photo = store.any($rdf.sym(webId), VCARD('hasPhoto'));
            window.fullName = store.any($rdf.sym(webId), FOAF('name'));
            window.note = store.any($rdf.sym(webId), VCARD('note'));
            API_createUser();
            // put routing in index.js
            await initializePageRouting();
            initializePlugins();

        } else {
            solid.auth.popupLogin({
                popupUri
            })
        }
    });

    $('.fa-sign-out').on("click", async function () {
        solid.auth.logout();
        //window.location.replace(popupUri);
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


    /*

        const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
        const VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');

        function modifyName(person, name, doc) {

            const store = $rdf.graph()
            const fetcher = new $rdf.Fetcher(store)
            const updater = new $rdf.UpdateManager(store)


            let ins = $rdf.st(person, VCARD('note'), name, doc);

            let del = store.statementsMatching(person, VCARD('note'), null, doc) // null is wildcard
                //console.log("ins: " + ins + " del: " + del);
                //let del = [];
            updater.update(del, ins, (uri, ok, message, response) => {
                if (ok) console.log('Name changed to ' + name)
                else alert(message)
            })
        }


        async function renderLogin(webId) {

            let logout = document.getElementById('logout')
            let welcome = document.getElementById('welcome')
            let user = document.getElementById('user')

            logout.style.display = ''
            welcome.style.display = 'none'

            user.textContent = webId
            user.setAttribute('href', webId);

            const store = $rdf.graph();
            const fetcher = new $rdf.Fetcher(store);

            // Load the webId's data into the store
            await fetcher.load(webId);

            // Display their details
            const fullName = store.any($rdf.sym(webId), FOAF('name'));
            $('#fullName').text(fullName && fullName.value);


            const photo = store.any($rdf.sym(webId), VCARD('hasPhoto'));
            const note = store.any($rdf.sym(webId), VCARD('note'));
            const fn = store.any($rdf.sym(webId), VCARD('fn'));

            // for modifying the name
            //const me = store.sym(webId);
            //const profile = me.doc();
            //const name = "Bob Jones";
            //modifyName(me, name, profile);

            //store.add(me, VCARD('fn'), "John Bloggs", profile);


            $("#photo").attr("src", photo.value);
            $("#note").html(note.value);

            // Display their friends
            const friends = store.each($rdf.sym(webId), FOAF('knows'));
            $('#friends').empty();
            friends.forEach(async(friend) => {
                await fetcher.load(friend);
                const fullName = store.any(friend, FOAF('name'));
                $('#friends').append(
                    $('<li>').append(
                        $('<a>').text(fullName && fullName.value || friend.value)
                        .click(() => $('#profile').val(friend.value))
                        .click(loadProfile)));
            });


        }

        function renderLogout() {
            let logout = document.getElementById('logout')
            let welcome = document.getElementById('welcome')

            logout.style.display = 'none'
            welcome.style.display = ''

        }

        function handleLogin() {
            // login event
            solid.auth.trackSession(session => {
                if (session && session.webId) {
                    $('button.login').text("CONTINUE");
                    //renderLogin(session.webId);
                    //console.log(session.webId);
                    //$('#viewer').show();
                } else {
                    renderLogout();
                    console.log("logged out");
                    //$('#viewer').hide();
                }
            })
        }

        const popupUri = 'popup.html';
        $('button.login').on("click", function () {
            solid.auth.popupLogin({
                popupUri
            })
            handleLogin();
        });

        $('button.logout').on("click", function () {
            solid.auth.logout();
            handleLogin();
        });



    */

});
