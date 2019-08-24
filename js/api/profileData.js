export function API_readProfile() {
    const endpoint = 'https://www.jsonstore.io/4e7bbaac137475d331cec016651ebd4d1488e9e062fa674d04307d331447f0b3/users/1';
    return new Promise(resolve => {
        $.getJSON(endpoint, function (res) {
            resolve(res.result);
        });
    });
}

export function API_readSampleData() {
    const endpoint = 'sampleData/posts.json';
    return new Promise(resolve => {
        $.getJSON(endpoint, function (res) {
            resolve(res);
        });
    });
}

