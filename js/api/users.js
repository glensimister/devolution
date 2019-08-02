//API_createUser();
//API_displayUser();
//API_editUser();
//API_deleteUser();

let gun = Gun();

async function API_createUser() {
    let users = gun.get('users');
    let pubKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    let obj = {
        webId: window.webId,
        position: "Land & Housing",
        elected: false,
        approvalRating: 0,
        upVotesByUser: 0,
        downVotesByUser: 0,
        monthlyTarget: 0,
        creditsReceived: 500,
        pubKey: pubKey,
        cryptoBal: 750,
        defaultCurrency: "BTC",
        profileScore: 3.5,
        educationScore: 0,
        socialCredits: 200,
        healthCredits: 50,
        educationCredits: 70
    }
    users.put(obj);
}

function API_getUserByWebId(webId) {
    return new Promise(resolve => {
        let users = gun.get('users');
        users.on(function (data, key) {
            let str = data.webId.localeCompare(window.webId);
            if (str == 0) {
                resolve(data);
            }
        });
    });
}
